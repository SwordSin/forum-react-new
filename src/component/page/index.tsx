import { InlintStyleType } from '@/shims'
import Input from '@/component/input/Input'
import Button from '@/component/button/Button'

const pageBoxStyle:InlintStyleType = {
    clear: 'both',
    position: 'relative',
    top: '10px',
    paddingLeft: '20px'
}
const pageInputStyle:InlintStyleType = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '50px',
    float: 'left',
    marginRight: '20px'
}

const pageCodeStyle:InlintStyleType = {
    float: 'left',
    marginRight: '20px'
}

const ButtonStyle:InlintStyleType = {
    height: '25px',
    paddingTop: '1px',
    marginRight: '10px'
}

const Page = function() {
    return (<div style={ pageBoxStyle }>
        <span style={pageCodeStyle}>第1页</span>
        <span style={pageCodeStyle}>跳转至</span>
        <Input name="page" style={pageInputStyle}></Input>
        <Button style={ButtonStyle} name="跳转"></Button>
        <Button style={ButtonStyle} name="上一页"></Button>
        <Button style={ButtonStyle} name="下一页"></Button>
    </div>)
}

export default Page