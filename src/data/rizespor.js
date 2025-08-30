import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const rizesporPlayers = [
  // Çaykur Rizespor (Turkish Super League) 2025/26 - FROM DATABASE  
  // Goalkeepers
  { id: 'riz-gokhan-akkan', name: 'Gökhan Akkan', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'riz-tarık-cetin', name: 'Tarık Çetin', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 32, hasBlueCard: false },
  { id: 'riz-ivo-grbic', name: 'Ivo Grbić', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Croatian', age: 28, hasBlueCard: false },
  // Defenders
  { id: 'riz-alberk-koc', name: 'Alberk Koç', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'riz-anton-maglica', name: 'Anton Maglica', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Croatian', age: 24, hasBlueCard: false },
  { id: 'riz-casper-hojer', name: 'Casper Højer', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Danish', age: 25, hasBlueCard: false },
  { id: 'riz-ibrahim-olawoyin', name: 'Ibrahim Olawoyin', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Nigerian', age: 24, hasBlueCard: false },
  { id: 'riz-taha-tepe', name: 'Taha Tepe', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'riz-huseyin-turkmen', name: 'Hüseyin Türkmen', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'riz-minchol-son', name: 'Min-chol Son', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'North Korean', age: 30, hasBlueCard: false },
  { id: 'riz-jonjo-shelvey', name: 'Jonjo Shelvey', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'English', age: 32, hasBlueCard: false },
  { id: 'riz-dal-varesanovic', name: 'Dal Varešanović', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Bosnian', age: 25, hasBlueCard: false },
  { id: 'riz-gustavo-sauer', name: 'Gustavo Sauer', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 29, hasBlueCard: false },
  // Midfielders
  { id: 'riz-emirhan-topcu', name: 'Emirhan Topçu', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'riz-benhur-keser', name: 'Benhur Keser', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'riz-amir-hadziahmetovic', name: 'Amir Hadžiahmetović', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Bosnian', age: 28, hasBlueCard: false },
  { id: 'riz-adolfo-gaich', name: 'Adolfo Gaich', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Argentinian', age: 26, hasBlueCard: false },
  { id: 'riz-attila-mocsonoyi', name: 'Attila Mocsonoyi', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Hungarian', age: 23, hasBlueCard: false },
  { id: 'riz-giannis-papanikolaou', name: 'Giannis Papanikolaou', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Greek', age: 28, hasBlueCard: false },
  { id: 'riz-halil-ibrahim-pehlivan', name: 'Halil İbrahim Pehlivan', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'riz-martin-minevski', name: 'Martin Minevski', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'North Macedonian', age: 22, hasBlueCard: false },
  { id: 'riz-taha-altikardes', name: 'Taha Altıkardeş', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'riz-emir-kaan-gultekin', name: 'Emir Kaan Gültekin', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  // Forwards
  { id: 'riz-rocco-vata', name: 'Rocco Vata', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Irish', age: 20, hasBlueCard: false },
  { id: 'riz-bryan-dabo', name: 'Bryan Dabo', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'French', age: 32, hasBlueCard: false },
  { id: 'riz-altin-zeqiri', name: 'Altin Zeqiri', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Swiss', age: 25, hasBlueCard: false },
  { id: 'riz-ioannis-papazoglou', name: 'Ioannis Papazoglou', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Greek', age: 26, hasBlueCard: false },
  { id: 'riz-vaclav-hladky', name: 'Václav Hladký', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Czech', age: 31, hasBlueCard: false },
];
