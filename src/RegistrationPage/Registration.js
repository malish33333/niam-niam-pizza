import React from "react";
import { useAuth } from "../AuthProvider";
import { Link } from "react-router-dom";

export function Registration() {
  const { logIn } = useAuth();

  const sendForm = (e) => {
    e.preventDefault();
    logIn();
  }

  return (
    <>
      <h1>Регистрация</h1>
      <form onSubmit={sendForm}>
        <label>Введите Ваш имейл</label>
        <input type="text" name="auth_email" placeholder="Введите Ваш имейл"  />
        <br />
        <label>Введите Ваш пароль</label>
        <input type="text" name="auth_pass" placeholder="Введите пароль" />
        <br />
        <button type="submit" >Зарегистрироваться</button>
        <br />
        <Link href="/login">или Авторизуйтесь</Link>
      </form>
    </>
  );
}
