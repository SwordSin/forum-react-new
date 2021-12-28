import { TitleListPageType } from '@/typings/shims'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination  } from 'antd'

const Page = function() {
    const pageData = useSelector((state:{titleList: TitleListPageType}) => {
        return state.titleList
    })
    const dispatch = useDispatch()

    const jumpPage = function(page: number, pageSize: number) {
        console.log('跳转至', page)
        console.log(pageSize)
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

    return (
        // style={{marginTop: '20px'}} 
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={jumpPage} />
    )
}

export default Page