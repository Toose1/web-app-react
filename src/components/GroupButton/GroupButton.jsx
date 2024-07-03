import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


function GroupButton({onRemove, onAdd}) {

    return (
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
          
        >
          <Button onClick={onRemove} sx={{width: "50px", m: "2px", borderRadius: "8px"}}>-</Button>
          <Button onClick={onAdd} sx={{width: "50px", m: "2px", borderRadius: "8px"}}>+</Button>
        </ButtonGroup>
      )
}

export default GroupButton