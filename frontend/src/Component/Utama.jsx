import Carousell from "../Component isi/Carousell";
import List from "../Component isi/List film";
import Footer from "../Component isi/Footer";

const Utama = () => {
  return (
    <>
  <div className="bg-black">
    {/* <Navbar /> */}
    <Carousell />
    <br /><br />
    <List />
    <br /><br />
    <Footer />
  </div>
    </>
  )
}

export default Utama