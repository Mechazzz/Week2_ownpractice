let practice = [ {
    name: "Opel",
    color: "white",
    speed: "mid",
    expensive: "no",
} , {
    name: "Volvo",
    color: "dark",
    speed:"mid",
    expensive: "no",
} , {
    name: "BMW",
    color: "red",
    speed: "high",
    expensive: "yes",
}
]

console.log(practice)
console.log(practice[2])


let myFacebook = {
    name: "Bakó István",
    age: 29,
    location: "Budapest",
    friends: ["Gipsz Jakab", "John Doe", "Példa Péter"],
    favouriteFilms: [
      {
        title: "Harry Potter",
        year: 2001,
        characters: ["Harry Potter", "Ronald Weasley", "Hedvig"],
      },
      {
        title: "Ananász Express",
        year: 2012,
        characters: ["Seth Rogen", "Péter"],
      },
      {
        title: "Üvegtigris",
        year: 2004,
        characters: ["Józsi", "Béla"],
      },
    ],
  };

  console.log(myFacebook.favouriteFilms[2].characters[1])
  console.log(myFacebook.favouriteFilms[0].title)


  let myObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Ágota Bokor"],
  };

  console.log(myObj.key7[1])
  console.log(myObj.key1)

  let myArr = [
    ["Alma", "Körte", "Szilva"],
    ["Dreher", "Kőbányai", "Kanizsai sör"],
    ["Mizse", "Szentkirályi", "Tesco gazd"],
  ];

  console.log(myArr[1])
  console.log(myArr[2])
  console.log(myArr[1][2])
  console.log(myArr)

// Hazi : 

  let object = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
  console.log(object[3])

  myNewObject = {
    key1: "one",
    key2:"two",
    key3: ["Drink", "Food", "Car", "House", "Cat"],
    key4: "four",
    key5: "five",
    key6: "six",
    key7: "seven",
    key8: "eight",
    key9: "nine",
    key10: [ {
        type: "Not the best",
        good: "Not quite",
        cheap: "Yes, very cheap" ,
    } ,
    {
        type:"Amazing",
        good: [["Yes, of course"], ["We can say so", "All right", "The Best!"], ["You will not believe !"]],
        cheap: "Unfortunately not",
    }
    ]
  }

  console.log(myNewObject.key2)
  console.log(myNewObject.key3[2])
  console.log(myNewObject.key10[1].cheap)
  console.log(myNewObject.key10[1].good[2])
  console.log(myNewObject.key10[1].good[1][2])
  