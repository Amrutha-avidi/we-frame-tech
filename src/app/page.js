
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import TakeCare from "./components/TakeCare";
import Interest from "./components/Interest";
import SimilarArticles from './components/SimilarArticles'
import Decription from './components/Decription'
import MainProduct from './components/MainProduct'
import MenuItems from './components/MenuItems'



export default function Home() {
  return (
    <>
      <Navbar />
      <MenuItems />
     <MainProduct />
      <Decription />
      <SimilarArticles />
      <Interest />
      <TakeCare />
      <Register />
      <Footer />
    </>
  );
}
