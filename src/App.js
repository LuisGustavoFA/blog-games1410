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
          <Route element={<HomePage/>} path=''/>
          <Route element={<HomePage/>} path='/home'/>
          <Route element={<Article/>} path='/article/:title'/>
          <Route element={<ListPage/>} path='/list/:title'/>
          <Route element={<SearchPage/>} path='/search/:search'/>
          <Route element={<ErrorPage/>} path='*'/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
