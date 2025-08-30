// Football Squad Builder Database
// Contains all player data, team data, league data, and constants

// --- Constants ---
export const TRAINING_STATUS = {
  CLUB: 'club-trained',
  ASSOC: 'association-trained',
  NONE: 'non-homegrown',
};

export const POSITIONS = {
  GK: 'Goalkeeper',
  OUTFIELD: 'Outfield',
  // Specific position extensions for Samsunspor
  CB: 'Centre-Back',
  LB: 'Left-Back',
  RB: 'Right-Back',
  DM: 'Defensive Midfield',
  CM: 'Central Midfield',
  AM: 'Attacking Midfield',
  LW: 'Left Winger',
  RW: 'Right Winger',
  CF: 'Centre-Forward',
};

// --- League Data ---
export const leagues = [
  { id: 'ucl', name: 'UEFA Champions League' },
  { id: 'uel', name: 'UEFA Europa League' },
  { id: 'uecl', name: 'UEFA Europa Conference League' },
];

// --- Team Data ---
export const teams = [
  { id: 'fenerbahce', name: 'Fenerbahçe', leagueId: 'ucl' },
  { id: 'galatasaray', name: 'Galatasaray', leagueId: 'ucl' },
  { id: 'besiktas', name: 'Beşiktaş', leagueId: 'uel' },
  { id: 'samsunspor', name: 'Samsunspor', leagueId: 'uecl' },
];

