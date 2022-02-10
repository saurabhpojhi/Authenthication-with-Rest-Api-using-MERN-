import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import Register from './componets/Register';
import ShowFolder from './componets/ShowFolder';
import ShowNote from './Componets/ShowNote';
import AddNote from './Componets/addnote';
import AddFolder from './Componets/AddFolder';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Nav />
     <Routes>
       <Route element={<PrivateComponent />}>
       <Route path="/" element={<ShowNote />} />
       <Route path="/addnote" element={<AddNote />} />

       <Route path="/" element={<ShowFolder/>} />
       <Route path="/addfolder" element={<AddFolder />} />
       
       <Route path="/logout" element={<h1> Logout Component</h1>} />
       </Route>

       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />

     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;