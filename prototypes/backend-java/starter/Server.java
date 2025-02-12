import utils.table.MovieList;
import hello.HelloWorld;

public class Server {

  public static void main(String[] args) {

    System.out.println("00000000001:Server");
    if (args.length > 0) {
      System.out.println("Arguments reçus :");
      for (String arg : args) {
        System.out.println("- " + arg);
      }
    } else {
      System.out.println("Aucun argument reçu.");
    }

    showMoviesList();

    MoviesLibrary.showMoviesList();
    MovieList.main(args);
    HelloWorld.main(args);
  }

  private static void showMoviesList() {
    System.out.println("00000001:MoviesList");
  }

}