import React from 'react';
import "../Styles/FilterOptions.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

const buttonStyle = {
  background: 'linear-gradient(45deg, #FE7B9B 30%, #FF9E53 90%)',
  margin: "3px",
  border: 0,
  borderRadius: 3,
  minHeight: "28px",
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  fontsize: "small", 
  width: 100,
  padding: '0 30px',
}

function FilterOptions({filterCategoryNames, setFilterButtonValue}) {

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
      <Button className="button-filter"onClick={handleResetFilterButton}> Reset Filter </Button>
    </div>
  )
}

export default FilterOptions