import './App.css';
import {  EducativeForm, EducativeFormAcion } from './EducativeForm';
import {Route,createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom";
import Layouts from './layouts/Layouts';

function App() {
  const educative_router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layouts /> } >
          <Route path="/educative_forms" element= {<EducativeForm/>} action={EducativeFormAcion}/>
        </Route> 
    )
  )
  return (
    <>
    <div className="App">
      <RouterProvider router={educative_router} />
    </div>
    </>
    
  );
}
export default App;
