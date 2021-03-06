import { makeStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useHomeStyles = makeStyles((theme: Theme) => ({
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
        borderBottom: 0,
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: "none"
    },
    tweetsMainHeader: {
        borderTop: 0,
        borderleft: 0,
        borderRight: 0,
        borderRadius: 0,
        display: "flex",
        alignItems: 'center',

        padding: "10px 15px",

        '& h6': {
            fontWeight: 700,
        }
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
    tweetIconBack: {
        marginRight: 15
    },
    tweet: {
        display: "flex",
        alignItems: "flex-start",
        paddingLeft: 20,
        paddingTop: 20,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(245, 248, 250)',
        }
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    tweetAvatar: {
        width: 37,
        height: 37,
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: "space-between",
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
        "& a": {
            color: "inherit",
            textDecoration: "none"
        }
    },
    addForm: {
        width: 450
    },
    addFormBody: {
        padding: 20,
        display: 'flex',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "0 20px"
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
