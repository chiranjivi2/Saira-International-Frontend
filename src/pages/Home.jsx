import Card from "../features/home/Card";
import Colleges from "../features/home/Colleges";
import Countries from "../features/home/Countries";
import HotNewsMarquee from "../features/home/HotNews";

import Universities from "../features/home/Universities";
import Welcome from "../features/home/Welcome";
import Footer from "../ui/Footer";

function Home() {
  return (
    <div>
      <section>
        <div className="h-[calc(100vh-80px)] bg-[var(--color-primary)]">
          <img
            src="heroImage.jpg"
            alt="Saira_hero_img"
            className="h-full w-full object-cover "
          />
        </div>
      </section>
      <Welcome />
      <Countries />

      <HotNewsMarquee />

      <Colleges />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
