import NavbarBottom from './NavbarComponent';
import {Button, Col, Container, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { OrderFoodCard } from './OrderFirstPhaseComponent';
import {getFoods} from "../Firebase";
import GlobalSpinner from "./SpinnerComponent";

function OrderThirdPhase() {

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');
    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);

    const backgroundColorClass = 'bg-primary';

    useEffect(() => {
        getFoods(3).then((foodsAPI) => {
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
        navigate('/order/choose-time');
    }

    let Back = () => {
        navigate('/order/second');
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
                            <span className={"dot bg-primary"} />
                            <p>First course</p>
                        </Col>
                        <Col className={'text-center'}>
                            <span className={"dot bg-primary" }/>
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
                    {
                        foods.map( (food) => {
                            return <OrderFoodCard food={food}
                                                  chosenDish={chosenDish}
                                                  selectCard={selectCard}
                                                  key={food.id}/>
                        } )
                    }
                    <Row className={'justify-content-center my-4'}>
                        <Col sm={4} className={'text-center'}>
                            <Button size="lg" onClick={ () => Next() }>Choose Time</Button>
                        </Col>
                    </Row>
                </Container>
                <NavbarBottom/>
            </>
    }

    return (content);
}

export default OrderThirdPhase;