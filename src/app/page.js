
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import TakeCare from "./components/TakeCare";
import Interest from "./components/Interest";



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4 ">
        <h1 >Welcome to My E-commerce</h1>
        <p>Explore our products!</p>
      </main>
      <Interest />
      <TakeCare />
      <Register />
      <Footer />
    </>
  );
}
