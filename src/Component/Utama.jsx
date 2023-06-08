import Navbar from "../Component isi/Navbar";
import Carousel from "../Component isi/Carousel";
import List from "../Component isi/List film";
import Footer from "../Component isi/Footer";
import Card from "../Component isi/Card";

const Utama = () => {
  return (
    <>
  <div className="bg-black">
    <Navbar />
    <Carousel />
    <br /><br />
    <List />
    <br /><br />
    <Footer />
    {/* <Card /> <br /> */}
  </div>
    </>
  )
}

export default Utama