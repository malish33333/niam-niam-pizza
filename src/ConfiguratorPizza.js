import React, { useState} from "react";

import FormRezult from "./FormRezult"

function ConfiguratorPizza() {
  const [price, setPrice] = useState(200);
  const [rezult, setRezult] = useState(false);
  const [oData, setOdata] = useState({});

  const calcPrice = () => {
    let formElement = document.getElementById("formElement");
    let data = new FormData(formElement);
    let object = {};
    let tmpPrice = 200;

    data.forEach((value, key) => {
      if (key === 'size' && value === 'size35') tmpPrice += 50;
      if (key === 'vegetable' || key === 'cheese' || key === 'meat') tmpPrice += 29;
      setPrice(price => price = tmpPrice);

      if (!Reflect.has(object, key)) {
        object[key] = value;
        return;
      }
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]];
      }
      object[key].push(value);
    });

    return object;
  }

  const sendForm = (e) => {
    e.preventDefault();
    setRezult(true);
    setOdata(calcPrice());
  }


  return (
    <>
      {rezult&&<FormRezult data={oData} price={price} />}
      <form id="formElement" onChange={calcPrice} onSubmit={sendForm}>
      Размеры:
      <input type="radio" name="size" value="size30" defaultChecked />30 cm
      <input type="radio" name="size" value="size35" />35 cm
      <br />
      Тесто:
      <input type="radio" name="dough" value="doughFat" />Пышно
      <input type="radio" name="dough" value="doughThin" />Тонкое
      <br />
      Выберите соус:
      <input type="radio" name="sauce" value="tomato" />Томатный
      <input type="radio" name="sauce" value="white" />Белый
      <input type="radio" name="sauce" value="chilli" />Острый
      <br />
      Сыр:
      <input type="checkbox" name="cheese" value="cheeseMoc" />Моцарелла
      <input type="checkbox" name="cheese" value="cheeseCheder" />Чеддер
      <input type="checkbox" name="cheese" value="cheeseDor" />Дор блю
      <br />
      Овощи:
      <input type="checkbox" name="vegetable" value="vegetTomato" />Помидор
      <input type="checkbox" name="vegetable" value="vegetMush" />Грибы
      <input type="checkbox" name="vegetable" value="vegetPeppers" />Перцы
      <br />
      Мясо:
      <input type="checkbox" name="meat" value="meatHam" />ветчина
      <input type="checkbox" name="meat" value="meatPeppe" />пепперони
      <input type="checkbox" name="meat" value="meatBacon" />бекон
      <br />
        <button type="submit">Отправить {price}</button>
        <br />
      </form>
    </>
  );
}

export default ConfiguratorPizza;
