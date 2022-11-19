import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascriptIcon from "../assets/img/icons8-javascriptIcon.svg";
import nodeJS from "../assets/img/icons8-node-js.svg";
import reactIcon from "../assets/img/icons8-react.svg";
import gitIcon from "../assets/img/icons8-git.svg";
import githubIcon from "../assets/img/icons8-github.svg";
import postgresql from "../assets/img/icons8-postgresql.svg";
import CSS from "../assets/img/icons8-css3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    //   <Carousel responsive={responsive}>
    //     <div>Item 1</div>
    //     <div>Item 2</div>
    //     <div>Item 3</div>
    //     <div>Item 4</div>
    //   </Carousel>;

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Skills
                            </h2>
                            <p>Some text to describe the SKILLS!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={javascriptIcon} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={reactIcon} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nodeJS} alt="Image" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={gitIcon} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={githubIcon} alt="Image" />
                                    <h5>Github</h5>
                                </div>
                                <div className="item">
                                    <img src={postgresql} alt="Image" />
                                    <h5>Postgresql</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                            </ Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}

export default Skills;