import { Project } from '../Models/Project/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Refonte du site web',
    description: 'Modernisation complète de la plateforme vitrine et de la boutique en ligne.',
    status: 'En cours',
    startDate: '2026-09-01',
    budget: 15000,
    tasks: [
      {
        id: 1,
        title: 'Maquettes page accueil',
        priority: 'Haute',
        status: 'Terminé',
        dueDate: '2026-09-10',
        description: 'Créer les maquettes haute fidélité de la page d’accueil pour validation par le client avant l’intégration.'
      },
      {
        id: 2,
        title: 'Intégration du header',
        priority: 'Moyenne',
        status: 'Terminé',
        dueDate: '2026-09-20'
      },
      {
        id: 3,
        title: 'Formulaire de contact',
        priority: 'Haute',
        status: 'En cours',
        dueDate: '2026-10-02',
        description: 'Développer le formulaire de contact avec validation des champs et envoi de la demande vers l’équipe support.'
      },
      {
        id: 4,
        title: 'Optimisation SEO',
        priority: 'Basse',
        status: 'En attente',
        dueDate: '2026-10-30'
      },
      {
        id: 5,
        title: 'Tests responsive',
        priority: 'Moyenne',
        status: 'En attente',
        dueDate: '2026-11-15',
        description: 'Tester l’affichage sur mobile et tablette.'
      }
    ]
  },
  {
    id: 2,
    name: 'Application Mobile TaskFlow',
    description: 'Développement de la version mobile sous Android et iOS.',
    status: 'En cours',
    startDate: '2026-08-15',
    budget: 24500,
    tasks: [
      {
        id: 6,
        title: 'Setup architecture',
        priority: 'Haute',
        status: 'Terminé',
        dueDate: '2026-09-15'
      },
      {
        id: 7,
        title: 'Authentification mobile',
        priority: 'Haute',
        status: 'En cours',
        dueDate: '2026-10-25',
        description: 'Mettre en place l’authentification des utilisateurs sur l’application mobile avec gestion de la session.'
      },
      {
        id: 8,
        title: 'Push notifications',
        priority: 'Moyenne',
        status: 'En cours',
        dueDate: '2026-10-01'
      },
      {
        id: 9,
        title: 'Tâche exploratoire',
        priority: 'Basse',
        status: 'En attente'
      }
    ]
  },
  {
    id: 3,
    name: 'Migration Cloud & Base de Données',
    description: 'Transfert des bases relationnelles vers une architecture cloud sécurisée.',
    status: 'Terminé',
    startDate: '2026-07-01',
    budget: 8000,
    tasks: [
      {
        id: 10,
        title: 'Audit des schémas SQL',
        priority: 'Haute',
        status: 'Terminé',
        dueDate: '2026-09-05'
      },
      {
        id: 11,
        title: 'Script de synchronisation',
        priority: 'Moyenne',
        status: 'Terminé',
        dueDate: '2026-09-25'
      },
      {
        id: 12,
        title: 'Vérification intégrité',
        priority: 'Haute',
        status: 'Terminé',
        dueDate: '2026-10-20',
        description: 'Vérifier la cohérence des données migrées en comparant les volumes et les contenus avec l’ancien serveur.'
      }
    ]
  },
  {
    id: 4,
    name: 'Projet R&D IA Embarquée',
    description: 'Évaluation de modèles de classification edge.',
    status: 'En attente',
    startDate: '2026-12-01',
    budget: 5000,
    tasks: [] // Aucune tâche : cas d'étude pour la division par zéro
  }
];