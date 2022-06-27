import React from 'react';
import "../Styles/FilterOptions.css";
import FilterOption from "./FilterOption";

function FilterOptions({filterCategoryNames, filterButtonValue, setFilterButtonValue}) {

  const showAllFilterView = filterCategoryNames.map((category, index) => {
    return <FilterOption filterButtonValue={filterButtonValue} setFilterButtonValue={setFilterButtonValue} key={"key"+index+category.name} category={category}/>
  })
  
  return (
    <div className='all-options-container'>
      {showAllFilterView}
    </div>
  )
}

export default FilterOptions