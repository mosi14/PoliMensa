import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useState} from "react";
import { useNavigate } from "react-router-dom"
import {AiOutlinePlus} from "react-icons/ai";

function OrderSummary() {

    const dish1 = 'dish-1';
    const dish2 = 'dish-2';
    const dish3 = 'dish-3';
    const dish4 = 'dish-4';

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');

    const backgroundColorClass = 'bg-primary';
    const card = 'bg-light my-2';
    const selectedCard = 'my-2 selectable-card border border-primary'

    let selectCard = (id) => {
        localStorage.setItem('thirdDish', id);
        setChosenDish(id);
    }

    let Next = () => {
        navigate('/');
    }

    let Back = () => {
        navigate('/order/choose-time');
    }

    return (
        <>
            <Container className={'main-container'}>
                <Row className={'mt-4'}>
                    <Col>
                        <h2 className={'text-center'}>Your order has been confirmed</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={'text-center'}>Estimation time: 11:45</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline'}>Your wallet balance:</p>
                            <p className={'d-inline fs-6 mx-2'}>2.91&euro;</p>
                            <Button variant="light" className={'mb-2'}>
                                <AiOutlinePlus size={20}/>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Card className={ chosenDish === dish1 ? selectedCard : card }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Vegetable In Oil</h4>
                            </Col>
                            <Col>
                                <img src={'https://www.acouplecooks.com/wp-content/uploads/2021/04/Vegetable-Oil-001.jpg'}
                                     alt="Vegetable In Oil"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish2 ? selectedCard : card }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>French Fries</h4>
                            </Col>
                            <Col>
                                <img src={'https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?resize=768,574'}
                                     alt="French Fries"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish3 ? selectedCard : card }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Green Beans</h4>
                            </Col>
                            <Col>
                                <img src={'https://static.onecms.io/wp-content/uploads/sites/43/2022/03/11/230103-ButteryGarlicGreenBeans_9957.jpg'}
                                     alt="Green Beans"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={5} className={'text-center'}>
                        <Button size="lg" onClick={ () => Next() }>Cancel</Button>
                        <p>You can only cancel your order before 11:15</p>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default OrderSummary;