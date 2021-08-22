import React from 'react'
import { Container, createStyles, Grid, InputBase, makeStyles, Paper, Typography, withStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu/SideMenu';

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    sideMenuList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: 180
    },
    sideMenuItem: {
        cursor: "pointer",
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            }
        },
        '& div': {
            display: "inline-flex",
            alignItems: 'center',
            padding: '0 10px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: 'background-color 0.15s ease'
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 18,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    sideMenuListButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(3)
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: "100%",
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderTop: 0,
        borderleft: 0,
        borderRight: 0,
        borderRadius: 0,

        padding: "10px 15px",

        '& h6': {
            fontWeight: 700,
        }
    },
    tweet: {
        paddingTop: 20,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(245, 248, 250)',
        }
    },
    tweetAvatar: {
        width: 37,
        height: 37,
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-around',
        width: 450,
        position: 'relative',
        left: -12
    },
    tweetUserName: {
        color: grey[500],
    }
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0
        }
    })
)(InputBase);

const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="md">
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        {
                            [
                                ...new Array(10).fill(
                                    <Tweet text="On August 6th we witnessed history. SpaceX turned an idea into reality. After just under 2 years the first Starship prototype was stacked, proving that SpaceX wants to make humanity a multi-planetary species."
                                        classes={classes}
                                        user={{
                                            username: 'elonmask',
                                            fullname: 'Elon Mask',
                                            avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                                        }}
                                    />
                                )
                            ]
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
