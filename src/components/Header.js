import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeadWrap>
      <Logo src={"1.png"} title="logo" alt="logo" />
      <Contact />
      <More>
        <a>+7(499)-346-21-31</a>
        <a href="mailto: manager@pixelplus.ru">manager@pixelplus.ru</a>
        <a href="www.pixelplus.ru">www.pixelplus.ru</a>
      </More>
    </HeadWrap>
  );
};

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  width: 100%;
  height: 108px;
  padding: 24px 0px 19px 0px;
`;
const Logo = styled.img`
  width: 122px;
  height: 108px;
  cursor: pointer;
`;

const Contact = styled.div`
  background-color: #777777;
  height: 108px;
  width: 279px;
`;

const More = styled.div`
  background-color: #777777;
  width: 513px;
  padding: 0px 20px 0px 0px;
  height: 108px;
  text-align: right;
  a {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    margin-bottom: 5px;
    padding-top: 10px;
  }
  a:first-child {
    text-decoration: none;
  }
`;

export default Header;
