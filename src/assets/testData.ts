export const tableHeaders = [
  { field: 'agencyId', header: 'ID' },
  { field: 'agencyName', header: 'Name' },
  { field: 'city', header: 'City' },
  { field: 'state', header: 'State' },
  { field: 'address', header: 'Address' },
  { field: 'zipCode', header: 'ZIP' },
  { field: 'totalAgents', header: 'Total Agents' }
];

export const tabContent = [
  {
    leftIcon: 'fa fa-user',
    header: 'Godfather I',
    content: `The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His
  beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T
  hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the
  head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever
  anything stands against the good of the family.`
  },
  {
    leftIcon: 'fa fa-book',
    header: 'Godfather II',
    content: ` Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the
    young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark
    side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the
    local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing
    brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's
    business. With Fanucci gone, Vito's communal stature grows..`
  },
  {
    leftIcon: 'fa fa-edit',
    header: 'Godfather III',
    content: ` After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for
    this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin
    Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would
    one day be completely legitimate..`
  }
];

export const mockData = [
  {
    agencyName: 'Sample Agency I',
    agencyId: 200,
    city: 'Marietta',
    state: 'GA',
    address: 'Kennesaw Ave NW',
    zipCode: '30062',
    totalAgents: 5
    // agents: [
    //   {
    //     correspondingAgency: 'Sample Agency I',
    //     agentId: 201,
    //     photo: '/avatar.png',
    //     firstName: 'Conner',
    //     lastName: 'Mccormick',
    //     members: 2300,
    //     startDate: '09/12/2019',
    //     endDate: '09/23/2020',
    //     reps: [
    //       {
    //         id: '201-011',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Andrew',
    //         lastName: 'Kelly',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       },
    //       {
    //         id: '202-012',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Mike',
    //         lastName: 'Patel',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 575,
    //         Group: 575,
    //         Under65: 575,
    //         Over65: 575
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 475,
    //         Under65: 375,
    //         Over65: 275
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 202,
    //     correspondingAgency: 'Sample Agency I',
    //     photo: '/avatar.png',
    //     firstName: 'Bobby',
    //     lastName: 'Gardner',
    //     members: 2100,
    //     startDate: '08/02/2019',
    //     endDate: '08/02/2020',
    //     reps: [
    //       {
    //         id: '202-022',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Kelly',
    //         lastName: 'Ferguson',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       },
    //       {
    //         id: '202-023',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Lizzy',
    //         lastName: 'Cook',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 525,
    //         Group: 525,
    //         Under65: 525,
    //         Over65: 525
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 525,
    //         Group: 425,
    //         Under65: 325,
    //         Over65: 225
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 203,
    //     correspondingAgency: 'Sample Agency I',
    //     photo: '/avatar.png',
    //     firstName: 'Ally',
    //     lastName: 'Farmen',
    //     members: 2000,
    //     startDate: '07/12/2019',
    //     endDate: '07/12/2020',
    //     reps: [
    //       {
    //         id: '203-033',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Ash',
    //         lastName: 'Ketchem',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       },
    //       {
    //         id: '203-034',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Nathan',
    //         lastName: 'Tarongoy',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 204,
    //     correspondingAgency: 'Sample Agency I',
    //     photo: '/avatar.png',
    //     firstName: 'Jessica',
    //     lastName: 'Stevens',
    //     members: 2212,
    //     startDate: '03/08/2019',
    //     endDate: '03/08/2020',
    //     reps: [
    //       {
    //         id: '204-044',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Will',
    //         lastName: 'Frady',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       },
    //       {
    //         id: '204-045',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Diana',
    //         lastName: 'Jachman',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 553,
    //         Group: 553,
    //         Under65: 553,
    //         Over65: 553
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 553,
    //         Group: 453,
    //         Under65: 353,
    //         Over65: 253
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 205,
    //     correspondingAgency: 'Sample Agency I',
    //     photo: '/avatar.png',
    //     firstName: 'Andy',
    //     lastName: 'Pike',
    //     members: 2400,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [
    //       {
    //         id: '205-055',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Marry',
    //         lastName: 'Dupont',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       },
    //       {
    //         id: '205-056',
    //         correspondingAgency: 'Sample Agency I',
    //         firstName: 'Prasad',
    //         lastName: 'Kuri',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 600,
    //         Group: 600,
    //         Under65: 600,
    //         Over65: 600
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency II',
    agencyId: 300,
    city: 'Alpharetta',
    state: 'GA',
    address: 'Old Milton Pkwy',
    zipCode: '30022',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 301,
    //     correspondingAgency: 'Sample Agency II',
    //     photo: '/avatar.png',
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     members: 2300,
    //     startDate: '09/12/2019',
    //     endDate: '09/23/2020',
    //     reps: [
    //       {
    //         id: '301-033',
    //         correspondingAgency: 'Sample Agency II',
    //         firstName: 'Tanya',
    //         lastName: 'Harding',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 575,
    //         Group: 575,
    //         Under65: 575,
    //         Over65: 575
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 475,
    //         Under65: 375,
    //         Over65: 275
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 302,
    //     correspondingAgency: 'Sample Agency II',
    //     photo: '/avatar.png',
    //     firstName: 'Bobby',
    //     lastName: 'Gardner',
    //     members: 2100,
    //     startDate: '08/02/2019',
    //     endDate: '08/02/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 525,
    //         Group: 525,
    //         Under65: 525,
    //         Over65: 525
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 525,
    //         Group: 425,
    //         Under65: 325,
    //         Over65: 225
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 303,
    //     correspondingAgency: 'Sample Agency II',
    //     photo: '/avatar.png',
    //     firstName: 'Ally',
    //     lastName: 'Farmen',
    //     members: 2000,
    //     startDate: '07/12/2019',
    //     endDate: '07/12/2020',
    //     reps: [
    //       {
    //         id: '303-031',
    //         correspondingAgency: 'Sample Agency II',
    //         firstName: 'Katelyn',
    //         lastName: 'Bower',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 304,
    //     correspondingAgency: 'Sample Agency II',
    //     photo: '/avatar.png',
    //     firstName: 'Jessica',
    //     lastName: 'Stevens',
    //     members: 2212,
    //     startDate: '03/08/2019',
    //     endDate: '03/08/2020',
    //     reps: [
    //       {
    //         id: '304-034',
    //         correspondingAgency: 'Sample Agency II',
    //         firstName: 'Tony',
    //         lastName: 'Hawk',
    //         startDate: '09/12/2019',
    //         endDate: '09/22/2020'
    //       }
    //     ],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 553,
    //         Group: 553,
    //         Under65: 553,
    //         Over65: 553
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 553,
    //         Group: 453,
    //         Under65: 353,
    //         Over65: 253
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 305,
    //     correspondingAgency: 'Sample Agency II',
    //     photo: '/avatar.png',
    //     firstName: 'Andy',
    //     lastName: 'Pike',
    //     members: 2400,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 600,
    //         Group: 600,
    //         Under65: 600,
    //         Over65: 600
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency III',
    agencyId: 400,
    city: 'Atlanta',
    state: 'GA',
    address: '521 East Cobb Pkw',
    zipCode: '30305',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 401,
    //     correspondingAgency: 'Sample Agency III',
    //     photo: '/avatar.png',
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     members: 2300,
    //     startDate: '09/12/2019',
    //     endDate: '09/23/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 575,
    //         Group: 575,
    //         Under65: 575,
    //         Over65: 575
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 475,
    //         Under65: 375,
    //         Over65: 275
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 402,
    //     correspondingAgency: 'Sample Agency III',
    //     photo: '/avatar.png',
    //     firstName: 'Bobby',
    //     lastName: 'Gardner',
    //     members: 2100,
    //     startDate: '08/02/2019',
    //     endDate: '08/02/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 525,
    //         Group: 525,
    //         Under65: 525,
    //         Over65: 525
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 525,
    //         Group: 425,
    //         Under65: 325,
    //         Over65: 225
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 403,
    //     correspondingAgency: 'Sample Agency III',
    //     photo: '/avatar.png',
    //     firstName: 'Ally',
    //     lastName: 'Farmen',
    //     members: 2000,
    //     startDate: '07/12/2019',
    //     endDate: '07/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 404,
    //     correspondingAgency: 'Sample Agency III',
    //     photo: '/avatar.png',
    //     firstName: 'Jessica',
    //     lastName: 'Stevens',
    //     members: 2212,
    //     startDate: '03/08/2019',
    //     endDate: '03/08/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 553,
    //         Group: 553,
    //         Under65: 553,
    //         Over65: 553
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 553,
    //         Group: 453,
    //         Under65: 353,
    //         Over65: 253
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 405,
    //     correspondingAgency: 'Sample Agency III',
    //     photo: '/avatar.png',
    //     firstName: 'Andy',
    //     lastName: 'Pike',
    //     members: 2400,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 600,
    //         Group: 600,
    //         Under65: 600,
    //         Over65: 600
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency IV',
    agencyId: 500,
    city: 'Roswell',
    state: 'GA',
    address: '122 NE Roswell St',
    zipCode: '30009',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 501,
    //     correspondingAgency: 'Sample Agency IV',
    //     photo: '/avatar.png',
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     members: 2300,
    //     startDate: '09/21/2019',
    //     endDate: '09/21/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 575,
    //         Group: 575,
    //         Under65: 575,
    //         Over65: 575
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 475,
    //         Under65: 375,
    //         Over65: 275
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 502,
    //     correspondingAgency: 'Sample Agency IV',
    //     photo: '/avatar.png',
    //     firstName: 'Bobby',
    //     lastName: 'Gardner',
    //     members: 2100,
    //     startDate: '08/02/2019',
    //     endDate: '08/02/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 525,
    //         Group: 525,
    //         Under65: 525,
    //         Over65: 525
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 525,
    //         Group: 425,
    //         Under65: 325,
    //         Over65: 225
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 503,
    //     correspondingAgency: 'Sample Agency IV',
    //     photo: '/avatar.png',
    //     firstName: 'Ally',
    //     lastName: 'Farmen',
    //     members: 2000,
    //     startDate: '07/12/2019',
    //     endDate: '07/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 504,
    //     correspondingAgency: 'Sample Agency IV',
    //     photo: '/avatar.png',
    //     firstName: 'Jessica',
    //     lastName: 'Stevens',
    //     members: 2212,
    //     startDate: '03/08/2019',
    //     endDate: '03/08/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 553,
    //         Group: 553,
    //         Under65: 553,
    //         Over65: 553
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 553,
    //         Group: 453,
    //         Under65: 353,
    //         Over65: 253
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 505,
    //     correspondingAgency: 'Sample Agency IV',
    //     photo: '/avatar.png',
    //     firstName: 'Andy',
    //     lastName: 'Pike',
    //     members: 2400,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 600,
    //         Group: 600,
    //         Under65: 600,
    //         Over65: 600
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency V',
    agencyId: 600,
    city: 'Alpharetta',
    state: 'GA',
    address: '123 NE Rd',
    zipCode: '30005',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 601,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Billy',
    //     lastName: 'Crank',
    //     members: 1300,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 325,
    //         Group: 325,
    //         Under65: 325,
    //         Over65: 325
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 325,
    //         Group: 225,
    //         Under65: 125,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 602,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Ashley',
    //     lastName: 'Babykin',
    //     members: 1100,
    //     startDate: '03/12/2019',
    //     endDate: '03/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 275,
    //         Group: 275,
    //         Under65: 275,
    //         Over65: 275
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 275,
    //         Group: 175,
    //         Under65: 75,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 603,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Suzy',
    //     lastName: 'Lu',
    //     members: 2000,
    //     startDate: '01/01/2019',
    //     endDate: '01/01/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 604,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Mary',
    //     lastName: 'White',
    //     members: 1212,
    //     startDate: '11/11/2019',
    //     endDate: '11/11/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 303,
    //         Group: 303,
    //         Under65: 303,
    //         Over65: 303
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 303,
    //         Group: 203,
    //         Under65: 103,
    //         Over65: 30
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 605,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Chris',
    //     lastName: 'Stevens',
    //     members: 2450,
    //     startDate: '03/22/2019',
    //     endDate: '03/23/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 612,
    //         Group: 612,
    //         Under65: 612,
    //         Over65: 612
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 612,
    //         Group: 512,
    //         Under65: 412,
    //         Over65: 312
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency VI',
    agencyId: 700,
    city: 'Alpharetta',
    state: 'GA',
    address: '123 NE Rd',
    zipCode: '30005',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 701,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Billy',
    //     lastName: 'Crank',
    //     members: 1300,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 325,
    //         Group: 325,
    //         Under65: 325,
    //         Over65: 325
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 325,
    //         Group: 225,
    //         Under65: 125,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 702,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Ashley',
    //     lastName: 'Babykin',
    //     members: 1100,
    //     startDate: '03/12/2019',
    //     endDate: '03/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 275,
    //         Group: 275,
    //         Under65: 275,
    //         Over65: 275
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 275,
    //         Group: 175,
    //         Under65: 75,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 703,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Suzy',
    //     lastName: 'Lu',
    //     members: 2000,
    //     startDate: '01/01/2019',
    //     endDate: '01/01/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 704,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Mary',
    //     lastName: 'White',
    //     members: 1212,
    //     startDate: '11/11/2019',
    //     endDate: '11/11/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 303,
    //         Group: 303,
    //         Under65: 303,
    //         Over65: 303
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 303,
    //         Group: 203,
    //         Under65: 103,
    //         Over65: 30
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 705,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Chris',
    //     lastName: 'Stevens',
    //     members: 2450,
    //     startDate: '03/22/2019',
    //     endDate: '03/23/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 612,
    //         Group: 612,
    //         Under65: 612,
    //         Over65: 612
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 612,
    //         Group: 512,
    //         Under65: 412,
    //         Over65: 312
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency VII',
    agencyId: 800,
    city: 'Alpharetta',
    state: 'GA',
    address: '123 NE Rd',
    zipCode: '30005',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 801,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Billy',
    //     lastName: 'Crank',
    //     members: 1300,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 325,
    //         Group: 325,
    //         Under65: 325,
    //         Over65: 325
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 325,
    //         Group: 225,
    //         Under65: 125,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 802,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Ashley',
    //     lastName: 'Babykin',
    //     members: 1100,
    //     startDate: '03/12/2019',
    //     endDate: '03/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 275,
    //         Group: 275,
    //         Under65: 275,
    //         Over65: 275
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 275,
    //         Group: 175,
    //         Under65: 75,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 803,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Suzy',
    //     lastName: 'Lu',
    //     members: 2000,
    //     startDate: '01/01/2019',
    //     endDate: '01/01/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 804,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Mary',
    //     lastName: 'White',
    //     members: 1212,
    //     startDate: '11/11/2019',
    //     endDate: '11/11/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 303,
    //         Group: 303,
    //         Under65: 303,
    //         Over65: 303
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 303,
    //         Group: 203,
    //         Under65: 103,
    //         Over65: 30
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 805,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Chris',
    //     lastName: 'Stevens',
    //     members: 2450,
    //     startDate: '03/22/2019',
    //     endDate: '03/23/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 612,
    //         Group: 612,
    //         Under65: 612,
    //         Over65: 612
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 612,
    //         Group: 512,
    //         Under65: 412,
    //         Over65: 312
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency VIII',
    agencyId: 900,
    city: 'Alpharetta',
    state: 'GA',
    address: '123 NE Rd',
    zipCode: '30005',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 701,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Billy',
    //     lastName: 'Crank',
    //     members: 1300,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 325,
    //         Group: 325,
    //         Under65: 325,
    //         Over65: 325
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 325,
    //         Group: 225,
    //         Under65: 125,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 902,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Ashley',
    //     lastName: 'Babykin',
    //     members: 1100,
    //     startDate: '03/12/2019',
    //     endDate: '03/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 275,
    //         Group: 275,
    //         Under65: 275,
    //         Over65: 275
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 275,
    //         Group: 175,
    //         Under65: 75,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 903,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Suzy',
    //     lastName: 'Lu',
    //     members: 2000,
    //     startDate: '01/01/2019',
    //     endDate: '01/01/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 904,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Mary',
    //     lastName: 'White',
    //     members: 1212,
    //     startDate: '11/11/2019',
    //     endDate: '11/11/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 303,
    //         Group: 303,
    //         Under65: 303,
    //         Over65: 303
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 303,
    //         Group: 203,
    //         Under65: 103,
    //         Over65: 30
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 905,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Chris',
    //     lastName: 'Stevens',
    //     members: 2450,
    //     startDate: '03/22/2019',
    //     endDate: '03/23/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 612,
    //         Group: 612,
    //         Under65: 612,
    //         Over65: 612
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 612,
    //         Group: 512,
    //         Under65: 412,
    //         Over65: 312
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency IX',
    agencyId: 1000,
    city: 'Alpharetta',
    state: 'GA',
    address: '123 NE Rd',
    zipCode: '30005',
    totalAgents: 5
    // agents: [
    //   {
    //     agentId: 701,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Billy',
    //     lastName: 'Crank',
    //     members: 1300,
    //     startDate: '02/15/2019',
    //     endDate: '02/15/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 325,
    //         Group: 325,
    //         Under65: 325,
    //         Over65: 325
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 325,
    //         Group: 225,
    //         Under65: 125,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 1000,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Ashley',
    //     lastName: 'Babykin',
    //     members: 1100,
    //     startDate: '03/12/2019',
    //     endDate: '03/12/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 275,
    //         Group: 275,
    //         Under65: 275,
    //         Over65: 275
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 275,
    //         Group: 175,
    //         Under65: 75,
    //         Over65: 25
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 1000,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Suzy',
    //     lastName: 'Lu',
    //     members: 2000,
    //     startDate: '01/01/2019',
    //     endDate: '01/01/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 500,
    //         Group: 500,
    //         Under65: 500,
    //         Over65: 500
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 500,
    //         Group: 400,
    //         Under65: 300,
    //         Over65: 200
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 1000,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Mary',
    //     lastName: 'White',
    //     members: 1212,
    //     startDate: '11/11/2019',
    //     endDate: '11/11/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 303,
    //         Group: 303,
    //         Under65: 303,
    //         Over65: 303
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 303,
    //         Group: 203,
    //         Under65: 103,
    //         Over65: 30
    //       }
    //     ]
    //   },
    //   {
    //     agentId: 1000,
    //     correspondingAgency: 'Sample Agency V',
    //     photo: '/avatar.png',
    //     firstName: 'Chris',
    //     lastName: 'Stevens',
    //     members: 2450,
    //     startDate: '03/22/2019',
    //     endDate: '03/23/2020',
    //     reps: [],
    //     membersList: [
    //       {
    //         name: 'Group A',
    //         Ancillary: 612,
    //         Group: 612,
    //         Under65: 612,
    //         Over65: 612
    //       },
    //       {
    //         name: 'Group B',
    //         Ancillary: 612,
    //         Group: 512,
    //         Under65: 412,
    //         Over65: 312
    //       }
    //     ]
    //   }
    // ]
  },
  {
    agencyName: 'Sample Agency X',
    agencyId: 12000,
    city: 'Fort Worth',
    state: 'TX',
    address: '123 NE Rd',
    zipCode: '76101',
    totalAgents: 5
  },
  {
    agencyName: 'Sample Agency XI',
    agencyId: 12000,
    city: 'New York City',
    state: 'NY',
    address: '123 NE Rd',
    zipCode: '76101',
    totalAgents: 5
  }
];

