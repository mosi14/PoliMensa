import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";

function TopUp() {

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
                <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <h3 className={'text-center my-2'}>{ date }</h3>
                <Card className={'bg-light m-5 py-5'}>
                    <Card.Body>
                        <h3 className={'text-center'}>
                            Your wallet
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>2.91&euro;</p>
                        </div>
                    </Card.Body>
                </Card>
                <h4 className={'text-center my-4'}>Choose your mail</h4>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={12} md={6}>
                        <Button size="lg" className={'p-2 w-100'} onClick={ () => GoPaymentMethod() }>Top-up wallet</Button>
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={12} md={6}>
                        <Button size="lg" className={'p-2 w-100'} onClick={ () => GoLastTransactions() }>Last transaction</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default TopUp;