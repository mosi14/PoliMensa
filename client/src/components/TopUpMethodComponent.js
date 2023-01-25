import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";

function TopUpMethod(props) {

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
        navigate('/top-up');
    }

    let GoPaymentForum = () => {
        navigate('/top-up/forum');
    }

    return (
        <>
            <Container>
                <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <h3 className={'text-center my-2 mb-5'}>Choose your payment method</h3>
                <Row className={'mt-5'}>
                    <Col>
                        <Row className={'justify-content-center my-4'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 w-100'}
                                        onClick={ () => GoPaymentForum() }>Credit/Debit card</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-4'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 w-100'}
                                        onClick={ () => GoPaymentForum() }>Paypal</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-4'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 w-100'}
                                        onClick={ () => GoPaymentForum() }>Apple pay</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default TopUpMethod;