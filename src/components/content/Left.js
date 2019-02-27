import React from "react";
import styled from "styled-components";

const Left = () => {
  return (
    <StyledLeft>
      <List>
        <ul>
          <li>Создание сайтов</li>
          <li>Изготовление сайтов «под ключ»</li>
          <li>Как мы работаем</li>
          <li>Интеграция с 1С</li>
          <li>Поддержка сайтов</li>
          <li>Создание сайтов на Битрикс</li>
          <li>Модули Битрикс</li>
          <li>Купить Битрикс</li>
          <li>Дизайн сайтов</li>
          <li>Редизайн сайтов</li>
          <li>Интернет-магазины</li>
          <li>Создание логотипов</li>
        </ul>
      </List>
      <img src={"7.png"} alt="green" title="green" />
    </StyledLeft>
  );
};

export default Left;

const StyledLeft = styled.div`
  position: relative;
  height: 770px;
  width: 166px;
  padding-right: 20px;
  img {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: auto;
  }
`;
const List = styled.div`
  background-color: #777777;
  padding: 19px 32px 17px 13px;
  width: 139px;
  height: 299px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    line-height: 22px;
  }
  li:first-child {
    font-weight: 700;
  }
`;
