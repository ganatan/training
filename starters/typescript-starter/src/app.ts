import { getItems } from "./lib/items";
import { Media } from "./lib/library";

let budget: number = 1234;

let arrayMovies: string[] = [];

class Movie extends Media {

}

let server = () => {
  let media: Media = new Media();
  media.name = 'Alien';
  media.budget = 7777;
  let movie: Movie = new Movie();
  movie.name = 'Alien';
  console.log('00000000002:' + JSON.stringify(media));
  console.log('00000000003:' + JSON.stringify(movie));
  getItems();
};

server();