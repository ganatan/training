
# Creation de Comptes
  https://portal.azure.com
  https://portal.azure.com/#home

# Connection Azure DevOps
  https://aex.dev.azure.com/me

# Creation d'une organisation
  
  Tu choisis ton nom d’organisation (ex. ganatan-devops)
  Tu sélectionnes la région (ex. Europe)
  Tu cliques sur Create
  

# Rendre projets publics
  Va dans ton projet (ex: frontend-angular)
  En bas à gauche : Project settings
  Dans “Overview” → Visibility → Public
  

# Architecture
Élément Azure DevOps	        Rôle

Organization	                Racine — ton espace global (ex : ganatan-devops)

Project	                      Regroupe tout pour une app : boards, code, pipelines, artefacts

Team	                        Groupe d’utilisateurs qui bossent sur un projet

Service                       Fonctionnalité activable dans un projet : Boards, Repos, Pipelines, etc.

Pipeline                      Ressources concrètes (ton code, ton pipeline YAML, tes tâches Agile)
Repo
Board	    

# Deploiement
  portal.azure.com


ACR — Azure Container Registry
AKS — Azure Kubernetes Service

# Deploiement via github

  Objectif
    Reproduire ton workflow OpenShift :
      GitHub → Build Docker → Push → Deploy YAML → Cluster → Service + Ingress

  Sur Azure, ça devient :
    GitHub → GitHub Actions (ou GitLab CI) → ACR → AKS → Service + Ingress

  Tu vas créer :
    Resource Group
      Registry Docker (ACR)
      Cluster Kubernetes (AKS)
      Ingress Controller
      Ton déploiement YAML

    Pipeline CI/CD GitHub → ACR → AKS


# Creation Resource Group
  Dans la recherche tape :
  ➡ Resource Group
    Crée :
      groupe de ressources
      Name : rg-ganatan
      Region : France Central
  📌 Le Resource Group = ton namespace global Azure.

# Créer le Registry Docker (ACR)
  Dans la recherche :
  ➡ Container Registry
    Créer :
      Name : acrganatan
    SKU : Basic
    Resource Group : rg-ganatan

Il te donnera une URL :

acrganatan.azurecr.io

C’est l’équivalent complet du GitLab Registry.

# Créer le Cluster Kubernetes AKS
  Dans la recherche :
  ➡ Kubernetes Services
    Créer :
    Name : aks-ganatan
    Resource Group : rg-ganatan
    Node size : B4ms ou B2ms
    Node count : 1
    Authentication : System assigned managed identity

    IMPORTANT :
    Dans l’onglet Integrations, coche :
    ✔ Enable Azure Container Registry → sélectionne acrganatan

    👉 Ça permet à AKS de tirer tes images sans secret.

    📌 Sur OpenShift tu faisais imagePullSecrets.
    📌 Ici c’est automatique via RBAC Azure.

# Installer l’Ingress Controller (NGINX)
  AKS n’a pas “Route” comme OpenShift.
  Tu dois installer un Ingress Controller.
  Tu vas l’installer en 2 lignes via Azure CLI ou Cloud Shell.
  Dans Azure Portal :
  ➡ En haut → Cloud Shell
  Choisis Bash
    Puis :
      az aks get-credentials -n aks-ganatan -g rg-ganatan
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm install nginx ingress-nginx/ingress-nginx \
    --namespace ingress-basic --create-namespace

  Après 30 secondes :
      kubectl get svc -n ingress-basic

    Tu obtiendras une IP publique →
    C’est ton équivalent de la Route OpenShift.    


# Préparer ton code (YAML K8s)
  Exactement ce que tu fais sur OpenShift :
    k8s/
      deployment.yaml
      service.yaml
      ingress.yaml
  Ton image sera :
    acrganatan.azurecr.io/rag-backend:latest

# Pipeline GitHub Actions (équivalent GitLab CI)
  Dans ton repo GitHub :
  
  Créer :
    .github/workflows/deploy.yml
  name: Deploy to AKS
      on:
        push:
          branches:
            - main

      jobs:
        build:
          runs-on: ubuntu-latest

          steps:
            - name: Checkout
              uses: actions/checkout@v3

            - name: Login to Azure
              uses: azure/login@v1
              with:
                creds: ${{ secrets.AZURE_CREDENTIALS }}

            - name: Azure Container Registry Login
              run: az acr login --name acrganatan

            - name: Build and Push Image
              run: |
                docker build -t acrganatan.azurecr.io/rag-backend:latest .
                docker push acrganatan.azurecr.io/rag-backend:latest

            - name: Set AKS context
              run: az aks get-credentials --name aks-ganatan --resource-group rg-ganatan --overwrite-existing

            - name: Deploy to AKS
              run: |
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                kubectl apply -f k8s/ingress.yaml

# Rendre GitHub capable de se connecter à Azure

    Dans Azure :
    ➡ App registrations
    ➡ New registration

    Génère un service principal :

    az ad sp create-for-rbac --name github-ganatan --role contributor \
      --scopes /subscriptions/<subscription-id>


    Colle le JSON dans GitHub Secrets :

    AZURE_CREDENTIALS=
    {
      "clientId": "...",
      "clientSecret": "...",
      "subscriptionId": "...",
      "tenantId": "..."
    }


    GitHub peut maintenant :

    se connecter à Azure

    pousser tes images dans ACR

    déployer dans AKS

#  Résultat final

Tu viens de reproduire OpenShift sur Azure AKS, avec :

✔ GitHub → pipeline CI/CD
✔ Docker build/push (ACR)
✔ Kubernetes deploy (AKS)
✔ Service interne
✔ Ingress public
✔ IP publique (équivalent OpenShift Route)    