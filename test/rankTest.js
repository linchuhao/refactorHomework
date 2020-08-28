const rankTest = require('ava');
const rating = require('../src/rank')
rankTest(
  "rankTest0.Voyage length is 10 and zone is west-indies. History length is 4",
  (t) => {
    //given
    const voyage = {
      zone: "west-indies",
      length: 10,
    };
 
    //when
    const result = rating(voyage, history);
 
    //then
    t.is("B", result);
  }
);
 
rankTest(
  "rankTest1.Voyage length is 5 and zone is west-indies. History length is 4",
  (t) => {
    //given
    const voyage = {
      zone: "east-indies",
      length: 5,
    };
    const history = [
      {
        zone: "east-indies",
        profit: 5,
      },
      {
        zone: "west-indies",
        profit: 15,
      },
      {
        zone: "china",
        profit: -2,
      },
      {
        zone: "west-africa",
        profit: 7,
      },
    ];
 
    //when
    const result = rating(voyage, history);
 
    //then
    t.is("B", result);
  }
);
 
rankTest(
  "rankTest2.Voyage length is 5 and zone is east-indies. History length is 4",
  (t) => {
    //given
    const voyage = {
      zone: "east-indies",
      length: 5,
    };
    const history = [
      {
        zone: "east-indies",
        profit: 5,
      },
      {
        zone: "west-indies",
        profit: 15,
      },
      {
        zone: "china",
        profit: -2,
      },
      {
        zone: "west-africa",
        profit: 7,
      },
    ];
 
    //when
    const result = rating(voyage, history);
 
    //then
    t.is("B", result);
  }
);
 
rankTest(
  "rankTest3.Voyage length is 2 and zone is china. History length is 8",
  (t) => {
    //given
    const voyage = {
      zone: "china",
      length: 2,
    };
 
    //when
    const result = rating(voyage, historyL);
    //then
    t.is("A", result);
  }
);
 
rankTest(
  "rankTest4.Voyage length is 2 and zone is china. History length is 12",
  (t) => {
    //given
    const voyage = {
      zone: "china",
      length: 2,
    };
 
    //when
    const result = rating(voyage, historyXL);
    //then
    t.is("A", result);
  }
);
 
rankTest(
  "rankTest5.Voyage length is 20 and zone is china. History length is 12",
  (t) => {
    //given
    const voyage = {
      zone: "china",
      length: 20,
    };
 
    //when
    const result = rating(voyage, historyXL);
    //then
    t.is("B", result);
  }
);
 
rankTest(
  "rankTest6.Voyage length is 20 and zone is east-indies. History length is 12",
  (t) => {
    //given
    const voyage = {
      zone: "east-indies",
      length: 20,
    };
 
    //when
    const result = rating(voyage, historyXL);
    //then
    t.is("B", result);
  }
);

const history = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];
 
const historyL = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];
 
const historyXL = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];
