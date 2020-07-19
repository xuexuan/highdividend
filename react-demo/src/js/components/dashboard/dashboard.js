import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from './Listitems';
import ReactDOM from "react-dom";
import MainWidget from './MainContent';

    function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © xuexuankr '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
    }

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    }));

    //hook need to use inside function component
    export default function Dashboard(props) {
        const classes = useStyles();
        const [tabname, setTab] = React.useState('marketdata');
        const [titlename, setTitlename] = React.useState('Monthly High Yield Dividend Stock in HKEX');
        const [open, setOpen] = React.useState(true);
        const handleDrawerOpen = () => {
            setOpen(true);
        };
        const handleDrawerClose = () => {
            setOpen(false);
        };

        //var username = "";
        const setUserNameEvent = event =>{
                props.username = event.target.value;
        };
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    {titlename}
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List><MainListItems updateWidget={setTab} setTitleName={setTitlename} setUserName={setUserNameEvent}/></List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={useStyles.container}>
                <MainWidget tabname={tabname} username={props.username}/>
                <Box pt={4}>
                    <Copyright />
                </Box>
                </Container>>
            </main>
            </div>
        );
    }


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;