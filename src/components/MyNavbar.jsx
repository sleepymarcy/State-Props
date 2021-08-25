import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const MyNavbar = (props) => {

    return(
        <Navbar collapseOnSelect expand="lg" bg={props.color} variant={props.color}>
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar