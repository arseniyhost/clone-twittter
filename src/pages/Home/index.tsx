import React from 'react'

import {
    Avatar, Button, Container, Divider, Grid,
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
                <Grid sm={3} md={3} item>
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
