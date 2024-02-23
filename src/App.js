import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { IngredientList, MenuList, OrderInformation, TopNavBar } from './Module';
import { NoPage } from './Component';
import { Footer } from './Module/Screen/Footer';





function App() {
  return (
    <div>
      <TopNavBar/>
         <Routes>
          <Route path="/" element={<MenuList/>} />
          <Route path="/ingredient" element={<IngredientList/>} />
          <Route path="/order" element={<OrderInformation/>} />
          <Route path="*" element={<NoPage/>} />
    </Routes>
    <Footer/>

    </div>
 
  );
}

export default App;
