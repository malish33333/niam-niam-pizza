import React from "react";

export function CheckOut() {
  const sendForm = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1>Оплатите заказ</h1>
      <form onSubmit={sendForm}>
        <label> Введите Ваш имейл</label>
        <input type="text" name="auth_email" placeholder="Введите Ваш имейл"  />
        <br />
        <label>Введите Ваш пароль</label>
        <input type="text" name="auth_pass" placeholder="Введите пароль" />
        <br />
        <label>Номер карты</label>
        <input type="tell" name="numberCards" placeholder="Введите номер карты"  />
        <br />
        <button type="submit" >Pay</button>
        <br />
      </form>
    </>
  );
}
