import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Article from './components/Article/Article';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SearchPage from './components/SearchPage/SearchPage';
import ListPage from './components/ListPage/ListPage';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/article/:title' element={<Article/>}/>
          <Route path='/list/:title' element={<ListPage/>}/>
          <Route path='/search/:search' element={<SearchPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
