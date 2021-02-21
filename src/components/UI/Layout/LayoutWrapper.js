import styled from 'styled-components';
import { Layout } from "antd";
const LayoutWrapper = styled(Layout)`
    .ant-layout{
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
    }
`
export default LayoutWrapper;