
import './styles/App.scss';
import Navbarcomponent from './components/Navbar';
import MyRouter from './components/Router';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Navbarcomponent />
      <MyRouter/>
      <Footer/>
    </div>
  );
}

export default App; 
