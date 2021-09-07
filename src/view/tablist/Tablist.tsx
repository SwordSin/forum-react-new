const TablistStyle = require('./Tablist.module.scss')

const TabList = function() {
    return (
        <div className={TablistStyle.tablist}>
            <ul>
                <li>板块1</li>
                <li>板块2</li>
                <li>板块3</li>
                <li>板块4</li>
            </ul>
        </div>
    )
}

export default TabList