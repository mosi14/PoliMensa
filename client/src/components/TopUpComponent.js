import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {BackArrow} from "./HomeComponent";

function TopUp(props) {

    const navigate = useNavigate();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let today = new Date();

    const dayNumber = today.getDay();
    const dayText = daysOfWeek[dayNumber];

    const day = today.getDate();
    const month = today.getMonth();
    const monthText = months[month];

    const date = dayText + ' ' + day + ' ' + monthText;

    let Back = () => {
        navigate('/');
    }

    let GoPaymentMethod = () => {
        navigate('/top-up/forum');
    }

    let GoLastTransactions = () => {
        navigate('/top-up/last-transactions');
    }

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <BackArrow Back={ () => Back() }/>
                </div>
                <h3 className={'text-center my-2'}>{ date }</h3>
                <Row>
                    <Col
                        lg={{
                            span: 6,
                            offset: 3
                        }}
                        xs={12}>
                        <Card className={'bg-light m-5 py-5'}>
                            <Card.Body>
                                <h3 className={'text-center'}>
                                    The balance of your wallet:
                                </h3>
                                <div className={'text-center py-2'}>
                                    <p className={'d-inline fs-5 mt-4'}>{ props.user.money }&euro;</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={12} md={6}>
                        <Button size="lg" className={'p-2 w-100 bg-main'} onClick={ () => GoPaymentMethod() }>Top-up wallet</Button>
                    </Col>
                </Row>
                <Row className={'justify-content-center my-4'}>
                    <Col sm={12} md={6}>
                        <Button size="lg" className={'p-2 w-100 bg-main'} onClick={ () => GoLastTransactions() }>List of transactions</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom />
        </>
    );
}

export default TopUp;