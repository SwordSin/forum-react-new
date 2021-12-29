import { Divider, Descriptions } from 'antd'

const ForumState = function() {
    return (<div>
        <Divider orientation="left" style={{fontWeight: 500, margin: '7px auto'}}>本月阵地火力</Divider>
        <Descriptions column={1} style={{marginLeft: '10px'}}>
            <Descriptions.Item label="新增用户">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="新增帖子">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="新增主题">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="新增投票">Zhou Maomao</Descriptions.Item>
        </Descriptions>
    </div>)
}

export default ForumState