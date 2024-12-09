import SideNav from '@/components/SideNavFT';
import Overview from './dashboard/Overview';
import NavbarPage from '@/components/NavbarPage/NavbarPage';
import Footer from '@/components/footer';

const page = () => {
    return (
        <>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <NavbarPage />
            <div className="flex flex-col md:flex-row min-h-screen">
              <SideNav />
              <div className="flex-1 p-4">
                <Overview />
              </div>
            </div>
            <Footer />
          </div>
        </>
    );
};

export default page;
