import React from "react";
import styled from "styled-components";

import Block from "./Block";

const Center = () => {
  return (
    <StyledCenter>
      <Text>
        <p>
          PSD файл с макетом. Макет разбит по слоям и сгрупированн по папкам:
        </p>
        <p>
          <span>▪ number</span>
          <div> - нумерация блоков (номера блоков верстать не нужно)</div>
          <span>▪ text</span>
          <dd>
            - текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное
            растояние 22 пикселя)
          </dd>
          <span>▪ head</span>
          <div> - шапка сайта</div>
          <span>▪ content</span>
          <div>
            - контентная область, которая в свою очередь делится на <b>left</b>{" "}
            и <b>center</b>
          </div>
        </p>
        <p>Текстовое описание задания и требования.</p>
      </Text>
      <Block />
      <TextLeft>
        <p>
          Студия «Пиксель Плюс» разработает полнофункциональный продукт
          ориентированный на целевую аудиторию и эффективно решающий
          поставленные перед ним маркетинговые задачи. Опыт работ и
          использование собственных технологий, позволяет предлагать услугу
          изготовления сайта в Москве в разумные сроки.
        </p>
      </TextLeft>
      <TextRight>
        <p>
          Поисковое продвижение (раскрутка) ведется по коммерческим запросам,
          что позволяет многократно увеличить количество продаж с сайта при
          разумном рекламном бюджете.
        </p>
      </TextRight>
    </StyledCenter>
  );
};

const StyledCenter = styled.div`
  width: 757px;
  height: 771px;
  position: absolute;
  left: 182px;
  margin-left: 24px;
  top: 0px;
`;
const Text = styled.div`
  width: 735px;
  height: 185px;
  padding: 22px 0 0 20px;
  background-color: #dcdcdc;
  p:first-child {
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    color: #777777;
    padding-bottom: 8px;
  }

  p:last-child {
    position: relative;
    top: 43px;
    margin: 0;
    font-family: Arial;
    font-size: 14px;
    color: #777777;
  }

  p {
    position: relative;
    top: 21px;
    left: 30px;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-family: Arial;
    font-size: 14px;
    color: #777777;
  }
  span {
    float: left;
    width: 61px;
    padding: 0;
    margin: 0;
    clear: left;
    font-weight: bold;
  }

  div {
    font-family: Arial;
    font-size: 14px;
    color: #777777;
  }
`;

const TextLeft = styled.div`
  width: 355px;
  height: 200px;
  position: absolute;
  padding-top: 0px;
  padding-left: 15px;
  margin-right: 15px;
  background-color: #dcdcdc;
  bottom: 0px;
  p {
    color: #777777;
    text-align: left;
    padding: 10px 23px 23px 23px;
    font-family: Arial;
    font-size: 14px;
    line-height: 22px;
  }
`;

const TextRight = styled.div`
  width: 355px;
  width: 355px;
  height: 200px;
  position: absolute;
  padding-top: 0px;
  padding-left: 15px;
  margin-right: 15px;
  left: 380px;
  background-color: #dcdcdc;
  bottom: 0px;
  p {
    color: #777777;
    text-align: left;
    padding: 10px 23px 23px 23px;
    font-family: Arial;
    font-size: 14px;
    line-height: 22px;
  }
`;
export default Center;
