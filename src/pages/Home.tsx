import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';


const Home = () => {
    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <TwitterIcon color="primary" />
                </Grid>
                <Grid item xs={7}>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
        </section>
    )
}

export default Home
