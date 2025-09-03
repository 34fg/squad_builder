import React from 'react';
import { DUMMY_FIXTURES } from '../utils/fixtures';

export function FixturesModal({ open, onClose, teamId, teamName }) {
  if (!open) return null;

  const fixtures = DUMMY_FIXTURES[teamId] || [];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        borderRadius: '12px',
        padding: '24px',
        minWidth: '320px',
        maxWidth: '480px',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <h2 style={{ color: '#fbbf24', margin: 0 }}>
            {teamName} - European Fixtures
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              fontSize: '24px',
              padding: '4px',
            }}
          >
            ×
          </button>
        </div>

        {fixtures.length === 0 ? (
          <p style={{ color: '#cbd5e1' }}>No upcoming fixtures found.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {fixtures.map((fixture, index) => (
              <div
                key={index}
                style={{
                  padding: '12px',
                  backgroundColor: '#0f172a',
                  borderRadius: '8px',
                  color: '#cbd5e1',
                }}
              >
                <div style={{ fontSize: '0.9em', color: '#94a3b8', marginBottom: '4px' }}>
                  {new Date(fixture.date).toLocaleDateString('en-GB')} - {fixture.competition}
                </div>
                <div style={{ fontWeight: 'bold' }}>
                  {fixture.home ? (
                    <>
                      <span style={{ color: '#fbbf24' }}>{teamName}</span>
                      <span> vs </span>
                      <span>{fixture.opponent}</span>
                    </>
                  ) : (
                    <>
                      <span>{fixture.opponent}</span>
                      <span> vs </span>
                      <span style={{ color: '#fbbf24' }}>{teamName}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}