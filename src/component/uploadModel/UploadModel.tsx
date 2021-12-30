import { useEffect, useState } from 'react'
import { Modal, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

interface getImgUrlType {
    (url:string):string;
}
interface UploadModelType {
    showModal: number;
    getImgUrl: getImgUrlType;
}

function getBase64(img:any, callback:any) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}
function beforeUpload(file:File) {
    // debugger
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
}
  

const UploadModel = function(props:UploadModelType) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [loading, setLoading]  = useState(false)
    const [imageUrl, setImageUrl]  = useState('')
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
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )

    const handleChange = (info:any) => {
        if (info.file.status === 'uploading') {
          setLoading(true)
          return
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrlParam:string) => {
            setImageUrl(imageUrlParam)
            setLoading(false)
          }
          )
        }
      }
    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={closeImageUpload} onCancel={closeImageUpload}>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                {/* <img src={require('@/asset/image/compose.png').default} alt="avatar" style={{ width: '100%' }} /> */}
            </Upload>
        </Modal>
    )
}


export default UploadModel