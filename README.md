Bcrypt est une fonction de hachage cryptographique conçue pour le hachage et le stockage sécurisé des mots de passe côté serveur des applications, de manière à réduire leur vulnérabilité aux attaques par dictionnaire . Elle a été créée en 1999 par Niels Provos et David Mazières, à partir de l'algorithme de chiffrement Blowfish.

Blowfish est un algorithme de chiffrement par blocs à clé symétrique conçu par Bruce Schneier en 1993. Il est considéré comme relativement sûr pour de nombreuses applications, en particulier lorsqu'il est implémenté correctement et utilisé avec des longueurs de clé appropriées. Blowfish est un algorithme de chiffrement symétrique

JWT

Un JWT, ou JSON Web Token, est un protocole courant qui permet de transmettre des données de manière sécurisée sous la forme d'un objet JSON, lui-même vérifié par une signature numérique.

Ces jetons sont généralement utilisés pour l'authentification et l'autorisation , car ils peuvent contenir des informations permettant de vérifier l'identité d'un utilisateur et ses autorisations. En matière d'authentification, les informations stockées dans le JWT permettent aux serveurs d'établir une relation de confiance avec un client inconnu.

Avantage:
-Sans session serveur: aucune donnée d'auth stockee cote serveur.
-Rapide: juste une vérification du token a chaque requéte.
-Portable: fonctionne avec n'importe quel client (web, mobile, ect...)
-Content des infos utiles comme role, id utilisateur, expiration.

La structure d'un jwt et en 3 partie:
-l'en-tete JOSE
-Le payload
-la siganture

chaque parti est separer d'un point.

https://www.vaadata.com/blog/fr/jwt-json-web-token-vulnerabilites-attaques-courantes-et-bonnes-pratiques-securite/
