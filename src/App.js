import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getFlagEmoji } from './utils/flags';
import { getSquadStats } from './utils/squadStats';
// Screenshot functionality
// html2canvas will be loaded via CDN in public/index.html
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// Import data from database
import { 
  players as dummyPlayers, 
  teams as dummyTeams, 
  leagues as dummyLeagues,
  TRAINING_STATUS,
  POSITIONS
} from './database';
// Import formations
import { FORMATIONS } from './formations';

import { FixturesModal } from './components/FixturesModal';
import { DUMMY_FIXTURES, isEuropeanTeam } from './utils/fıxtures';


{isEuropeanTeam(selectedTeam, selectedLeague) && (
  <ActionButton
    onClick={() => setFixturesOpen(true)}
    title="View European fixtures"
    color="#38bdf8"
  >
    📅 European Fixtures
  </ActionButton>
)}

<FixturesModal
  open={fixturesOpen}
  onClose={() => setFixturesOpen(false)}
  teamId={selectedTeam}
  teamName={dummyTeams[selectedTeam]?.name}
/>

// Helper to trigger download
function downloadImage(dataUrl, filename) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- Constants, Data, and Configuration ---
const ItemTypes = {
  PLAYER: 'player',
};

const PLAYER_LOCATIONS = {
    UNREGISTERED: 'unregistered',
    SUBS: 'substitute',
    // Starting XI positions will be e.g., 'gk', 'df_1', etc.
}

const UEFA_RULES = {
  MAX_SQUAD_SIZE: 25,
  MAX_NON_HOMEGROWN: 17,
  MIN_GOALKEEPERS: 2,
  MIN_TOTAL_HOMEGROWN: 8,
  MIN_CLUB_TRAINED_FOR_QUOTA: 4,
  MAX_ASSOC_IN_QUOTA: 4,
};

const SUPER_LIG_RULES = {
  MAX_SQUAD_SIZE: 28,
  MAX_FOREIGNERS_TOTAL: 14, // 12 + 2 U23
  MAX_FOREIGNERS_OVER_23: 12,
};

const isPlayerForeign = (player) => {
    if (player.hasBlueCard) {
      return false; 
    }
    return player.nationality !== 'Turkish';
};

// --- Components ---

function Player({ player }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PLAYER,
    item: { id: player.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  
  const isUefaHomegrown = player.trainingStatus === TRAINING_STATUS.CLUB || player.trainingStatus === TRAINING_STATUS.ASSOC;
  const isTurkish = player.nationality === 'Turkish' || player.hasBlueCard;
  
  const playerColor = isUefaHomegrown || isTurkish ? '#22c55e' : '#3b82f6';

  // Show every player's position (e.g., (CB), (LB), etc.)
  const getPositionLabel = (pos) => {
    // Try to get the key from POSITIONS object
    const entry = Object.entries(POSITIONS).find(([k, v]) => v === pos);
    return entry ? ` (${entry[0]})` : '';
  };
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: 'move',
        backgroundColor: playerColor,
        color: 'white',
        padding: '8px 12px',
        margin: '4px',
        borderRadius: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: 120,
        userSelect: 'none',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      title={`${player.name} (${player.nationality}, Age: ${player.age})`}
    >
      {player.name}
      {getPositionLabel(player.position)}
    </div>
  );
}

function DropArea({ children, onDropPlayer, locationId, title, titleColor }) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: (item) => onDropPlayer(item.id, locationId),
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? '#1e293b' : '#0f172a',
        border: '2px dashed #334155',
        borderRadius: 10,
        padding: 16,
        flex: 1,
        overflowY: 'auto',
        transition: 'background-color 0.2s'
      }}
    >
      <h2 style={{ color: titleColor, marginBottom: '10px', marginTop: 0 }}>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', minHeight: '50px' }}>
        {children}
      </div>
    </div>
  );
}

function PitchPosition({ onDropPlayer, position, player }) {
    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.PLAYER,
      drop: (item) => onDropPlayer(item.id, position.id),
      collect: (monitor) => ({ isOver: monitor.isOver() }),
    });
  
    return (
      <div
        ref={drop}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -50%)',
          width: '130px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          border: `2px dashed ${isOver ? '#fbbf24' : '#ffffff40'}`,
          backgroundColor: isOver ? '#fbbf2420' : '#ffffff10',
          transition: 'border-color 0.2s, background-color 0.2s',
        }}
      >
        {player ? <Player player={player} /> : <span style={{ color: '#ffffff80', fontWeight: 'bold' }}>{position.label}</span>}
      </div>
    );
}



