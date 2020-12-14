import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Карточка товара | </Link>
        <Link to="/login">Логин | </Link>
        <Link to="/registration">Регистрация | </Link>
        <Link to="/lk">Личный кабинет | </Link>
        <Link to="/orders"> Оформление | </Link>
        <Link to="/bill">Чек | </Link>
        <Link to="/404">404</Link>
      </nav>
    </>
  );
}

export default Header;
