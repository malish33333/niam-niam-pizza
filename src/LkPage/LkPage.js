import React from "react";
import { useAuth } from "../AuthProvider";

export function Lk() {
  const { logOut } = useAuth();

  return (
    <>
      <h1>Private Page</h1>
      <h2>Тут просто куча заказов</h2>
      <button onClick={() => logOut()}>Log Out</button>
    </>
  );
}
