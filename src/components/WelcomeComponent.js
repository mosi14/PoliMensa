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
                    <Col className={'text-center'}>
                        <GiKnifeFork size={40}/>
                        Welcome to PoliMensa
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