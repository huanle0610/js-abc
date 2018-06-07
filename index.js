let users = [
  {
    id: 1,
    name: '1abc',
    age: 1
  },
  {
    id: 2,
    name: '2abc',
    age: 2
  },
  {
    id: 3,
    name: '3abc',
    age: 3
  },
  {
    id: 4,
    name: '4abc',
    age: 4
  },
  {
    id: 5,
    name: '5abc',
    age: 5
  },
  {
    id: 6,
    name: '6abc',
    age: 6
  },
  {
    id: 7,
    name: '7abc',
    age: 7
  },
  {
    id: 8,
    name: '8abc',
    age: 8
  },
  {
    id: 9,
    name: '9abc',
    age: 9
  },
  {
    id: 10,
    name: '10abc',
    age: 10
  },
  {
    id: 11,
    name: '11abc',
    age: 10
  },
];

const wantUserName = '4abc';
const wantUserId = 5;


const findUserByName = (name) => {
  return (v) => v.name === name
}

const findUserById = (id) => {
  return (v) => v.id === id
}

// find user by name
console.log(users.find(v => v.name === wantUserName))
console.log(users.find(findUserByName(wantUserName)))


// find user by id
console.log(users.find(v => v.id === wantUserId))
console.log(users.find(findUserById(wantUserId)))


const findUserByProp = (prop, val) => {
  return (v) => v[prop] === val
}

// find user by prop
console.log(users.find(findUserByProp('id', wantUserId)))
console.log(users.find(findUserByProp('name', wantUserName)))


// is there a user named 4abc
console.log(users.some(v => v.name === '4abc'))
// is there a user named wabc
console.log(users.some(v => v.name === 'wabc'))

// find users age > 7
console.log(users.filter(v => v.age > 7))

// get all user age sums
const reduceSumAge = (acc, cur) => {
  return acc + cur.age
}
console.log(users.reduce(reduceSumAge, 0))

// get user name array whose age equal 10
const reduceName = (acc, cur) => {
  if(cur.age === 10) {
    acc.push(cur.name)
  }
  return acc
}
console.log(users.reduce(reduceName, []))


// get user array whose age equal 10
const reduceUser = (acc, cur) => {
  if(cur.age === 10) {
    acc.push(cur)
  }
  return acc
}
console.log(users.reduce(reduceUser, []))

// group user by age
const reduceGroupByAge = (acc, cur) => {
  if( acc[cur.age] instanceof Array) {
    acc[cur.age].push(cur)
  } else {
    acc[cur.age] = [ cur ]
  }
  return acc
}
console.log(users.reduce(reduceGroupByAge, {}))

// find unique age
const reduceAgeSet = (acc, cur) => {
  return acc.add(cur.age)
}
console.log(users.reduce(reduceAgeSet, new Set()))



const user = {name: 'abc', address: 'sz'}

// get object keys
console.log(Object.keys(user))

// get object values
console.log(Object.values(user))


// compare string and number
const m = 1;
const n = '1'
console.log(m == n)
console.log(m === n)
console.log(`${m}` === `${n}`)

// string
const jim = 'Jim Sara'

console.log(jim.startsWith('jIM'))
console.log(jim.startsWith('Jim'))
console.log(jim.endsWith('ra'))
console.log(jim.endsWith(' ra'))

const x = 1;
const y = 2;
const greetting1 = 'Good morning, ${jim}, x + y = ${x+y}, ${jim.toUpperCase()}'
const greetting2 = `Good morning, ${jim}, x + y = ${x+y}, ${jim.toUpperCase()}`
console.log(greetting1)
console.log(greetting2)