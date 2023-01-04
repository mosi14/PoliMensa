import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useState} from "react";
import { useNavigate } from "react-router-dom"

function OrderChooseTime() {

    const time1 = 'time-1';
    const time2 = 'time-2';
    const time3 = 'time-3';
    const time4 = 'time-4';
    const time5 = 'time-5';
    const time6 = 'time-6';
    const time7 = 'time-7';

    const navigate = useNavigate();

    const [chosenTime, setChosenTime] = useState('');

    const card = 'bg-light my-2 selectable-card';
    const selectedCard = 'my-2 selectable-card border border-primary'

    let selectTime = (id) => {
        if (id !== time4 && id !== time5) {
            localStorage.setItem('chooseTime', id);
            setChosenTime(id);
        }
    }

    let Next = () => {
        navigate('/order/confirm');
    }

    let Back = () => {
        navigate('/order/third');
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
                    <Col>
                        <h2 className={'text-center'}>Choose Your Time</h2>
                    </Col>
                </Row>
                <Row className={'justify-content-center'}>
                    <Col sm={3}>
                        <Card className={ chosenTime === time1 ? selectedCard : card }
                              onClick={ () => selectTime(time1) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col>
                                        <h5>11:30</h5>
                                        <h5>12:00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className={ chosenTime === time2 ? selectedCard : card }
                              onClick={ () => selectTime(time2) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col>
                                        <h5>12:00</h5>
                                        <h5>12:30</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className={ chosenTime === time3 ? selectedCard : card }
                              onClick={ () => selectTime(time3) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col>
                                        <h5>12:30</h5>
                                        <h5>13:00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className={ chosenTime === time4 ? selectedCard : card }
                              onClick={ () => selectTime(time4) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col className={'text-muted'}>
                                        <h5>13:00</h5>
                                        <h5>13:30</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className={ chosenTime === time5 ? selectedCard : card }
                              onClick={ () => selectTime(time5) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col className={'text-muted'}>
                                        <h5>13:30</h5>
                                        <h5>14:00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className={ chosenTime === time6 ? selectedCard : card }
                              onClick={ () => selectTime(time6) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col>
                                        <h5>14:00</h5>
                                        <h5>14:30</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className={ chosenTime === time7 ? selectedCard : card }
                              onClick={ () => selectTime(time7) }>
                            <Card.Body className={'p-2'}>
                                <Row className={'align-items-center text-center my-5'}>
                                    <Col>
                                        <h5>14:30</h5>
                                        <h5>15:00</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={4} className={'text-center'}>
                        <Button size="lg" onClick={ () => Next() }>Confirm</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default OrderChooseTime;