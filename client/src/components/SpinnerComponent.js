import { Spinner, Container, Row, Col } from "react-bootstrap";

function GlobalSpinner() {
    return (
        <Container>
            <Row className={'align-items-center'} style={{
                height: '100vh'
            }}>
                <Col className={'text-center'}>
                    <Spinner animation="border" variant="primary" style={{ width: "4rem", height: "4rem" }} />
                </Col>
            </Row>
        </Container>
    );
}

export default GlobalSpinner;