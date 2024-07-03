import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function UniButton({title, onClick}) {

    return (
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="info" sx={{borderRadius: "10px"}} onClick={onClick}>
          {title}
        </Button>
      </Stack>
    )
}

export default UniButton