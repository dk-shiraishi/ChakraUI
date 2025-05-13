import { Button, ChakraProvider } from '@chakra-ui/react'
import { Provider } from './components/ui/provider'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
