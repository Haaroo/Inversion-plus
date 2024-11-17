import BannerDiscount from "@/components/banner-discount"
import CarouselTextBanner from "@/components/carousel-text-banner"
import ChooseCategory from "@/components/choose-category"
import FeaturedNotices from "@/components/featured-notices"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"
import NavbarPage from "@/components/NavbarPage/NavbarPage"

export default function page() {
  return (
    <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <NavbarPage />
        <CarouselTextBanner />
        <FeaturedNotices/>
        <BannerDiscount />
        <ChooseCategory />
        <Footer />
        </div>
    </>
  )
}
