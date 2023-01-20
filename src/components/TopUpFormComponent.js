import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {useState} from "react";

function TopUpForum() {

    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cvc, setCvc] = useState('');
    const [expireDate, setExpireDate] = useState('');

    let Back = () => {
        navigate('/top-up/methods');
    }

    let GoPaymentMethod = () => {
        navigate('/top-up/forum');
    }

    let maskCardNumber = (event, value, caret) => {
        let caretPosition = caret;
        let sanitizedValue = value.replace(/[^0-9]/gi, '');
        let parts = [];

        for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }

        for (let i = caretPosition - 1; i >= 0; i--) {
            let c = value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }

        caretPosition += Math.floor(caretPosition / 4);

        setCardNumber(parts.join(' '))
        event.target.lastValue = parts.join(' ');
        event.target.selectionStart = event.target.selectionEnd = caretPosition;
    }

    let maskExpireDate = (event, value, caret) => {
        let caretPosition = caret;
        let sanitizedValue = value.replace(/[^0-9]/gi, '');
        let parts = [];

        for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }

        for (let i = caretPosition - 1; i >= 0; i--) {
            let c = value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }

        caretPosition += Math.floor(caretPosition / 2);

        setExpireDate(parts.join('/'))
        event.target.lastValue = parts.join('/');
        event.target.selectionStart = event.target.selectionEnd = caretPosition;
    }

    return (
        <>
            <Container>
                <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <h3 className={'text-center mb-4'}>Choose Amount</h3>
                <Row className={'justify-content-center align-items-center mt-1'}>
                    <Col xs={'3'} md={'2'} className={'me-3'}>
                        <Card className={'bg-primary align-items-center selectable-card'}>
                            <Card.Body className={'p-4 text-center'}>
                                <div className={'text-white h4'}>5</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'3'} md={'2'} className={'mx-3'}>
                        <Card className={'bg-light align-items-center selectable-card'}>
                            <Card.Body className={'p-4 text-center'}>
                                <div className={'h4'}>10</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'3'} md={'2'} className={'ms-3'}>
                        <Card className={'bg-light align-items-center selectable-card'}>
                            <Card.Body className={'p-4 text-center'}>
                                <div className={'h4'}>15</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={'align-items-center mt-3'}> 
                <Form  >
                <Form.Group >
                  <Form.Label className='m-auto'>Enter the amount of money</Form.Label>
                  <Form.Control className='label-field' type='text'  placeholder='Enter the amount ' />
                </Form.Group>
              </Form>
                </Row>


                <Row className={'align-items-center mt-3'}>
                    <Col md={{ span: 3, offset: 2 }}>
                        <h3 className={'text-center'}>Credit card</h3>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }}>
                        <Row className={'text-center'}>
                            <Col>
                                <img src={'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'}
                                     width={'30px'} height={'60px'}
                                     alt={'Visa'}/>
                            </Col>
                            <Col>
                                <img src={'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg'}
                                     width={'30px'} height={'60px'}
                                     alt={'Master Card'}/>
                            </Col>
                            <Col>
                                <img src={'https://www.pngall.com/wp-content/uploads/9/American-Express-Logo-PNG-Pic.png'}
                                     width={'45px'} height={'60px'}
                                     alt={'American Express'}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={'justify-content-center mt-4'}>
                    <Col sm={6}>
                        <Form.Group controlId="cardNumber">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX"
                                          minLength={19}
                                          maxLength={19}
                                          value={cardNumber}
                            onInput={ event => maskCardNumber(event, event.target.value, event.target.selectionStart) }/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={'justify-content-center mt-3'}>
                    <Col sm={6}>
                        <Row>
                            <Col>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name"
                                                  minLength={20}
                                                  maxLength={20}
                                                  value={name}
                                                  onInput={ event => setName(event.target.value) }/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" placeholder="Surname"
                                                  minLength={20}
                                                  maxLength={20}
                                                  value={surname}
                                                  onInput={ event => setSurname(event.target.value) }/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={'justify-content-center mt-3'}>
                    <Col sm={6}>
                        <Row>
                            <Col>
                                <Form.Group controlId="cvc">
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control type="text" placeholder="CVC"
                                                  minLength={3}
                                                  maxLength={3}
                                                  value={cvc}
                                                  onInput={ event => setCvc(event.target.value) }/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="expireDate">
                                    <Form.Label>Expire Date</Form.Label>
                                    <Form.Control type="text" placeholder="Expire Date"
                                                  minLength={5}
                                                  maxLength={5}
                                                  value={expireDate}
                                                  onInput={ event => maskExpireDate(event, event.target.value, event.target.selectionStart) }/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={'justify-content-center mt-5'}>
                    <Col sm={2} className={'text-center'}>
                        <Button variant={'primary'} size={'lg'}>Confirm</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default TopUpForum;