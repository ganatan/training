# Deploiement Android
  npm install @capacitor/android
  npx cap add android

# Crée un projet Android natif complet

  npx cap add android

  Elle génère un dossier :
    android/

  Avec :
    app/
      gradle/
      AndroidManifest.xml
      MainActivity.java / .kt
      Capacitor bridge
      assets/public (vide pour l’instant)

  Cree a partir du fichier
    
    capacitor.config.ts

      import type { CapacitorConfig } from '@capacitor/cli';

      const config: CapacitorConfig = {
        appId: 'io.ionic.starter',
        appName: 'angular-ionic',
        webDir: 'www'
      };

      export default config;

# Execution de l'application
  
  npx cap open android

  