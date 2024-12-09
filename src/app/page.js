
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import TakeCare from "./components/TakeCare";
import Interest from "./components/Interest";
import SimilarArticles from './components/SimilarArticles'
import Decription from './components/Decription'
import MainProduct from './components/MainProduct'



export default function Home() {
  return (
    <>
      <Navbar />
     <MainProduct />
      <Decription />
      {/* <SimilarArticles /> */}
      <Interest />
      <TakeCare />
      <Register />
      <Footer />
    </>
  );
}
