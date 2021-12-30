import { useEffect, useState } from 'react'
import { Modal } from 'antd'
const UploadModel = function(props:{
    showModal: number
} = {showModal: 0}) {
    const [isModalVisible, setIsModalVisible] = useState(false)

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

    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={closeImageUpload} onCancel={closeImageUpload}>
            <h1>这是一个上传页面</h1>
        </Modal>
    )
}


export default UploadModel