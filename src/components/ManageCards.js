import { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import { Container, Row, Col } from "react-bootstrap";

const memeoryCards = [
    { id: 1, title: "Mulaz Mountain", src: "./images/1.jpg", },
    { id: 2, title: "Broken Fishing Boat", src: "./images/2.jpg", },
    { id: 3, title: "Mountain Arnica", src: "./images/3.jpg", },
    { id: 4, title: "Cornflower", src: "./images/4.jpg", },
    { id: 5, title: "Pink Cake Frosting", src: "./images/5.jpg", },
    { id: 6, title: "Ladybug", src: "./images/6.jpg", },
    { id: 7, title: "Mycena Fungus", src: "./images/7.jpg", },
    { id: 8, title: "Sea Island Cotton", src: "./images/8.jpg", },
    { id: 9, title: "Clear Quartz", src: "./images/9.jpg", },
    { id: 10, title: "Seven-Spot Ladybird", src: "./images/10.jpg", }
];

const ManageCards = () => {

    const [cards, setCards] = useState([]);
    const [userChoice, setUserChoice] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0)

    // Shuffle cards
    const shuffledCards = () => {
        const copyMemoryCards = [...memeoryCards].sort(() => Math.random() - 0.5);
        setCards(copyMemoryCards);
    };

    // Handle user's choice
    const handleChoice = (card) => {
        if (userChoice.indexOf(card) === -1) {
            setUserChoice([...userChoice, card]);
            // console.log(userChoice);
        }
        else {
            setUserChoice([]);
            setScore(0);
        }
    };

    // App logic
    useEffect(() => {
        if (score === cards.length) {
            alert("Congradulations, You Have Good Memory!");
            setBestScore(cards.length);
            setUserChoice([]);
            setScore(0);
        } else if (score >= bestScore) {
            setBestScore(score);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score]);

    useEffect(() => {
        if (userChoice.length === 0) {
            setScore(0);
        } else {
            setScore(score + 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userChoice]);

    // Restart game
    const restartGame = () => {
        setScore(0);
        setBestScore(0);
        setUserChoice([]);
        shuffledCards();
    };

    return (
        <>
            <header className="header" role="banner">
                <Container className="text-center">
                    <h1 className="">Memory <span className="text-decor">Card</span> Game</h1>
                    <h3>Test Your Memory</h3>

                    <div className="span-list">
                        <span className="score">Score: <span className="text-decor">{score}</span></span>
                        <span className="btn btn-md btn-start" onClick={restartGame}><i className="fa fa-play fa-fw"></i> Start/Play</span>
                        <span className="score">Best Score: <span className="text-decor">{bestScore}</span></span>
                    </div>
                    <hr className="pb-3" />
                </Container>
            </header>

            <main className="main" role="main">
                <Container>
                    <Row xs={1} md={5} className="g-4">
                        {cards.map((card) =>
                            <Col>
                                <SingleCard
                                    key={card.id}
                                    id={card.id}
                                    card={card}
                                    alt={card.title}
                                    src={card.src}
                                    shuffedCards={shuffledCards}
                                    handleChoice={handleChoice}
                                />
                            </Col>
                        )}
                    </Row>
                </Container>
            </main>

            <footer className="footer" role="contentinfo">
                <Container>
                    <div className="footer-content">
                        <span className="span">Made with <i className="fa fa-heart text-decor"></i> by: Danny A. Mase</span>
                        <span className="span">Copyright &copy;2023 &middot; <a href="#page-top">Memory Card Game</a> &middot; All rights reserved</span>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default ManageCards;