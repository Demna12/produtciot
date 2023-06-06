import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // რეალურ პროექტში ამგვარი დაყოვნების მითითება არ არის დასაშვები!!!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
