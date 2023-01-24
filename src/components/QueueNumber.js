import NavbarBottom, { TopNavbar } from './NavbarComponent';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FcOvertime } from 'react-icons/fc';
import { FaPeopleArrows } from 'react-icons/fa';
import { cancelOrder } from "../Firebase";

function QueueNumber(props) {

    const navigate = useNavigate();
    const [type, setType] = useState();
    const [showChangeModal, setShowChangeModal] = useState(false);

    let Cancel = () => {
        cancelOrder(props.user)
            .then( (response) => {
                props.setUser(null);
            })
            .catch( () => {
                // setShowAlert(true);
            });
    }

    let CloseChangeTimeModal = () => {
        setShowChangeModal(false)
    }

    let ChangeTime = () => {
        navigate('/order/choose-time');
    }

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container>
                <Card className={'bg-light mt-5 py-5'} style={{ height: '55vh' }}>
                    <Card.Body>
                        <div className={'h-100 d-flex align-items-center'}>
                            <Row className={'h-75 flex-grow-1'}>
                                <Col xs={4}>
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
                                <Col xs={4}>
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
                                <Col xs={4}>
                                    <Card className={'h-100'}>
                                        <Card.Body className={'text-center'}>
                                            <div className={'d-flex align-items-center h-100'}>
                                                <div className={'flex-grow-1'}>
                                                    <FaPeopleArrows size={55}/>
                                                    <h6 className={'text-center'}>
                                                        Number of people in the queue
                                                    </h6>
                                                    <h4>
                                                        {   props.user.order.orderAhead }
                                                    </h4>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
                 <Row className={'justify-content-center my-4'}>
                    <Col sm={6} className={'text-center my-3'}>
                        <Button variant={'danger'} size="lg" onClick={ () => { Cancel() } }>Cancel booking</Button>
                    </Col>
                    <Col sm={6} className={'text-center my-3'}>
                        <Button className={'bg-main'} size="lg" onClick={ () => {
                            setShowChangeModal(true)
                        } }>Change time</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={showChangeModal} onHide={ () => CloseChangeTimeModal() }>
                <Modal.Header className={'bg-main text-white'} closeButton>
                    <Modal.Title>Change time</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to change time ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => CloseChangeTimeModal() }>
                        Close
                    </Button>
                    <Button className={'bg-main'} variant="primary" onClick={ () => ChangeTime() }>
                        Change time
                    </Button>
                </Modal.Footer>
            </Modal>
            <NavbarBottom/>
        </>
    );
}

export default QueueNumber;