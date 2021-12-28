import { List, Typography, Divider } from 'antd'

const data = [
    '热榜的标题1',
    '热榜的标题2',
    '热榜的标题3',
    '热榜的标题4',
    '热榜的标题5',
    '热榜的标题6',
    '热榜的标题7',
    '热榜的标题8',
    '热榜的标题9',
    '热榜的标题10'
  ]

const HotList = function() {
    return (
    <div>
        <Divider orientation="left" style={{fontWeight: 500, margin: '7px auto'}}>热榜</Divider>
        <List
            bordered
            dataSource={data}
            renderItem={item => (
            <List.Item style={{padding: '6px 7px'}}>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
        )}
            style={{border: '0px'}}
        />
    </div>)
}

export default HotList