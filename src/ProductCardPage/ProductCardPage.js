import React from "react"
import ConfiguratorPizza from "./ConfiguratorPizza";
import DescriptionProduct from "./DescriptionProduct";

export function ProductCardPage({name}){
  return(
    <>
    <DescriptionProduct name={name}/>
    <ConfiguratorPizza />
    </>
  )
}
