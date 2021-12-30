import { useEffect, useState } from 'react'
import { Modal, Input } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

interface getImgUrlType {
    (url:string):string;
}
interface UploadModelType {
    showModal: number;
    getImgUrl: getImgUrlType;
}

const UploadModel = function(props:UploadModelType) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [url, setUrl] = useState('')
        useEffect(() => {
            console.log(123)
            if (props.showModal > 0) {
                setIsModalVisible(true)
            }
        }, [props.showModal])
    
        // closeImageUpload
        const closeImageUpload = () => {
            if(url !== '') {
                props.getImgUrl(url)
            }
            setIsModalVisible(false)
        }

    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={closeImageUpload} onCancel={closeImageUpload}>
            <Input
                key="linkUrl"
                addonBefore={<LinkOutlined />}
                placeholder="链接地址"
                value={url}
                onChange={(event:any) => {setUrl(event.target.value)}}
                style={{ marginBottom: 12 }}
            />
        </Modal>
    )
}


export default UploadModel