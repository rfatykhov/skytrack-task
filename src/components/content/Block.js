import React from "react";
import styled from "styled-components";

const Block = () => {
  return (
    <Images>
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
      <img src={"6.png"} title="block" alt="block" />
    </Images>
  );
};

const Images = styled.div`
  width: 757px;
  height: 325px;
  img {
    margin: 19px 25px 0 0;
    width: 130px;
    height: 150px;
  }
  img:nth-child(5) {
    margin: 19px 0px 0 5px;
  }
`;

export default Block;
