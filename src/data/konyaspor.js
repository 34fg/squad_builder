import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const konyasporPlayers = [
  // Konyaspor (Turkish Super League) 2025/26 - ACTUAL TRANSFERMARKT DATA
  // Goalkeepers
  { id: 'ks-deniz-ertas', name: 'Deniz Ertaş', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ks-bahadir-gungordu', name: 'Bahadır Güngördü', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'ks-egemen-aydin', name: 'Egemen Aydın', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 18, hasBlueCard: false },
  // Defenders
  { id: 'ks-riechedly-bazoer', name: 'Riechedly Bazoer', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Dutch', age: 28, hasBlueCard: false },
  { id: 'ks-adil-demirbag', name: 'Adil Demirbağ', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'ks-ugurcan-yazgili', name: 'Uğurcan Yazğılı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'ks-josip-calusic', name: 'Josip Calusic', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Croatian', age: 31, hasBlueCard: false },
  { id: 'ks-utku-eris', name: 'Utku Eriş', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ks-guilherme', name: 'Guilherme', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 35, hasBlueCard: false },
  { id: 'ks-yasir-subasi', name: 'Yasir Subaşı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'ks-yhoan-andzouana', name: 'Yhoan Andzouana', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Congolese', age: 28, hasBlueCard: false },
  // Midfielders
  { id: 'ks-ufuk-akyol', name: 'Ufuk Akyol', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'ks-marko-jevtovic', name: 'Marko Jevtovic', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Serbian', age: 32, hasBlueCard: false },
  { id: 'ks-mucahit-ibrahimoglu', name: 'Mücahit Ibrahimoglu', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Austrian', age: 20, hasBlueCard: false },
  { id: 'ks-ismail-esat-buga', name: 'İsmail Esat Buğa', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ks-morten-bjorlo', name: 'Morten Bjørlo', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Norwegian', age: 29, hasBlueCard: false },
  { id: 'ks-jin-ho-jo', name: 'Jin-ho Jo', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'South Korean', age: 22, hasBlueCard: false },
  { id: 'ks-emmanuel-boateng', name: 'Emmanuel Boateng', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Ghanaian', age: 28, hasBlueCard: false },
  { id: 'ks-enis-bardhi', name: 'Enis Bardhi', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'North Macedonian', age: 30, hasBlueCard: false },
  { id: 'ks-pedrinho', name: 'Pedrinho', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 28, hasBlueCard: false },
  { id: 'ks-melih-ibrahimoglu', name: 'Melih İbrahimoğlu', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'ks-danijel-aleksic', name: 'Danijel Aleksic', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Serbian', age: 34, hasBlueCard: false },
  { id: 'ks-emir-bars', name: 'Emir Bars', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ks-kaan-akyazi', name: 'Kaan Akyazı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ks-marius-stefanescu', name: 'Marius Ștefănescu', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Romanian', age: 27, hasBlueCard: false },
  { id: 'ks-alassane-ndao', name: 'Alassane Ndao', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Senegalese', age: 28, hasBlueCard: false },
  { id: 'ks-tunahan-tasci', name: 'Tunahan Taşçı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 23, hasBlueCard: false },
  // Forwards
  { id: 'ks-jackson-muleka', name: 'Jackson Muleka', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Congolese', age: 25, hasBlueCard: false },
  { id: 'ks-umut-nayir', name: 'Umut Nayir', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 32, hasBlueCard: false },
  { id: 'ks-melih-bostan', name: 'Melih Bostan', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
];
