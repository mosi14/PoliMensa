import NavbarBottom, {TopNavbar} from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

function QueueNumber() {

    const navigate = useNavigate();
    const [type,setType] = useState();

    let Next = () => {

        if(type === "cancel"){
            navigate('/');
        }
       

        if(type === "edit"){
            navigate('/order/choose-time');
        }
        
    }

    return (
        <>
            <TopNavbar/>
            <Container>
                {/* <h3 className={'text-center my-5'}>Hi Lucy</h3> */}
                <Card className={'bg-light m-5 py-5'}>
                    <Card.Body >
                        <h3 className={'text-center'}>
                           Your number in the queue:
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>35</p>
                        </div>
                        <h3 className={'text-center'}> Chosen time slot: </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>11:30 -11:45</p>
                        </div>
                        <h3 className={'text-center'}>
                         Number of people in the queue:
                        </h3>
                        <div className={'text-center py-2'}>
                            <p className={'d-inline fs-5 mt-4'}>33</p>
                        </div>
                    </Card.Body>
                </Card>
                
                 <Row className={'justify-content-center my-4'}>
                    <Col sm={4} className={'text-center '}>
                        <Button size="lg" onClick={ () => {setType("cancel"); Next()} }>Cancel the reservation </Button>
                    </Col>
                    <Col sm={4} className={'text-center'}>
                        <Button size="lg" onClick={ () => {setType("edit");Next()} }>Change time </Button>
                    </Col>

                </Row>
               
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default QueueNumber;