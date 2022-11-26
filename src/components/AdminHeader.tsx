import React, {
    PureComponent
} from "react";
import { Screens, Constants, Strings, Resources } from "../constants";
import "./ComponentStyles.css";
import { NavLink, Redirect } from "react-router-dom";
import "../commons/styles/AdminHeaderStyles.css";
import BaseService from "../app/services/BaseService";
import { GlobalState } from "../stores/GlobalState";
import { Helpers } from "../commons/utils";
import {
    MenuItem,
    Toolbar,
    IconButton,
    Typography,
    Popper,
    Paper,
    ClickAwayListener,
    MenuList,
    Grow
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

interface IProps {
    onLogout?: () => void;
    handleDrawerToggle: () => void;
    classes?: any;
    title?: string;
}

interface IState {
    loggedOut?: boolean;
    menuOpen: boolean;
    anchorEl: HTMLElement | null;
}

class AdminHeader extends PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuOpen: false,
            anchorEl: null
        };
    }

    public render() {
        const displayName = sessionStorage.getItem(Constants.StorageKeys.DISPLAY_NAME) || "";
        const { classes, title } = this.props;
        if (this.state.loggedOut) {
            return <Redirect to={Screens.AUTH_LOGIN} push={true} />
        }
        return (
            <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
                <IconButton
                    // color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={this.props.handleDrawerToggle}
                    className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="textPrimary"
                    noWrap
                    className={classes.title}>
                    {title || ""}
                </Typography>

                <div className="info-user">
                    <div className="info" style={{ color: "#333333", marginRight: 8 }}>
                        <span>{Strings.Header.HI}</span>
                        <strong> {`${displayName}@gmail.com`} </strong>
                    </div>
                    <img
                        className="avatar-img"
                        src={Resources.Images.DEFAULT_AVATAR_URL}
                        onClick={this.handleClick}
                    />
                    <Popper open={this.state.menuOpen}
                        anchorEl={this.state.anchorEl}
                        role={undefined}
                        transition
                        disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === "bottom" ? "center top" : "center bottom"
                                }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList
                                            id="menu-list-grow"
                                            onKeyDown={this.handleListKeyDown}>
                                            <MenuItem onClick={this.handleClose}>
                                                <NavLink to={Screens.PROFILE} style={{ color: "#212529" }}>
                                                    {Strings.Header.PROFILE}
                                                </NavLink>
                                            </MenuItem>
                                            <MenuItem onClick={this.onLogout}>{Strings.Header.LOGOUT}</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Toolbar>
        );
    }

    public handleClose = () => {
        this.setState({
            anchorEl: null,
            menuOpen: false
        })
    }

    public handleClick = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            anchorEl: event.currentTarget,
            menuOpen: true
        });
    }

    public handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Tab") {
            event.preventDefault();
            this.setState({
                menuOpen: false
            });
        }
    }

    public onLogout = () => {
        this.handleClose();
        Helpers.showConfirmAlert(Strings.Header.LOGOUT_CONFIRM_MESSAGE, async () => {
            try {
                // const result = await new BaseService().onLogout();
                // if (result.status) {
                //     sessionStorage.clear();
                //     GlobalState.setUser();
                //     this.setState({
                //         loggedOut: true
                //     });
                // }
            } catch (error) {
                console.log(error)
            }
        })
    }


}

const styles = () => ({
    toolbarRoot: {
        paddingRight: 24
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    title: {
        flexGrow: 1
    }
});

export default withStyles(styles)(AdminHeader);
