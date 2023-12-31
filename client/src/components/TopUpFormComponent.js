import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row, Form, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {BsEmojiSmile} from "react-icons/bs";
import {useState} from "react";
import {BackArrow} from "./HomeComponent";
import API from "../API";

function TopUpForum(props) {

    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cvc, setCvc] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [amount, setAmount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    const [cardNumberError, setCardNumberError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [cvcError, setCvcError] = useState(false);
    const [expireDateError, setExpireDateError] = useState(false);
    const [amountError, setAmountError] = useState(false);

    const borderError = 'border border-danger';

    let Back = () => {
        navigate('/top-up/');
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

    const errorTime = 3000;

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

        if (amount === 0 || amount == '') {
            setAmountError(true);

            setTimeout(function () {
                setAmountError(false);
            }, errorTime);

        } else if (cardNumber.trim() === '' || cardNumber.trim().length < 16) {
            setCardNumberError(true);

            setTimeout(function () {
                setCardNumberError(false);
            }, errorTime);

        } else if (name.trim() === '') {
            setNameError(true);

            setTimeout(function () {
                setNameError(false);
            }, errorTime);

        } else if (surname.trim() === '') {
            setSurnameError(true);

            setTimeout(function () {
                setSurnameError(false);
            }, errorTime);

        } else if (cvc.trim() === '' || cvc.trim().length < 3) {
            setCvcError(true);

            setTimeout(function () {
                setCvcError(false);
            }, errorTime);

        } else if (expireDate.trim() === '' || expireDate.trim().length < 5) {
            setExpireDateError(true);

            setTimeout(function () {
                setExpireDateError(false);
            }, errorTime);
        } else {
            API.pay(props.user, amount).then( () => {
                props.setUser(null);
            }).catch((error) => {
                console.log(error);
            })

            props.setPayed(true);

            setTimeout(function () {
                props.setPayed(false);
            }, 3000)
            navigate('/');
        }
    }

    const cardClass = 'bg-light align-items-center selectable-card';
    const selectedCard = 'bg-main align-items-center selectable-card';

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container
                className={'main-container'}>
                <Row>
                    <Col xs={1}>
                        <BackArrow Back={ () => Back() }/>
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
                            <Card.Body className={'px-0 text-center'}>
                                <div className={'h4'}>5</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'3'} md={'2'} className={'mx-3'}>
                        <Card className={ amount === 10 ? selectedCard : cardClass }
                         onClick={ () => { SelectAmount(10) }}>
                            <Card.Body className={'px-0 text-center'}>
                                <div className={'h4'}>10</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={'3'} md={'2'} className={'ms-3'}>
                        <Card className={ amount === 15 ? selectedCard : cardClass }
                        onClick={ () => { SelectAmount(15) }} >
                            <Card.Body className={'px-0 text-center'}>
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
                                <Form.Control className={ amountError ? borderError : '' }
                                              type='text'
                                              placeholder='Enter the amount'
                                              value={amount}
                                              onChange={(ev)=> {setAmount(ev.target.value)}} />
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
                                          className={ cardNumberError ? borderError : ''}
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
                                                  className={ nameError ? borderError : ''}
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
                                                  className={ surnameError ? borderError : '' }
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
                                                  className={ cvcError ? borderError : '' }
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
                                                  className={ expireDateError ? borderError : '' }
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