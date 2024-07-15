const findTheOldest = function(people) {
    people.sort(function (a, b) {
        let ageA = 0;
        let ageB = 0;
        let currentYear = new Date().getFullYear();
        if ('yearOfDeath' in a) {
           ageA = a.yearOfDeath - a.yearOfBirth;
      } else {
          ageA = currentYear - a.yearOfBirth;
      }
      if ('yearOfDeath' in b) {
           ageB = b.yearOfDeath - b.yearOfBirth;
      } else {
          ageB = currentYear - b.yearOfBirth;
      }
      if (ageA > ageB) return -1;
      if (ageA < ageB) return 1;
  });
  return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
