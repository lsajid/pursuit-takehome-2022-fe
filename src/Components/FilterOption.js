import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

function FilterOption( {category} ) {
    
    const displayOptionButtons = category.options.map((option) => {
        return <Button variant="outlined">{option}</Button>
    })
    
  return (
    <div className='option-container'>

        <div className='arrow-btn'>
            <KeyboardArrowDownIcon/>
        </div>

        <div className='option-name'>
            {category.name}
        </div>

        <div className='option-values'>
            {displayOptionButtons}
        </div>
    </div>
  )
}

export default FilterOption