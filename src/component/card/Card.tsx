import styled from 'styled-components'

const CardStyle = styled.div`
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    border-bottom: 1px solid var(--box-border-color);
    // float: left;
    padding: 5px;
`
interface StyleType {
    [attr:string]: string;
}

interface CardProps {
    component: React.FunctionComponent,
    style?: StyleType;
}

const Card = function(prop:CardProps) {
    return (
        <CardStyle style={prop.style}>
            <prop.component></prop.component>
        </CardStyle>
    )
}

export default Card