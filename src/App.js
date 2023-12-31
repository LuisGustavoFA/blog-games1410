import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeaderHandler from './components/HeaderHandler/HeaderHandler';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
import ThemeHandler from './components/ThemeHandler/ThemeHandler';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SearchPage from './pages/SearchPage/SearchPage';
import TagPage from './pages/TagPage/TagPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';

function App() {
  return (
    <Router>
      <HeaderHandler/>
        <Routes>
          <Route element={<HomePage/>} path=''/>
          <Route element={<HomePage/>} path='/home'/>
          <Route element={<ArticlePage/>} path='/article/:title'/>
          <Route element={<SearchPage/>} path='/search/:search'/>
          <Route element={<TagPage/>} path='/tag/:tag'/>
          <Route element={<ErrorPage/>} path='*'/>
        </Routes>
      <Footer/>
      <ScrollButton/>
      <ThemeHandler/>
    </Router>
  );
}

export default App;
