import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import CollectionCreatePage from './pages/admin/collectionCreatePage';
import CollectionEditPage from './pages/admin/collectionEditPage';
import DataPage from './pages/admin/dataPage';
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
            <Route path='admin/collections/create' element={<CollectionCreatePage/>}/>
            <Route path='admin/collections/edit' element={<CollectionEditPage/>}/>
          </Routes>
          </Main>
        <Footer/>            
      </BrowserRouter>
    </div>
  );
}

export default App;
