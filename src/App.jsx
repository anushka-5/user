import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Category from "./components/Category/Category";
// import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import Newsletter from "./components/Newsletter";
// import AppContext from './utils/context';

function App() {
    return (
        <BrowserRouter>
            
                {/* <Header /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/category/:id" element={<Category />} />
                    <Route path="/recipe/:id" element={<SingleRecipe />} /> */}
                </Routes>
                <Newsletter />
                <Footer />
            
        </BrowserRouter>
    );
}

export default App;