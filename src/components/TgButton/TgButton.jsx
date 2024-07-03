import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function TgButton({item, onAdd, onRemove}) {
    const [showButtons, setShowButtons] = useState(false);

    const handleToggleButtons = () => {
        setShowButtons(!showButtons);
    };

    return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" sx={{borderRadius: "20px"}}>
        Success
      </Button>
    </Stack>
    )
}

export default TgButton