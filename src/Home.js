import './App.css';
import Header from './components/Header';
import Discover from './components/Discover';
import Option from './components/Option';
import Feature from './components/Feature';
import Stepfeature from './components/Stepfeature';
import About from './components/About';
import Card from './components/Card';
import User from './components/User';
import Abovefooter from './components/Abovefooter';
import Footer from './components/Footer';
function Home() {
  return (
    <div className="Home">
      <Header/>
      <Discover />
      <Option/>
      <Feature />
      <Stepfeature />
      <About />
      <Card />
      <User />
      <Abovefooter />
      <Footer />

    </div>
  );
} 
export default Home;
