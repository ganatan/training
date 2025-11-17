# Type de Data


Java	                          Description	                                    Exemple

String	                        Chaîne de caractères	    Hello"

byte              	            entier très petit         -128 à 127
int		                          entier                    -2147483648 à2147483647
long		                        grand entier              -9223372036854775808L à 9223372036854775807L
double	                        flottant (64 bits)        de 2.2250738585072014E-308 

boolean	                        Vrai ou faux	            true, false
String[]	                      Tableau de chaînes	      { "a", "b" }

int[]                           Tableaux de nombres	      {1, 2, 3}
double[]	                      Tableaux de nombres	      {12.01, 2.03, 3.03}

Object	                        Type générique de base	                        Object o = "test";
List<String>	                  Liste typée	List.of("a", "b")
Map<String, Integer>	          Clé/valeur typé	                                Map.of("a", 1, "b", 2)
<T> (générique)	                Type générique	T identity(T x) { return x; }
void	                          Aucune valeur                                   retournée	void 
null	                          Valeur nulle	                                  String s = null;


# Exemple de code Types essentiels

    boolean franchise = true;
    String title = "Aliens";

    byte budget1 = 127;
    byte budget2 = -128;
    int budgetInt1 = 2147483647;
    int budgetInt2 = -247483648;
    long budgetLong1 = -9223372036854775808L;
    long budgetLong2 = 9223372036854775807L;
    double budgetDouble = 1234.5;

    String[] movies = { "Aliens", "Gladiator", "Heat" };

    System.out.println(java.util.Arrays.toString(movies));
    System.out.println("00000000001");
    System.out.println("00000000001" + franchise);
    System.out.println("00000000001" + title);
    System.out.println("00000000001" + budget1);
    System.out.println("00000000001" + budget2);
    System.out.println("00000000001" + budgetInt1);
    System.out.println("00000000001" + budgetInt2);
    System.out.println("00000000001" + budgetLong1);
    System.out.println("00000000001" + budgetLong2);