# Markdown Previewer

Ce projet est un **éditeur Markdown en temps réel** construit avec React. Il permet de taper du texte en Markdown et de voir immédiatement le rendu HTML correspondant.

## Fonctionnalités

- **Édition en temps réel** : Lorsque vous modifiez le texte dans le champ de saisie, le rendu Markdown est mis à jour instantanément.
- **Conversion Markdown vers HTML** : Utilisation de la bibliothèque `marked` pour transformer le Markdown en HTML de manière sécurisée.
- **Stockage local** : Le contenu édité est automatiquement sauvegardé dans le `localStorage`, permettant de conserver le texte entre les sessions de navigation.
- **Options de formatage** : Support pour les titres, listes, liens, code en ligne, blocs de code et autres éléments de Markdown.

## Technologies Utilisées

- **React** : Pour la création de l'interface utilisateur dynamique.
- **Marked** : Pour la conversion du Markdown en HTML.
- **Bootstrap** : Pour la mise en page réactive.