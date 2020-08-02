import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from './styles/global'
import Header from './Components/Header/index'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>({ key: 'theme', initialState: light })

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />

      </div>
    </ThemeProvider>
  );
}

export default App;
