import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Article from './components/Article/Article';
import TemplatePage from './components/TemplatePage/TemplatePage'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<TemplatePage/>}/>
        <Route path='/reviews' element={<TemplatePage/>}/>
        <Route path='/lists' element={<TemplatePage/>}/>
        <Route path='/article/:title' element={<Article/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
