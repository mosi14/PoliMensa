import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Container, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import {BackArrow} from "./HomeComponent";

function EditForm (props){

    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [studentNumber,setStudentNumber] = useState();
    const [phone,setPhone] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
       
        navigate('/profile');
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
            <Form>
      <Form.Group className="my-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Student number</Form.Label>
        <Form.Control type="text" placeholder="sxxxxxx" value={studentNumber} onChange={(ev) => setStudentNumber(ev.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="enter phone number" value={phone} onChange={(ev) => setPhone(ev.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className={'bg-main'} onClick={()=> handleSubmit}>
        Save
      </Button>
    </Form>


            {/* <Row className={'justify-content-center my-4'}>
                <Col xs={2}>
                    <Button size="lg" onClick={ () => Next() }>Next</Button>
                </Col>
            </Row> */}
        </Container>
        <NavbarBottom />
    </>






    );
};
export default EditForm;