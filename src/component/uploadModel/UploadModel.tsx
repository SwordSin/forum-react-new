import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'antd'
const uploadStyle = require('./upload.module.scss')
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { savePicApi } from '@/api/editor'

interface getImgUrlType {
    (url:string):string;
}
interface UploadModelType {
    showModal: number;
    getImgUrl: getImgUrlType;
}
const uploadButton =(loading:boolean) => (
    <div style={{marginTop: '30px'}}>
      {loading ? <LoadingOutlined />: <PlusOutlined /> }
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
)

const UploadModel = function(props:UploadModelType) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const inputRef:any = useRef(null)
    useEffect(() => {
        console.log(123)
        if (props.showModal > 0) {
            setIsModalVisible(true)
        }
    }, [props.showModal])

    // closeImageUpload
    const closeImageUpload = () => {
        setIsModalVisible(false)
    }

    const uploadPic = () => {
        // debugger
        inputRef.current.click()
        setLoading(true)
    }

    const uploadInput = () => {
        console.log('asdfa')
    }
    const uploadInputChange = (e:any) => {
        console.log(e.target.files[0])
        savePicApi({
            file: e.target.files[0]
        }).then((resp:any) => {
            console.log(resp)
        })
    }
    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={closeImageUpload} onCancel={closeImageUpload}>
            <div className={uploadStyle.uploadStyle} onClick={uploadPic}>
            <input ref={inputRef} type="file" accept="" style={{display: 'none'}} onClick={ uploadInput } onChange={uploadInputChange} />
                {uploadButton(loading)}
            </div>
        </Modal>
    )
}

export default UploadModel