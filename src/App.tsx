
// import { Button } from "@/components/ui/button"
import './global.css'
import { Routes, Route, Link } from "react-router";
import SnippetPage from './components/snippetComponents/snippetPage'
import InfosPage from './components/infos/infos';
import SnippetForm from './components/form/snippetForm';


function App() {
 

  return (
    <>


<nav className="bg- border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-jet">EverydayDev</span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        {/* <span className="sr-only">Open main menu</span> */}
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className='text-mantis hover:text-light-mantis'>
             <Link to='/SnippetPage'>Snippet</Link>
        </li>
        <li className='text-mantis hover:text-light-mantis'>
          {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Infos</a> */}
          <Link to='/InfosPage'>Infos</Link>
        </li>
        <li>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <Routes>
        <Route path='/SnippetPage/*' element={<SnippetPage/>}/>
        <Route path='/InfosPage/*' element={<InfosPage/>} /> 
        <Route path='/SnippetForm/*' element={<SnippetForm/>} />
      </Routes>

    </>
  )
}

export default App
