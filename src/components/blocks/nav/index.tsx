import React, { memo } from "react";
import { NavStyle, NavListStyle, LinkStyle } from "./styles";

const Nav: React.FC = () => {
  return(
    <NavStyle>
      <NavListStyle>
        <li>
          <LinkStyle href="#">Услуги</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Виджеты</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Интеграции</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Кейсы</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Сертификаты</LinkStyle>
        </li>
      </NavListStyle>
    </NavStyle>
  );
}

export default memo(Nav);
