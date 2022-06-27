import React from 'react';
import FilterOptions from './FilterOptions';
import "../Styles/FilterBar.css"

function FilterBar({filterCategoryNames, filterButtonValue, setFilterButtonValue}) {
  return (
    <div className='filterBar-container'>
      <div className='filterBar-title'>All Stores</div>
        <FilterOptions filterButtonValue={filterButtonValue} setFilterButtonValue={setFilterButtonValue} filterCategoryNames={filterCategoryNames}/>
    </div>
  );
}

export default FilterBar