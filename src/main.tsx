import ReactDOM from 'react-dom/client'
import { BrowserRouter as Nav } from 'react-router-dom'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Nav>
    <App />
  </Nav>
)