function PitchAndStatsPanel({ players, onDropPlayer, formationPositions }) {
  // For pitch rendering, still need playersOnPitch
  const playersOnPitch = formationPositions.map(pos => ({
    ...pos,
    player: players.find(p => p.location === pos.id)
  }));
  // Use squadStats util for stats
  const { avgAge, countryList, numCountries } = getSquadStats(players);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 32, width: '100%' }}>
      {/* Pitch */}
      <div style={{ position: 'relative', flexGrow: 1, maxWidth: '700px', margin: '0 auto', aspectRatio: '7 / 5', background: 'linear-gradient(to bottom, #05612E, #0A9A49)', border: '3px solid #fff', borderRadius: '12px' }}>
        {/* Pitch Markings */}
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', border: '3px solid #ffffff80', borderRadius: '50%'}}></div>
        <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '3px', height: '100%', backgroundColor: '#ffffff80'}}></div>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', backgroundColor: '#fff', borderRadius: '50%'}}></div>
        <div style={{position: 'absolute', top: '50%', left: 'calc(50% - 130px - 1.5px)', transform: 'translateY(-50%)', width: '130px', height: '260px', border: '3px solid #ffffff80', borderLeft: 'none', borderRadius: '0 100px 100px 0'}}></div>
        <div style={{position: 'absolute', top: '50%', right: 'calc(50% - 130px - 1.5px)', transform: 'translateY(-50%)', width: '130px', height: '260px', border: '3px solid #ffffff80', borderRight: 'none', borderRadius: '100px 0 0 100px'}}></div>
        {playersOnPitch.map(pos => (
          <PitchPosition key={pos.id} onDropPlayer={onDropPlayer} position={pos} player={pos.player} />
        ))}
      </div>
      {/* Stats Panel */}
      <div style={{ minWidth: 220, maxWidth: 260, background: '#1e293b', borderRadius: 12, padding: 18, color: '#e2e8f0', alignSelf: 'flex-start', marginTop: 8, boxShadow: '0 2px 8px #0002' }}>
        <h3 style={{ color: '#fbbf24', margin: '0 0 12px 0', fontSize: '1.1em', textAlign: 'center' }}>Squad Stats</h3>
        <div style={{ marginBottom: 10 }}>
          <b>Avg. Age:</b> {avgAge}
        </div>
        <div style={{ marginBottom: 10 }}>
          <b>Countries:</b> {numCountries}
        </div>
        <div>
          {countryList.map(([country, count]) => (
            <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: '1.3em' }}>{getFlagEmoji(country)}</span>
              <span style={{ fontWeight: 500 }}>{country}</span>
              <span style={{ color: '#fbbf24', marginLeft: 'auto', fontWeight: 600 }}>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionButton({ onClick, title, children, color = '#fbbf24' }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <button 
            onClick={onClick}
            title={title}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{ 
                padding: '10px 15px', 
                backgroundColor: isHover ? '#334155' : '#1e293b', 
                color: color, 
                border: '1px solid #334155', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: 'bold',
                textAlign: 'left',
                transition: 'background-color 0.2s',
                width: '100%'
            }}
        >
            {children}
        </button>
    );
}


