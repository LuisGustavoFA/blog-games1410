import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeaderHandler from './components/HeaderHandler/HeaderHandler';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import ArticlePage from './components/Pages/ArticlePage/ArticlePage';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import SearchPage from './components/Pages/SearchPage/SearchPage';
import ListPage from './components/Pages/ListPage/ListPage';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  return (
    <Router>
      <HeaderHandler/>
        <Routes>
          <Route element={<HomePage/>} path=''/>
          <Route element={<HomePage/>} path='/home'/>
          <Route element={<ArticlePage/>} path='/article/:title'/>
          <Route element={<ListPage/>} path='/list/:title'/>
          <Route element={<SearchPage/>} path='/search/:search'/>
          <Route element={<ErrorPage/>} path='*'/>
        </Routes>
      <Footer/>
      <ScrollButton/>
    </Router>
  );
}

export default App;
