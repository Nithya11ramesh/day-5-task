/*
a) Write a constructor for the class Movie
    title, which is a String representing the title of the movie
    studio, which is a String representing the studio that made the movie
    rating, which is a String representing the rating of the movie 


    class Movie {
        constructor(title, studio, rating) {
            this.title = title;
            this.studio = studio;
            this.rating = rating;
    
    }
}
    const MovieSecond= new Movie("12th fail","sony liv", "PG 13");
    console.log(MovieSecond);

    //OUTPUT:

        movie { title: '12th fail', studio:'sony liv', rating: 'PG' } //

b)The constructor for the class Movie will set the 
class property rating to "PG" as default when no rating is provided.    

class movie {

    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

}

const MovieThird = new movie("leo", "amazon");

console.log(MovieThird);

//OUTPUT:
        movie { title: 'leo', studio: 'amazon', rating: 'PG' } //


c) Write a method getPG, which takes an array of base type Movie as its argument,
 and returns a new array of only those movies in the input array with a rating of "PG".
 You may assume the input array is full of Movie instances. 
The returned array need not be full.

class Movie{
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(input) {
      let cap= input.filter(movie => movie.rating === "PG");
      return cap;
    }
}
let movie1=new Movie("Captain Miller","amazon","PG");
let movie2=new Movie("Lal Salaam","Sony Liv","PG 13");
let movie3=new Movie("Saba Nayagan","Hotstar","PG");
let movie4=new Movie("Siren","Amazon","PG 14")

let movieArray = [movie1, movie2, movie3, movie4];
let PGMovies =Movie.getPG(movieArray);
console.log(PGMovies); 

//OUTPUT:
[
  Movie { title: 'Captain Miller', studio: 'amazon', rating: 'PG' },
  Movie { title: 'Saba Nayagan', studio: 'Hotstar', rating: 'PG' }
]
//



d)Write a piece of code that creates an instance of the class Movie with the
 title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”.

 class Movie{
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const Moviesec=new Movie("casino Royale","Eon production","PG 13") ;

console.log(Moviesec);
    

  //OUTPUT:
  Movie {
  title: 'casino Royale',
  studio: 'Eon production',
  rating: 'PG 13'
}


*/