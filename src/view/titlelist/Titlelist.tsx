import styled from 'styled-components'
import Title from './Title'
import Page from '@/component/page/index'

import { useSelector } from 'react-redux'
import { TitleListPageType, PostsDataType } from '@/typings/shims'
import { getPostsPageInfoApi } from '@/api/board'
import { useEffect, useState } from 'react'


const TitlelistStyle = styled.div`
    float: left;
    width: 100%;
`

const Titlelist = function() {
    const getTitleListData = useSelector((state:{titleList: TitleListPageType}) => {
        return state.titleList
    })
    // 获取该板块下的数据
    const [postData, setPostData] = useState<PostsDataType[]>([])
    useEffect(() => {
        getPostsPageInfoApi(getTitleListData).then((resp:any) => {
            setPostData(resp.data)
        })
    }, [getTitleListData])


    return (
        <TitlelistStyle>
            {
                postData.map(val => <Title key={val.postsId} id={val.postsId === undefined?0:val.postsId} name={val.postsTitle} titleType="标题类型1"></Title>)
            }
            
            {/* <Title id={2} name="标题2" titleType="标题类型1"></Title> */}
            {/* <Title></Title> */}
            <Page></Page>
        </TitlelistStyle>
    )
}

export default Titlelist