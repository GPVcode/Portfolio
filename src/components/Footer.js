import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/icons8-github (2).svg';

function Footer(){
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gabrielvillaruel/"><img src={navIcon1} alt="LinkedIN"/></a>
                            <a href="www.facebook.com"><img src={navIcon2} alt="Facebook icon"/></a>
                            <a href="https://github.com/GPVcode"><img src={navIcon3} alt="GitHub Profile"/></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved by Gabriel Villaruel</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;