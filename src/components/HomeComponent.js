import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Alert} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"

function Home(props) {

    const navigate = useNavigate();

    let Next = () => {
        navigate('/order/choose-time');
    }

    return (
        <>
            <Alert variant={'danger'} className={'alert-fixed'}>
                GG
            </Alert>
            <Container>
                <h3 className={'text-center my-5'}>Hi { props.user.name }</h3>
                <Card className={'bg-light m-5 py-5'}>
                    <Card.Body >
                        {/* <h3 className={'text-center'}>
                            Number of people in the queue:
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>34</p>
                        </div> */}
                        <h3 className={'text-center'}>
                            Your number:
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>35</p>
                        </div>
                        <h3 className={'text-center'}>
                             Booked time slot:
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>11:30 - 11:45</p>
                        </div>
                    </Card.Body>
                </Card>
                
                <Row className={'justify-content-center my-4'}>
                    <Col sm={4} className={'text-center'}>
                        <Button size="lg" onClick={ () => Next() }>Book a Time slot</Button>
                    </Col>
                </Row>
                
                <h4 className={'text-center my-4'}>Choose your meal</h4>
                <Row className={'justify-content-center my-5'}>
                    <Col sm={6}>
                        <Row className={'justify-content-around'}>
                            <Col xs={2} className={'d-flex justify-content-center'}>
                                <Button size="lg" onClick={ () => navigate('/order/first') }>Lunch</Button>
                            </Col>
                            <Col xs={2} className={'d-flex justify-content-center'}>
                                <Button size="lg" onClick={ () => navigate('/order/first') }>Dinner</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default Home;