/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * - interests: [String]
 *
 * 2. Add the constructor that initializes all properties except the interests array should be empty by default
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021), and returns the age of the person
 * + addInterest(newInterest), that takes  a string of a new interest, and adds it to the interest array, and returns back the array
 * after you are done with the class, create at least 3 objects of type Actor of your favorite actors
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.gender = gender),
      (this.birthYear = birthYear),
      (this.interests = []);
  }
  printName = () => {
    console.log(
      `the first Name: ${this.firstName} and last Name ${this.lastName}`
    );
  };
  calculateAge = (currentYear) => {
    return currentYear - this.birthYear;
  };
  addInterest = (newInterest) => {
    return this.interests.push(newInterest);
  };
}
const p1 = new Person("Jaber", "Ali", "Male", 1995);
p1.printName();
p1.calculateAge(2021);
p1.addInterest("singing");
p1.addInterest("running");
console.log(p1);
const p2 = new Person("Zainb", "Ali", "Female", 1999);
p2.printName();
p2.calculateAge(2021);
p2.addInterest("Swimming");
p2.addInterest("Cross Fit");
console.log(p2);
const p3 = new Person("Ahmad", "Mosa", "Male", 1990);
p3.printName();
p3.calculateAge(2021);
p3.addInterest("playing Piano");
p3.addInterest("Workout");
console.log(p3);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array should be empty by default
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title, duration, genre, rating) {
    (this.title = title),
      (this.duration = duration),
      (this.genre = genre),
      (this.rating = rating);
  }
  rate = (rating) => {
    if (Array.isArray(this.rating)) {
      return this.rating.push(rating);
    } else {
      return null;
    }
  };
  averageRating = () => {
    return this.rating.reduce((a, b) => a + b) / this.rate.length;
  };
}

const m1 = new Movie("Inside Out", 175, "ne", [9, 10, 4, 5]);
console.log(m1);
console.log(m1.averageRating());
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  movies = [];
  addMovie = (movie) => {
    return this.movies.push(movie);
  };
}
