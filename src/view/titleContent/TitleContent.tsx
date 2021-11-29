import { getPostsPageInfoOneApi } from '@/api/board'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PostsDataType } from '@/shims'

const TitleContent = function() {
    const loaclcation = useLocation()
    // 获取帖子id
    const postsId = loaclcation.pathname.split('/').pop()
    const [postData, setPostData] = useState<PostsDataType>()
    useEffect(() => {
        // debugger
        if (postData === undefined) {
            getPostsPageInfoOneApi(Number(postsId)).then(resp => {
                console.log(resp.data)
                setPostData(resp.data.data)
            })
        }
    })
    return (
        <div style={{width: '80%'}}>
            <h3>{postData?.postsTitle}</h3>
            <div>
                {postData?.postsContent}
            </div>
        </div>
    )
}

export default TitleContent