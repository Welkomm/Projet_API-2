import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './OrderSuccess.css'; // Importe le fichier CSS

const OrderSuccess = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Vider le panier local après un paiement réussi 
        localStorage.removeItem('cart');

        // Rediriger l'utilisateur vers la page d'accueil après 5 secondes
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer); // Nettoyer le timer 
    }, [navigate]);

    return (
        <div className="order-success-container"> {/* Ajoute une classe pour le style */}
            <h1 className="order-success-title">Merci pour votre commande, {username} !</h1>
            <p>Vous allez être redirigé vers la page d'accueil dans quelques instants...</p>
        </div>
    );
};

export default OrderSuccess;
