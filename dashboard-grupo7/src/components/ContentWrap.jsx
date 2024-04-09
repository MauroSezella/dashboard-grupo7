import { Route, Routes } from "react-router-dom";
import Products from './Products/Products'
import Categories from "./Categories/Categories";
import Statistics from './Statistics/Statistics';


export default function ContentWrap() {
  return (
    <>

      <main className="content-wrap">
        <Routes>
        <Route path="/" exact element={<Statistics/>} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/categories" exact element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}
