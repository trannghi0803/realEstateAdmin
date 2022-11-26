import React from "react";
import {
    AppBar,
    CssBaseline,
    Drawer,
    Hidden,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    ExpandLess,
    ExpandMore
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { IMenuItem } from "../commons/utils";
import { AdminHeader } from "../components";
import { Constants, Resources, Screens, Strings } from "../constants";
import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            flexShrink: 0,
        },
    },
    mobileAppBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    toolbarSpacer: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: `url(${Resources.Images.SIDEBAR_BACKGROUND})`,
        whiteSpace: "nowrap",
    },
    content: {
        flexGrow: 1,
    },
    brandName: {
        fontSize: "1.5rem",
        background: "rgb(40, 53, 147)",
        color: "#ffffff"
    },
    container: {
        overflow: "hidden"
    },
    list: {
        overflowY: "auto",
        overflowX: "hidden",
        height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
    },

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    active: {
        backgroundColor: "#0f2c60",
        borderLeft: "3px solid #276ef1"
    },
}));

interface IProps {
    renderKey?: number;
    menu: IMenuItem[];
    title?: string;
    children?: JSX.Element;
}

export default function AdminLayout(props: IProps) {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [subMenuOpen, setSubMenuOpen] = React.useState(false);

    const handleMobileDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleClickMenuItem = (item: IMenuItem) => {
        if (item.subMenu && item.subMenu.length > 0) {
            setSubMenuOpen(!subMenuOpen);
            return;
        }
        sessionStorage.setItem(Constants.StorageKeys.MENU_INDEX, item.id);
    }

    const menuItem = (item: IMenuItem, index: number) => {
        const menuIndex = sessionStorage.getItem(Constants.StorageKeys.MENU_INDEX) || "";
        return (
            <NavLink key={index} to={item.controller} onClick={() => handleClickMenuItem(item)}>
                <ListItem button
                    className={item.id === menuIndex ? classes.active : ""}>
                    <ListItemIcon>
                        <Icon style={{ color: "rgb(238, 238, 238)" }}>{item.iconName}</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primary={item.tilte}
                        style={{ color: "#ffffff" }}
                    />
                </ListItem>
            </NavLink>
        );
    }

    const drawer = (
        <div className={classes.container}>
            <NavLink to={Screens.ADMIN} className={classes.toolbar}>
                <ListItem>
                    <ListItemIcon>
                        <img src={Resources.Images.LOGO_01_CIRCLE} style={{ width: 33, height: 33 }} />
                    </ListItemIcon>
                    <ListItemText
                        primary={Strings.App.TITLE}
                        style={{ color: "#ffffff" }} />
                </ListItem>
            </NavLink>
            <List className={classes.list}>
                {props.menu.map((item, index) => {
                    if (item.subMenu && item.subMenu.length > 0) {
                        return (
                            <>
                                <ListItem button onClick={() => handleClickMenuItem(item)}>
                                    <ListItemIcon>
                                        <Icon style={{ color: "rgb(238, 238, 238)" }}>{item.iconName}</Icon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.tilte}
                                        style={{ color: "#ffffff" }} />
                                    {
                                        subMenuOpen ? <ExpandLess htmlColor="rgb(238, 238, 238)" />
                                            : <ExpandMore htmlColor="rgb(238, 238, 238)" />
                                    }
                                </ListItem>
                                <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {
                                            item.subMenu.map((subItem, index) => menuItem(subItem, index))
                                        }
                                    </List>
                                </Collapse>
                            </>
                        );
                    }
                    return menuItem(item, index);
                })}
            </List>
        </div>
    );

    const container = (document as any).body || undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden xsDown implementation="css">
                <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    color="inherit">
                    <AdminHeader
                        title={props.title}
                        handleDrawerToggle={handleDrawerToggle}
                    />
                </AppBar>
            </Hidden>
            <Hidden smUp implementation="css">
                <AppBar position="fixed"
                    className={classes.mobileAppBar}
                    color="inherit">
                    <AdminHeader
                        title={props.title}
                        handleDrawerToggle={handleMobileDrawerToggle}
                    />
                </AppBar>
            </Hidden>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleMobileDrawerToggle}
                        classes={{ paper: classes.drawerPaper }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        open={open}
                        onClose={handleDrawerToggle}
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx(classes.drawerPaper, {
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                        variant="permanent">
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbarSpacer} />
                {props.children}
            </main>
        </div>
    );
}
