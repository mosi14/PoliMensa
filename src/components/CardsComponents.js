import {Card, Col, Row} from "react-bootstrap";

export function SelectableCard(props) {
    return (
        <Col sm={3}>
            <Card className={ props.chosenTime === props.time.id ? props.selectedCard : props.card }
                  onClick={ () => props.selectTime(props.time.id) }>
                <Card.Body>
                    <Row className={'align-items-center text-center my-5'}>
                        <Col>
                                <h5>{ props.text }</h5>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}