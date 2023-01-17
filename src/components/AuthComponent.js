import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth, getUserLogin } from '../Firebase';
import {useState} from "react";

function Login(props) {

    const navigate = useNavigate();

    let borderError = 'border border-danger';
    const errorShowTime = 3000;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let login = (e) => {
        e.preventDefault();

        if ( email.trim() === '' ) {
            setEmailError(true);
            setTimeout(() => setEmailError(false), errorShowTime);
        }
        else
            setEmailError(false);

        if ( password.trim() === '' ) {
            setPasswordError(true);
            setTimeout(() => setPasswordError(false), errorShowTime);
        }
        else
            setPasswordError(false);

        getUserLogin(email, password).then((user) => {
            props.setUser(user);
            localStorage.setItem(user);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Container>
            <Row className={'align-items-center justify-content-center'} style={{
                height: '100vh'
            }}>
                <Col xs={10} sm={8} xl={6}>
                    <Card className={'bg-light'}>
                        <Card.Body>
                            <Form>
                                <Form.Group className={"mb-3"} controlId="formEmail">
                                    <Form.Label>Student Email</Form.Label>
                                    <Form.Control className={ emailError ? borderError : ''} type="text" placeholder="Enter student email"
                                    onInput={ e => setEmail(e.target.value) }/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className={ passwordError ? borderError : ''} type="password" placeholder="Password"
                                                  onInput={ e => setPassword(e.target.value) }/>
                                </Form.Group>
                                <Row>
                                    <Col className={'text-center'}>
                                        <Button variant="primary" type={'submit'} onClick={ (e) => login(e) }>
                                            Login
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;