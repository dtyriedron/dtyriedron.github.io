import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function Footer(){
    
    return(    
        <footer className="mt-5">
            <Grid container >
                    <Grid item xs={1}> 
                        <Typography color="primary" style={{marginLeft:"1rem"}}>
                            dtyriedron@gmail.com
                        </Typography>
                    </Grid>
                    <Grid className="p-0 d-flex justify-content-end" item xs={11} >
                        <Typography color="primary" style={{marginRight:"1rem"}}>
                        This site was made by Dylan Tyrie-Dron.
                        </Typography>
                    </Grid>
                </Grid>
        </footer>
    );
}

export default Footer;