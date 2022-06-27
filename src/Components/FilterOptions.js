import React from 'react';
import "../Styles/FilterOptions.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import "../Styles/FilterOption.css";

function FilterOptions({filterCategoryNames, filterButtonValue, setFilterButtonValue}) {

  const handleFilterButtonChange = (event) => {
    event.preventDefault();
    setFilterButtonValue(event.target.value)
  }

  const handleResetFilterButton = () => {
    setFilterButtonValue('')
  }

  const showAllFilters = filterCategoryNames.map((category, index) => {
    return (
      <div key={index+category.name} className='option-container'>
        <div className='display-box'>
            <div className='arrow-btn'>
                <KeyboardArrowDownIcon/>
            </div>

            <div className='option-name'>
                {category.name}
            </div>
        </div>
        <div className='option-values'>
            {category.options.map((option, index) => {
              return <Button key={option+index} value={option} onClick={handleFilterButtonChange} variant="outlined">{option}</Button>
            })}
        </div>
    </div>
    )
  })
  
  return (
    <div className='all-options-container'>
      {showAllFilters}
      <Button onClick={handleResetFilterButton}> Reset Filter </Button>
    </div>
  )
}

export default FilterOptions