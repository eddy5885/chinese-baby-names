// const { BabyName, Gender, PoetryType } = require('../lib/index.js');
import { BabyName, Gender, PoetryType } from '../src/index';


const names = BabyName.generate({
  source: [PoetryType.SONG_CI],
  surname: '王',
  count: 8,
  allowGeneral: false,
  singleNameWeight: 10,
  gender: Gender.GIRL,
});

console.log(names);
