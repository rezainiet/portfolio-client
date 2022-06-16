import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/project/:projectID' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contactMe' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
