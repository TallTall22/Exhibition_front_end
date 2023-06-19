import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import CollectionCreatePage from './pages/admin/collectionCreatePage';
import CollectionEditPage from './pages/admin/collectionEditPage';
import CollectionGetPage from './pages/admin/collectionPage';
import DataPage from './pages/admin/dataPage';
import ExhibitionCreatePage from './pages/admin/exhibitionCreatePage';
import ExhibitionEditPage from './pages/admin/exhibitionEditPage';
import ExhibitionGetPage from './pages/admin/exhibitionPage';
import ExhibitionPage from './pages/forestage/exhibitionsPage/exhibitionPage';
import ExhibitionsPage from './pages/forestage/exhibitionsPage/exhibitionsPage';
import HomePage from './pages/forestage/homePage/homePage';
import VideoPage from './pages/forestage/videoPage';
import './reset.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>           
        <Header/>
        <Main>
          <Routes>
            <Route path='admin/data' element={<DataPage/>}/>
            <Route path='admin/collections/:id/edit' element={<CollectionEditPage/>}/>
            <Route path='admin/collections/:id' element={<CollectionGetPage/>}/>
            <Route path='admin/collections/create' element={<CollectionCreatePage/>}/>
            <Route path='admin/exhibitions/create' element={<ExhibitionCreatePage/>}/>
            <Route path='admin/exhibitions/:id/edit' element={<ExhibitionEditPage/>}/>
            <Route path='admin/exhibitions/:id' element={<ExhibitionGetPage/>}/>
            <Route path='/videos' element={<VideoPage/>}/>
            <Route path='/exhibitions' element={<ExhibitionsPage/>}/>
            <Route path='/exhibitions/:id' element={<ExhibitionPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
          </Main>
        <Footer/>            
      </BrowserRouter>
    </div>
  );
}

export default App;
