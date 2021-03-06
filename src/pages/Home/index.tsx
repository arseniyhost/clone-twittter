import React, { useEffect } from 'react'

import {
    Avatar, Button, CircularProgress, Container, Divider, Grid,
    InputAdornment, List, ListItem, ListItemAvatar,
    ListItemText, Paper, Typography
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { getTags } from '../../store/tags/actionCreators';
import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

const Home: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    useEffect(() => {
        dispatch(getTweets());
        dispatch(getTags())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth="md">
            <Grid container spacing={2}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsMainHeader} variant="outlined">
                            <Route path={'/home/:any'}>
                                <BackButton />
                            </Route>
                            <Route path={["/home", "/home/search"]} exact>

                                <Typography variant="h6">??????????</Typography>

                            </Route>
                            <Route path='/home/tweet'>
                                <Typography variant="h6">????????????????</Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes} />
                                    <div className={classes.addFormBottomLine} />
                                </div>
                            </Paper>
                        </Route>
                        <Route path="/home" exact>
                            {
                                isLoading ? (
                                    <div className={classes.tweetsCentred}>
                                        <CircularProgress />
                                    </div>
                                ) :
                                    tweets.map((tweet) => (
                                        <Tweet id={tweet._id} key={tweet._id} text={tweet.text}
                                            classes={classes}
                                            user={tweet.user}
                                        />
                                    ))
                            }
                        </Route>
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="?????????? ???? ????????????????"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>???????? ????????????</b>
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
