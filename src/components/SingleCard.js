import React from "react";
import { Card } from "react-bootstrap";

const SingleCard = ({ card, handleChoice, shuffedCards }) => {

    const handleClick = () => {
            handleChoice(card);
    }

    const handleCards = () => {
        shuffedCards();
    }

    return (
        <>
            <Card className="bg-white text-center mb-4 shadow-lg" onClick={handleCards}>
                <Card.Img className="img-fluid card-img-top" variant="top" src={card.src} alt={card.title} id={card.id} onClick={handleClick} />
                <Card.Body>
                    <Card.Title className="card-title">{card.title}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default SingleCard;