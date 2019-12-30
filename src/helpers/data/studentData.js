const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/6/68/BB8-Fathead.png/revision/latest?cb=20161108050455',
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
    imgUrl: 'https://img.etimg.com/thumb/msid-59950997,width-643,imgsize-37891,resizemode-4/turns-out-princess-leia-has-a-phd-and-she-got-it-at-19.jpg',
  },
  {
    id: 'student3',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-show-1567178968.jpg?crop=0.486xw:0.973xh;0.512xw,0.00340xh&resize=480:*',
  },
  {
    id: 'student4',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20170927034529',
  },
  {
    id: 'student5',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
    imgUrl: 'https://pbs.twimg.com/profile_images/481312316449779712/dInYOkUU_400x400.jpeg',
  },
  {
    id: 'student6',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/tfa-quotes-maz-2_1e532bb4.jpeg?region=196%2C0%2C955%2C718',
  },
  {
    id: 'student7',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
    imgUrl: 'https://pmcvariety.files.wordpress.com/2018/05/unnamed10.jpg?w=700&h=393&crop=1',
  },
  {
    id: 'student8',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/last-jedi-kylo-ren-quotes-3_a220a19f.jpeg?region=262%2C0%2C960%2C720',
  },
  {
    id: 'student9',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ydvGsDg2L._SX425_.jpg',
  },
  {
    id: 'student10',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/0/01/Hansoloprofile.jpg/revision/latest?cb=20100129155042',
  },
  {
    id: 'student11',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180430174809',
  },
  {
    id: 'student12',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
    imgUrl: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg?crop=0.501xw:1.00xh;0.301xw,0&resize=480:*',
  },
  {
    id: 'student13',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20140209162228',
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
    imgUrl: 'https://cdn.wccftech.com/wp-content/uploads/2019/01/WCCFstarwarsbattlefront2dooku.jpg',
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png/revision/latest?cb=20170907053204',
  },
  {
    id: 'student16',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/2/2b/Rey_TROS_Fathead.png/revision/latest?cb=20191007072042',
  },
  {
    id: 'student17',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675&width=960',
  },
  {
    id: 'student18',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
    imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/qira-main_3bcd64ea.jpeg?region=0%2C0%2C1044%2C588&width=960',
  },
  {
    id: 'student19',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/1/14/Old_nien_nunb_-_profile.png/revision/latest?cb=20160813010804',
  },
  {
    id: 'student20',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61srwGulapL._AC_SX522_.jpg',
  },
  {
    id: 'student21',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
    imgUrl: 'https://vignette.wikia.nocookie.net/starwars/images/0/02/Jar_Jar_SWSB.png/revision/latest?cb=20160910034613',
  },
  {
    id: 'student22',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
  },
];


const livingStudents = () => students.filter((student) => !student.isDead);
console.log(livingStudents);

const dearlyBeloved = () => students.filter((student) => student.isDead);

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
