import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import {BackArrow} from "./HomeComponent";
import API from "../API";
import GlobalSpinner from "./SpinnerComponent";

function OrderSummary(props) {

    const navigate = useNavigate();

    const card = 'bg-light my-2';
    const [confirmModal, setConfirmModal] = useState(false);

    let handleClose = () => {
        setConfirmModal(false);
    }

    let Next = () => {
        setConfirmModal(true);
    }

    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);

    useEffect( () => {
        API.getFoods(null).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    let Confirm = () => {
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
                                    return <Card className={ card } key={food.id}>
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
                    <Col sm={3} className={'text-center xs-mt'}>
                        <Button size="lg" className={'bg-main'} onClick={ () => Confirm() }>Confirm</Button>
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