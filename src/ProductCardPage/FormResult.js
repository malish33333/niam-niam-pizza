import React from "react";

export default function FormResult({data, price}) {
  return (
    <>
      <div>
        Размер:{data.size}
        <br />
        Тесто:{data.dough}
        <br />
        Овощи:{data.vegetable}
        <br />
        Сыр:{data.cheese}
        <br />
        Мясо:{data.meat}
        <br />
        Соус:{data.sauce}
        <br />
        Цена:{price}
        <br />
      </div>
    </>
  )
}
