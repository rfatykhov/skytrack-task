import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FootLeft>
        <ul>
          <li>Пункт 01</li>
          <li>Пункт 02</li>
          <li>Пункт 03</li>
          <li>Пункт 04</li>
          <li>Пункт 05</li>
          <li>Пункт 06</li>
          <li>Пункт 07</li>
        </ul>

        <ul>
          <li>Пункт 08</li>
          <li>Пункт 09</li>
          <li>Пункт 10</li>
          <li>Пункт 11</li>
          <li>Пункт 12</li>
          <li>Пункт 13</li>
          <li>Пункт 14</li>
        </ul>
      </FootLeft>
      <FootCenter>
        <ul>
          <li>▪ Поисковое продвижение сайтов</li>
          <li>▪ Тариф «Старт»</li>
          <li>▪ Тариф «Продвижение Плюс»</li>
          <li>▪ Тариф «Интернет-магазин»</li>
          <li>▪ Тариф «Эксклюзив»</li>
          <li>▪ Тариф «Контекст + SEO»</li>
          <li>▪ Тариф «Регион»</li>
        </ul>
      </FootCenter>
      <FootRightHigh />
      <img src={"13.png"} alt="foot-right" title="foot-right" />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 959px;
  height: 180px;
  position: absolute;
  margin: 24px 0 24px 0;
  padding-bottom: 25px;
`;

const FootLeft = styled.div`
  width: 260px;
  height: 180px;
  margin-right: 28px;
  background-color: #777777;
  display: inline-block;
  padding: 20px 0 0 23px;
  ul {
    font-family: Arial;
    font-size: 14px;
    position: absolute;
    padding: 0px 0px 17px 25px;
    list-style: none;
  }
  ul:last-child {
    margin-left: 100px;
  }
  li {
    color: #ffffff;
    margin-bottom: 3px;
  }
`;

const FootCenter = styled.div`
  width: 280px;
  height: 180px;
  background-color: #777777;
  display: inline-block;
  padding: 18px 0 0 25px;
  margin-right: 28px;
  ul {
    font-family: Arial;
    font-size: 14px;
    color: #ffffff;
    position: absolute;
    padding: 0px 0px 17px 25px;
  }
  li {
    list-style: none;
    margin-bottom: 3px;
  }
`;

const FootRightHigh = styled.div`
  background-color: #777777;
  display: inline-block;
  width: 308px;
  height: 75px;
  position: absolute;
`;

export default Footer;
