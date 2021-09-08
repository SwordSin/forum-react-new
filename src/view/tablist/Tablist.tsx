const TablistStyle = require('./Tablist.module.scss')

import Button from '@/component/button/Button'
// const buttonStyle = {
//     marginLeft: '5px'
// }

const TabList = function() {
    return (
        <div className={TablistStyle.tablist}>
            <Button name="板块1"></Button>
            <Button name="板块2"></Button>
            <Button name="板块3"></Button>
            <Button name="板块4"></Button>
        </div>
    )
}

export default TabList