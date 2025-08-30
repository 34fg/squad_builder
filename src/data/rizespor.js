import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const rizesporPlayers = [
  // Çaykur Rizespor (Turkish Super League) 2025/26 - Up-to-date squad from Transfermarkt
  // Goalkeepers
  { id: 'riz-erdem-canpolat', name: 'Erdem Canpolat', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Turkish/German', age: 24, hasBlueCard: false },
  { id: 'riz-efe-dogan', name: 'Efe Doğan', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'riz-canberk-yurdakul', name: 'Canberk Yurdakul', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Turkish', age: 24, hasBlueCard: false },
  // Defenders
  { id: 'riz-modibo-sagnan', name: 'Modibo Sagnan', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Malian/French', age: 26, hasBlueCard: false },
  { id: 'riz-khusniddin-alikulov', name: 'Khusniddin Alikulov', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Uzbek', age: 26, hasBlueCard: false },
  { id: 'riz-attila-mocsi', name: 'Attila Mocsi', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Hungarian', age: 25, hasBlueCard: false },
  { id: 'riz-samet-akaydin', name: 'Samet Akaydın', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'riz-anil-yasar', name: 'Anıl Yaşar', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'riz-casper-hojer', name: 'Casper Højer', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Danish', age: 30, hasBlueCard: false },
  { id: 'riz-guvenc-usta', name: 'Güvenç Usta', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'riz-taha-sahin', name: 'Taha Şahin', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RB, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'riz-furkan-orak', name: 'Furkan Orak', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RB, nationality: 'Turkish', age: 24, hasBlueCard: false },
  // Midfielders
  { id: 'riz-giannis-papanikolaou', name: 'Giannis Papanikolaou', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CDM, nationality: 'Greek', age: 26, hasBlueCard: false },
  { id: 'riz-janne-pekka-laine', name: 'Janne-Pekka Laine', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CDM, nationality: 'Finnish', age: 24, hasBlueCard: false },
  { id: 'riz-efe-gecim', name: 'Efe Geçim', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CDM, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'riz-qazim-laci', name: 'Qazim Laci', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Albanian/Greek', age: 29, hasBlueCard: false },
  { id: 'riz-ibrahim-olawoyin', name: 'Ibrahim Olawoyin', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Nigerian', age: 27, hasBlueCard: false },
  { id: 'riz-muhamed-buljubasic', name: 'Muhamed Buljubasic', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Bosnian', age: 21, hasBlueCard: false },
  { id: 'riz-mithat-pala', name: 'Mithat Pala', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'riz-taylan-antalyali', name: 'Taylan Antalyalı', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'riz-dal-varesanovic', name: 'Dal Varesanovic', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CAM, nationality: 'Bosnian/Croatian', age: 24, hasBlueCard: false },
  // Wingers
  { id: 'riz-valentin-mihaela', name: 'Valentin Mihăilă', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Romanian', age: 25, hasBlueCard: false },
  { id: 'riz-altin-zeqiri', name: 'Altin Zeqiri', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Kosovan/Finnish', age: 25, hasBlueCard: false },
  { id: 'riz-emrecan-bulut', name: 'Emrecan Bulut', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'riz-doganay-avci', name: 'Doğanay Avcı', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Turkish', age: 19, hasBlueCard: false },
  // Forwards
  { id: 'riz-ali-sowe', name: 'Ali Sowe', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Gambian/Italian', age: 31, hasBlueCard: false },
  { id: 'riz-vaclav-jurecka', name: 'Vaclav Jurecka', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Czech', age: 31, hasBlueCard: false },
  { id: 'riz-halil-dervisoglu', name: 'Halil Dervişoğlu', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Turkish/Dutch', age: 25, hasBlueCard: false },
  { id: 'riz-deniz-yasar', name: 'Deniz Yaşar', teamId: 'rizespor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Turkish', age: 18, hasBlueCard: false },
];