export interface State {
  name: string;
  abbreviation: string;
}

export const States = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];

export const states: State[] = [
  {
    name: 'Alabama',
    abbreviation: 'AL'
  },
  {
    name: 'Alaska',
    abbreviation: 'AK'
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS'
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ'
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR'
  },
  {
    name: 'California',
    abbreviation: 'CA'
  },
  {
    name: 'Colorado',
    abbreviation: 'CO'
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT'
  },
  {
    name: 'Delaware',
    abbreviation: 'DE'
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC'
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM'
  },
  {
    name: 'Florida',
    abbreviation: 'FL'
  },
  {
    name: 'Georgia',
    abbreviation: 'GA'
  },
  {
    name: 'Guam',
    abbreviation: 'GU'
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI'
  },
  {
    name: 'Idaho',
    abbreviation: 'ID'
  },
  {
    name: 'Illinois',
    abbreviation: 'IL'
  },
  {
    name: 'Indiana',
    abbreviation: 'IN'
  },
  {
    name: 'Iowa',
    abbreviation: 'IA'
  },
  {
    name: 'Kansas',
    abbreviation: 'KS'
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY'
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA'
  },
  {
    name: 'Maine',
    abbreviation: 'ME'
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH'
  },
  {
    name: 'Maryland',
    abbreviation: 'MD'
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA'
  },
  {
    name: 'Michigan',
    abbreviation: 'MI'
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN'
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS'
  },
  {
    name: 'Missouri',
    abbreviation: 'MO'
  },
  {
    name: 'Montana',
    abbreviation: 'MT'
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE'
  },
  {
    name: 'Nevada',
    abbreviation: 'NV'
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH'
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ'
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM'
  },
  {
    name: 'New York',
    abbreviation: 'NY'
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC'
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND'
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP'
  },
  {
    name: 'Ohio',
    abbreviation: 'OH'
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK'
  },
  {
    name: 'Oregon',
    abbreviation: 'OR'
  },
  {
    name: 'Palau',
    abbreviation: 'PW'
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA'
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR'
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI'
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC'
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD'
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN'
  },
  {
    name: 'Texas',
    abbreviation: 'TX'
  },
  {
    name: 'Utah',
    abbreviation: 'UT'
  },
  {
    name: 'Vermont',
    abbreviation: 'VT'
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI'
  },
  {
    name: 'Virginia',
    abbreviation: 'VA'
  },
  {
    name: 'Washington',
    abbreviation: 'WA'
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV'
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI'
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY'
  }
];

export const tableHeaders2 = [
  {
    id: 0,
    name: 'Agency Id',
    prop: 'agencyId'
  },
  {
    id: 1,
    name: 'Agency Name',
    prop: 'agencyName'
  },
  {
    id: 2,
    name: 'City',
    prop: 'city'
  },
  {
    id: 3,
    name: 'State',
    prop: 'state'
  },
  {
    id: 4,
    name: 'Address',
    prop: 'address'
  },
  {
    id: 5,
    name: 'ZipCode',
    prop: 'zipCode'
  },
  {
    id: 6,
    name: 'Agents',
    prop: 'totalAgents'
  }
  // {
  //   id: 7,
  //   name: '',
  //   prop: ''
  // }
];
