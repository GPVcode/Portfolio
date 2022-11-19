import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
//import headerImg from "../assets/img/header-img.svg";
import astronaut from "../assets/img/astronaut.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";

function Banner(){

        // index index which word is currently displayed on screen
        const [ loopNum, setLoopNum ] = useState(0);
        const [ isDeleting, setIsDeleting ] = useState(false);
        const toRotate = [ "Software Engineer", "Web Developer" ];
        const [text, setText] = useState('');
        //determine how fast one letter comes after the first one is typed
        const [delta, setDelta] = useState(10 - Math.random() * 100);
        //transition between each words
        const period = 1000;

        useEffect(() => {
            let ticker = setInterval(() => {
                tick();
            }, delta)

            return () => { clearInterval(ticker)};
        }, [text])

        //define tick function
        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

            setText(updatedText);

            if(isDeleting){
                setDelta(prevDelta => prevDelta /1.5)
            }
            if(!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period);
            } else if(isDeleting && updatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
        }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>

                            <h1>{`Hi I'm Gabriel Villaruel `}
                            <span className="wrap">
                            {text}
                            </span>
                            </h1>

                            <p>This is a summary of who I am therefore this is a placeholder</p>

                            <button onClick={() => console.log('connect')}>
                            Let's Connect! <ArrowRightCircle size={25} />
                            </button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={astronaut} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;