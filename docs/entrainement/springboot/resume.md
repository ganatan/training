# Implemtentation class et Interface

  interface définit un contrat de méthodes, sans logique métier.

  Toutes les méthodes d’une interface sont implicitement public abstract.

  Une classe qui implements une interface est obligée d’implémenter toutes ses méthodes.

  Une classe peut implémenter plusieurs interfaces.
  extends = héritage de classe, une seule autorisée.

  Si une classe parente implémente déjà l’interface, la classe fille n’a rien à ré-implémenter.

  @Override n’est pas obligatoire, mais sécurise la compilation.

  @Override empêche les erreurs de signature silencieuses.

  On ne peut jamais réduire la visibilité d’une méthode héritée.

  Une méthode d’interface doit être implémentée public.

  super.method() appelle le comportement de la classe parente.

  La redéfinition (override) permet le polymorphisme.

  Le comportement exécuté dépend du type réel de l’objet, pas de la variable.

  public = visible partout.

  protected = visible dans le package + héritage.

  (default) = visible uniquement dans le package.

  private = visible uniquement dans la classe.

  L’héritage transmet état + méthodes.

  Les interfaces servent au découplage et à la DI Spring.

  Ces mécanismes sont la base directe de @Service, @Repository et @RestController.

# RestController avec SPringBoot  