import React from "react";
import {Grid, Typography, TextField} from '@material-ui/core';
import { Box, Button } from "@mui/material";
import './Login.css'
import { TextFields } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Login () {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" align="center" className="textos-login">Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>   
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className="text-decorator-none">
                                <Button type='submit' variant='contained' className='botao-login'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom align="center" className="textos-login">Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className="imagem-de-fundo">
            </Grid>
        </Grid>
    );
}

export default Login;