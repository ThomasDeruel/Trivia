# TP : The TRIVIA
Afin de parfaire votre maîtrise des appel asynchrone et de l'algorithmique, vous devrez utiliser une API bien spécifique afin de mettre en place un quiz.

## Première partie

### Règles
- Utilisation de create-react-app
- Utilisation de l'api > [jService](http://jservice.io/)
  - Pour installer l'api sur votre machine : https://github.com/sottenad/jService
- Une belle intégration dans laquelle j'attends :
  - L'affichage d'une question
  - Un champs de formulaire dans lequel on pourra répondre à la question
- Un score qu'on pourra sauvegarder dans le localStorage.
- Utilisation en JS d'une `class`
- Possibilité de le faire en ES6 / React

### Features
- Récupérer les questions
- Afficher une question, pouvoir y répondre
- Afficher un score
  - Si 3 erreurs, le score est reset à 0
  - Avoir la possibilité de reset notre score
  - Si score === 10 : Afficher "T'es un winner"
- Ne jamais afficher 2 fois la même question
- Possibilité de choisir sa catégorie
  - Premier chargement de la page, demander de choisir une catégorie parmi celles disponible sur l'api
  - Sauvegarder ce choix en localStorage
  - Possibilité de changer de catégorie (et reset le score)
- Si je reviens sur la page, je veux avoir mon score, mon nombre d'essai (pour arriver à 10 bonnes réponses) et une fois de plus, je ne veux pas retomber sur les mêmes questions.
- Vous pouvez faire un Game over.

### Rendu attendu
- l'application finale sur gitlab avec documentation
- Code commenté 
- Démarche pour lancer l'application
- M'expliquer comment installer le projet (sauf le serveur qui est le même pour tout le monde).