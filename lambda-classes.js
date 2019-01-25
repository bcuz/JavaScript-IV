// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

let kurt = new Person({
  name: 'Kurt',
  age: 47,
  location: 'Iowa',
  gender: 'male'
})
console.log(kurt.location);

let marshall = new Person({
  name: 'Marshall',
  age: 45,
  location: 'New Orleans',
  gender: 'male'
})
marshall.speak();

class Instructor extends Person {
  constructor(attrs) {
    super(attrs)
    this.specialty = attrs.specialty
    this.favLanguage = attrs.favLanguage
    this.catchPhrase = attrs.catchPhrase
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
  adjustGrade(student) {
    // add or subtract random num from 1 to 10
    if (Math.random() < .5) {
      student.grade += Math.floor(Math.random() * 10) + 1
    } else {
      student.grade -= Math.floor(Math.random() * 10) + 1
    }
  }

}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

fred.demo('driving with feet');

let cam = new Instructor({
  name: 'Cam',
  location: 'Utah',
  age: 31,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `shazam`
})

console.log(cam.catchPhrase);

class Student extends Person {
  constructor(attrs) {
    super(attrs)
    this.previousBackground = attrs.previousBackground
    this.className = attrs.className
    this.favSubjects = attrs.favSubjects
    this.grade = attrs.grade
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject))
    
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
    
  }
}

let me = new Student({
  name: 'Adam',
  location: 'Earth',
  age: 70,
  gender: 'male',
  previousBackground: 'tech support',
  className: 'webpt4',
  favSubjects: ['js', 'git'],
  grade: 77
})

let joe = new Student({
  name: 'Joe',
  location: 'Ohio',
  age: 30,
  gender: 'male',
  previousBackground: 'sales',
  className: 'webpt2',
  favSubjects: ['html', 'css'],
  grade: 70
})

me.speak();
me.listsSubjects()
me.PRAssignment('JavaScript-IV')
me.sprintChallenge('javascript')

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs)
    this.gradClassName = attrs.gradClassName
    this.favInstructor = attrs.favInstructor
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

let bob = new ProjectManager({
  name: 'Bob',
  location: 'Massachusetts',
  age: 32,
  gender: 'male',
  gradClassName: 'CS1',
  favInstructor: "Cam"
})

bob.debugsCode(joe, 'Node')

let sally = new ProjectManager({
  name: 'Sally',
  location: 'Texas',
  age: 25,
  gender: 'female',
  gradClassName: 'webpt3',
  favInstructor: "Dan"
})

sally.standUp("webpt4_sally")
sally.demo("python")
sally.adjustGrade(joe)
console.log(joe.grade);
