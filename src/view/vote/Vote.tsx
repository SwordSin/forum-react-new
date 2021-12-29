import { Divider, List, Typography  } from 'antd'

const data = [
    '投票的标题1',
    '投票的标题2',
    '投票的标题3',
    '投票的标题3'
  ]

const Vote = function() {
    return (<div>
        <Divider orientation="left" style={{fontWeight: 500, margin: '7px auto'}}>投票</Divider>
        <List
            bordered
            dataSource={data}
            renderItem={item => (
            <List.Item style={{padding: '6px 7px'}}>
                {item} 参与人数: <Typography.Text mark>1010</Typography.Text> 
            </List.Item>
        )}
            style={{border: '0px'}}
        />
    </div>)
}

export default Vote