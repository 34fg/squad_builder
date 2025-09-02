import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const konyasporPlayers = [
  // Konyaspor (Turkish Super League) 2025/26 - ACTUAL TRANSFERMARKT DATA
  // Goalkeepers
  { id: 'ks-deniz-ertas', name: 'Deniz Ertaş', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ks-bahadir-gungordu', name: 'Bahadır Güngördü', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'ks-egemen-aydin', name: 'Egemen Aydın', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 18, hasBlueCard: false },
  // Defenders
  { id: 'ks-riechedly-bazoer', name: 'Riechedly Bazoer', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Dutch', age: 28, hasBlueCard: false },
  { id: 'ks-adil-demirbag', name: 'Adil Demirbağ', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CB, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'ks-ugurcan-yazgili', name: 'Uğurcan Yazgılı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CB, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'ks-josip-calusic', name: 'Josip Calusic', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Croatian', age: 31, hasBlueCard: false },
  { id: 'ks-utku-eris', name: 'Utku Eriş', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LB, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ks-guilherme', name: 'Guilherme', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Brazilian', age: 35, hasBlueCard: false },
  { id: 'ks-yasir-subasi', name: 'Yasir Subaşı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LB, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'ks-yhoan-andzouana', name: 'Yhoan Andzouana', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RB, nationality: 'Congolese', age: 28, hasBlueCard: false },
  // Midfielders
  { id: 'ks-ufuk-akyol', name: 'Ufuk Akyol', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'ks-marko-jevtovic', name: 'Marko Jevtovic', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CDM, nationality: 'Serbian', age: 32, hasBlueCard: false },
  { id: 'ks-mucahit-ibrahimoglu', name: 'Mücahit Ibrahimoglu', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Austrian', age: 20, hasBlueCard: false },
  { id: 'ks-ismail-esat-buga', name: 'İsmail Esat Buğa', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ks-morten-bjorlo', name: 'Morten Bjørlo', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Norwegian', age: 29, hasBlueCard: false },
  { id: 'ks-jin-ho-jo', name: 'Jin-ho Jo', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'South Korean', age: 22, hasBlueCard: false },
  { id: 'ks-enis-bardhi', name: 'Enis Bardhi', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CAM, nationality: 'North Macedonian', age: 30, hasBlueCard: false },
  { id: 'ks-pedrinho', name: 'Pedrinho', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Brazilian', age: 28, hasBlueCard: false },
  { id: 'ks-melih-ibrahimoglu', name: 'Melih İbrahimoğlu', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LW, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'ks-danijel-aleksic', name: 'Danijel Aleksic', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CAM, nationality: 'Serbian', age: 34, hasBlueCard: false },
  { id: 'ks-emir-bars', name: 'Emir Bars', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ks-kaan-akyazi', name: 'Kaan Akyazı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ks-marius-stefanescu', name: 'Marius Ștefănescu', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Romanian', age: 27, hasBlueCard: false },
  { id: 'ks-alassane-ndao', name: 'Alassane Ndao', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RW, nationality: 'Senegalese', age: 28, hasBlueCard: false },
  { id: 'ks-tunahan-tasci', name: 'Tunahan Taşçı', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RB, nationality: 'Turkish', age: 23, hasBlueCard: false },
  // Forwards
  { id: 'ks-jackson-muleka', name: 'Jackson Muleka', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Congolese', age: 25, hasBlueCard: false },
  { id: 'ks-umut-nayir', name: 'Umut Nayir', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.ST, nationality: 'Turkish', age: 32, hasBlueCard: false },
  { id: 'ks-melih-bostan', name: 'Melih Bostan', teamId: 'konyaspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.ST, nationality: 'Turkish', age: 21, hasBlueCard: false },
];
