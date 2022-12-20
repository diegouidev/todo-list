import './global.css'
import Logo from './assets/Logo.svg'
import { NewTask } from './components/NewTask'


export function App() {
  return (
    <>
      <header>
        <img src={Logo} />
      </header>
      <NewTask />
    </>
  )
}
