import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Component } from "react"
import Selected from "./Selected"
import book from '../data/fantasy.json'

class SingleBook extends Component {

    state = {
        selected: false,
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-4">

                        <Col mb-3>
                            <Card h-100>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title className="line-clamp">{book.title}</Card.Title>
                                    <Button mt-auto variant="secondary">${book.price}</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row className="mt-5 justify-content-center">
                       <Selected book={this.state.selected} />
                    </Row>
                </Container>
            </>
        )
    }
}

export default SingleBook