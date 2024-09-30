import CarouselTextBanner from "@/components/carousel-text-banner"
import NavbarPage from "@/components/NavbarPage/NavbarPage"

export default function page() {
  return (
    <>
        <NavbarPage />
        <CarouselTextBanner />
        <main>
          Hello from page
        </main>
    </>
  )
}
