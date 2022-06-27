import React, { useState } from 'react';
import "../Styles/FilterOptions.css";
import FilterOption from "./FilterOption";

function FilterOptions() {
  const [ filterCategoryNames, setFilterCategoryNames ] = useState([
    {
      name: "Price", 
      options: ["$", "$$", "$$$", "$$$$"]
    },
    {
      name: "Location", 
      options: ["New York City", "Queens", 'Brooklyn']
    },
    {
      name: "Cuisine", 
      options: ['Pizza', 'American', 'Korean', 'French', 'Greek', 'Japanese', 'Mexican', 'Thai']
    },
    {
      name: "Dining Restrictions",
      options: ["Takeout/Delivery"]
    }
  ]);

  const showAllFilterView = filterCategoryNames.map((category, index) => {
    return <FilterOption key={"key"+index+category.name} category={category}/>
  })
  
  return (
    <div className='all-options-container'>
      {showAllFilterView}
    </div>
  )
}

export default FilterOptions