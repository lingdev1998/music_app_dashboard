import { Dropdown } from "antd";
import styled from 'styled-components'

export const StyledDropDown   =  styled(Dropdown)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
`
export default StyledDropDown;