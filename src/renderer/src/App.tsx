import { Routes, Route, Link } from "react-router-dom";
import InfosPage from './components/infos';
import FragementsPage from './components/fragements/fragementsPage';


function App(): React.JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
   <h1>Everyday Dev's Code wallet</h1>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FragementsPage">Fragements</Link>
          </li>
          <li>
            <Link to="/InfosPage">Infos</Link>
          </li>
        </ul>
      </nav>

     
       <Routes>
            <Route path='/FragementsPage' element={<FragementsPage/>}/>
            <Route path='/InfosPage' element={<InfosPage/>}/>
       </Routes>
       </>
       
  )
}

export default App
