import NavbarBottom, {TopNavbar} from './NavbarComponent';
import { Card, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {BackArrow} from "./HomeComponent";
import GlobalSpinner from "./SpinnerComponent";
import API from "../API";
import {MdStars} from "react-icons/md";

function Menu(props) {

    const navigate = useNavigate();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const [foods, setFoods] = useState([]);
    const [loadFetchProcess, setLoadFetchProcess] = useState(false);

    let daysArray = [];

    const today = dayjs().date();

    let beginningDay = 5;

    if ( isThereSunday() )
        beginningDay += 1;

    for (let i = beginningDay; i >= 0; i--) {

        const current = dayjs().subtract(i, "days");

        if ( current.day() === 0 )
            continue;

        daysArray.push({
            day: current.date(),
            month: months[ current.month() ],
            dayOfWeek: daysOfWeek[ current.day() ],
        })
    }

    useEffect(function () {
        API.getFoods(null).then((foodsAPI) => {
            setFoods(foodsAPI);
            setLoadFetchProcess(false);
        }).catch((error) => {
            setLoadFetchProcess(true);
            console.log(error);
        });
    })

    const [chosenTime, setChosenTime] = useState('time' + today);
    const [headText, setHeadText] = useState('Suggested foods for today.');
    const [isToday, setIsToday] = useState(false);

    if ( chosenTime === 'time' + today && isToday === false ) {
        setIsToday(true)
    }

    let Back = () => {
        navigate('/');
    }

    let GoPaymentMethod = () => {
        navigate('/top-up/methods');
    }

    let GoLastTransactions = () => {
        navigate('/top-up/last-transactions');
    }

    let ChooseTime = (time) => {

        if ( time === 'time' + today )
            setHeadText('Suggested foods for today.')
        else
            setHeadText('Selected food for this day.');

        setChosenTime(time);
    }

    let content

    if ( loadFetchProcess ) {
        content = <><GlobalSpinner/></>
    } else {
        content = <>
            <TopNavbar user={props.user}/>
            <Container>
                <div className={'mt-1'}>
                    <BackArrow Back={ () => Back()}/>
                </div>
                <Row className={'justify-content-center mb-3'}>
                    <Col xs={12} sm={8}
                         className={'text-center'}>
                        <h4>
                            { headText }
                        </h4>
                    </Col>
                </Row>
                <Row className={'w-100 overflow-auto flex-nowrap'}>
                    {
                        daysArray.map( (day, index) => {

                            return <Col key={index}><DayCard day={day.day}
                                                             month={day.month}
                                                             dayOfWeek={day.dayOfWeek}
                                                             ChooseTime={ChooseTime}
                                                             chosenTime={chosenTime}
                            /></Col>

                        } )
                    }
                </Row>
                <h5 className={'mt-2'}>First Course</h5>
                <div className={'d-flex flex-row flex-nowrap overflow-auto'}>
                    {
                        foods.map( ( food ) => {

                            if (food.type === 1) {
                                return <FoodCardComponent
                                    key={food.id}
                                    src={ food.url }
                                    text={ food.title }
                                    food={food}
                                />
                            }
                        })
                    }
                </div>

                <h5 className={'mt-2'}>Second Course</h5>
                <div className={'d-flex flex-row flex-nowrap overflow-auto'}>
                    {
                        foods.map( ( food ) => {

                            if (food.type === 2) {
                                return <FoodCardComponent
                                    key={food.id}
                                    src={ food.url }
                                    text={ food.title }
                                    food={food}
                                />
                            }
                        })
                    }
                </div>
                <h5 className={'mt-2'}>Side Dish</h5>
                <div className={'d-flex flex-row flex-nowrap mb-5 overflow-auto'}>
                    {
                        foods.map( ( food ) => {

                            if (food.type === 3) {
                                return <FoodCardComponent
                                    key={food.id}
                                    src={ food.url }
                                    text={ food.title }
                                    food={food}
                                />
                            }
                        })
                    }
                </div>
            </Container>
            <NavbarBottom />
        </>
    }

    return (content);
}

function FoodCardComponent(props) {

    let card = 'mx-2 border-card';
    const selectedCard = 'mx-2 border-main';
    const suggestedCard = 'mx-2 border-violet';

    if ( props.food === 'selected' )

        card = selectedCard;

    else if ( props.food === 'suggested' )
        card = suggestedCard;

    return <Card className={ card } style={{
        width: '160px',
        minWidth: '160px',
    }}>
            <Card.Body className={'p-0'}>
                <img alt={'Food'}
                     src={props.src}
                     style={{
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover',
                         borderTopLeftRadius:'5px',
                         borderTopRightRadius:'5px',
                     }}
                     />
                     <div className={'color-main'} style={{
                        position: 'absolute',
                         top: '5px',
                         left: '5px',
                     }
                     }>
                         { props.food.favorite ? <MdStars size={40} /> : '' }
                     </div>

            </Card.Body>
        <Card.Footer>
            <h6 className={'text-center color-main overflow-three-dots'}>
                { props.text }
            </h6>
        </Card.Footer>
        </Card>
}

function DayCard(props) {
    return (
        <Card
            onClick={ () => props.ChooseTime('time' + props.day) }
            className={props.chosenTime === 'time' + props.day ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
            <Card.Body>
                <h6 className={'text-center'}>
                    { props.month }
                </h6>
                <h6 className={'text-center'}>
                    { props.day }
                </h6>
                <h6 className={'text-center'}>
                    { props.dayOfWeek }
                </h6>
            </Card.Body>
        </Card>
    );
}

function isThereSunday() {

    let result = false;

    for (let i = 6; i >= 0; i--) {

        const current = dayjs().subtract(i, "days");

        if ( current.day() === 0 )
            result = true;
    }

    return result;
}

export default Menu;