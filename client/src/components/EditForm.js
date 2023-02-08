import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react';
import {BackArrow} from "./HomeComponent";
import GlobalSpinner from "./SpinnerComponent";
import API from "../API";

function EditForm (props){

    const navigate = useNavigate();

    const [email, setEmail] = useState( props.user.email);
    const [phone, setPhone] = useState( props.user.phone);

    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const borderError = 'border border-danger';

    const handleSubmit = () => {
        // event.preventDefault();

        if (email.trim() === '') {
            setEmailError(true);

            setTimeout(function () {
                setEmailError(false);
            }, 3000);
        } else if (phone.trim() === '') {
            setPhoneError(true);

            setTimeout(function () {
                setPhoneError(false);
            }, 3000);
        } else {
            API.editUser(props.user, email, phone).then((response) => {

                props.setUser(null);
                props.setIsUserEdited(true);

                setTimeout(function () {
                    props.setIsUserEdited(false);
                }, 3000);

                navigate('/profile');
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    let Back = () => {
        navigate('/profile');
    }

    return(
        <>
            <TopNavbar user={props.user}/>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <BackArrow Back={ () => { Back() } } />
                </div>
                    <Form.Group className="my-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      value={email}
                                      className={emailError ? borderError : ''}
                                      onChange={(ev) => setEmail(ev.target.value)}/>
                    </Form.Group>
                    <Form.Label htmlFor="formPhoneNumber">Phone number</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="addon-phone-number">
                            +393
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            id="formPhoneNumber"
                            placeholder="Enter phone number"
                            aria-label="Enter phone number"
                            aria-describedby="addon-phone-number"
                            className={phoneError ? borderError : ''}
                            value={phone}
                            onChange={
                                (ev) =>
                                ev.target.value.length <= 8 ? setPhone(ev.target.value) : null
                            }
                        />
                    </InputGroup>
                    <Button variant="primary" type="submit" className={'bg-main'} onClick={()=> handleSubmit()}>
                        Save
                    </Button>
            </Container>
            <NavbarBottom />
        </>
    );
};
export default EditForm;