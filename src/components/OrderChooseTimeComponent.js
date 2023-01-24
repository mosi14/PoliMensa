import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Alert, Button, Card, Col, Container, Row} from "react-bootstrap";
import { useState} from "react";
import { useNavigate } from "react-router-dom"
import {SelectableCard} from "./CardsComponents";
import {BackArrow} from "./HomeComponent";
import {getTimes, getUser, saveOrder} from "../Firebase";
import GlobalSpinner from "./SpinnerComponent";
import {IoWarningOutline} from "react-icons/io5";

function OrderChooseTime(props) {

    const navigate = useNavigate();

    const [chosenTime, setChosenTime] = useState(null);
    const [loadFetchProcess, setLoadFetchProcess] = useState(true);
    const [times, setTimes] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const card = 'bg-light my-2 selectable-card';
    const selectedCard = 'my-2 selected-card'

    let selectTime = (id) => {
            localStorage.setItem('chooseTime', id);
            setChosenTime(id);
    }

    useState(function () {
        getTimes(1).then((timesAPI) => {
            setTimes(timesAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            console.log(error);
        });
    })

    let Confirm = () => {

        if (chosenTime === null)
            setShowAlert(true);
        else {
            saveOrder(props.user, chosenTime)
                .then( (response) => {

                    props.setUser(null);
                    navigate('/order/choose-time/queue-number');
                })
                .catch( () => {
                    setShowAlert(true);
                } );
        }
    }

    let Back = () => {
        navigate('/order/third');
    }

    let alert = '';

    if (showAlert) {
        alert =
            <Alert key={'danger'} variant={'danger'} className={'alert-fixed mt-1 text-center align-items-center'}>
                <IoWarningOutline size={23}/>
                You have not chosen time slot!
            </Alert>
    }

    let content;

    if (loadFetchProcess) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
            <TopNavbar user={props.user}/>
            <Container className={'main-container'}>
                <Row>
                    <Col xs={1}>
                        <BackArrow back={ () => Back() }/>
                    </Col>
                    <Col xs={10}>
                        { alert }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className={'text-center'}>Choose Your Time</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{
                        span: 10,
                        offset: 1
                    }}>
                        <Row className={'justify-content-center'}>
                            {
                                times.map( (time) => {
                                    return <SelectableCard chosenTime={chosenTime} selectTime={selectTime} time={time}
                                                           selectedCard={selectedCard} card={card} text={time.time_slot}
                                                           key={time.id}/>
                                } )
                            }
                        </Row>
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={4} className={'text-center'}>
                        <Button size="lg" className={'bg-main'} onClick={ () => Confirm() }>Confirm</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom />
        </>
    }

    return (content);
}



export default OrderChooseTime;