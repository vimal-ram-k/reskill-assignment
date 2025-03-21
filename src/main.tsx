import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { LandingPage } from './pages/landingpage.tsx'
import './styles/main/main.css';
import { ProductList } from './components/productlist.tsx';
import { ProductPage } from './pages/productpage.tsx';
import { Provider } from 'react-redux';
import { Store } from './redux/store.ts';
import { CartPage } from './pages/cartpage.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Provider store={Store}>
    <Router>
      <Routes>

        <Route path='/' element={<LandingPage />} >
        
        <Route path='/' element={<ProductList />} />
        <Route path='/:id' element={<ProductPage />} />
        <Route path='cart' element={<CartPage />} />

        </Route>

      </Routes>
    </Router>
        </Provider>
  </StrictMode>,
)
