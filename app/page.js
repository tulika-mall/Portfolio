import Navbar from "@/components/Navbar";
import HomePage from "./home/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <main >
      <div className="min-h-screen overflow-x-hidden"  >
      <Navbar />
      <HomePage />
      <Footer />
      </div>
    </main>
  );
}
