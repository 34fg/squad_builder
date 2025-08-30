import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const samsunsporPlayers = [
  // Samsunspor (Turkish Super League) 2025/26 - FROM DATABASE
  // Goalkeepers
  { id: 'sam-okan-kocuk', name: 'Okan Kocuk', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.GK, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'sam-albert-posiadala', name: 'Albert Posiadala', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Polish', age: 22, hasBlueCard: false },
  { id: 'sam-efe-yigit-ustun', name: 'Efe Yiğit Üstün', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 17, hasBlueCard: false },
  { id: 'sam-efe-berat-toruz', name: 'Efe Berat Törüz', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 18, hasBlueCard: false },
  { id: 'sam-toni-borevkovic', name: 'Toni Borevković', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Croatian', age: 28, hasBlueCard: false },
  { id: 'sam-rick-van-drongelen', name: 'Rick van Drongelen', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Dutch', age: 26, hasBlueCard: false },
  { id: 'sam-lubomir-satka', name: 'Lubomir Satka', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Slovakian', age: 29, hasBlueCard: false },
  { id: 'sam-yunus-emre-cift', name: 'Yunus Emre Çift', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'sam-bedirhan-cetin', name: 'Bedirhan Çetin', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'sam-logi-tomasson', name: 'Logi Tómasson', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Icelandic', age: 24, hasBlueCard: false },
  { id: 'sam-soner-gonul', name: 'Soner Gönül', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'sam-melih-altikulac', name: 'Melih Altıkulaç', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'sam-joe-mendes', name: 'Joe Mendes', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Swedish', age: 22, hasBlueCard: false },
  { id: 'sam-zeki-yavru', name: 'Zeki Yavru', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 33, hasBlueCard: false },
  { id: 'sam-antoine-makoumbou', name: 'Antoine Makoumbou', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Congolese', age: 27, hasBlueCard: false },
  { id: 'sam-celil-yuksel', name: 'Celil Yüksel', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'sam-olivier-ntcham', name: 'Olivier Ntcham', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Cameroonian', age: 29, hasBlueCard: false },
  { id: 'sam-muhammet-ozbaskici', name: 'Muhammet Özbaskıcı', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'sam-soner-aydogdu', name: 'Soner Aydoğdu', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 34, hasBlueCard: false },
  { id: 'sam-alper-efe-pazar', name: 'Alper Efe Pazar', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'sam-afonso-sousa', name: 'Afonso Sousa', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Portuguese', age: 25, hasBlueCard: false },
  { id: 'sam-carlo-holse', name: 'Carlo Holse', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Danish', age: 26, hasBlueCard: false },
  { id: 'sam-emre-kilinc', name: 'Emre Kılınç', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'sam-anthony-musaba', name: 'Anthony Musaba', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Dutch', age: 24, hasBlueCard: false },
  { id: 'sam-polat-yaldir', name: 'Polat Yaldır', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'sam-marius-mouandilmadji', name: 'Marius Mouandilmadji', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Chadian', age: 27, hasBlueCard: false },
  { id: 'sam-landry-dimata', name: 'Landry Dimata', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Belgian', age: 27, hasBlueCard: false },
];

// Use the updated Transfermarkt list (sam- prefix)
export const samsunspor = samsunsporPlayers;
