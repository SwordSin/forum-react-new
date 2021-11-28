import React from 'react'

// const FancyButton = React.forwardRef((props:{abc: string}, ref:any) => (
//     <button ref={ref}>
//       {props.abc}
//     </button>
// ))

const abc = 'asdf'

const FancyButton = React.forwardRef(function(props:{abc: string}, ref:any) {
    return (
        <div>
            {abc}
            <button ref={ref}>
            {props.abc}
            </button>
        </div>
    )
})

export default FancyButton