import NavbarBottom, { TopNavbar } from './NavbarComponent';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FcOvertime } from 'react-icons/fc';
import { RxLapTimer } from 'react-icons/rx';
import API from "../API";
import {BackArrow} from "./HomeComponent";

function QueueNumber(props) {

    const navigate = useNavigate();
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    let Cancel = () => {
        API.cancelOrder(props.user.id)
            .then( (response) => {
                props.setUser(null);
            })
            .catch( (error) => {
                console.log(error)
                // setShowAlert(true);
            });
    }

    let CloseChangeTimeModal = () => {
        setShowChangeModal(false)
    }

    let Back = () => {
        navigate('/');
    }

    let CloseDeleteModal = () => {
        setShowDeleteModal(false)
    }

    let ChangeTime = () => {
        navigate('/order/choose-time');
    }

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <BackArrow Back={ () => Back() }/>
                </div>
                <Card className={'bg-light mt-3 py-5'}
                // style={{ height: '55vh' }}
                >
                    <Card.Body>
                        <div className={'h-100 d-flex align-items-center'}>
                            <Row className={'h-75 flex-grow-1 justify-content-center'}>
                                <Col xs={12} sm={6} md={4}>
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
                                <Col xs={12} sm={6} md={4} className={'xs-mt'}>
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
                                <Col xs={12} sm={6} md={4} className={'xs-mt'}>
                                    <Card className={'h-100 '}>
                                        <Card.Body className={'text-center'}>
                                            <div className={'d-flex align-items-center h-100'}>
                                                <div className={'flex-grow-1'}>
                                                    <RxLapTimer size={43}/>
                                                    <h6 className={'text-center'}>
                                                        Expected time
                                                    </h6>
                                                    <h4>
                                                        { '15min' }
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
                        <Button variant={'danger'} size="lg" onClick={ () => {  setShowDeleteModal(true)  } }>Cancel booking</Button>
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
            <Modal show={showDeleteModal} onHide={ () => CloseDeleteModal() }>
                <Modal.Header className={'bg-main text-white'} closeButton>
                    <Modal.Title>Cancel order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to cancel order ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => CloseDeleteModal() }>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ () => Cancel() }>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            <NavbarBottom/>
        </>
    );
}

export default QueueNumber;