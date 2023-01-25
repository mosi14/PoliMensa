import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {BackArrow} from "./HomeComponent";

function LastTransaction(props) {

    const navigate = useNavigate();

    let Back = () => {
        navigate('/top-up');
    }

    let GoPaymentForum = () => {
        navigate('/top-up/forum');
    }

    return (
        <>
            <TopNavbar user={props.user}/>
            <Container>
                <div className={'mt-2'}>
                    <BackArrow Back={ () => Back() }/>
                </div>
                <h3 className={'text-center my-2'}>List of transactions</h3>
                <Row className={'mt-3'}>
                    <Col>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>10/11/22 - 7&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>12/11/22 - 5&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>10/11/22 - 10&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>10/11/22 - 15&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>01/11/22 - 5&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>17/10/22 -  10&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}> 14/10/22      -      5&euro;</Button>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center my-2'}>
                            <Col sm={8}>
                                <Button size="lg" className={'p-2 bg-main w-100 non-selectable-button'} disabled={true}>10/10/22      -       20&euro;</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom />
        </>
    );
}

export default LastTransaction;