import InputSearch from '@/component/input/InputSearch'
import { InlintStyleType } from '@/shims'
const InputStyle:InlintStyleType = {
    width: '200px',
    borderRadius: '3px',
    border: '1px solid var(--box-border-focus-color)'
}

// interface PropsType {
//     style: InlintStyleType
// }

// const Input = function(props: PropsType) {
const Input = function(props: {style: InlintStyleType}) {
    return (
        <div style={{...InputStyle, ...props.style}}>
            <InputSearch></InputSearch>
        </div>
    )
}

export default Input