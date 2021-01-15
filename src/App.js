import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import BodyHead from './BodyHead'

function App() {
  return (
    <div className="app">

       <Header />
       <BodyHead />
       
       <div className="app_body">
         <Sidebar />
        

       </div>
    </div>
  );
}

export default App;
