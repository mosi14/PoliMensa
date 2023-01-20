import NavbarBottom from './NavbarComponent';
import { Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getFoods} from "../Firebase";
import GlobalSpinner from "./SpinnerComponent";

function OrderFirstPhase() {

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');
    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);
    const [confirmModal, setConfirmModal] = useState(false);

    const backgroundColorClass = 'bg-primary';

    useEffect(() => {
        getFoods(1).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    let selectCard = (id) => {
        sessionStorage.setItem('firstDish', id);
        setChosenDish(id);
    }

    let Next = () => {

        if ( chosenDish.trim() === '' )
            setConfirmModal(true)
        else
            navigate('/order/second');
    }

    let Continue = () => {
        navigate('/order/second');
    }

    let handleClose = () => {
        setConfirmModal(false);
    }

    let Back = () => {
        navigate('/');
    }

    let content;

    if (loadFetchProcess) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <Row>
                    <Col className={'text-center'}>
                        <span className={"dot " + backgroundColorClass} />
                        <p>First course</p>
                    </Col>
                    <Col className={'text-center'}>
                        <span className="dot"/>
                        <p>Second course</p>
                    </Col>
                    <Col className={'text-center'}>
                        <span className="dot"/>
                        <p>Side dish</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className={'text-center'}>Choose first course</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={'text-center'}>only choose one item</p>
                    </Col>
                </Row>
                {
                    foods.map( (food) => {
                        return <OrderFoodCard food={food}
                                              chosenDish={chosenDish}
                                              selectCard={selectCard}
                                              key={food.id}/>
                    } )
                }
                <Row className={'justify-content-center my-4'}>
                    <Col xs={2}>
                        <Button size="lg" onClick={ () => Next() }>Next</Button>
                    </Col>
                </Row>
                <Modal show={ confirmModal } onHide={ handleClose }>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have not chosen any food. If you want to skip this part press
                        <b> Continue</b>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ handleClose }>
                            Close
                        </Button>
                        <Button variant="primary" onClick={ () => { Continue() } }>
                            Continue
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <NavbarBottom/>
        </>
    }

    return (content);
}

export function OrderFoodCard(props) {
    const card = 'bg-light my-2 selectable-card';
    const selectedCard = 'my-2 selectable-card border border-primary';

    return (
        <Card className={ props.chosenDish === props.food.id ? selectedCard : card }
              onClick={ () => props.selectCard(props.food.id) }>
            <Card.Body className={'p-2'}>
                <Row className={'align-items-center text-center'}>
                    <Col>
                        <h4>{ props.food.title }</h4>
                    </Col>
                    <Col>
                        <img src={ props.food.url }
                             alt={ props.food.title }
                             className="img-thumbnail"
                             height={150} width={200}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default OrderFirstPhase;