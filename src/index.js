import React from 'react';
import ReactDOM from 'react-dom/client';
import Produits from './Produits'; 
import './Produit.css';
import  Formulaire from './Formulaire';
import './Formulaire.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Produits />
    <Formulaire />
  </React.StrictMode>
);

