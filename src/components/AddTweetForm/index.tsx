import React, { useState } from 'react'

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import classNames from 'classnames';

import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@material-ui/core'
import { useHomeStyles } from '../../pages/Home/theme';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes, maxRows }: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const textLimitProgress = Math.round((text.length / MAX_LENGTH) * 100);
    const textLimitNumbers = MAX_LENGTH - text.length;
    const conditionProgress = text.length >= MAX_LENGTH;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    }

    const handleClickTweet = (): void => {
        setText('');
    }

    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src={'https://images.unsplash.com/photo-1629659740606-66c36a82cc24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'}
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    maxRows={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {
                        text && (<>
                            <span>{textLimitNumbers}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    thickness={5}
                                    size={20}
                                    value={conditionProgress ? 100 : textLimitProgress}
                                    style={conditionProgress ? { color: 'red' } : undefined}
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>)
                    }
                    <Button
                        onClick={handleClickTweet}
                        disabled={conditionProgress}
                        variant="contained"
                        color="primary"
                    >
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
}
