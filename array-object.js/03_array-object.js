let familyTree = {
    name: "Poptabhai",
    age: 76,
    child: [
      {
        id: 10001,
        name: "Rajubhai",
        age: 45,
        occupation: "Diamond",
        vehicle: [
          {
            name: "Hero",
            number: 3060,
          },
        ],
        son: [
          {
            name: "Mansi",
            age: 20,
          },
          {
            name: "Kano",
            age: 17,
          },
        ],
      },
      {
        id: 10002,
        name: "Mukeshbhai",
        age: 42,
        occupation: "Diamond",
        vehicle: [
          {
            name: "Ola",
            number: 3060,
          },
        ],
        son: [
          {
            name: "Jeel",
            age: 20,
          },
          {
            name: "Krisha",
            age: 17,
          },
        ],
      },
      {
       id: 10003,
       name: "Montubhai",
       age: 41,
       occupation: "Diamond",
       vehicle: [
         {
           name: "Activa",
           number: 2356,
         },
       ],
       son: [
         {
           name: "hari",
           age: 8,
         },
       ],
     },
    ],
  };
  let x = "age";
  console.log("=------->", familytree.child[0]);
  
  console.log(familytree.name);
  console.log(familytree.child[1].name);
  console.log(familytree.child[1].son[0].name);
  console.log(familytree.child[2].vehicle[0].name);
  console.log(familytree.child[0].vehicle[0].number);
  
  console.log(familytree.child[1].son[1].age);