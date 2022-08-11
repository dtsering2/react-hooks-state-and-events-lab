import {React , useState} from "react";


function Item({ name, category}) {
  const [notInCart, setAdd] = useState("true")
  let isInCart = !notInCart
  function handleAddFood(){
    setAdd(isInCart)
  }


  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick = {handleAddFood} >{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
