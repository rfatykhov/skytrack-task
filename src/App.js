import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  margin: auto;
  width: 959px;
  height: 1150px;
  padding: 24px 70px;
  position: relative;
`;
