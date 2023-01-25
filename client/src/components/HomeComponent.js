import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {IoChevronBackCircleSharp, IoFastFood} from "react-icons/io5";
import {IoIosPeople} from "react-icons/io";
import {FcOvertime} from "react-icons/fc";
import {BsEmojiSmile} from "react-icons/bs";

function Home(props) {

    const navigate = useNavigate();

    let ChangeTime = () => {
        navigate('/order/choose-time/queue-number');
    }

    let ChangeFood = () => {
        navigate('/order/first');
    }

    let alert = '';

    if (props.payed) {
        alert =
            <Alert key={'success'} variant={'success'} className={'alert-fixed mt-1 text-center align-items-center'}>
                <BsEmojiSmile size={23}/>
                The payment has been successful!
            </Alert>
    }

    return (
        <>
            <TopNavbar user={props.user}/>
                <Container className={'main-container'}>
                { alert }
                <h3 className={'text-center my-3'}>Hi { props.user.name } { props.user.surname }</h3>
                <Row>
                    <Col md={{
                        span: 8,
                        offset: 2
                    }}
                    xs={12}>
                        <Card className={'bg-light py-1'}>
                            <Card.Body >
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Row>
                                            <Col>
                                                <Card className={'h-100'}>
                                                    <Card.Body className={'text-center'}>
                                                        <div className={'d-flex align-items-center h-100'}>
                                                            <div className={'flex-grow-1'}>
                                                                <IoIosPeople size={55}/>
                                                                <h6>
                                                                    Your number
                                                                </h6>
                                                                <h4>
                                                                    { props.user.order.orderNumber }
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className={'mt-1'}>
                                            <Col >
                                                <Card className={'h-100'}>
                                                    <Card.Body className={'text-center'}>
                                                        <div className={'d-flex align-items-center h-100'}>
                                                            <div className={'flex-grow-1'}>
                                                                <FcOvertime size={55}/>
                                                                <h6 className={'text-center'}>
                                                                    Chosen time slot
                                                                </h6>
                                                                <h4>
                                                                    { props.user.order.timeSlot }
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Card className={'h-100 xs-mt'}>
                                            <Card.Body className={'text-center'}>
                                                <div className={'d-flex align-items-center h-100'}>
                                                    <div className={'flex-grow-1'}>
                                                        <IoFastFood size={35}/>
                                                        <h5>Your meals</h5>
                                                        <div>
                                                            <span>1)</span>
                                                            <span>Chickpea Curry</span>
                                                        </div>
                                                        <div>
                                                            <span>2)</span>
                                                            <span>Greek Quinoa Salad</span>
                                                        </div>
                                                        <div>
                                                            <span>3)</span>
                                                            <span>Cabbage Soup</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={4} className={'text-center'}>
                        <Button className={'bg-main'} size="lg" onClick={ () => ChangeTime() }>See details</Button>
                    </Col>
                    <Col sm={4} className={'text-center xs-mt'}>
                        <Button className={'bg-main'} size="lg" onClick={ () => ChangeFood() }>Meal</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom />
        </>
    );
}

export function BackArrow(props) {
    return (
        <div className={'mt-2'}>
            <IoChevronBackCircleSharp size={40} className={'back-arrow'} onClick={ () => props.Back() }/>
        </div>
    );
}

export default Home;