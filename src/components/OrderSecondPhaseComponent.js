import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Col, Container, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { OrderFoodCard } from './OrderFirstPhaseComponent';
import {getFoods} from "../Firebase";
import GlobalSpinner from "./SpinnerComponent";
import {BackArrow} from "./HomeComponent";

function OrderSecondPhase(props) {

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');
    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);

    const backgroundColorClass = 'bg-main';

    useEffect(() => {
        getFoods(2).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    let selectCard = (id) => {
        sessionStorage.setItem('secondDish', id);
        setChosenDish(id);
    }

    let Next = () => {
        navigate('/order/third');
    }

    let Back = () => {
        navigate('/order/first');
    }

    let content;

    if (loadFetchProcess) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
            <TopNavbar/>
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
                        <Button size="lg" className={'bg-main'} onClick={ () => Next() }>Next</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom />
        </>
    }

    return (content);
}

export default OrderSecondPhase;