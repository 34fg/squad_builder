import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const kocaelisporPlayers = [
  // Kocaelispor (Turkish Super League) 2025/26 - ACTUAL TRANSFERMARKT DATA
  // Goalkeepers
  { id: 'kcs-eray-birnican', name: 'Eray Birnican', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'kcs-erce-kardesler', name: 'Erce Kardeşler', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'kcs-celal-dumanlı', name: 'Celal Dumanlı', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 27, hasBlueCard: false },
  // Defenders
  { id: 'kcs-amar-rahmanovic', name: 'Amar Rahmanović', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Bosnian', age: 27, hasBlueCard: false },
  { id: 'kcs-mateusz-wieteska', name: 'Mateusz Wieteska', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Polish', age: 28, hasBlueCard: false },
  { id: 'kcs-veaceslav-posmac', name: 'Veaceslav Posmac', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Moldovan', age: 28, hasBlueCard: false },
  { id: 'kcs-osman-cetin', name: 'Osman Çetin', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'kcs-abdülkadir-sünger', name: 'Abdülkadir Sünger', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'kcs-ahmet-eyup-turkaslan', name: 'Ahmet Eyüp Türkaslan', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'kcs-kahraman-demirtas', name: 'Kahraman Demirtaş', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'kcs-emirhan-aydoğan', name: 'Emirhan Aydoğan', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'kcs-yasin-oztekin', name: 'Yasin Öztekin', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 35, hasBlueCard: false },
  // Midfielders
  { id: 'kcs-filip-damjanovic', name: 'Filip Damjanović', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Serbian', age: 26, hasBlueCard: false },
  { id: 'kcs-levan-shengelia', name: 'Levan Shengelia', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Georgian', age: 32, hasBlueCard: false },
  { id: 'kcs-dzenan-bureković', name: 'Dženan Bureković', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Bosnian', age: 29, hasBlueCard: false },
  { id: 'kcs-robert-saba', name: 'Robert Šaba', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Slovakian', age: 31, hasBlueCard: false },
  { id: 'kcs-tolga-cigerci', name: 'Tolga Ciğerci', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 33, hasBlueCard: false },
  { id: 'kcs-ahmed-ildiz', name: 'Ahmed Ildiz', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'kcs-dogan-alemdar', name: 'Doğan Alemdar', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'kcs-mervan-celik', name: 'Mervan Çelik', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'kcs-ali-dere', name: 'Ali Dere', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'kcs-eren-karadag', name: 'Eren Karadağ', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'kcs-yasir-subasi', name: 'Yasir Subaşı', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 27, hasBlueCard: false },
  // Forwards
  { id: 'kcs-bruno-petkovic', name: 'Bruno Petković', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Croatian', age: 30, hasBlueCard: false },
  { id: 'kcs-renaldo-cephas', name: 'Renaldo Cephas', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Jamaican', age: 25, hasBlueCard: false },
  { id: 'kcs-mame-thiam', name: 'Mame Thiam', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Senegalese', age: 29, hasBlueCard: false },
  { id: 'kcs-melih-ibrahimoglu', name: 'Melih İbrahimoğlu', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'kcs-emir-tintiloglu', name: 'Emir Tintiloğlu', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'kcs-randy-dwumfour', name: 'Randy Dwumfour', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Ghanaian', age: 24, hasBlueCard: false },
];
