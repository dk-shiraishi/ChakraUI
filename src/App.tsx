import { Provider } from './components/ui/provider'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'

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
