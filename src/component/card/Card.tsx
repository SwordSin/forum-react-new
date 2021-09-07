import styled from 'styled-components'

const CardStyle = styled.div`
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    border-bottom: 1px solid var(--box-border-color);
    // float: left;
    padding: 5px;
`

interface CardProps {
    component: React.FunctionComponent,
    style?: any;
}

const Card = function(prop:CardProps) {
    const Component:React.FunctionComponent = prop.component
    return (
        <CardStyle style={prop.style}>
            <Component></Component>
        </CardStyle>
    )
}

export default Card