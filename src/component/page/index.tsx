import { InlintStyleType, TitleListPageType } from '@/typings/shims'
import Input from '@/component/input/Input'
import Button from '@/component/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'



const pageBoxStyle:InlintStyleType = {
    clear: 'both',
    position: 'relative',
    top: '3px',
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
    const pageData = useSelector((state:{titleList: TitleListPageType}) => {
        return state.titleList
    })
    const refInput:any = useRef()
    const dispatch = useDispatch()

    const jumpPage = function(page:number|string) {
        // 跳转页面
        if (!Number.isNaN(Number(page))) {
            dispatch({
                type: 'SET_TTITLE_LIST_INFO',
                payload: {
                    boardId: pageData.boardId,
                    page: Number(page),
                    size: 20
                } 
            })
        } else {
            alert('请输入正确的页码')
        }
    }

    return (<div style={ pageBoxStyle }>
        <span style={pageCodeStyle}>第{pageData.page}页</span>
        <span style={pageCodeStyle}>跳转至</span>
        <Input ref={refInput} name="page" style={pageInputStyle} ></Input>
        <Button style={ButtonStyle} name="跳转" func={() => {
            jumpPage(refInput.current.value)
        }}></Button>
        <Button style={ButtonStyle} name="上一页" func={() => {jumpPage(pageData.page - 1)}}></Button>
        <Button style={ButtonStyle} name="下一页" func={() => {
            console.log(pageData.page)
            jumpPage(pageData.page + 1)
        }}></Button>
    </div>)
}

export default Page