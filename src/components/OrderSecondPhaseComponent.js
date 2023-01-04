import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useState} from "react";
import { useNavigate } from "react-router-dom"

function OrderSecondPhase() {

    const dish1 = 'dish-1';
    const dish2 = 'dish-2';
    const dish3 = 'dish-3';
    const dish4 = 'dish-4';

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');

    const backgroundColorClass = 'bg-primary';
    const card = 'bg-light my-2 selectable-card';
    const selectedCard = 'my-2 selectable-card border border-primary'

    let selectCard = (id) => {
        localStorage.setItem('secondDish', id);
        setChosenDish(id);
    }

    let Next = () => {
        navigate('/order/third');
    }

    let Back = () => {
        navigate('/order/first');
    }

    return (
        <>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <Row>
                    <Col className={'text-center'}>
                        <span className={"dot bg-success"} />
                        <p>First course</p>
                    </Col>
                    <Col className={'text-center'}>
                        <span className={"dot " + backgroundColorClass }/>
                        <p>Second course</p>
                    </Col>
                    <Col className={'text-center'}>
                        <span className="dot"/>
                        <p>Side dish</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className={'text-center'}>Choose second course</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={'text-center'}>only choose one item</p>
                    </Col>
                </Row>
                <Card className={ chosenDish === dish1 ? selectedCard : card }
                onClick={ () => selectCard(dish1) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Scaloppine Pollo</h4>
                            </Col>
                            <Col>
                                <img src={'data:image/jpeg;base64,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'}
                                     alt="Scaloppine Pollo"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish2 ? selectedCard : card }
                      onClick={ () => selectCard(dish2) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Pizza Margarita</h4>
                            </Col>
                            <Col>
                                <img src={'data:image/jpeg;base64,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'}
                                     alt="Pizza Margarita"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish3 ? selectedCard : card }
                      onClick={ () => selectCard(dish3) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Cordon Blue</h4>
                            </Col>
                            <Col>
                                <img src={'data:image/jpeg;base64,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'}
                                     alt="Cordon Blue"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish4 ? selectedCard : card }
                      onClick={ () => selectCard(dish4) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Spinach Omelette</h4>
                            </Col>
                            <Col>
                                <img src={'https://data.thefeedfeed.com/static/2019/09/24/15693340325d8a231046329.jpg'}
                                     alt="Spinach Omelette"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={2}>
                        <Button size="lg" onClick={ () => Next() }>Next</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default OrderSecondPhase;