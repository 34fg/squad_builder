import { TRAINING_STATUS, POSITIONS } from '../constants.js';

export const kocaelisporPlayers = [
  // Kocaelispor (Turkish Super League) 2025/26 - Up-to-date squad from Transfermarkt
  // Goalkeepers
  { id: 'kcs-aleksandar-jovanovic', name: 'Aleksandar Jovanovic', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Serbian', age: 32, hasBlueCard: false },
  { id: 'kcs-serhat-oztasdelen', name: 'Serhat Öztaşdelen', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'kcs-gokhan-degirmenci', name: 'Gökhan Değirmenci', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Turkish', age: 36, hasBlueCard: false },
  // Defenders
  { id: 'kcs-mateusz-wieteska', name: 'Mateusz Wieteska', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Polish', age: 28, hasBlueCard: false },
  { id: 'kcs-oleksandr-syrota', name: 'Oleksandr Syrota', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Ukrainian', age: 25, hasBlueCard: false },
  { id: 'kcs-aaron-appindangoye', name: 'Aaron Appindangoyé', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Gabonese', age: 33, hasBlueCard: false },
  { id: 'kcs-tarkan-serbest', name: 'Tarkan Serbest', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Turkish/Austrian', age: 31, hasBlueCard: false },
  { id: 'kcs-massadio-haidara', name: 'Massadio Haïdara', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Malian/French', age: 32, hasBlueCard: false },
  { id: 'kcs-muharrem-cinan', name: 'Muharrem Cinan', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'kcs-anfernee-dijksteel', name: 'Anfernee Dijksteel', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RB, nationality: 'Surinamese/Dutch', age: 28, hasBlueCard: false },
  { id: 'kcs-ahmet-oguz', name: 'Ahmet Oğuz', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RB, nationality: 'Turkish', age: 32, hasBlueCard: false },
  // Midfielders
  { id: 'kcs-show', name: 'Show', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CDM, nationality: 'Angolan', age: 26, hasBlueCard: false },
  { id: 'kcs-joseph-nonge', name: 'Joseph Nonge', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Belgian/DR Congo', age: 20, hasBlueCard: false },
  { id: 'kcs-karol-linetty', name: 'Karol Linetty', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Polish', age: 30, hasBlueCard: false },
  { id: 'kcs-tayfur-bingol', name: 'Tayfur Bingöl', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish', age: 32, hasBlueCard: false },
  { id: 'kcs-cihat-celik', name: 'Cihat Çelik', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish/Dutch', age: 29, hasBlueCard: false },
  { id: 'kcs-samet-yalcin', name: 'Samet Yalçın', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'kcs-mesut-can-tunali', name: 'Mesut Can Tunalı', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'kcs-ege-bilim', name: 'Ege Bilim', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Turkish', age: 19, hasBlueCard: false },
  // Wingers
  { id: 'kcs-rigoberto-rivas', name: 'Rigoberto Rivas', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Honduran/Italian', age: 27, hasBlueCard: false },
  { id: 'kcs-ryan-mendes', name: 'Ryan Mendes', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Cape Verdean/French', age: 35, hasBlueCard: false },
  { id: 'kcs-furkan-gedik', name: 'Furkan Gedik', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'kcs-can-keles', name: 'Can Keleş', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RW, nationality: 'Austrian/Turkish', age: 23, hasBlueCard: false },
  { id: 'kcs-dan-agyei', name: 'Dan Agyei', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RW, nationality: 'English/Ghanaian', age: 28, hasBlueCard: false },
  { id: 'kcs-darko-churlinov', name: 'Darko Churlinov', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LW, nationality: 'North Macedonian', age: 25, hasBlueCard: false },
  // Forwards
  { id: 'kcs-bruno-petkovic', name: 'Bruno Petkovic', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Croatian', age: 30, hasBlueCard: false },
  { id: 'kcs-ahmet-sagat', name: 'Ahmet Sağat', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Turkish/German', age: 29, hasBlueCard: false },
  { id: 'kcs-toheeb-lawal', name: 'Toheeb Lawal', teamId: 'kocaelispor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.ST, nationality: 'Nigerian', age: 19, hasBlueCard: false },
];
