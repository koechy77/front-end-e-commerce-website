import Faq from "../components/info/Faq";
import ShippingPolicy from "../components/info/ShippingPolicy";
import WhyChooseUs from "../components/info/WhyChooseUs";
import Categories from "../components/layout/Categories";
import FeaturedProducts from "../components/layout/FeaturedProducts";
import Hero from "../components/layout/Hero";


export default function Home() {

  return (
    <>
      <main className="min-h-screen flex flex-col mx-7 my-17">

        <Hero />
        <FeaturedProducts />
        <Categories />
        <div className="border-t border-gray-500 mx-80"/>
        <WhyChooseUs />
        <div className="border-t border-gray-500 mx-80"/>
        <Faq />
        <div className="border-t border-gray-500 mx-80"/>
        <ShippingPolicy />

      </main>

    </>
  );
}
