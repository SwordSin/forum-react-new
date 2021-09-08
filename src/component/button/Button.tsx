const MybuttonStyle = require('./Button.module.scss')

interface ButtonContent{
    name: string;
    style?: {[key:string]: string}
}

const Button = function(props: ButtonContent) {
    return (
        <div className={MybuttonStyle.mybutton} style={props.style}>{props.name}</div>
    )
}


export default Button