function UefaValidationStatus({ eligiblePlayers }) {
    const clubTrainedCount = eligiblePlayers.filter(p => p.trainingStatus === TRAINING_STATUS.CLUB).length;
    const assocTrainedCount = eligiblePlayers.filter(p => p.trainingStatus === TRAINING_STATUS.ASSOC).length;
    const nonHomegrownCount = eligiblePlayers.filter(p => p.trainingStatus === TRAINING_STATUS.NONE).length;
    const gkCount = eligiblePlayers.filter(p => p.position === POSITIONS.GK).length;

    const declarableAssocCount = Math.min(assocTrainedCount, UEFA_RULES.MAX_ASSOC_IN_QUOTA);
    const declarableHomegrownCount = clubTrainedCount + declarableAssocCount;

    const homegrownDeficit = Math.max(0, UEFA_RULES.MIN_TOTAL_HOMEGROWN - declarableHomegrownCount);
    const maxSquadSize = UEFA_RULES.MAX_SQUAD_SIZE - homegrownDeficit;

    const coreChecks = {
        nonHomegrown: nonHomegrownCount <= UEFA_RULES.MAX_NON_HOMEGROWN,
        goalkeepers: gkCount >= UEFA_RULES.MIN_GOALKEEPERS,
        squadSize: eligiblePlayers.length <= maxSquadSize,
    };
    
    const isInvalid = !Object.values(coreChecks).every(Boolean);
    const isFullyCompliant = !isInvalid && homegrownDeficit === 0;

    let status = {
        level: 'REDUCED_SIZE',
        message: `Squad is eligible for registration with a reduced size of ${maxSquadSize}.`,
        color: '#60a5fa'
    };

    if (isInvalid) {
         status = {
            level: 'INVALID',
            message: 'Squad is INELIGIBLE for registration!',
            color: '#f87171'
        };
    } else if (isFullyCompliant) {
        status = {
            level: 'COMPLIANT',
            message: 'Squad is fully compliant for a 25-player list.',
            color: '#4ade80'
        };
    }
    
    const renderCheck = (label, value, rule, isValid) => (
        <p style={{ color: isValid ? '#a7f3d0' : '#fca5a5', margin: '4px 0' }}>
            {label}: <b>{value}</b> {rule} {isValid ? '✓' : '✗'}
        </p>
    );

    return (
        <div style={{ maxWidth: 600, margin: '20px auto', color: '#cbd5e1', padding: '15px', border: '1px solid #334155', borderRadius: '8px', backgroundColor: '#1e293b' }}>
            <h3 style={{color: '#fbbf24', borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '10px', marginTop: 0}}>UEFA Requirements</h3>
            {renderCheck('Non-Homegrown', nonHomegrownCount, `(Max ${UEFA_RULES.MAX_NON_HOMEGROWN})`, coreChecks.nonHomegrown)}
            {renderCheck('Goalkeepers', gkCount, `(Min ${UEFA_RULES.MIN_GOALKEEPERS})`, coreChecks.goalkeepers)}
            {renderCheck('Total Squad Size', eligiblePlayers.length, `(Max ${maxSquadSize})`, coreChecks.squadSize)}

            <h3 style={{color: '#fbbf24', borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '10px', marginTop: '15px'}}>Squad Composition</h3>
             <p style={{color: '#cbd5e1', margin: '4px 0'}}>Club-Trained: <b>{clubTrainedCount}</b></p>
            <p style={{color: '#cbd5e1', margin: '4px 0'}}>Association-Trained: <b>{assocTrainedCount}</b></p>
            <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '10px' }}>
                Your squad size is capped at <b>{maxSquadSize}</b> because you have {declarableHomegrownCount} of {UEFA_RULES.MIN_TOTAL_HOMEGROWN} required declarable homegrown players.
            </p>
            
            <hr style={{ margin: '15px 0', borderColor: '#334155' }} />

            <p style={{ color: status.color, fontWeight: 'bold', textAlign: 'center', margin: 0 }}>
                {status.message}
            </p>
        </div>
    );
}

