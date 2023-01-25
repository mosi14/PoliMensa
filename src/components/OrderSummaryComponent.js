import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useState} from "react";
import { useNavigate } from "react-router-dom"
import {AiOutlinePlus} from "react-icons/ai";
import {BackArrow} from "./HomeComponent";

function OrderSummary(props) {

    const dish1 = 'dish-1';
    const dish2 = 'dish-2';
    const dish3 = 'dish-3';
    const dish4 = 'dish-4';

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');

    const backgroundColorClass = 'bg-primary';
    const card = 'bg-light my-2';
    const selectedCard = 'my-2 selectable-card border border-primary';
    const [confirmModal, setConfirmModal] = useState(false);

    let handleClose = () => {
        setConfirmModal(false);
    }

    let Next = () => {
        setConfirmModal(true);
    }

    let GoHome = () => {
        navigate('/');
    }

    let Back = () => {
        navigate('/order/third');
    }

    let Continue = () => {
        navigate('/order/first');
    }

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <BackArrow Back={ () => Back() }/>
                </div>
                <Row className={'mt-1'}>
                    <Col>
                        <h2 className={'text-center'}>Summary</h2>
                    </Col>
                </Row>
                <Row className={'justify-content-center'}>
                    <Col md={8}>
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
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={3} className={'text-center'}>
                        <Button size="lg" className={'bg-main'} onClick={ () => Next() }>Change</Button>
                    </Col>
                    <Col sm={3} className={'text-center'}>
                        <Button size="lg" className={'bg-main'} onClick={ () => GoHome() }>Confirm</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={ confirmModal } onHide={ handleClose }>
                <Modal.Header closeButton className={'bg-main'}>
                    <Modal.Title>Confirm Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Would you like to change your order ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        No
                    </Button>
                    <Button variant="primary" className={'bg-main'} onClick={ () => { Continue() } }>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <NavbarBottom />
        </>
    );
}

export default OrderSummary;