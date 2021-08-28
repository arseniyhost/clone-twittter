import React from 'react'

import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }
    
    return (
        <IconButton onClick={goBack} style={{padding: 0, marginRight: 20}} color="primary">
            <ArrowBack />
        </IconButton>
    )
}
