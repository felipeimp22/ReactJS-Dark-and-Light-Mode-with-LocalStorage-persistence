import React, { useContext } from 'react'
import { Container } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
//React.FC  <--- functional component

interface Props {
    toggleTheme(): void
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext)
    return (
        <Container>
            Hello World
            <Switch
                onChange={toggleTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    )
}
export default Header