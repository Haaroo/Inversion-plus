import BannerDiscount from "@/components/banner-discount"
import CarouselTextBanner from "@/components/carousel-text-banner"
import ChooseCategory from "@/components/choose-category"
import FeaturedProducts from "@/components/featured-products"
import NavbarPage from "@/components/NavbarPage/NavbarPage"

export default function page() {
  return (
    <>
        <NavbarPage />
        <CarouselTextBanner />
        <FeaturedProducts/>
        <BannerDiscount />
        <ChooseCategory />
        <main>
          Hello from page
        </main>
    </>
  )
}
