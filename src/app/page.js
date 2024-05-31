import Image from "next/image";
import MainSlider from "./components/mainSlider";
import CallToActionView from "./components/callToActionView";
import TemplateCard from "./components/templateCard";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center bg-[#0f0f0f]">
      <div className="w-full max-w-[1550px]">
        <MainSlider />
        <CallToActionView />
        <TemplateCard
        />
        <TemplateCard
          directionReverse={true}
        />
        <TemplateCard
        />
        <Gallery></Gallery>
      </div>
    </main>
  );
}
