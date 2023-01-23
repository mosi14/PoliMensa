import React from 'react';
import {Container, Row, Col, Image, Button, Nav} from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import NavbarBottom, {TopNavbar} from './NavbarComponent';
import img from '../assets/user.webp'
import { HiOutlineIdentification  } from 'react-icons/hi';
import { FaUserGraduate  } from 'react-icons/fa';
import { BsTelephoneFill  } from 'react-icons/bs';
import { RiMoneyEuroCircleLine  } from 'react-icons/ri';
import { MdAlternateEmail  } from 'react-icons/md';
import { Next } from 'react-bootstrap/esm/PageItem';
import { useNavigate } from "react-router-dom"

export default function UserProfile() {

  const navigate = useNavigate();

  let Next = () => {
    navigate('/top-up');
}


let Edit = () => {
  navigate('/profile/edit');
}

  return (
    <>
      <TopNavbar/>
      <Container>
        <Row className="mt-5 text-center">
          <Col xs={{
            span: 8,
            offset: 2
          }}>
            <Row>
              <Col>
                <Image src={'https://flxt.tmsimg.com/assets/587180_v9_bb.jpg'} width={'200px'} height={'200px'}/>
              </Col>
            </Row>
            <Row className={'mt-2'}>
              <Col>
                <div className={'d-flex justify-content-center'}>
                  <h3>Ana de Armas</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className={'bg-main'}>Edit</Button>
              </Col>
              <Col>
                <Button variant={'primary'}>Change photo</Button>
              </Col>
            </Row>
            <Row className={'mt-3'}>
              <Col
              xs={{
                span: 8,
                offset: 2
              }}>
                <Nav className={'d-flex flex-column'}>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <HiOutlineIdentification size={30}/>
                      <h6>s707001</h6>
                    </div>
                  </Nav.Link>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <BsTelephoneFill size={30}/>
                      <h6>+39353511171</h6>
                    </div>
                  </Nav.Link>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <MdAlternateEmail size={30}/>
                      <h6>s707001@polito.it</h6>
                    </div>
                  </Nav.Link>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <RiMoneyEuroCircleLine size={30}/>
                      <h6>2.99</h6>
                      <AiOutlinePlus size={30} />
                    </div>
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <NavbarBottom />
    </>
  );
}
