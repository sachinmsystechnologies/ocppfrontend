import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(4)].map((_, index) => ({
  id: "EV-"+ faker.datatype.uuid(),
  heartbeat: `less than ${sample([10,20,30,40,50,60])} sec ago`,
  health: sample(['GOOD', 'BAD'])
}));

export default users;
