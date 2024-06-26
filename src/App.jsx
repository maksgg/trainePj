import Delivery from "./components/Delivery/Delivery";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Places from "./components/Places/Places";
import Restaurants from "./components/Restaurants/Restaurants";
import Specialities from "./components/Specialities/Specialities";
import Map from "./components/Map/Map";
import InstaSection from "./components/InstaSection/InstaSection";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Restaurants />
      <Delivery />
      <Specialities />
      <Places />
      <Map />
      <InstaSection />
      <Footer />
    </>
  )
}

export default App
