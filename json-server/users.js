module.exports = {
  'parent1@example.com': {
    id: 'parent1',
    firstName: 'parent',
    lastName: 'one',
    name: 'parent one',
    email: 'parent1@example.com',
    initUserType: JSON.stringify({name: 'parent-guardian', title: 'Parent/Guardian'}),
    roles: ['basic-user'],
    children: {'child1': {
      id: 'pchild1',
      userId: 'child1',
      name: 'child1 one',
      firstName: 'child',
      lastName: 'one',
    }}
  },
  'parent2@example.com': {
    id: 'parent2',
    firstName: 'parent',
    lastName: 'two',
    name: 'parent two',
    email: 'parent2@example.com',
    initUserType: JSON.stringify({name: 'parent-guardian', title: 'Parent/Guardian'}),
    roles: ['basic-user'],
    children: {'child1': {
      id: 'pchild2',
      userId: 'child2',
      name: 'child two',
      firstName: 'child',
      lastName: 'two',
    }}
  },
  'mentor1@example.com': {
    id: 'mentor1',
    firstName: 'mentor',
    lastName: 'one',
    name: 'mentor one',
    email: 'mentor1@example.com',
    initUserType: JSON.stringify({name: 'parent-guardian', title: 'Parent/Guardian'}),
    roles: ['basic-user']
  },
  'champion1@example.com': {
    id: 'champion1',
    firstName: 'champion',
    lastName: 'one',
    name: 'champion one',
    email: 'champion1@example.com',
    initUserType: JSON.stringify({name: 'parent-guardian', title: 'Parent/Guardian'}),
    roles: ['basic-user']
  },
  'child1o13@example.com':{
    id: 'child1o13',
    firstName: 'child',
    lastName: '1o13',
    name: 'child 1o13',
    email: 'child1o13@example.com',
    initUserType: JSON.stringify({name: 'attendee-o13', title: 'Youth Over 13'}),
    roles: ['basic-user'],
  },
  'admin@coderdojo.org': {
    id: 'cdfadmin',
    firstName: 'CDF',
    lastName: 'Admin',
    name: 'CDF Admin',
    email: 'admin@coderdojo.org',
    initUserType: JSON.stringify({name: 'parent-guardian', title: 'Parent/Guardian'}),
    roles: ['cdf-admin'],
  },
};
