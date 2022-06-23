import React from 'react';
import FilterOptions from './FilterOptions';
import "../Styles/FilterBar.css"

function FilterBar() {
  return (
    <div className='filterBar-container'>
      <div className='filterBar-title'>All Stores</div>
        <FilterOptions/>
    </div>
  )
}

export default FilterBar