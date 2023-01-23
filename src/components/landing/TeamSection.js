/* eslint-disable no-unused-vars */
import Image4 from "assets/img/001.png";
import Image5 from "assets/img/000.png";
import Image6 from "assets/img/077.png";
import Image7 from "assets/img/092.png";
import Image8 from "assets/img/095.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../assets/img/carousel/010.png";
import img2 from "../../assets/img/carousel/012.png";
import img3 from "../../assets/img/carousel/013.png";
import img4 from "../../assets/img/carousel/014.png";
import img5 from "../../assets/img/carousel/015.png";
import img6 from "../../assets/img/carousel/016.png";
import img7 from "../../assets/img/carousel/017.png";
import img8 from "../../assets/img/carousel/018.png";
import img9 from "../../assets/img/carousel/019.png";
import img10 from "../../assets/img/carousel/020.png";
import img11 from "../../assets/img/carousel/021.png";
import img12 from "../../assets/img/carousel/022.png";
const slideData = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const options = {
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      // dotsEach: 4,
      items: 2,
    },
    600: {
      // dotsEach: 4,
      items: 3,
    },
    1000: {
      dotsEach: 2,
      items: 6,
    },
  },
};
function TeamSection() {
  return (
    <section
      id="about"
      className="pt-20 pb-20"
      style={{ backgroundColor: "#370d4c" }}
    >
      <div className="container px-4">
        <div className="flex justify-center -mt-4 relative z-50">
          <button className="btn-custom">About us</button>
        </div>
        <p className="text-white font-medium text-center max-w-6xl mx-auto mt-6">
        KoiGuys are Collection of 1,888 Beautiful Koi swimming on the Eth Blockchain randomly generated using more than 150+ characteristics! Stake your Koi for utility token $KOIFISH, for future drops, breeding & Access to Our Otherside Land DOA!!
        </p>
      </div>
      <div className="carousel-container pt-6 pb-8">
        <OwlCarousel className="owl-theme" {...options}>
          {slideData.map((v, i) => (
            <div key={i} className="p-2 rounded-lg overflow-hidden">
              <img src={v} alt="" className="w-full  rounded-lg  " />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
export default TeamSection;