// --- Player Database ---
export const players = [
  // Samsunspor (UECL) 2025/26 - real squad
  { id: 'ss-okan-kocuk', name: 'Okan Kocuk', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'ss-albert-posiadala', name: 'Albert Posiadala', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Polish', age: 22, hasBlueCard: false },
  { id: 'ss-efe-yigit-ustun', name: 'Efe Yiğit Üstün', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 17, hasBlueCard: false },
  { id: 'ss-efe-berat-toruz', name: 'Efe Berat Törüz', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 18, hasBlueCard: false },
  { id: 'ss-toni-borevkovic', name: 'Toni Borevković', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Croatian', age: 28, hasBlueCard: false },
  { id: 'ss-rick-van-drongelen', name: 'Rick van Drongelen', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Dutch', age: 26, hasBlueCard: false },
  { id: 'ss-lubomir-satka', name: 'Lubomir Satka', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CB, nationality: 'Slovak', age: 29, hasBlueCard: false },
  { id: 'ss-yunus-emre-cift', name: 'Yunus Emre Çift', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CB, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'ss-bedirhan-cetin', name: 'Bedirhan Çetin', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CB, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ss-logi-tomasson', name: 'Logi Tómasson', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.LB, nationality: 'Icelandic', age: 24, hasBlueCard: false },
  { id: 'ss-soner-gonul', name: 'Soner Gönül', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LB, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'ss-melih-altikulac', name: 'Melih Altıkulaç', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LB, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'ss-joe-mendes', name: 'Joe Mendes', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RB, nationality: 'Swedish', age: 22, hasBlueCard: false },
  { id: 'ss-zeki-yavru', name: 'Zeki Yavru', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RB, nationality: 'Turkish', age: 33, hasBlueCard: false },
  { id: 'ss-antoine-makoumbou', name: 'Antoine Makoumbou', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.DM, nationality: 'Congolese', age: 27, hasBlueCard: false },
  { id: 'ss-celil-yuksel', name: 'Celil Yüksel', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.DM, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'ss-olivier-ntcham', name: 'Olivier Ntcham', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CM, nationality: 'Cameroonian', age: 29, hasBlueCard: false },
  { id: 'ss-muhammet-ozbaskici', name: 'Muhammet Özbaskıcı', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'ss-soner-aydogdu', name: 'Soner Aydoğdu', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 34, hasBlueCard: false },
  { id: 'ss-alper-efe-pazar', name: 'Alper Efe Pazar', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.CM, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'ss-afonso-sousa', name: 'Afonso Sousa', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.AM, nationality: 'Portuguese', age: 25, hasBlueCard: false },
  { id: 'ss-carlo-holse', name: 'Carlo Holse', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.AM, nationality: 'Danish', age: 26, hasBlueCard: false },
  { id: 'ss-emre-kilinc', name: 'Emre Kılınç', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.LW, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'ss-anthony-musaba', name: 'Anthony Musaba', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.RW, nationality: 'Dutch', age: 24, hasBlueCard: false },
  { id: 'ss-polat-yaldir', name: 'Polat Yaldır', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.RW, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'ss-marius-mouandilmadji', name: 'Marius Mouandilmadji', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CF, nationality: 'Chadian', age: 27, hasBlueCard: false },
  { id: 'ss-landry-dimata', name: 'Landry Dimata', teamId: 'samsunspor', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.CF, nationality: 'Belgian', age: 27, hasBlueCard: false },
        
  // Fenerbahçe (UCL) 2025/26
  { id: 'fb-livakovic', name: 'Dominik Livakovic', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Croatian', age: 30, hasBlueCard: false },
  { id: 'fb-irfan-can-e', name: 'İrfan Can Eğribayat', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.GK, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'fb-tarik-cetin', name: 'Tarık Çetin', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'fb-engin-can-biterge', name: 'Engin Can Biterge', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 18, hasBlueCard: false },
  { id: 'fb-milan', name: 'Milan Škriniar', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Slovak', age: 30, hasBlueCard: false },
  { id: 'fb-oosterwolde', name: 'Jayden Oosterwolde', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Dutch', age: 24, hasBlueCard: false },
  { id: 'fb-yusuf-akcicek', name: 'Yusuf Akçiçek', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'fb-carlos', name: 'Diego Carlos', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 32, hasBlueCard: false },
  { id: 'fb-caglar', name: 'Çağlar Söyüncü', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 29, hasBlueCard: false },
  { id: 'fb-djiku', name: 'Alexander Djiku', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Ghanaian', age: 31, hasBlueCard: false },
  { id: 'fb-becao', name: 'Rodrigo Becão', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 29, hasBlueCard: false },
  { id: 'fb-yigit-efe-demir', name: 'Yiğit Efe Demir', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'fb-levent-mercan', name: 'Levent Mercan', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'fb-mert-muldur', name: 'Mert Müldür', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'fb-ognjen-mimovic', name: 'Ognjen Mimovic', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Serbian', age: 21, hasBlueCard: false },
  { id: 'fb-edson-alvarez', name: 'Edson Álvarez', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Mexican', age: 27, hasBlueCard: false },
  { id: 'fb-sofyan', name: 'Sofyan Amrabat', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Moroccan', age: 29, hasBlueCard: false },
  { id: 'fb-ismail-yuksek', name: 'İsmail Yüksek', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'fb-bartug-elmaz', name: 'Bartuğ Elmaz', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'fb-fred', name: 'Fred', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 32, hasBlueCard: false },
  { id: 'fb-abdou-aziz-fall', name: 'Abdou Aziz Fall', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Senegalese', age: 18, hasBlueCard: false },
  { id: 'fb-nelson-semedo', name: 'Nélson Semedo', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Portuguese', age: 31, hasBlueCard: false },
  { id: 'fb-archie-brown', name: 'Archie Brown', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'English', age: 23, hasBlueCard: false },
  { id: 'fb-szymanski', name: 'Sebastian Szymański', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Polish', age: 26, hasBlueCard: false },
  { id: 'fb-talisca', name: 'Talisca', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 31, hasBlueCard: false },
  { id: 'fb-mert-hakan', name: 'Mert Hakan Yandaş', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'fb-oguz-aydin', name: 'Oğuz Aydın', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'fb-dorgeles-nene', name: 'Dorgeles Nene', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Malian', age: 22, hasBlueCard: false },
  { id: 'fb-cengiz', name: 'Cengiz Ünder', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'fb-irfan-can-k', name: 'İrfan Can Kahveci', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'fb-emre-mor', name: 'Emre Mor', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 28, hasBlueCard: false },
  { id: 'fb-jhon-duran', name: 'Jhon Durán', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Colombian', age: 21, hasBlueCard: false },
  { id: 'fb-en-nesyri', name: 'Youssef En-Nesyri', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Moroccan', age: 28, hasBlueCard: false },
  { id: 'fb-cenk-tosun', name: 'Cenk Tosun', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 34, hasBlueCard: false },
  { id: 'fb-kerem-akturkoglu', name: 'Kerem Aktürkoğlu', teamId: 'fenerbahce', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 26, hasBlueCard: false },

  // Galatasaray (UCL) 2025/26
  { id: 'gs-gunay', name: 'Günay Güvenç', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.GK, nationality: 'Turkish', age: 34, hasBlueCard: false },
  { id: 'gs-batuhan-sen', name: 'Batuhan Şen', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 26, hasBlueCard: false },
  { id: 'gs-jankat-yilmaz', name: 'Jankat Yılmaz', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'gs-enes-emre-buyuk', name: 'Enes Emre Büyük', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'gs-wilfried-singo', name: 'Wilfried Singo', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Ivorian', age: 24, hasBlueCard: false },
  { id: 'gs-sanchez', name: 'Davinson Sánchez', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Colombian', age: 29, hasBlueCard: false },
  { id: 'gs-carlos-cuesta', name: 'Carlos Cuesta', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Colombian', age: 26, hasBlueCard: false },
  { id: 'gs-abdulkerim', name: 'Abdülkerim Bardakcı', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'gs-kaan-ayhan', name: 'Kaan Ayhan', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 30, hasBlueCard: false },
  { id: 'gs-metehan-baltaci', name: 'Metehan Baltacı', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'gs-arda-unyay', name: 'Arda Ünyay', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 18, hasBlueCard: false },
  { id: 'gs-ismail-jakobs', name: 'Ismail Jakobs', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Senegalese', age: 26, hasBlueCard: false },
  { id: 'gs-eren-elmali', name: 'Eren Elmalı', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'gs-kazimcan-karatas', name: 'Kazımcan Karataş', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'gs-roland-sallai', name: 'Roland Sallai', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Hungarian', age: 28, hasBlueCard: false },
  { id: 'gs-elias-jelert', name: 'Elias Jelert', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Danish', age: 22, hasBlueCard: false },
  { id: 'gs-torreira', name: 'Lucas Torreira', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Uruguayan', age: 29, hasBlueCard: false },
  { id: 'gs-lemina', name: 'Mario Lemina', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Gabonese', age: 31, hasBlueCard: false },
  { id: 'gs-efe-akman', name: 'Efe Akman', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'gs-gabriel-sara', name: 'Gabriel Sara', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 26, hasBlueCard: false },
  { id: 'gs-berkan-kutlu', name: 'Berkan Kutlu', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 27, hasBlueCard: false },
  { id: 'gs-eyup-aydin', name: 'Eyüp Aydın', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'gs-gokdeniz-gurpuz', name: 'Gökdeniz Gürpüz', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'gs-zaniolo', name: 'Nicolò Zaniolo', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Italian', age: 26, hasBlueCard: false },
  { id: 'gs-sirachan-nas', name: 'Siraçhan Nas', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 23, hasBlueCard: false },
  { id: 'gs-baris-alper', name: 'Barış Alper Yılmaz', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'gs-ahmed-kutucu', name: 'Ahmed Kutucu', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'gs-eren-aydin', name: 'Eren Aydın', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 22, hasBlueCard: false },
  { id: 'gs-leroy-sane', name: 'Leroy Sané', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'German', age: 29, hasBlueCard: false },
  { id: 'gs-yunus', name: 'Yunus Akgün', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'gs-yusuf-demir', name: 'Yusuf Demir', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Austrian', age: 22, hasBlueCard: false },
  { id: 'gs-victor-osimhen', name: 'Victor Osimhen', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Nigerian', age: 26, hasBlueCard: false },
  { id: 'gs-icardi', name: 'Mauro Icardi', teamId: 'galatasaray', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Argentinian', age: 32, hasBlueCard: false },

  // Beşiktaş (UEL) 2025/26
  { id: 'bjk-ersin', name: 'Ersin Destanoğlu', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'bjk-mert-gunok', name: 'Mert Günok', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.GK, nationality: 'Turkish', age: 36, hasBlueCard: false },
  { id: 'bjk-emre-bilgin', name: 'Emre Bilgin', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'bjk-emir-yasar', name: 'Emir Yaşar', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.GK, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'bjk-tiago-djalo', name: 'Tiago Djaló', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Portuguese', age: 25, hasBlueCard: false },
  { id: 'bjk-felix-uduokhai', name: 'Felix Uduokhai', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'German', age: 27, hasBlueCard: false },
  { id: 'bjk-emirhan-topcu', name: 'Emirhan Topçu', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'bjk-tayyip-talha-sanuc', name: 'Tayyip Talha Sanuç', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 25, hasBlueCard: false },
  { id: 'bjk-gabriel-paulista', name: 'Gabriel Paulista', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Brazilian', age: 34, hasBlueCard: false },
  { id: 'bjk-emrecan-uzunhan', name: 'Emrecan Uzunhan', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'bjk-necip', name: 'Necip Uysal', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 34, hasBlueCard: false },
  { id: 'bjk-david-jurasek', name: 'David Jurásek', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Czech', age: 25, hasBlueCard: false },
  { id: 'bjk-ridvan-yilmaz', name: 'Rıdvan Yılmaz', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'bjk-taylan-bulut', name: 'Taylan Bulut', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 19, hasBlueCard: false },
  { id: 'bjk-jonas-svensson', name: 'Jonas Svensson', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Norwegian', age: 32, hasBlueCard: false },
  { id: 'bjk-arda-berk-ozuarap', name: 'Arda Berk Özüarap', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 20, hasBlueCard: false },
  { id: 'bjk-wilfred-ndidi', name: 'Wilfred Ndidi', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Nigerian', age: 28, hasBlueCard: false },
  { id: 'bjk-moatasem-al-musrati', name: 'Moatasem Al-Musrati', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Libyan', age: 29, hasBlueCard: false },
  { id: 'bjk-demir-ege-tiknaz', name: 'Demir Ege Tıknaz', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 21, hasBlueCard: false },
  { id: 'bjk-amir-hadziahmetovic', name: 'Amir Hadziahmetovic', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Bosnian', age: 28, hasBlueCard: false },
  { id: 'bjk-kartal-yilmaz', name: 'Kartal Yılmaz', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'bjk-jean-onana', name: 'Jean Onana', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Cameroonian', age: 25, hasBlueCard: false },
  { id: 'bjk-orkun-kokcu', name: 'Orkun Kökçü', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 24, hasBlueCard: false },
  { id: 'bjk-salih-ucan', name: 'Salih Uçan', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.ASSOC, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 31, hasBlueCard: false },
  { id: 'bjk-ernest-muci', name: 'Ernest Muci', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Albanian', age: 24, hasBlueCard: false },
  { id: 'bjk-joao-mario', name: 'João Mário', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Portuguese', age: 32, hasBlueCard: false },
  { id: 'bjk-keny-arroyo', name: 'Keny Arroyo', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Ecuadorian', age: 19, hasBlueCard: false },
  { id: 'bjk-milot-rashica', name: 'Milot Rashica', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Kosovan', age: 29, hasBlueCard: false },
  { id: 'bjk-rafa-silva', name: 'Rafa Silva', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Portuguese', age: 32, hasBlueCard: false },
  { id: 'bjk-tammy-abraham', name: 'Tammy Abraham', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'English', age: 27, hasBlueCard: false },
  { id: 'bjk-el-bilal-toure', name: 'El Bilal Touré', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.NONE, position: POSITIONS.OUTFIELD, nationality: 'Malian', age: 23, hasBlueCard: false },
  { id: 'bjk-mustafa-hekimoglu', name: 'Mustafa Hekimoğlu', teamId: 'besiktas', trainingStatus: TRAINING_STATUS.CLUB, position: POSITIONS.OUTFIELD, nationality: 'Turkish', age: 18, hasBlueCard: false },
];

// Helper functions for easy data access
export const getPlayersByTeam = (teamId) => {
  return players.filter(player => player.teamId === teamId);
};

export const getTeamsByLeague = (leagueId) => {
  return teams.filter(team => team.leagueId === leagueId);
};

export const getPlayerById = (playerId) => {
  return players.find(player => player.id === playerId);
};

export const getTeamById = (teamId) => {
  return teams.find(team => team.id === teamId);
};
