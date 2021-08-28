import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/theme'
import { selectIsTagsLoaded, selectTagsItems } from '../../store/tags/selectors'

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
    const tags = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    isLoaded && tags.map(tag => {
                        return <React.Fragment key={tag._id}>
                            <ListItem  className={classes.rightSideBlockItem}>
                                <NavLink to={`/search?=q=${tag.name}`}>
                                    <ListItemText
                                        primary={tag.name}
                                        secondary={
                                            <Typography component="span" variant="body1">
                                                Твитов: {tag.count}
                                            </Typography>
                                        }
                                    />
                                </NavLink>
                                <Divider component="li" />
                            </ListItem>
                        </React.Fragment>
                    })
                }
            </List>
        </Paper>
    )
}
