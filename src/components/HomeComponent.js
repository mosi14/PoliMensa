import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Alert} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"

function Home(props) {

    const navigate = useNavigate();

    return (
        <>
            <Alert variant={'danger'} className={'alert-fixed'}>
                GG
            </Alert>
            <Container>
                <h3 className={'text-center my-5'}>Hi { props.user.name }</h3>
                <Card className={'bg-light m-5 py-5'}>
                    <Card.Body>
                        <h3 className={'text-center'}>
                            Your wallet
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>{ props.user.money } &euro;</p>
                            <Button variant="light" className={'btn-special mb-2'}>
                                <AiOutlinePlus size={30}/>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <h4 className={'text-center my-4'}>Choose your mail</h4>
                <Row className={'justify-content-center my-5'}>
                    <Col sm={6}>
                        <Row className={'justify-content-around'}>
                            <Col xs={2} className={'d-flex justify-content-center'}>
                                <Button size="lg" onClick={ () => navigate('/order/first') }>Lunch</Button>
                            </Col>
                            <Col xs={2} className={'d-flex justify-content-center'}>
                                <Button size="lg">Dinner</Button>
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