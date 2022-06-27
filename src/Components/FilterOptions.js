import React, { useState } from 'react';
import "../Styles/FilterOptions.css";
import FilterOption from "./FilterOption"

function FilterOptions({ cuisine, price, location, diningRestriction }) {
  const [ filterCategoryNames, setFilterCategoryNames ] = useState([
    {
      name: "Price", 
      options: price
    },
    {
      name: "Location", 
      options: location
    },
    {
      name: "Cuisine", 
      options: cuisine
    },
    {
      name: "Dining Restrictions",
      options: diningRestriction
    }
  ]);

  console.log(filterCategoryNames);


  // const showAllFilterView = filterCategoryNames.map((category) => {
  //   return <FilterOption category={category}/>
  // })

  return (
    <div className='all-options-container'>
      {/* {showAllFilterView} */}
      hi
    </div>
  )
}

export default FilterOptions