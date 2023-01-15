import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {useState} from "react";

function Login() {

    const navigate = useNavigate();

    let borderError = 'border border-danger';
    const errorShowTime = 3000;

    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');

    const [studentIdError, setStudentIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let login = () => {

        if ( studentID.trim() === '' ) {
            setStudentIdError(true);
            setTimeout(() => setStudentIdError(false), errorShowTime);
        }
        else
            setStudentIdError(false);

        if ( password.trim() === '' ) {
            setPasswordError(true);
            setTimeout(() => setPasswordError(false), errorShowTime);
        }
        else
            setPasswordError(false);


    }

    return (
        <Container>
            <Row className={'align-items-center justify-content-center'} style={{
                height: '100vh'
            }}>
                <Col xs={10} sm={8} xl={6}>
                    <Card className={'bg-light'}>
                        <Card.Body>
                            <Form.Group className={"mb-3"} controlId="formStudentId">
                                <Form.Label>Student ID</Form.Label>
                                <Form.Control className={ studentIdError ? borderError : ''} type="text" placeholder="Enter student ID"
                                onInput={ e => setStudentID(e.target.value) }/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className={ passwordError ? borderError : ''} type="password" placeholder="Password"
                                              onInput={ e => setPassword(e.target.value) }/>
                            </Form.Group>
                            <Row>
                                <Col className={'text-center'}>
                                    <Button variant="primary" onClick={ () => login() }>
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;