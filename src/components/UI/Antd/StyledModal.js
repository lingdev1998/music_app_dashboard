import Modal from "antd/lib/modal";
import styled from 'styled-components'

const StyledModal = styled(Modal)`
    .ant-modal-content{
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
   }
    .ant-modal-header{
        background-color: ${props => props.theme.backgroundColor} !important;
        color: ${props => props.theme.color};
   }
    .ant-modal-body{
        color: ${props => props.theme.color};
   }
    .ant-modal-footer{
        background-color: ${props => props.theme.backgroundColor} !important;
        color: ${props => props.theme.color};
   }
    .ant-modal-title{
        color: ${props => props.theme.color};
        font-size: 1.3rem;
   }
   .ant-modal-close-x{
        color: ${props => props.theme.color};
   }
`
export default StyledModal;