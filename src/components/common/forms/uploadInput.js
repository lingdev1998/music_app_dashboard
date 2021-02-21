import React, { Component } from 'react'
import { message, Button, Icon, Modal } from 'antd';
import axios from 'axios';
import ImageCropper from '../../utils/ImageCropper';
import { StyledUpload } from "../../UI/Antd";
import './forms.css';
class UploadInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            previewVisible: false,
            previewImage: '',
            fileList: [],
            uploadResponse: '',
            base64URL: ''
        }
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleCancel = () => {
        this.setState({
            previewVisible: false
        })
    }
    handleBeforeUpload = (file) => {
        this.setState({ file })
        const isJPG = file.type === 'image/jpeg' || 'image/jpg' || 'image/png';
        if (!isJPG) {
            message.error('You can only upload JPG/PNG file!');
        }
        this.getBase64(file, (object) => {
            this.setState({
                base64URL: object
            })
        });
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        // return isJPG && isLt2M;
        return false;
    }
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = (info) => {
        this.setState({ fileList: info.fileList })
        if (info.file.status === 'done') {
            this.props.input.onChange(info.file.response)
            this.setState({
                uploadResponse: info.file.response
            })
        }
        if (info.file.status === 'removed') {
            console.log('file remove is clicked')
            axios.delete(`https://fokuswork.com:8443/salesxl/api/v2.0/image/${this.state.uploadResponse}`)
                .then(res => {
                    console.log('file deleted')
                    this.setState({
                        uploadResponse: ''
                    })
                })
                .catch(err => console.log(err))

        }
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <StyledUpload name='file'
                    {...this.props}
                    action='https://fokuswork.com:8443/salesxl/api/v2.0/image/'
                    listType="picture-card"
                    fileList={fileList}
                    name='image'
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                    beforeUpload={this.handleBeforeUpload}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </StyledUpload>
                <Modal visible={previewVisible} footer={null} closable maskClosable onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={`https://fokuswork.com:8443/salesxl/api/v2.0/image/${this.state.uploadResponse}`} />
                    <div style={{ minHeight: 200, backgroundColor: '#f4f4f4', width: '100%' }}>
                        <ImageCropper src={this.state.base64URL} file={this.state.file} />
                    </div>
                </Modal>
            </div >
        )
    }
}

export default UploadInput;