//arguments is not accessible in arrow function

const app = (a,b) => {
    console.log('Sum', a+b)
    //console.log(arguments)
}

const visitedCities = ['Delhi New', 'Kolkata New']
app(2, 3, 2)
//this keyword is also not bound in arrow function
var user = {
    visitedCities: ['Delhi', 'Kolkata'],
    traveller: 'Rajat',
    userInfo: function () { //Non Arrow function binds with this of the current object
        this.visitedCities.forEach(city => {
            console.log(city)
        });
    },
    cityInfo () { //Arrow function does not bind with this of the current object but with the parent object
        visitedCities.forEach(city => { // this.visitedCities is not defined
            console.log(city)
        });
    }
}

const multiple = {
    //numbers - array of numbers
    numbersArray: [2, 3, 4],
    //multiply - by a single number
    multipleBy() {
        this.numbersArray.map(v => {
          console.log(v*2)
    })
  },
    //multiply -  return a new array where number  have been mulitplied
}
// user.userInfo()
// user.cityInfo()

multiple.multipleBy()