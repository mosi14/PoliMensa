import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {useState} from "react";

function Menu() {

    const navigate = useNavigate();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let today = new Date();

    const dayNumber = today.getDay();
    const dayText = daysOfWeek[dayNumber];

    const day = today.getDate();
    const month = today.getMonth();
    const monthText = months[month];
    // const dayText = daysOfWeek[dayNumber];

    const date = dayText + ' ' + day + ' ' + monthText;

    const [chosenTime, setChosenTime] = useState('time6');

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
        setChosenTime(time);
    }

    return (
        <>
            <TopNavbar/>
            <Container>
                <div className={'my-1'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <Row className={'w-100 overflow-auto flex-nowrap'}>
                    <Col>
                        <Card
                            onClick={ () => ChooseTime('time1') }
                            className={ chosenTime === 'time1' ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
                            <Card.Body>
                                <h6 className={'text-center'}>
                                    11
                                </h6>
                                <h6 className={'text-center'}>
                                    Mon
                                </h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            onClick={ () => ChooseTime('time2') }
                            className={chosenTime === 'time2' ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
                            <Card.Body>
                                <h6 className={'text-center'}>
                                    12
                                </h6>
                                <h6 className={'text-center'}>
                                    Tue
                                </h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            onClick={ () => ChooseTime('time3') }
                            className={chosenTime === 'time3' ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
                            <Card.Body>
                                <h6 className={'text-center'}>
                                    13
                                </h6>
                                <h6 className={'text-center'}>
                                    Wed
                                </h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            onClick={ () => ChooseTime('time4') }
                            className={chosenTime === 'time4' ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
                            <Card.Body>
                                <h6 className={'text-center'}>
                                    14
                                </h6>
                                <h6 className={'text-center'}>
                                    Thu
                                </h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            onClick={ () => ChooseTime('time5') }
                            className={chosenTime === 'time5' ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
                            <Card.Body>
                                <h6 className={'text-center'}>
                                    15
                                </h6>
                                <h6 className={'text-center'}>
                                    Fri
                                </h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            onClick={ () => ChooseTime('time6') }
                            className={chosenTime === 'time6' ? 'selectable-card bg-main' : 'bg-light selectable-card'}>
                            <Card.Body>
                                <h6 className={'text-center'}>
                                    16
                                </h6>
                                <h6 className={'text-center'}>
                                    Sat
                                </h6>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h5 className={'mt-2'}>First Course</h5>
                <div className={'d-flex flex-row w-100 overflow-auto'}>
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
                <div className={'d-flex flex-row flex-nowrap'}>
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
                <div className={'d-flex flex-row flex-nowrap mb-5'}>
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
            <NavbarBottom/>
        </>
    );
}

function FoodCardComponent(props) {

    let card = 'd-inline-block flex-shrink-0 mx-1';
    const selectedCard = 'd-inline-block flex-shrink-0 mx-1 border-main';
    const suggestedCard = 'd-inline-block flex-shrink-0 mx-1 border-violet';

    if ( props.food === 'selected' )

        card = selectedCard;

    else if ( props.food === 'suggested' )
        card = suggestedCard;

    return <Card className={ card }>
            <Card.Body className={'p-0'}>
                <img alt={'Food'}
                     src={props.src}
                     width={'150px'}
                     height={'150px'}
                     className={'opacity-75'}
                     style={ {
                         borderRadius: '5%'
                     } }/>

            </Card.Body>
        <Card.Footer>
            <h6 className={'text-center color-main'}
                style={ {
                    overflow: "hidden",

                } }
            >
                { props.text }
            </h6>
        </Card.Footer>
        </Card>
}

export default Menu;