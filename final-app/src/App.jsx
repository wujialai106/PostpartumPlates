
import { useState } from 'react';
import { useEffect } from 'react';
import './app.css';
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [page, setPage] = useState(document.location.hash || '#/');
  // stay on previous page after F5 fresh the page
  useEffect(
    () => {
      const onHashChange = (e) => {
        console.log(`hash changed to ${e.target.location.hash}`);
      }
      window.addEventListener('hashchange', onHashChange);
      return () => {
        window.removeEventListener('hashchange', onHashChange);
        console.log('cleanup');
      }
    }
  );



  return (
    <div className="App">

      <Header setPage={setPage} />
      <Main page={page} />
      <Footer setPage={setPage}/>

    </div>
  );
}

export default App;
