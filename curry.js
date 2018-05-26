//HigherOrder functions = Functions that take a function as a parameter/argument or return a function

const greeting = (greeting) => {
  // console.log(`${greeting}, ${name}`)
  return function(name) {
    return `${greeting}, ${name}`
  };
}

console.log(greeting("Jesus Be with you")("Shit"))


const names = ['Joe', 'Sam', 'Alejandro']

const allNames = names.map(greeting("Jesus Fucks you"))

console.log(allNames);

const reviews = [4,5,4.6,4.6,5,4,3,2,4,1];

const groupAllofThem = reviews.reduce(groupBy, {});

function groupBy(acc, review) {
  const count = acc[review] || 0;
  return {...acc, [review]: count+1}
}

console.log(groupAllofThem)

const farewell = (saying) => {
  return function(name) {
    return `${saying}, ${name}`
  }
}

const names = ['Joe', 'Sam', 'Alejandro']

const sayGoodBye = names.map(farewell("Get the fuck out of here"))

console.log(sayGoodBye)

//Excercise Currying

const motorcycles = [
  {name: 'KTM690Duke', price: 10000},
  {name:'Husky710', price:12000},
  {name:'Kawi1000', price:14000},
  {name:'Yamaha FZ09', price:9700}
]

const messages = {
  1:'You can afford that vehicle',
  2: 'A little bit more savings need to save',
  3: 'Good luck! With zero money'
}

const checkAvailability = (price) => {
  if(price>=13000){return 3}
  else if (price>=11000){return 2}
  else if (price<=11000) {return 1}
}

const combineEverything = (message) => {
  return function(motorcycle) {
    const msg = messages[checkAvailability(motorcycle.price)]
    return `The ${motorcycle.name} costs ${motorcycle.price} and ${msg}`


  }
}

const checkMe = motorcycles.map(combineEverything(messages))

console.log(checkMe)

const studentGrades = [
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const messages = {
  a:"Excellent Job",
  b:"Nice Job",
  c:"Well Done",
  d:"What Happened",
  f:"What the Fuck Happened"
}

const checkGrade = (grade) => {
  if(grade>=90){return 'a'}
  else if(grade>=80){return 'b'}
  else if(grade>=70){return 'c'}
  else if(grade>=60){return 'd'}
  else {return 'f'}
}

const grading = (saying) => {
  return function(student) {
    const grade = checkGrade(student.grade)
    const msgFeeback = saying[grade]
    return `${msgFeeback} ${student.name}, you got a(n) ${grade}`
  }
}

const gradeMe = studentGrades.map(grading(messages))
console.log(gradeMe)
console.log(messages['b'])
/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
];
*/
