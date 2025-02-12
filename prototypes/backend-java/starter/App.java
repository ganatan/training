
public class App {
  public static void main(String[] args) {

    if (args.length == 1) {
      System.out.println("00000000001:args:1");
    } else {
      System.out.println("00000000001:args:0");
    }

    int moviesNumber = 500;
    moviesNumber = moviesNumber + 100;
    moviesNumber += 100;

    final int MOVIES_NUMBER = 12;

    System.out.println("00000000001:" + MOVIES_NUMBER);
    System.out.println("00000000002:" + moviesNumber);

    showPerson();
  }

  public static void showPerson() {
    int personsNumber = 10;
    System.out.println("00000000001:showPerson:" + personsNumber);

    for (int i = 0; i < 3; i++) {
      System.out.println("00000000001:showPerson:for:" + i);
    }

    int i = 0;
    while (i < 3) {
      System.out.println("00000000001:showPerson:while::" + i);
      i++;
    }

    int j = 0;
    do {
      System.out.println("00000000001:showPerson:do-while:boucle:" + j);
      i++;
    } while (i < 3);

  }

}
