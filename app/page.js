import Banner from "@/Components/Banner/Banner";
import Categories from "@/Components/Categories";
import Gallery from "@/Components/Gallery";
import Header from "@/Components/Header/Header";
import Recomended from "@/Components/Recomended";
import Sale from "@/Components/Sale";
import Season from "@/Components/Season";

export default function Home() {
  return (
    <main className="">
     <Header/>
     <Banner/>
     <Categories/>
     <Sale/>
     <Season/>
     <Recomended/>
     <Gallery/>
    </main>
  );
}
