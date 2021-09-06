import Card from '@/component/card/Card'

const box = function() {
    return (
        <div>这是一个内容</div>
    )
}

const Content = function() {
    return (
        <Card component={box}></Card>
    )
}

export default Content