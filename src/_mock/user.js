import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
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
  name: sample(['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller']),
  sname: sample(['John', 'Jane', 'Mike', 'Lisa', 'David', 'Emily', 'Chris', 'Sarah']),

  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  email: sample([
    'john.doe@example.com',
    'jane.smith@example.com',
    'mike.johnson@example.com',
    'lisa.williams@example.com',
    'david.brown@example.com',
    'emily.jones@example.com',
    'chris.garcia@example.com',
    'sarah.miller@example.com',
  ]),
  message: sample([
    'Hey, how are you doing?',
    "Let's catch up soon!",
    'Can you send me the report?',
    'Had a great time yesterday!',
    'Please review the attached document.',
    'Looking forward to our meeting.',
    "Don't forget the deadline is tomorrow.",
    'Thanks for your help!',
  ]),
  type: sample(['Intensive Driving Course', 'Mock Test', 'Occasional Driving Lesson']),
  services: sample(['Springfield', 'Rivertown', 'Brooksville', 'Greenfield']),
  servicesType: sample(['PDI', 'ADI']),
  // address2: sample([
  //   '123 Elm Street, Springfield, IL 62701',
  //   '456 Maple Avenue, Rivertown, TX 75001',
  //   '789 Oak Lane, Brooksville, FL 34601',
  //   '101 Pine Road, Greenfield, WI 53201',
  //   '202 Birch Drive, Mountainview, CO 80401',
  //   '303 Cedar Boulevard, Lakewood, OH 44101',
  //   '404 Walnut Court, Fairview, PA 15201',
  //   '505 Cherry Street, Sunnydale, CA 90210',
  //   '606 Aspen Way, Meadowbrook, OR 97001',
  //   '707 Willow Terrace, Crestwood, MI 48201',
  // ]),
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
