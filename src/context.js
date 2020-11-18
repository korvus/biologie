import React from 'react';
import Page1 from './files/cours1.js';
import Page2 from './files/cours2.js';
import Page3 from './files/cours3.js';
import Page4 from './files/cours4.js';
import Page5 from './files/cours5.js';

export const arrPages = [
  Page1, Page2, Page3, Page4, Page5
]

const pages = [
    {label: 'composition de la matière vivante'},
    {label: 'La cellule et la membrane'},
    {label: 'le cytoplasme et les organites'},
    {label: 'noyau mitose et méiose'},
    {label: "L'expression de l'information génétique"}
];

let current = 0;

// function changeCurrent(i){current = i}

export const PageContext = React.createContext({
  pageindex: current,
  setPageindex: (i) => {}
});

export default pages;