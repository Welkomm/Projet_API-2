import React from 'react';
import { Link } from 'react-router-dom';
import './OrderCanceled.css'; // Importe le fichier CSS

const OrderCanceled = () => {
    return (
        <div className="order-canceled-container"> {/* Utilise une classe CSS */}
            <h1 className="order-canceled-title">Commande annulée</h1>
            <p>Votre paiement a été annulé. Veuillez réessayer ou contactez l'assistance si le problème persiste.</p>
            <Link to="/cart" className="back-to-cart-link">Retourner au panier</Link>
        </div>
    );
};

export default OrderCanceled;
