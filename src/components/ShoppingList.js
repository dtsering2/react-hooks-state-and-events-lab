import {React , useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, setFilter] = useState("All")
//AN EVENT LISTENER TO DETECT THE CHANGE IN THE OPTION THAT IS SELECTED
  function handleFilterChange(e) {
    let workingFilter = e.target.value
    setFilter(workingFilter)
  }

//CREATING A NEW ARRAY OF OBJECTS WITH THE SAME CATEGORY TO DISPLAY
const itemsToDisplay = items.filter((item)=>{
  if(filter === "All"){
    return true
  } else {
    return item.category === filter
  }
})

const itemList = itemsToDisplay.map((item)=>{
  return (<Item key={item.id} name={item.name} category={item.category} />)
}
)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
