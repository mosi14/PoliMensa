import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { OrderFoodCard } from './OrderFirstPhaseComponent';
import {getFoods} from "../Firebase";
import GlobalSpinner from "./SpinnerComponent";
import {BackArrow} from "./HomeComponent";
import API from "../API";

function OrderThirdPhase(props) {

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');
    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);
    const [confirmModal, setConfirmModal] = useState(false);

    const backgroundColorClass = 'bg-main';

    useEffect(() => {
        API.getFoods(3).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    let selectCard = (id) => {
        sessionStorage.setItem('thirdDish', id);
        setChosenDish(id);
    }

    let Next = () => {
        if ( chosenDish === '' )
            setConfirmModal(true)
        else
            navigate('/order/summary');
    }

    let Continue = () => {
        navigate('/order/summary');
    }

    let handleClose = () => {
        setConfirmModal(false);
    }

    let Back = () => {
        navigate('/order/second');
    }

    let content;

    if (loadFetchProcess) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
            <TopNavbar user={props.user}/>
                <Container className={'main-container'}>
                    <div className={'mt-2'}>
                        <BackArrow Back={ () => Back() }/>
                    </div>
                    <Row>
                        <Col className={'text-center'}>
                            <span className={"dot bg-main"} />
                            <p>First course</p>
                        </Col>
                        <Col className={'text-center'}>
                            <span className={"dot bg-main" }/>
                            <p>Second course</p>
                        </Col>
                        <Col className={'text-center'}>
                            <span className={"dot " + backgroundColorClass }/>
                            <p>Side dish</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className={'text-center'}>Choose side dish</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={'text-center'}>only choose one item</p>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col md={8}>
                            {
                                foods.map( (food) => {
                                    return <OrderFoodCard food={food}
                                                          chosenDish={chosenDish}
                                                          selectCard={selectCard}
                                                          key={food.id}/>
                                } )
                            }
                        </Col>
                    </Row>
                    <Row className={'justify-content-center my-4'}>
                        <Col sm={4} className={'text-center'}>
                            <Button size="lg" className={'bg-main'} onClick={ () => Next() }>Next</Button>
                        </Col>
                    </Row>
                </Container>
            <Modal show={ confirmModal } onHide={ handleClose }>
                <Modal.Header closeButton className={'bg-main'}>
                    <Modal.Title>Confirm Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have not chosen any food. If you want to skip side course press
                    <b> Continue.</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="primary" className={'bg-main'} onClick={ () => { Continue() } }>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
                <NavbarBottom />
            </>
    }

    return (content);
}

export default OrderThirdPhase;