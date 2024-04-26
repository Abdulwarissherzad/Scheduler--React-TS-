import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Scheduling for meeting, "React Type Script Bootstrap Tutorial."
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
