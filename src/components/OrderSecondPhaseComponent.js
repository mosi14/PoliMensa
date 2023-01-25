import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { OrderFoodCard } from './OrderFirstPhaseComponent';
import GlobalSpinner from "./SpinnerComponent";
import {BackArrow} from "./HomeComponent";
import API from "../API";


function OrderSecondPhase(props) {

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');
    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);
    const [confirmModal, setConfirmModal] = useState(false);

    const backgroundColorClass = 'bg-main';

    useEffect(() => {
        sessionStorage.setItem('secondDish', null);

        API.getFoods(2).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    let selectCard = (id) => {
        window.scrollTo(0, 100000000)

        sessionStorage.setItem('secondDish', id);
        setChosenDish(id);
    }

    let Next = () => {
        if ( chosenDish === '' )
            setConfirmModal(true)
        else
            navigate('/order/third');
    }

    let Continue = () => {
        navigate('/order/third');
    }

    let Back = () => {
        navigate('/order/first');
    }

    let handleClose = () => {
        setConfirmModal(false);
    }

    let content;

    if (loadFetchProcess) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
            <TopNavbar user={ props.user }/>
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
                    <Col xs={2}>
                        <Button size="lg" className={'bg-main'} onClick={ () => Next() }>Next</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={ confirmModal } onHide={ handleClose }>
                <Modal.Header closeButton className={'bg-main'}>
                    <Modal.Title>Confirm Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have not chosen any food. If you want to skip second course press
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

export default OrderSecondPhase;