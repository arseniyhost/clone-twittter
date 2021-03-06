import React from 'react';
import classNames from 'classnames';

import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import { Paper, Typography, Avatar, IconButton } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home/theme';
import { NavLink } from 'react-router-dom';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    id: string,
    text: string,
    user: {
        fullname: string,
        username: string,
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({ text, user, classes, id }: TweetProps): React.ReactElement => {
    return (
        <NavLink className={classes.tweetWrapper} to={`/home/tweet/${id}`}>
            <Paper className={classNames(classes.tweetsHeader, classes.tweet)} variant="outlined">
                <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.username}`} src={user.avatarUrl} />
                <div style={{width: 350}}>
                    <Typography style={{ fontSize: 16, marginLeft: 10 }}>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetUserName}>@{user.username}</span>
                        <b className={classes.tweetUserName}> · </b>
                        <span className={classes.tweetUserName}>1ч</span>
                    </Typography>
                    <Typography style={{ fontSize: 16, marginLeft: 10 }} variant="body1">
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepeatIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <ReplyOutlinedIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </Paper>
        </NavLink>
    )
}
