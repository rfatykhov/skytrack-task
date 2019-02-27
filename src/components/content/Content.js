import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Center from "./Center";

const Content = () => {
  return (
    <StyledContent>
      <Left />
      <Center />
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.div`
  position: relative;
  margin: 24px 0 24px 0;
`;
