import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Menu, Icon, Avatar } from "antd";
import { StyledDropDown, StyledMenu, StyledMenuItem } from "../UI/Antd";
import { ApplicationWrapper, MainWrapper } from "../UI/Layout";
import Theme from '../../container/settings/Theme/Theme';
const menu = (
    <ApplicationWrapper>
        <MainWrapper>
        <StyledMenu>
            <StyledMenuItem key="0">
                <Link to="/userProfile">Profile</Link>
            </StyledMenuItem>
            <StyledMenuItem key="1">
                <a href="#">Settings</a>
            </StyledMenuItem>
            <Menu.Divider />
        </StyledMenu>
        <Theme />
        </MainWrapper>
    </ApplicationWrapper>
);
class DropdownMenu extends Component {
    render() {
        return (
            <StyledDropDown overlay={menu}>
                <Avatar style={{ backgroundColor: '#1890ff', verticalAlign: 'middle' }} size="medium">
                    {'P'}
                </Avatar>
            </StyledDropDown>
        )
    }
}

export default DropdownMenu;