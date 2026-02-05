# Amazon Web Services
  AWS = Amazon Web Services

  Site
    https://aws.amazon.com/

# Principes Utilisateurs
  
  Root user
    Utilisateur principal
    Tous les droits sans restriction
    Bonnes pratiques AWS :
      Utilisé que pour les actions d’administration critique (sécurité, facturation).
      Activer MFA (multi-factor authentication)

  IAM user
    Utilisateurs secondaires que tu crées dans AWS IAM (Identity & Access Management).

# ARN
  ARN = Amazon Resource Name
  Identifiant unique pour chaque ressource (utilisateur, bucket, VM, rôle, etc.).

# Creation de comptes    

  https://console.aws.amazon.com/
  Recherche IAM (Identity & Access Management)
    Gestion des accès
      Personnes / Users
        Creer
          Fournir aux utilisateurs l'accès à la console de gestion AWS
          Utilisateur IAM (ganatan-dev), avec mot de passe ou clés d’accès.

# MFA
  Connexion root-user
    Compte
      Informations d’identification de sécurité
        Indiquer une ou plusieurs methodes de connexion MFA

# Paramteres du compte
  Root protégé par MFA (2 methodes)
  Utilisateur IAM (ganatan-dev)

# AWS

CI (Continuous Integration) via GitHub Actions ou CodeBuild (AWS service de build CI) exécute lint, tests, build puis construit une image Docker.

L’image est poussée dans ECR (Elastic Container Registry), le registre d’images Docker d’AWS.

EKS (Elastic Kubernetes Service), Kubernetes managé par AWS, déploie l’image via un Deployment (objet Kubernetes de gestion des releases).

Le Deployment crée des Pods (plus petite unité d’exécution Kubernetes) accessibles en interne via un Service (abstraction réseau stable).

Un Ingress (règles d’exposition HTTP Kubernetes) s’appuie sur un ALB (Application Load Balancer) pour exposer l’application en HTTPS.