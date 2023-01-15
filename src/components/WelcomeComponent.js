import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"

function Welcome() {

    const navigate = useNavigate();

    let Go = () => {
        navigate('/login');
    }

    return (
        <>
            <Row className={'mt-4 align-items-center bg-light'}
                 style={{
                     height: '75vh'
                 }}>
                <Col className={'text-center'}>
                    Welcome to PoliMensa
                </Col>
            </Row>
            <Row className={'mt-4'}>
                <Col className={'text-center'}>
                    <Button onClick={ () => Go() } variant={'primary'}>Get Started</Button>
                </Col>
            </Row>
        </>
    );
}

export default Welcome;