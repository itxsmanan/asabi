import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const customers = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: sample([
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/78.jpg',
    'https://randomuser.me/api/portraits/women/10.jpg',
    'https://randomuser.me/api/portraits/men/65.jpg',
    'https://randomuser.me/api/portraits/women/24.jpg',
    'https://randomuser.me/api/portraits/men/11.jpg',
    'https://randomuser.me/api/portraits/women/58.jpg',
  ]),
  name: sample(['John', 'Jane', 'Mike', 'Lisa', 'David', 'Emily', 'Chris', 'Sarah']),
  sname: sample(['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller']),
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
    '123-456-7890',
    '234-567-8901',
    '345-678-9012',
    '456-789-0123',
    '567-890-1234',
    '678-901-2345',
    '789-012-3456',
    '890-123-4567',
  ]),
}));
