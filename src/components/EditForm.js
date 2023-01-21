import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

function EditForm (){

    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [studentNumber,setStudentNumber] = useState();
    const [phone,setPhone] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
       
        navigate('/profile');
    }

    let Back = () => {
        navigate('/order/profile');
    }

    return( 

        <>
        <Container className={'main-container'}>
            <div className={'mt-2'}>
                <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                    <MdOutlineArrowBackIosNew size={25}/>
                </Button>
            </div>
            <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Student number</Form.Label>
        <Form.Control type="text" placeholder="sxxxxxx" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="enter phone number" value={email} onChange={(ev) => setEmail(ev.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={()=> handleSubmit}>
        Save
      </Button>
    </Form>


            {/* <Row className={'justify-content-center my-4'}>
                <Col xs={2}>
                    <Button size="lg" onClick={ () => Next() }>Next</Button>
                </Col>
            </Row> */}
        </Container>
        <NavbarBottom/>
    </>






    );
};
export default EditForm;