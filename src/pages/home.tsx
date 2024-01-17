import About from "../components/homepage/about";
import Banner from "../components/homepage/banner";
import Hero from "../components/homepage/hero";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import Navbar from "../layouts/navbar";

export default function Home() {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Navbar />
      <Hero />
      <Banner />
      <About />
    </>
  )
}
