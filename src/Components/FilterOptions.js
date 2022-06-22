import React, { useState } from 'react';
import "../Styles/FilterOptions.css";
import FilterOption from './FilterOption';

function FilterOptions() {
  const [ filterCategoryNames, setFilterCategoryNames ] = useState([
    {
      name: "Price", 
      options: ["$", "$$", "$$$", "$$$$"]
    },
    {
      name: "Location", 
      options: ["New York City", "Queens", "Brooklyn"]
    },
    {
      name: "Cuisine", 
      options: ["Korean", "Pizza", "French", "American", "Greek", "Japanese", "Mexican", "Thai"]
    },
    {
      name: "Dining Restrictions", 
      options:[ "TakeOut / Delivery", "Dine In"]
    }
  ]);
 
  const showAllFilterView = filterCategoryNames.map((category) => {
    return <FilterOption category={category}/>
  })

  return (
    <div className='all-options-container'>
      {showAllFilterView}
    </div>
  )
}

export default FilterOptions