function SuperLigValidationStatus({ eligiblePlayers }) {
    const squadSize = eligiblePlayers.length;
    const foreignPlayers = eligiblePlayers.filter(isPlayerForeign);
    const foreignPlayerCount = foreignPlayers.length;
    const foreignersOver23Count = foreignPlayers.filter(p => p.age > 23).length;

    const checks = {
        squadSize: squadSize <= SUPER_LIG_RULES.MAX_SQUAD_SIZE,
        foreignersOver23: foreignersOver23Count <= SUPER_LIG_RULES.MAX_FOREIGNERS_OVER_23,
        totalForeigners: foreignPlayerCount <= SUPER_LIG_RULES.MAX_FOREIGNERS_TOTAL,
    };

    const isFullyCompliant = Object.values(checks).every(Boolean);

    const renderCheck = (label, value, rule, isValid) => (
        <p style={{ color: isValid ? '#a7f3d0' : '#fca5a5', margin: '4px 0' }}>
            {label}: <b>{value}</b> {rule} {isValid ? '✓' : '✗'}
        </p>
    );

    return (
      <div style={{ maxWidth: 600, margin: '20px auto', color: '#cbd5e1', padding: '15px', border: '1px solid #334155', borderRadius: '8px', backgroundColor: '#1e293b' }}>
        <h3 style={{color: '#fbbf24', borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '10px', marginTop: 0}}>Süper Lig Requirements</h3>
        {renderCheck('Total Squad Size', squadSize, `(Max ${SUPER_LIG_RULES.MAX_SQUAD_SIZE})`, checks.squadSize)}
        {renderCheck('Foreign Players (Over 23)', foreignersOver23Count, `(Max ${SUPER_LIG_RULES.MAX_FOREIGNERS_OVER_23})`, checks.foreignersOver23)}
        {renderCheck('Foreign Players (Total)', foreignPlayerCount, `(Max ${SUPER_LIG_RULES.MAX_FOREIGNERS_TOTAL})`, checks.totalForeigners)}

        <hr style={{ margin: '15px 0', borderColor: '#334155' }} />

        <p style={{ color: isFullyCompliant ? '#4ade80' : '#f87171', fontWeight: 'bold', textAlign: 'center', margin: 0 }}>
          {isFullyCompliant ? 'Squad is ELIGIBLE for registration.' : 'Squad is INELIGIBLE for registration!'}
        </p>
      </div>
    );
}


