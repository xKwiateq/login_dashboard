import React from "react";
import "../styles/homePage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Button } from "react-bootstrap";
import { removeUserSession } from "../utils/session";
import { redirect } from "next/dist/server/api-utils";

const index = () => {
  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="container">
        <div className="content col-12">
          <Navbar bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#" style={{ color: "white" }}>
                Navbar
              </Navbar.Brand>
              <Button variant="success">Wyloguj</Button>
            </Container>
          </Navbar>
          <div>Dane użytkownika:</div>
        </div>
      </div>
    </div>
  );
};

export default index;
