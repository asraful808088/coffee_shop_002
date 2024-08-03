import Branch from "@/app/components/branch/branch";
import Features from "@/app/components/features001/feature";
import Footer from "@/app/components/footer/footer";
import HomeDisplay from "@/app/components/home-display/homeDisplay";
import Marketing001 from "@/app/components/market-info001/marketing";
import NewItem001 from "@/app/components/newItems001/newItems";
import PopulerItems from "@/app/components/populerItems/PopulerItems";
import ReviewBox from "@/app/components/review/review";
export default function Home() {
  return (
    <div className="h-full relative w-full bg-black">
      <HomeDisplay />
      <Marketing001 />
      <Branch />
      <Features />
      <NewItem001 />
      <ReviewBox />
      <PopulerItems />
      <Footer />
    </div>
  );
}
