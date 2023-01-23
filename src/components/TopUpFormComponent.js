import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Form, Alert} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {useState, useEffect} from "react";
import {BackArrow} from "./HomeComponent";

function TopUpForum(props) {

    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cvc, setCvc] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [amount, setAmount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);


    let Back = () => {
        navigate('/top-up/');
    }

    // let GoPaymentMethod = () => {
    //     navigate('/top-up/forum');
    // }


    let  Next = () => {
        navigate('/');
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

    let alert = '';

    let alertShow = () =>{

        setShowAlert(true);
       
    }

    if (showAlert) {
        alert =
            <Alert key={'success'} variant={'success'} className={'alert-fixed mt-1 text-center align-items-center'}>
                <BsEmojiSmile size={23}/>
                  The payment has been successful!
            </Alert>
    }

    let SelectAmount = (amount) => {
        setAmount(amount)
    }

    let PaymentConfirm = () => {
        props.setPayed(true);
        setTimeout(function () {
            props.setPayed(false);
        }, 3000)
        navigate('/');
    }

    const cardClass = 'bg-light align-items-center selectable-card';
    const selectedCard = 'bg-main align-items-center selectable-card';

    return (
        <>
            <Container style={{
                height: '80vh'
            }}>
            {/* <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div> */}
                <Row>
                    <Col xs={1}>
                        <BackArrow back={ () => Back() }/>
                    </Col>
                    <Col xs={10}>
                        { alert }
                    </Col>
                </Row>    
                <h3 className={'text-center mb-3'}>Choose Amount</h3>
                <Row className={'justify-content-center align-items-center mt-1'}>
                    <Col xs={'3'} md={'2'} className={'me-3'}>
                        <Card className={ amount === 5 ? selectedCard : cardClass }
                         onClick={ () => { SelectAmount(5) }}>
                            <Card.Body className={'p-4 text-center'}>
                                <div className={'h4'}>5</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'3'} md={'2'} className={'mx-3'}>
                        <Card className={ amount === 10 ? selectedCard : cardClass }
                         onClick={ () => { SelectAmount(10) }}>
                            <Card.Body className={'p-4 text-center'}>
                                <div className={'h4'}>10</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'3'} md={'2'} className={'ms-3'}>
                        <Card className={ amount === 15 ? selectedCard : cardClass }
                        onClick={ () => { SelectAmount(15) }} >
                            <Card.Body className={'p-4 text-center'}>
                                <div className={'h4'}>15</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={'align-items-center mt-1'}>
                    <Col
                        xs={{
                            span: 6,
                            offset: 3
                        }}>
                        <Form  >
                            <Form.Group >
                                <Form.Label className='m-auto'>Enter the amount of money</Form.Label>
                                <Form.Control className='label-field' type='text'  placeholder='Enter the amount' value={amount} onChange={(ev)=> {setAmount(ev.target.value)}} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className={'align-items-center mt-2'}>
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
                <Row className={'justify-content-center mt-2'}>
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
                <Row className={'justify-content-center mt-2'}>
                    <Col sm={2} className={'text-center'}>
                        <Button className={'bg-main'} size={'lg'} onClick={ () =>{ PaymentConfirm() } }>Confirm</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default TopUpForum;