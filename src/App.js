import React from "react";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import { Route, Switch, } from "react-router-dom";
import { Lk } from "./LkPage";
import { Bill } from "./BillPage";
import { Login } from "./LoginPage";
import { Registration } from "./RegistrationPage"
import { PrivateRoute } from "./PrivateRoute";
import { ProductCardPage } from "./ProductCardPage";
import { CheckOut } from "./CheckOutPage";
import { P404Page } from "./P404Page";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" exact>
          <Header />
          <Login />
          <Footer />
        </Route>
        <Route path="/bill" exact>
          <Header />
          <Bill/>
          <Footer/>
        </Route>
        <Route path="/orders" exact>
          <Header />
          <CheckOut/>
          <Footer/>
        </Route>
        <Route path="/registration" exact>
          <Header />
          <Registration/>
          <Footer/>
        </Route>
        <PrivateRoute path="/lk" redirectPath="/login">
          <Header />
          <Lk />
          <Footer/>
        </PrivateRoute>
        <Route path="/" exact>
          <Header />
          <ProductCardPage name="Маргарита"/>
          <Footer />
        </Route>
        <Route>
          <Header />
          <P404Page />
          <Footer/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
