# Concept

  Un callback est une fonction passée en paramètre à une autre fonction, pour être exécutée plus tard.

  C’est simplement une fonction qu’on donne en argument, que l'autre fonction va rappeler ("call back") quand elle en aura besoin.

# Exemple
  function hello(name) {
    console.log("Bonjour " + name);
  }

  function run(callback) {
    callback("Danny");
  }

  run(hello); // ✅ "Bonjour Danny"