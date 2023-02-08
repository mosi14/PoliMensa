import React from 'react';
import {Container, Row, Col, Image, Button, Nav, Alert} from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import NavbarBottom, {TopNavbar} from './NavbarComponent';
import { HiOutlineIdentification  } from 'react-icons/hi';
import {BsEmojiSmile, BsTelephoneFill} from 'react-icons/bs';
import { RiMoneyEuroCircleLine  } from 'react-icons/ri';
import { MdAlternateEmail  } from 'react-icons/md';
import { useNavigate } from "react-router-dom"
import {BackArrow} from "./HomeComponent";

export default function UserProfile(props) {

  const navigate = useNavigate();

  let GoEdit = () => {
    navigate('/profile/edit');
  }

  let Pay = () => {
    navigate('/top-up/forum');
  }

  let Back = () => {
    navigate('/');
  }

  let alert = '';

  if (props.isUserEdited) {
    alert =
        <Alert key={'success'} variant={'success'} className={'alert-fixed mt-1 text-center align-items-center'}>
          <BsEmojiSmile size={23}/>
           Updated !
        </Alert>
  }

  return (
    <>
      <TopNavbar user={props.user}/>
      <Container className={'main-container'}>
        <BackArrow Back={ () => { Back() } }/>
        { alert }
        <Row className="mt-3 text-center">
          <Col xs={12} md={{
            span: 8,
            offset: 2
          }}>
            {/*<Row>*/}
            {/*  <Col>{ alert }</Col>*/}
            {/*</Row>*/}
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
            <Row className={'justify-content-center'}>
              <Col xs={3}>
                <Button className={'bg-main'} onClick={ () => { GoEdit() } }>Edit</Button>
              </Col>
              <Col xs={5} md={4}>
                <Button className={'bg-main'} disabled={true}>Change photo</Button>
              </Col>
            </Row>
            <Row className={'mt-3'}>
              <Col
              xs={{
                span: 6,
                offset: 3
              }}>
                <Nav className={'d-flex flex-column'}>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <HiOutlineIdentification className={'me-2'} size={30}/>
                      <h6 className={'m-0'}>{ props.user.studentid }</h6>
                    </div>
                  </Nav.Link>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <BsTelephoneFill className={'me-2'} size={30}/>
                      <h6 className={'m-0'}>+39 { props.user.phone }</h6>
                    </div>
                  </Nav.Link>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <MdAlternateEmail className={'me-2'} size={30}/>
                      <h6 className={'m-0'}>{ props.user.email }</h6>
                    </div>
                  </Nav.Link>
                  <Nav.Link>
                    <div className="d-flex align-items-center">
                      <RiMoneyEuroCircleLine className={'me-2'} size={30}/>
                      <h6 className={'my-0 me-2'}>{ props.user.money }</h6>
                      <AiOutlinePlus size={30} onClick={ () => { Pay() } } />
                    </div>
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <NavbarBottom/>
    </>
  );
}
