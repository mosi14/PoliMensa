import {Button, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi';
import NavbarBottom, {TopNavbar} from "./NavbarComponent";


function Welcome(props) {

    const navigate = useNavigate();

    let Go = () => {
        navigate('/order/choose-time');
    }

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container fluid={true}>
                <Row className={'align-items-center bg-light'}
                     style={{
                         height: '65vh'
                     }}>
                    <Col xs={12} className={'text-center'}>
                        <GiKnifeFork className={'d-inline'} size={40}/>
                        <h6 className={'d-inline'}>Welcome to PoliMensa</h6>
                        <p className={'mt-2'}>This app is designed for the students of Politechnico di Torino to<br/>
                            improve their experience in the University canteen.</p>
                    </Col>
                    <Col className={'text-center'}>
                        <p>To book a time slot click button below.</p>
                    </Col>
                </Row>
                <Row className={'mt-4'}>
                    <Col className={'text-center'}>
                        <Button className={'bg-main'} onClick={ () => Go() } variant={'primary'}>Book time slot</Button>
                    </Col>
                </Row>
            </Container>

            <NavbarBottom/>
        </>
    );
}

export default Welcome;