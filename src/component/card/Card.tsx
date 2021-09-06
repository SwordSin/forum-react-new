import styled from 'styled-components'

const CardStyle = styled.div`
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    border-bottom: 1px solid var(--box-border-color);
`

interface CardProps {
    component: React.FunctionComponent
}

const Card = function(prop:CardProps) {
    const Component:React.FunctionComponent = prop.component
    return (
        <CardStyle>
            <Component></Component>
        </CardStyle>
    )
}

export default Card