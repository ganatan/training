package org.example;


class Media {
  private String name = "1111";

  Media() {
    name = "1111";
    System.out.println("00000000001:Media:constructor");
  }

}

public class Main {
  public static void main(String[] args) {
    Media media = new Media();
    System.out.println("00000000001");
    System.out.println("00000000001" + media.name);
  }
}