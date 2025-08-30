import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const antalyasporPlayers = [
  // Antalyaspor (Turkish Super League) 2025/26 - ACTUAL TRANSFERMARKT DATA
  // Goalkeepers
  { id: 'ants-ataberk-dadakdeniz', name: 'Ataberk Dadakdeniz', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'ants-julian-cuesta', name: 'Julián Cuesta', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Spanish', age: 34, hasBlueCard: false },
  { id: 'ants-abdullah-yigiter', name: 'Abdullah Yiğiter', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'ants-kagan-arican', name: 'Kağan Arıcan', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ants-dogukan-ozkan', name: 'Doğukan Özkan', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 25, hasBlueCard: false },
  // Defenders
  { id: 'ants-georgiy-dzhikiya', name: 'Georgiy Dzhikiya', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Russian', age: 31, hasBlueCard: false },
  { id: 'ants-lautaro-giannetti', name: 'Lautaro Giannetti', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Argentinian', age: 31, hasBlueCard: false },
  { id: 'ants-bahadir-ozturk', name: 'Bahadır Öztürk', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CB, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'ants-veysel-sari', name: 'Veysel Sarı', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.CB, nationality: 'Turkish', age: 37, hasBlueCard: false },
  { id: 'ants-huseyin-turkmen', name: 'Hüseyin Türkmen', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CB, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'ants-harun-toprak', name: 'Harun Toprak', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LB, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ants-ege-izmirli', name: 'Ege İzmirli', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LB, nationality: 'Turkish', age: 17, hasBlueCard: false },
  { id: 'ants-kenneth-paal', name: 'Kenneth Paal', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Surinamese', age: 28, hasBlueCard: false },
  { id: 'ants-guray-vural', name: 'Güray Vural', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.LB, nationality: 'Turkish', age: 37, hasBlueCard: false },
  { id: 'ants-efecan-gulerce', name: 'Efecan Gülerce', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RB, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'ants-bunyamin-balci', name: 'Bünyamin Balcı', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RB, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'ants-erdogan-yesilyurt', name: 'Erdoğan Yeşilyurt', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RB, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'ants-mert-yilmaz', name: 'Mert Yılmaz', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RB, nationality: 'Turkish', age: 26, hasBlueCard: false },
  // Midfielders
  { id: 'ants-jakub-kaluzinski', name: 'Jakub Kaluzinski', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Polish', age: 22, hasBlueCard: false },
  { id: 'ants-jesper-ceesay', name: 'Jesper Ceesay', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Gambian', age: 23, hasBlueCard: false },
  { id: 'ants-soner-dikmen', name: 'Soner Dikmen', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.CM, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'ants-dario-saric', name: 'Dario Saric', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Bosnian', age: 28, hasBlueCard: false },
  { id: 'ants-yakub-ilcin', name: 'Yakub İlçin', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 16, hasBlueCard: false },
  { id: 'ants-abdulkadir-omur', name: 'Abdülkadir Ömür', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.AM, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'ants-ramzi-safuri', name: 'Ramzi Safuri', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.AM, nationality: 'Israeli', age: 29, hasBlueCard: false },
  { id: 'ants-sander-van-de-streek', name: 'Sander van de Streek', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.AM, nationality: 'Dutch', age: 32, hasBlueCard: false },
  { id: 'ants-deni-milosevic', name: 'Deni Milošević', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.AM, nationality: 'Bosnian', age: 30, hasBlueCard: false },
  { id: 'ants-nikola-storm', name: 'Nikola Storm', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Belgian', age: 30, hasBlueCard: false },
  { id: 'ants-dogukan-sinik', name: 'Doğukan Sinik', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.LW, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'ants-ali-demirbilek', name: 'Ali Demirbilek', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LW, nationality: 'Turkish', age: 16, hasBlueCard: false },
  { id: 'ants-berkay-topdemir', name: 'Berkay Topdemir', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LW, nationality: 'Turkish', age: 18, hasBlueCard: false },
  { id: 'ants-mehmet-ilhan', name: 'Mehmet İlhan', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RW, nationality: 'Turkish', age: 21, hasBlueCard: false },
  // Forwards
  { id: 'ants-tomas-cvancara', name: 'Tomas Cvancara', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CF, nationality: 'Czech', age: 25, hasBlueCard: false },
  { id: 'ants-poyraz-yildirim', name: 'Poyraz Yıldırım', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CF, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ants-arda-altun', name: 'Arda Altun', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CF, nationality: 'Turkish', age: 18, hasBlueCard: false },
  { id: 'ants-kerem-kayaarasi', name: 'Kerem Kayaarası', teamId: 'antalyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CF, nationality: 'Turkish', age: 19, hasBlueCard: false },
];
