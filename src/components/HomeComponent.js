import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';

function Home() {
    return (
        <>
            <Container>
                <h3 className={'text-center my-5'}>Hi Lucy</h3>
                <Card className={'bg-light m-5 py-5'}>
                    <Card.Body>
                        <h3 className={'text-center'}>
                            Your wallet
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>2.91&euro;</p>
                            <Button variant="light" className={'btn-special mb-2'}>
                                <AiOutlinePlus size={30}/>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <h4 className={'text-center my-4'}>Choose your mail</h4>
                <Row className={'justify-content-center my-5'}>
                    <Col sm={2} className={'d-flex justify-content-center'}>
                        <Button size="lg">Lunch</Button>
                    </Col>
                    <Col sm={2} className={'d-flex justify-content-center'}>
                        <Button size="lg">Dinner</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default Home;