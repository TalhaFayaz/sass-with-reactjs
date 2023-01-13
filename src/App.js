import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Showcase from './components/Showcase';
import './sass/main.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Showcase/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
