import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";

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

    let Back = () => {
        navigate('/');
    }

    let GoPaymentMethod = () => {
        navigate('/top-up/methods');
    }

    let GoLastTransactions = () => {
        navigate('/top-up/last-transactions');
    }

    return (
        <>
            <Container>
                <div className={'my-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <Row className={'w-100 overflow-auto flex-nowrap'}>
                    <Col>
                        <Card className={'bg-primary text-white'}>
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
                        <Card className={'bg-light'}>
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
                        <Card className={'bg-light'}>
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
                        <Card className={'bg-light'}>
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
                        <Card className={'bg-light'}>
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
                        <Card className={'bg-light'}>
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
                    <Col>
                        <Card className={'bg-light'}>
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
                </Row>
                <h5 className={'mt-5'}>First Course</h5>
                <div className={'d-flex flex-row w-100 overflow-auto'}>
                    <FoodCardComponent
                        src={"https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="}
                        text={'Pasta/Riso in Bianco'}
                    />
                    <FoodCardComponent
                        src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                        text={'Pasta Carbonara'}
                    />
                    <FoodCardComponent
                        src={'https://statics.cucchiaio.it/content/cucchiaio/it/ricette/2019/12/spaghetti-al-pomodoro/jcr:content/header-par/image-single.img10.jpg/1576681061599.jpg'}
                        text={'Pasta  Pomodoro'}
                    />
                    <FoodCardComponent
                        src={'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/11/il-riso-in-bianco.jpg'}
                        text={'Pasta Carbonara'}
                    />
                    <FoodCardComponent
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
                </div>
                <h5 className={'mt-2'}>Side Dish</h5>
                <div className={'d-flex flex-row flex-nowrap'}>
                    <FoodCardComponent
                        src={"https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="}
                        text={'Pasta Carbonara'}
                    />
                </div>
            </Container>
            <NavbarBottom/>
        </>
    );
}

function FoodCardComponent(props) {
    return <Card className={'d-inline-block flex-shrink-0'}>
            <Card.Body className={'p-0'}>
                <img alt={'Food'}
                     src={props.src}
                     width={'100px'}
                     height={'100px'}
                     className={'opacity-75'}
                     style={ {
                         borderRadius: '5%'
                     } }/>
                <h6 className={'text-center text-white'}
                    style={ {
                        position: 'absolute',
                        top: '25%',
                    } }>
                    { props.text }
                </h6>
            </Card.Body>
        </Card>
}

export default Menu;