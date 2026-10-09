import { Project } from '../Models/Project/project.model';
export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Projet 1',
        description: 'Description du projet 1',
        status: 'En cours',
        tasks: [
        {
            id: 1,
            title: 'Tâche 1',
            priority: 'Haute',
            status: 'En attente'
        },
        {
            id: 2,
            title: 'Tâche 2',
            priority: 'Moyenne',
            status: 'En cours'
        },
    ],
    },

    {
        id: 2,
        name: 'Projet 2',
        description: 'Description du projet 2',
        status: 'En cours',
        tasks: [
        {
            id: 1,
            title: 'Tâche 1',
            priority: 'Haute',
            status: 'Terminé'
        },
        {
            id: 2,
            title: 'Tâche 2',
            priority: 'Moyenne',
            status: 'En cours'
        },
        ],
    },

    {
        id: 3,
        name: 'Projet 3',
        description: 'Description du projet 3',
        status: 'En cours',
        tasks: [
        {
            id: 1,
            title: 'Tâche 1',
            priority: 'Basse',
            status: 'En attente'
        },
        {
            id: 2,
            title: 'Tâche 2',
            priority: 'Moyenne',
            status: 'En cours'
        },
    ],
    },
]