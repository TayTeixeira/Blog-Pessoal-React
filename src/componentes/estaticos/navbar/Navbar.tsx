import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='barra-ferramenta'>
                    <Box className='cursor'>
                        <Typography variant="h5" >
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" >
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" >
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" >
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;