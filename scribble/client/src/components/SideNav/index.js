import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class SideNav extends Component {
    state = {
        open: false,
        height: window.innerHeight
    };

    updateHeight = () => {
        const newState = { height: window.innerHeight };

        if (this.state.open && newState.height > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateHeight);
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight);
    };

    render() {
        return (
            <SideNav defaultActiveKey="/home" className="flex-column">
                <SideNav.Link href="/home">Active</SideNav.Link>
                <SideNav.Link eventKey="link-1">Link</SideNav.Link>
                <SideNav.Link eventKey="link-2">Link</SideNav.Link>
                <SideNav.Link eventKey="disabled" disabled>Disabled</SideNav.Link>
            </SideNav>
        )
    };
};

export default SideNav;