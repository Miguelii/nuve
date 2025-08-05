import { ParallaxScrollAbout } from './parallax-scroll-about'
import { ParallaxScrollShowcase } from './parallax-scroll-showcase'
import { ParallaxScrollGallery } from './parallax-scroll-gallery'

export default function ParallaxScroll() {
   return (
      <>
         <ParallaxScrollAbout />
         <ParallaxScrollGallery />
         <ParallaxScrollShowcase />
      </>
   )
}
