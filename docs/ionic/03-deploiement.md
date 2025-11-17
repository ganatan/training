# Deploiement IPhone
  Xcode n’existe que sur macOS
  Le SDK iOS n’existe que sur macOS
  Le compilateur Apple (clang + toolchain iOS) n’est disponible que sur macOS
  La signature du code (certificat + provisioning profile) ne se fait qu’avec Xcode
  Le packaging IPA dépend des outils Apple
  Le déploiement TestFlight / App Store nécessite Xcode + Transporter

# Methodes déploiement
  Méthode	                      Format	      Description
  
  Installation directe	        APK	          Installation manuelle sans store    
                                              Idéale pour tests et déploiement simple interne.

  Store privé / Entreprise	    APK	          Distribution contrôlée via MDM 
                                              sans passer par le Play Store.

  Google Play Store	            AAB	          Publication officielle via Play Console
                                              valide pour tout le grand public.