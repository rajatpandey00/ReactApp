'use strict';

//arguments is not accessible in arrow function

var app = function app(a, b) {
    console.log('Sum', a + b);
    //console.log(arguments)
};

var visitedCities = ['Delhi New', 'Kolkata New'];
app(2, 3, 2);
//this keyword is also not bound in arrow function
var user = {
    visitedCities: ['Delhi', 'Kolkata'],
    traveller: 'Rajat',
    userInfo: function userInfo() {
        //Non Arrow function binds with this of the current object
        this.visitedCities.forEach(function (city) {
            console.log(city);
        });
    },
    cityInfo: function cityInfo() {
        //Arrow function does not bind with this of the current object but with the parent object
        visitedCities.forEach(function (city) {
            // this.visitedCities is not defined
            console.log(city);
        });
    }
};

var multiple = {
    //numbers - array of numbers
    numbersArray: [2, 3, 4],
    //multiply - by a single number
    multipleBy: function multipleBy() {
        this.numbersArray.map(function (v) {
            console.log(v * 2);
        });
    }
};
// user.userInfo()
// user.cityInfo()

multiple.multipleBy();
