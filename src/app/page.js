import Hero from "@/components/Hero/Hero.jsx";
import Content from "@/components/ContentSection/Content.jsx";
import Premier from "@/components/Premier/Premier";
import About from "@/components/About/About";
import Specification from "@/components/Specification/Specification";
import Booking from "@/components/Booking/Booking";
import Info from "@/components/InfoSection/Info";
import Discover from "@/components/Discover/Discover";
import Footer from "@/components/Footer/Footer";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <Hero />
        <Content />
        <Premier />
        <About />
        <section className={styles.priority}>
          <Specification />
          <Booking />
        </section>
        <Info />
        <Discover />
        <Footer />
      </main>
    </>
  );
}
