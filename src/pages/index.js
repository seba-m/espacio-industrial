import styles from "@/styles/index/index.module.scss";
//import { Carousel } from "flowbite-react";
import { Carousel, IconButton  } from "@material-tailwind/react";

import Search from "@/components/LandingPage/SearchBar";

export default function LandingPage() {
  const images = [
    "https://api.espacioindustria.cl/api/image_gallery/content?filePath=image_gallery/banner20230911155502.jpg",
    "https://api.espacioindustria.cl/api/image_gallery/content?filePath=image_gallery/banner20230911155601.jpg",
    "https://api.espacioindustria.cl/api/image_gallery/content?filePath=image_gallery/banner20230911155629.jpg",
  ];

  const partners = [
    "https://www.espacioindustria.cl/img/cidere_logo.5ccd5843.png",
    "https://www.espacioindustria.cl/img/crdp_logo.614e125b.png",
    "https://www.espacioindustria.cl/img/seremi_logo.00fb2ee4.png",
    "https://www.espacioindustria.cl/img/cmp_logo.4ff1786d.jpg",
    "https://www.espacioindustria.cl/img/pelambres_logo.261f578e.png",
    "https://www.espacioindustria.cl/img/teck_logo.22f8a0f4.png",
  ];

  return (
    <div>
    
      <Carousel className="-xl" loop={true} navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#ffa500]" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black/40 hover:bg-black/20 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
      </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-black/40 hover:bg-black/20 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      
      >
      {images.map((image, index) => (
            <img key={index} className="h-full w-full object-cover" src={image} alt="..." />
          ))}
      </Carousel>
 
      <div className={styles.information}>
        <div className={styles.information_content}>
          <div className={styles.information_items}>
            <h2 className={styles.information_title}>
              Accede a +500 proveedores para realizar negocios
            </h2>
            <p className={styles.information_text}>
              Conecte con proveedores para el encuentro entre la oferta y
              demanda industrial minera regional Filtre, categorice y compare
              proveedores de acuerdo a su necesidad
            </p>
          </div>
        </div>
        <Search />
      </div>
      <div className={styles.partners}>
        <div className={styles.partners_tag}>
          <p className={styles.partners_tag_tittle}>SOCIOS</p>
        </div>
        <div className={styles.partners_title}>
          <h2>Instituciones y Empresas Asociadas</h2>
        </div>
        <div className={styles.partners_logos}>
          {partners.map((image, index) => (
            <div key={index} className={styles.partners_logo_card}>
              <img
              key={index}
              className={styles.partners_logo}
              src={image}
              alt="..."
            />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.video}>
        <div className={styles.video_container}>
          <div className={styles.video_canvas}>

            <iframe 
              className="w-full aspect-video aspect-ratio: 16 / 9" 
              src="https://www.youtube.com/embed/luoceoov2w8?modestbranding=1;&showinfo=0;&rel=0;&autoplay=0;"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
