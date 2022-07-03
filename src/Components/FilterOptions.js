import React from 'react';
import "../Styles/FilterOptions.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

const buttonStyle = {
  bgcolor: "ghostwhite",
  border: "1px solid #b5ccdd",
  borderRadius: "10px",
  padding: "5px",
  margin: "3px",
  color: "grey"
}

function FilterOptions({filterCategoryNames, filterButtonValue, setFilterButtonValue}) {

  const handleFilterButtonChange = (event) => {
    event.preventDefault();
    setFilterButtonValue(event.target.value)
  }

  const handleResetFilterButton = () => {
    setFilterButtonValue('');
  }

  const showAllFilters = filterCategoryNames.map((category, index) => {
    return (
      <div key={index+category.name} className='option-container'>
        <div className='display-box'>
            <div className='arrow-icon'>
                <KeyboardArrowDownIcon/>
            </div>

            <div className='option-name'>
                {category.name}
            </div>
        </div>
        <div className='buttons-value-container'>
            {category.options.map((option, index) => {
              return <Button sx={buttonStyle}className="single-button-filter" key={option+index} value={option} onClick={handleFilterButtonChange} variant="outlined">{option}</Button>
            })}
        </div>
    </div>
    )
  })
  
  return (
    <div className='all-options-container'>
      {showAllFilters}
      <Button>CUSTOM BUTTON</Button>
      <Button className="button-filter"onClick={handleResetFilterButton}> Reset Filter </Button>
    </div>
  )
}

export default FilterOptions