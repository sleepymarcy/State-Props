import { Container, Col, Card, Button } from "react-bootstrap";
import { Component } from "react"
import Selected from "./Selected"

class SingleBook extends Component {

    state = {
        selected: false,
    }

    render() {
        return (
            <>
                <Container>
                    <Col mb-3>
                        <Card h-100>
                            <Card.Img variant="top" src={props.img} />
                            <Card.Body>
                                <Card.Title className="line-clamp">{props.title}</Card.Title>
                                <Button mt-auto variant="secondary">${props.price}</Button>
                                <Selected book={this.state.selected} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}

export default SingleBook