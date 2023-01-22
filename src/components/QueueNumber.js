import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FcOvertime } from 'react-icons/fc';
import { FaPeopleArrows } from 'react-icons/fa';

function QueueNumber(props) {

    console.log(props.user)
    const navigate = useNavigate();
    const [type, setType] = useState();

    let Next = () => {

        if(type === "cancel"){
            navigate('/');
        }
       

        if(type === "edit"){
            navigate('/order/choose-time');
        }
        
    }

    return (
        <>
            <TopNavbar/>
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
                                                        { props.user.order.time }
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
                        <Button variant={'danger'} size="lg" onClick={ () => { Next() } }>Cancel booking</Button>
                    </Col>
                    <Col sm={6} className={'text-center my-3'}>
                        <Button className={'bg-main'} size="lg" onClick={ () => { Next() } }>Change time</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

function QueueCard(props) {

}

export default QueueNumber;