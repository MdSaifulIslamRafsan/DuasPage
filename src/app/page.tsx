import Categories from "@/components/Categories/Categories";
import DuaSection from "@/components/DuaSection/DuaSection";
import Settings from "@/components/settings/Settings";
import Navbar from "@/components/SharePage/Navbar";
import Sidebar from "@/components/SharePage/Sidebar";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.svg" />
      <div className="my-5 max-w-[1440px] lg:w-11/12 w-[95%] mx-auto">
        <div className="lg:flex lg:gap-10">
          <div>
            <Sidebar></Sidebar>
          </div>
          <div className="flex-1">
          <div className="flex lg:gap-10">
            <Navbar></Navbar>
            <Settings></Settings>
          </div>
            <div className="lg:grid gap-5 lg:grid-cols-3">
                <Categories></Categories>
                <DuaSection></DuaSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
