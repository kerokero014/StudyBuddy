import Header from "../components/MainHeader";
import Footer from "../components/MainFooter";
import AllDecks from "../components/AllDecks";
import TestComponent from "../components/TestComponent";

export default function Courses() {
  return (
    <>
      <Header />

      <h1 className="text-4xl text-white m-4 p-1">Courses</h1>

      {/* <div className="bg-slate-300 container mx-auto my-5">
        <AllDecks />
      </div> */}

      <Footer />
    </>
  );
}