export default function App() {

  // Screenshot handler
  const handleScreenshot = async () => {
    // Dynamically load html2canvas if not present
    let html2canvas = window.html2canvas;
    if (!html2canvas) {
      // fallback: try to load from CDN
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
      html2canvas = window.html2canvas;
    }
    const squadArea = document.getElementById('squad-main-area');
    if (!squadArea || !html2canvas) {
      alert('Screenshot area or html2canvas not found!');
      return;
    }
    const canvas = await html2canvas(squadArea, { backgroundColor: '#0f172a', useCORS: true });
    const dataUrl = canvas.toDataURL('image/png');
    
    // Generate filename with actual team name
    const getFileName = () => {
      if (selectedTeam) {
        const team = dummyTeams.find(t => t.id === selectedTeam);
        const teamName = team?.name || 'MyTeam';
        const cleanName = teamName.replace(/[^a-zA-Z0-9]/g, '_');
        return `${cleanName}_myteam.png`;
      }
      return 'myteam.png';
    };
    
    downloadImage(dataUrl, getFileName());
  };
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [playerLocations, setPlayerLocations] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFormation, setSelectedFormation] = useState('4-4-2');
  const [ruleSet, setRuleSet] = useState('UEFA'); 

  const availableTeams = useMemo(() => dummyTeams.filter(t => t.leagueId === selectedLeague), [selectedLeague]);
  const allPlayersForTeam = useMemo(() => {
    return dummyPlayers.filter(p => p.teamId === selectedTeam).map(p => ({
        ...p,
        location: playerLocations[p.id] || PLAYER_LOCATIONS.UNREGISTERED
    }));
  }, [selectedTeam, playerLocations]);

  const pitchPositions = useMemo(() => FORMATIONS[selectedFormation], [selectedFormation]);
  const unregisteredPlayers = useMemo(() => allPlayersForTeam.filter(p => p.location === PLAYER_LOCATIONS.UNREGISTERED), [allPlayersForTeam]);
  const substitutePlayers = useMemo(() => allPlayersForTeam.filter(p => p.location === PLAYER_LOCATIONS.SUBS), [allPlayersForTeam]);
  const startingElevenPlayers = useMemo(() => allPlayersForTeam.filter(p => pitchPositions.some(pos => pos.id === p.location)), [allPlayersForTeam, pitchPositions]);
  const eligiblePlayers = useMemo(() => [...substitutePlayers, ...startingElevenPlayers], [substitutePlayers, startingElevenPlayers]);

  // --- STABILIZED FUNCTIONS ---

  const handleResetSquad = useCallback(() => {
    const initialLocations = {};
    dummyPlayers.filter(p => p.teamId === selectedTeam).forEach(player => {
        initialLocations[player.id] = PLAYER_LOCATIONS.UNREGISTERED;
    });
    setPlayerLocations(initialLocations);
    setErrorMessage('');
  }, [selectedTeam]);

  const handleClearPitch = useCallback(() => {
    const newLocations = { ...playerLocations };
    startingElevenPlayers.forEach(player => {
        newLocations[player.id] = PLAYER_LOCATIONS.SUBS;
    });
    setPlayerLocations(newLocations);
    setErrorMessage('');
  }, [playerLocations, startingElevenPlayers]);

  const handleFormationChange = useCallback((newFormation) => {
    handleClearPitch();
    setSelectedFormation(newFormation);
  }, [handleClearPitch]);
  
  const calculateMaxUefaSquadSize = useCallback((currentEligiblePlayers) => {
    const clubTrainedCount = currentEligiblePlayers.filter(p => p.trainingStatus === TRAINING_STATUS.CLUB).length;
    const assocTrainedCount = currentEligiblePlayers.filter(p => p.trainingStatus === TRAINING_STATUS.ASSOC).length;
    const declarableAssocCount = Math.min(assocTrainedCount, UEFA_RULES.MAX_ASSOC_IN_QUOTA);
    const declarableHomegrownCount = clubTrainedCount + declarableAssocCount;
    const homegrownDeficit = Math.max(0, UEFA_RULES.MIN_TOTAL_HOMEGROWN - declarableHomegrownCount);
    return UEFA_RULES.MAX_SQUAD_SIZE - homegrownDeficit;
  }, []);

  const onDropPlayer = useCallback((playerId, toLocation) => {
    setErrorMessage('');
    const playerToMove = allPlayersForTeam.find(p => p.id === playerId);
    const fromLocation = playerToMove.location;
    
    if (toLocation !== PLAYER_LOCATIONS.UNREGISTERED && fromLocation === PLAYER_LOCATIONS.UNREGISTERED) {
        if (ruleSet === 'UEFA') {
            const futureEligiblePlayers = [...eligiblePlayers, playerToMove];
            const futureMaxSquadSize = calculateMaxUefaSquadSize(futureEligiblePlayers);

            if (futureEligiblePlayers.length > futureMaxSquadSize) {
                 setErrorMessage(`Maximum UEFA squad size of ${futureMaxSquadSize} reached.`);
                 return;
            }
            if (playerToMove.trainingStatus === TRAINING_STATUS.NONE) {
                const nonHomegrownCount = eligiblePlayers.filter(p => p.trainingStatus === TRAINING_STATUS.NONE).length;
                if (nonHomegrownCount >= UEFA_RULES.MAX_NON_HOMEGROWN) {
                    setErrorMessage(`Cannot add more than ${UEFA_RULES.MAX_NON_HOMEGROWN} non-homegrown players.`);
                    return;
                }
            }
        }

        if (ruleSet === 'SUPER_LIG') {
            if (eligiblePlayers.length >= SUPER_LIG_RULES.MAX_SQUAD_SIZE) {
                setErrorMessage(`Maximum Süper Lig squad size of ${SUPER_LIG_RULES.MAX_SQUAD_SIZE} reached.`);
                return;
            }
            if (isPlayerForeign(playerToMove)) {
                const foreignPlayers = eligiblePlayers.filter(isPlayerForeign);
                const foreignPlayerCount = foreignPlayers.length;
                const foreignersOver23Count = foreignPlayers.filter(p => p.age > 23).length;

                if (foreignPlayerCount >= SUPER_LIG_RULES.MAX_FOREIGNERS_TOTAL) {
                     setErrorMessage(`Maximum total foreign players (${SUPER_LIG_RULES.MAX_FOREIGNERS_TOTAL}) reached.`);
                     return;
                }
                if (playerToMove.age > 23 && foreignersOver23Count >= SUPER_LIG_RULES.MAX_FOREIGNERS_OVER_23) {
                    setErrorMessage(`Maximum over-23 foreign players (${SUPER_LIG_RULES.MAX_FOREIGNERS_OVER_23}) reached.`);
                    return;
                }
            }
        }
    }

    const newLocations = { ...playerLocations };
    const playerInTargetSlot = allPlayersForTeam.find(p => p.location === toLocation);
    const isTargetPitchPosition = pitchPositions.some(pos => pos.id === toLocation);
    
    if (isTargetPitchPosition && playerInTargetSlot) {
        newLocations[playerInTargetSlot.id] = fromLocation;
    }
    
    newLocations[playerId] = toLocation;

    setPlayerLocations(newLocations);
  }, [allPlayersForTeam, eligiblePlayers, playerLocations, pitchPositions, ruleSet, calculateMaxUefaSquadSize]);


  // --- useEffect Hooks ---
  
  useEffect(() => {
    if (selectedTeam) {
      handleResetSquad();
    } else {
      setPlayerLocations({});
    }
  }, [selectedTeam, handleResetSquad]);
  
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <DndProvider backend={HTML5Backend}>
  <div style={{ backgroundColor: '#0f172a', color: '#e2e8f0', minHeight: '100vh', padding: 20, fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#e2e8f0', textAlign: 'center', letterSpacing: '1px' }}>Football Squad Builder</h1>

        {/* --- Top Control Bar --- */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
          {/* Screenshot button moved under Reset Squad */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 20, padding: '15px', backgroundColor: '#1e293b', borderRadius: '8px' }}>
          <select value={selectedLeague} onChange={(e) => {setSelectedLeague(e.target.value); setSelectedTeam('');}} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff' }}>
            <option value="">-- Select Competition --</option>
            {dummyLeagues.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
          </select>

          <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)} disabled={!selectedLeague} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff' }}>
            <option value="">-- Select Team --</option>
            {availableTeams.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          
          <select value={ruleSet} onChange={(e) => setRuleSet(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff' }}>
                <option value="UEFA">UEFA Rules</option>
                <option value="SUPER_LIG">Süper Lig Rules</option>
          </select>

          <select value={selectedFormation} onChange={(e) => handleFormationChange(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff' }}>
            {Object.keys(FORMATIONS).map(key => <option key={key} value={key}>{key}</option>)}
          </select>
        </div>


        {!selectedTeam && <p style={{ color: '#cbd5e1', textAlign: 'center', fontSize: '1.2em' }}>Please select a competition and a team to begin.</p>}

    {selectedTeam && (
      <>
      <div id="squad-main-area">
        <DropArea onDropPlayer={onDropPlayer} locationId={PLAYER_LOCATIONS.UNREGISTERED} title="Unregistered Players" titleColor="#94a3b8">
          {unregisteredPlayers.map(p => <Player key={p.id} player={p} />)}
        </DropArea>
        <div style={{marginTop: '20px', padding: '20px', border: '2px solid #334155', borderRadius: '12px', backgroundColor: '#1e293b' }}>
           <h2 style={{ color: '#fbbf24', textAlign: 'center', fontSize: '1.5em', marginTop: 0, borderBottom: '1px solid #334155', paddingBottom: '15px' }}>Eligible Squad (List A)</h2>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '180px' }}>
                <ActionButton 
                  onClick={handleClearPitch}
                  title="Move all players from the pitch to the bench"
                >
                  Clear Pitch
                </ActionButton>
                <ActionButton 
                  onClick={handleResetSquad}
                  title="Move all registered players back to the unregistered list"
                  color="#f87171"
                >
                  Reset Squad
                </ActionButton>
                <ActionButton
                  onClick={handleScreenshot}
                  title="Take a screenshot of your squad and save as myteam.png"
                  color="#38bdf8"
                >
                  📸 Save Squad as Image
                </ActionButton>
              </div>
              <PitchAndStatsPanel 
                players={allPlayersForTeam.filter(p => p.location !== PLAYER_LOCATIONS.UNREGISTERED)}
                onDropPlayer={onDropPlayer} 
                formationPositions={pitchPositions} 
              />
            </div>
           <div style={{marginTop: '20px'}}>
            <DropArea onDropPlayer={onDropPlayer} locationId={PLAYER_LOCATIONS.SUBS} title="Substitutes" titleColor="#fbbf24">
              {substitutePlayers.map(p => <Player key={p.id} player={p} />)}
            </DropArea>
           </div>
        </div>
      </div>
      {errorMessage && <p style={{ color: '#f87171', fontWeight: 'bold', textAlign: 'center', marginTop: '15px', padding: '10px', backgroundColor: '#442222', borderRadius: '6px' }}>{errorMessage}</p>}
      {ruleSet === 'UEFA' ? (
        <UefaValidationStatus eligiblePlayers={eligiblePlayers} />
      ) : (
        <SuperLigValidationStatus eligiblePlayers={eligiblePlayers} />
      )}
      </>
    )}
      </div>
    </DndProvider>
  );
}