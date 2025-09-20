# Connection
  - Inscription
    https://developers.redhat.com/register

  - Submit
    https://sandbox.redhat.com/
    Telephone au format    
      +33612345678

  - Activer le Developer Sandbox    
    https://developers.redhat.com/developer-sandbox

    Start your Sandbox for free
      OpenShift

    Creation automatique
      cluster OpenShift 4.x déjà configuré.
      namespace/projet (espace isolé).

# Workflow
  Élément	          Rôle	                                          Où ça se situe
  
  Cluster	          Environnement OpenShift global	                Regroupe masters + workers

  Master	          Plan de contrôle (API, scheduler, etc.)	        Gère le cluster, pas d’apps

  Worker	          Nœuds qui exécutent tes apps	                  Hébergent les Pods

  Namespace         (Project)	Espace logique d’isolation            Dans le Cluster

  Pod	              Unité d’exécution (1 ou + containers)	          Sur un Worker

  Deployment	      Déclare et gère les Pods (scaling, restart)     Planifié par le Master
                    à partir d’une image Docker                     exécuté sur Workers
                                
  Service	          Adresse interne stable pour accéder aux Pods	  Dans le Namespace
  
  Route	            Rend le Service accessible (URL publique)	      Dans le Cluster
  
  ConfigMap/Secret	Variables de config / données sensibles	        Montées dans les Pods
  
  PVC / PV	        Persistent Volumes / Stockage persistant	      Lié aux Pods,
                                                                    sur les Workers

# Fonctionnement
Infrastructure
  sandbox     : cluster OpenShift (Masters + Workers déjà gérés par Red Hat)

Organisation
  projet      : namespace Kubernetes/OpenShift (ex: ganatan-dev)

Exécution
  Pod         : contient 1 ou plusieurs containers, créés à partir d’images (Docker Hub, GitLab Registry…)

Orchestration
  Deployments : décrit quelle image déployer, combien de replicas, stratégie de restart/rolling update
  Services    : expose les pods/applications en interne (IP fixe dans le cluster)
  Routes      : expose le service vers l’extérieur (URL publique)

# Developpement
  
  Accès via console web (interface graphique)
    https://sandbox.redhat.com/
  
  CLI oc (équivalent de kubectl mais pour OpenShift).


# Connection Developer

  - Acces sur 
  
  console.redhat.com
    Red Hat OpenShift

      - Developer Sandbox
        Version essai

        https://sandbox.redhat.com/
    
      - Red Hat OpenShift Container Platform
        Version Payante 
        Cluster OpenShift managé directement par Red Hat
        Facturation abonnement annuel


# Connection Developer

  https://sandbox.redhat.com/
    openShift
      Try it
  
  Acces à la console
  Acces aux projets
    https://console-openshift-console.apps.rm2.thpm.p1.openshiftapps.com/k8s/cluster/projects


# Utilisation d'image

  - Importer YAML

  - Importer depuis Git
  
  - Images conteneurs
    Indiquer l'image de l'appli
      docker.io/ganatan/frontend-angular:latest

      Création d’un Deployment 
        (objet Kubernetes, définition du Pod basé sur ganatan/frontend-angular).
        Cration d'un ReplicaSet
        Lancement du Pod
      Création d’un Pod
        Téléchargement de l'image depuis Docker Hub
        Demarrage du conteneur
      Création d’un Service interne
  
    - Selection Project
      - Charges de Travail
        Topologie
          - Liste des services

# Creation de deploiement

  - Selection Project
    - Charges de Travail
      - Deploiement

        Nom du deploiement
        Nom de l'image
          docker.io/ganatan/frontend-angular:latest



# Suppression

  - Selection Project
    - Charges de Travail
      - Topologie
        Suppression de service


# Creation d'un service
  apiVersion: v1
  kind: Service
  metadata:
    name: frontend-angular-service
    namespace: ganatan-dev
  spec:
    selector:
      app: frontend-angular-manuel-001   # doit matcher le label du Deployment
    ports:
      - protocol: TCP
        port: 4000       # port exposé dans le cluster
        targetPort: 4000 # port exposé par ton container
    type: ClusterIP


# Creation d'une route

  apiVersion: route.openshift.io/v1
  kind: Route
  metadata:
    name: frontend-angular-route
    namespace: ganatan-dev
  spec:
    to:
      kind: Service
      name: frontend-angular-service
    port:
      targetPort: 4000
    tls:
      termination: edge

# Onteste la route exposee
  https://frontend-angular-route-ganatan-dev.apps.rm2.thpm.p1.openshiftapps.com      

    