import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import {AiOutlinePlus} from "react-icons/ai";
import {BackArrow} from "./HomeComponent";
import API from "../API";
import GlobalSpinner from "./SpinnerComponent";
import {OrderFoodCard} from "./OrderFirstPhaseComponent";

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

    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(false);

    useEffect( () => {
        API.getFoods(null).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            setLoadFetchProcess(true);
            console.log(error);
        });
    }, []);

    let GoHome = () => {
        navigate('/');
    }

    let Back = () => {
        navigate('/order/third');
    }

    let Continue = () => {
        navigate('/order/first');
    }

    let content, isChosen = false;

    if (loadFetchProcess) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
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
                        {
                            foods.map( (food) => {

                                const firstDish = sessionStorage.getItem('firstDish');
                                const secondDish = sessionStorage.getItem('secondDish');
                                const thirdDish = sessionStorage.getItem('thirdDish');

                                if (food.id == firstDish || food.id == secondDish || food.id == thirdDish) {
                                    isChosen = true;
                                    return <Card className={ chosenDish === dish1 ? selectedCard : card }>
                                        <Card.Body className={'p-2'}>
                                            <Row className={'align-items-center text-center'}>
                                                <Col>
                                                    <h4>{ food.title }</h4>
                                                </Col>
                                                <Col>
                                                    <img src={ food.url }
                                                         alt={ food.title }
                                                         className="img-thumbnail"
                                                         height={150} width={200}/>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                }

                            } )
                        }
                        { isChosen ?  "" : <><h4 className={'text-center my-3'}>No food has been chosen.</h4><h6 className={'text-center'}>If you would like to choose click <span className={'fst-italic'}>CHANGE</span></h6></> }
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
    }
    return (content);
}

export default OrderSummary;