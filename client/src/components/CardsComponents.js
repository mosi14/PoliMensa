import {Card, Col, Row} from "react-bootstrap";
import {MdAccessTime} from "react-icons/md";

export function SelectableCard(props) {
    return (
        <Col sm={4} md={3}>
            <Card className={ props.chosenTime === props.time.id ? props.selectedCard : props.card }
                  onClick={ () => props.selectTime(props.time.id) }>
                <Card.Body>
                    <Row className={'align-items-center text-center my-4'}>
                        <Col>
                                <h4>{ props.text }</h4>
                        </Col>
                    </Row>
                    <Row className={'align-items-center text-center my-1'}>
                        <Col>
                            <div className={'align-middle'}>
                                <MdAccessTime size={20} className={'mb-1'}/> <h6 className={'d-inline'}>{ props.time.expected_time }</h6>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}