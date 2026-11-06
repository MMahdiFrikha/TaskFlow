import { User } from "../Models/user.model";


export const USERS: User[] = [
  {
    id: 1,
    name: 'Amira Ben Salah', // 2 words -> "AB"
    email: 'amira.bensalah@taskflow.tn',
    role: 'Manager',
    isActive: true
  },
  {
    id: 2,
    name: 'karim', // Single word lowercase -> "K"
    email: 'karim.triki@taskflow.tn',
    role: 'Développeur',
    isActive: false
  },
  {
    id: 3,
    name: 'Youssef Mezghani', // 2 words -> "YM"
    email: 'youssef.mezghani@taskflow.tn',
    role: 'Admin',
    isActive: true
  },
  {
    id: 4,
    name: 'Sarra Kallel Frikha', // 3 words -> takes the first two -> "SK"
    email: 'sarra.kallel@taskflow.tn',
    role: 'Développeur',
    isActive: true
  },
  {
    id: 5,
    name: '', // Empty name -> fallback '?'
    email: 'nouveau.collaborateur@taskflow.tn',
    role: 'Développeur',
    isActive: false
  }
];