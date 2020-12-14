import React from "react";
import { useAuth } from "../AuthProvider";
import { Link } from "react-router-dom";

export function Login() {
  const { logIn } = useAuth();

  const sendForm = (e) => {
    e.preventDefault();
    logIn();
  }

  return (
    <>
      <h1>Авторизуйтесь</h1>
      <form onSubmit={sendForm}>
        <label> Введите Ваш имейл</label>
        <input type="text" name="auth_email" placeholder="Введите Ваш имейл"  />
        <br />
        <label>Введите Ваш пароль</label>
        <input type="text" name="auth_pass" placeholder="Введите пароль" />
        <br />
        <button type="submit" >log in</button>
        <br />
        <Link href="/registration">или Зарегистрируйтесь</Link>
      </form>
    </>
  );
}
