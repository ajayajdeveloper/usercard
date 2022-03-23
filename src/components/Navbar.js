import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function Navbar() {

  function refresh()
  {
    window.location.href='/'
  }
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={refresh} color="inherit">refresh</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Navbar
