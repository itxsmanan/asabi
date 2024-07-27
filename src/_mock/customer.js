import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const customers = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  sname: sample([
    'Alex Johnson',
    'Jamie Lee',
    'Morgan Smith',
    'Taylor Davis',
    'Jordan Brown',
    'Riley Adams',
    'Casey Wilson',
    'Quinn Taylor',
    'Dakota Jones',
    'Avery White',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  email: sample([
    'john.doe123@example.com',
    'jane.smith456@example.org',
    'alex.brown789@example.net',
    'michael.jones001@example.co',
    'emily.davis234@example.edu',
    'sarah.miller567@example.biz',
    'david.lee890@example.info',
    'olivia.rodgers345@example.tv',
    'ryan.walker678@example.museum',
    'lily.thomas901@example.asia',
  ]),

  number: sample([
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
    '0000000000',
  ]),
}));
