import React from 'react';
import FilterOptions from './FilterOptions';
import "../Styles/FilterBar.css";
import { Typography } from '@mui/material';

function FilterBar({filterCategoryNames, filterButtonValue, setFilterButtonValue}) {
  return (
    <div className='filterBar-container'>
      <Typography variant="h5" component="h2" className='filterBar-title'>
        All Stores
      </Typography>
        <FilterOptions filterButtonValue={filterButtonValue} setFilterButtonValue={setFilterButtonValue} filterCategoryNames={filterCategoryNames}/>
    </div>
  );
}

export default FilterBar