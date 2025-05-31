const athletes = [
    'Usain Bolt',
    'Andre De Grasse ',
    'Christophe Lemaitre ',
    'Adam Gemili',
    'Churandy Martina',
    'LaShawn Merritt',
    'Alonso Edward',
    'Ramil Guliyev',
  ];

  const [gold, silver, bronze] = athletes;
console.log(gold, silver, bronze);

//2//

  const [, silverMedal, bronzeMedal] = athletes;
console.log(silverMedal, bronzeMedal);

//3//

const user = {
    firstName: 'Manuel',
    lastName: 'Bieh',
    job: 'JavaScript Developer',
    image: 'manuel.jpg',
  };

  const { firstName, lastName, job } = user;
console.log(firstName, lastName, job);

//4//

const chocolateCake = {
    ingredients: ["chocolate", "flour", "sugar", "eggs", "water"],
    isVegan: false,
    calories: 594,
    feeds: 8,
    tag: "child-friendly"
  };
const {  isVegan, calories, } = chocolateCake;
console.log( isVegan, calories, );



