import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Join from "./Components/Join/Join";

import Team from "./Components/Team/Team";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LaunchGivewayAndRoadMap from "./Components/LaunchGiveway/LaunchGivewayAndRoadMap";
import { useEffect } from "react";
import Count from './Components/Count/Count';
import './Components/Count/count.css';
import OwnerBenefits from "./Components/Benefits/OwnerBenefits";
import Gallery from "./Components/Gallery/Gallery";
function App() {
  const roadmap = [
    { title: "10% Minted", text1: "GTO TRAINER", text2: "Giveaway", text3: 'Mint before the 10% milestone and receive an annual "Grinder" or "Beginner" subscription to DTO-a GTO trainer, developed by Dominik Nitsche and Markus Prinz.' },
    { title: "20% Minted", text1: "EXCLUSIVE MERCH", text2: "Store Launch", text3: 'Launch of the merch store that will be exclusively available to Poker Shark owners. Be ready for some of the coolest merch out there and put your ownership on display.' },
    { title: "25% Minted", text1: "MUAY THAI RETREAT", text2: "Live Event", text3: 'A two-week-long Muay Thai retreat for you and a guest in Khao Lak, Thailand. Get out of your comfort zone and hit the pads in the challenging Thai climate. Afterwards reward yourself with a massage and a fresh coconut on the beach. Includes airport transfers, accommodation and training. (CAP 30)' },
    { title: "50% Minted", text1: "POKER CRUISE", text2: "Live Event", text3: 'A poker cruise for you and a guest. Relax on deck during the day and put your poker skills to the test at night. Is there a better way to go on holiday? Location TBD/ Minimum duration 5 nights. (CAP 20)' },
    { title: "75% Minted", text1: "YOGA RETREAT", text2: "Live Event", text3: 'A two-week-long Yoga and Meditation retreat for you and a guest in Bali, Indonesia. Get away from it all. Reset your inner balance and maybe pick up some new techniques to help you ground yourself in everyday life. Includes airport transfers, accommodation and courses. (CAP 30)' },
    { title: "90% Minted", text1: "3D NFT DROP", text2: "Giveaway", text3: "Sharks evolve into fully rigged 3D characters that you can use as your avatar in metaverses, supporting games, and apps. That's right! You will actually receive two NFTs for the price of one." },
    {
      title: "100% Minted",
      text1: "WIM HOF RETREAT",
      text2: "Live Event",
      text3: "Surely by now you've heard of the 'Iceman'? Join Wim Hof for a week-long retreat in Poland. There will be breathing, hiking, and probably ice baths. Transfers, accommodation, and meals included. Yes, it will get cold. (CAP 20)",
    },
  ];
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 2000,
      easing: "ease",
    });
  });

  return (
    
    <>
      <Header />
      <HeroSection />
      <Join />
      <Count />
      
      <OwnerBenefits />
      <Gallery />
  
      <LaunchGivewayAndRoadMap
        title="ROADMAP "
        data={[...roadmap]}
        id="projectmap"
        img="./images/big_shark.png"
        img2="images/small_shark.svg"
        padding={true}
      />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
