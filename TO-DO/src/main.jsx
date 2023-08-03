import React from 'react'
import ReactDOM from 'react-dom/client'
import ListaDeTarefas from './index'
import GlobalStyle from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaDeTarefas />
    <GlobalStyle />
  </React.StrictMode>,
)
