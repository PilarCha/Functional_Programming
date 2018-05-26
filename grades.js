const grades = [54,78,98,79,89,90,77,88];

const total = grades.reduce(sum);

function sum(total,grade) {
  return total + grade;
}

const avg = total/grades.length

const letterGradeCount = grades.reduce(groupByGrade,{});

function groupByGrade(acc,grade) {

  const {a=0,b=0,c=0,d=0,f=0} = acc

  if(grade>=90){

    return {...acc,a:a+1};

  } else if (grade>=80) {

    return {...acc,b:b+1};

  } else if (grade>=70) {

    return {...acc,c:c+1};

  } else if (grade>=60) {

    return {...acc,d:d+1};

  } else {

    return {...acc,f:f+1};

  }
}

//array of reviews
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

//variables to show one iteration
review = 4.5
acc={}
count = 0
acc = {4.5:1}

//running a reduce to have a specific function do the work
const newObject = reviews.reduce(groupBy,{})


//acc = {} and review is every value in the array
function groupBy(acc,review){

//count is either the previous number saver or if its undefined its a 0
  const count = acc[review] || 0;

//...acc because if it is not there then it will overwrite the previous iteration, then we save it
  return {...acc,[review]: count+1}
}
console.log(newObject)

console.log(letterGradeCount)

console.log("total", total)

console.log("Avg", avg)
