import React, { useState } from "react";
import styles from "../styles/index/index.module.scss";
import { Carousel } from "flowbite-react";
import Search from "../components/LandingPage/SearchBar";

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
      <div className={`${"h-56 sm:h-64 xl:h-80 2xl:h-96"} ${styles.banner}`}>
        <Carousel slide={false}>
          {images.map((image, index) => (
            <img key={index} className="h-auto w-full" src={image} alt="..." />
          ))}
        </Carousel>
      </div>
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
            <img
              key={index}
              className={styles.partners_logo}
              src={image}
              alt="..."
            />
          ))}
        </div>
      </div>
      <div className={styles.video}>
        <div className={styles.video_container}>
          <div className={styles.video_canvas}>
            <iframe
              className={styles.video_responsive}
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
