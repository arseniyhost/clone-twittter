import React, { useState, useCallback } from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PermIdentity';
import CreateIcon from '@material-ui/icons/Create';

import { Button, Hidden, IconButton, Typography } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home/theme';
import { ModalBlock } from '../ModalBlock';
import { AddTweetForm } from '../AddTweetForm';
import { NavLink } from 'react-router-dom';


interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false);

    const handleVisibleAddTweet = useCallback(() => {
        setVisibleAddTweet(!visibleAddTweet);
    }, [visibleAddTweet, setVisibleAddTweet]);

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuItem}>
                <NavLink to="/home">
                    <IconButton className={classes.logo} aria-label="delete" color="primary">
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </NavLink>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Поиск
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Уведомления
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Сообщения
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Закладки
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Список
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Профиль
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <Button
                    onClick={handleVisibleAddTweet}
                    className={classes.sideMenuListButton}
                    variant="contained"
                    fullWidth
                    color="primary"
                >
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock onClose={handleVisibleAddTweet} visible={visibleAddTweet}>
                    <AddTweetForm style={{width: 450}} maxRows={14} classes={classes} />
                </ModalBlock>
            </li>
        </ul>
    )
}
