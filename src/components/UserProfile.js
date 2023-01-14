import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import NavbarBottom from './NavbarComponent';
import img from '../assets/user.webp'
import { BsPerson  } from 'react-icons/bs';

export default function UserProfile() {
  return (
    <>
      <Container className="mt-5 fs-5 ">
        <Row className="mt-5">
          <Col xs={4}>
            <Image src={img} width="150" height="150"></Image>
            {/* <BsPerson size={150}/> */}
          </Col>
          <Col xs={8} className="text-center ">
            <p>
              <b>Hi Lucy</b>
            </p>
            <div className={'text-center py-2'}>
              <p className={'d-inline fs-5 mt-4'}>2.91&euro;</p>
              <Button variant="light" className={'btn-special mb-2'}>
                <AiOutlinePlus size={30} />
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <p className='my-3'>
            <b>Name:</b> Lucy
          </p>
          <br />
          <p className='my-3'>
            <b>Surname:</b> Rossi
          </p>
          <br />
          <p className='my-3'>
            <b>Student Number:</b> 289892
          </p>
          <br />
          <p className='my-3'>
            <b>Phone Number: </b>3802890764
          </p>
          <br />
          <p className='my-3'>
            <b>Email: </b>Lucyrossi@gmail.com
          </p>
          <br />
        </Row>
        <div className="text-center mt-5">
          <Button varient="primary" className="px-5">
            Edit
          </Button>
        </div>
      </Container>
      <NavbarBottom />
    </>
  );
}
