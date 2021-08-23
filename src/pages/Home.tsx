import React from 'react'

import {
    Avatar, Button, Container, Divider, Grid,
    InputAdornment, List, ListItem, ListItemAvatar, ListItemText,
    makeStyles, Paper, TextField, Theme, Typography, withStyles
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import { AddTweetForm } from '../components/AddTweetForm';

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
        position: 'sticky',
        top: 0,
        listStyle: "none",
        padding: 0,
        margin: 0,
        maxWidth: 230
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
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        }
    },

    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 0,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        padding: 20,
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },

}))


const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': { borderColor: 'transparent' },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },
    },
}))(TextField);


const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="md">
            <Grid container spacing={1}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        <Paper>
                            <AddTweetForm classes={classes} />
                            <div className={classes.addFormBottomLine} />
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
                <Grid sm={3} md={3} item >
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            fullWidth
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Bitcoin"
                                        secondary={
                                            <Typography component="span" variant="body1">
                                                Твитов: 4 456
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#ukraine"
                                        secondary={
                                            <Typography component="span" variant="body1">
                                                Твитов: 10 234
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#короновирус"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов: 110 390
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Joji"
                                            src="https://images.unsplash.com/photo-1605025515515-b1a48c392b6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Joji Nectar"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @FunJoji
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
