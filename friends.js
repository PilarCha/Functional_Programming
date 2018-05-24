//array of friends is all
const friends = ['bob','jill']

//who got popular? Bam! one more friendo
const updatedFriends = [...friends, 'sarah']

//forgot your friends name? Want to remember name by length? I gots you!

const friendNameLengths = updatedFriends.map(screwNames)

function screwNames(name) {
  return name.length
}

console.log(friendNameLengths)

//5 forgot your birthday? Screw them lets forget that person

const shorterNamedFriends = friendNameLengths.filter(function(person) {
  return person !=5
})

console.log(shorterNamedFriends)
