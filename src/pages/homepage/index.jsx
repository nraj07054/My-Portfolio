import About from "@/components/about";
import Header from "../../components/header";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

const Homepage = () => {
  return (
    <div className="h-[100%] pt-6 px-8 md:px-14">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Homepage;
