import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {useState} from "react";
import dayjs from "dayjs";
import {BackArrow} from "./HomeComponent";

function Menu(props) {

    const navigate = useNavigate();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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

    return (
        <>
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
                        <FoodCardComponent
                            src={"https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="}
                            text={'Pasta/Riso in Bianco'}
                        />
                        <FoodCardComponent
                            src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                            text={'Pasta Carbonara'}
                        />
                        <FoodCardComponent food={'suggested'}
                                           src={'https://statics.cucchiaio.it/content/cucchiaio/it/ricette/2019/12/spaghetti-al-pomodoro/jcr:content/header-par/image-single.img10.jpg/1576681061599.jpg'}
                                           text={'Pasta  Pomodoro'}
                        />
                        <FoodCardComponent
                            src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                            text={'Pasta Carbonara'}
                        />
                        <FoodCardComponent food={'selected'}
                                           src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                                           text={'Pasta Carbonara'}
                        />
            </div>

                <h5 className={'mt-2'}>Second Course</h5>
                <div className={'d-flex flex-row flex-nowrap overflow-auto'}>
                    <FoodCardComponent
                        src={"https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="}
                        text={'Pasta Carbonara'}
                    />
                    <FoodCardComponent
                        src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                        text={'Pasta Carbonara'}
                    />
                    <FoodCardComponent food={'selected'}
                                       src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                                       text={'Pasta Carbonara'}
                    />
                </div>
                <h5 className={'mt-2'}>Side Dish</h5>
                <div className={'d-flex flex-row flex-nowrap mb-5 overflow-auto'}>
                    <FoodCardComponent
                        src={"https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="}
                        text={'Pasta Carbonara'}
                    />
                    <FoodCardComponent
                        src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                        text={'Pasta Carbonara'}
                    />
                    <FoodCardComponent food={'selected'}
                                       src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                                       text={'Pasta Carbonara'}
                    />
                </div>
            </Container>
            <NavbarBottom />
        </>
    );
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