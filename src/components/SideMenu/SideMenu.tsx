import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PermIdentity';
import { useHomeStyles } from '../../pages/Home';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuItem}>
                <IconButton className={classes.logo} aria-label="delete" color="primary">
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <Button className={classes.sideMenuListButton} variant="contained" fullWidth color="primary">Твитнуть</Button>
            </li>
        </ul>
    )
}
