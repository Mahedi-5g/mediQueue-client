import AvailableTutors from "@/components/AvailableTutors";
import Banner from "@/components/Banner";
import ExtraSection from "@/components/ExtraSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AvailableTutors></AvailableTutors>
      <ExtraSection></ExtraSection>
    </div>
  );
}
