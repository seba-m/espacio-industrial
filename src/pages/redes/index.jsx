import React from "react";
import { Typography } from "@material-tailwind/react";
import style from "../../styles/Pages/redes/RedesSociales.module.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import { useState, useEffect } from "react";

export default function RedesSociales() {
        const [windowSize, setWindowSize] = useState({
          width: 500,
          height: 700,
        });
      
        useEffect(() => {
          const handleResize = () => {
            const windowWidth = window.innerWidth;
      
            let newSize = { width: 500, height: 700 };
      
            if (windowWidth <= 1366 && windowWidth > 1024) {
              newSize = { width: 450, height: 650 };
            } else if (windowWidth <= 1024 && windowWidth > 768) {
              newSize = { width: 400, height: 600 };
            } else if (windowWidth <= 768 && windowWidth > 425) {
              newSize = { width: 300, height: 450 };
            } else if (windowWidth <= 425) {
              newSize = { width: 300, height: 450 };
            }
      
            setWindowSize(newSize);
          };
      
          // Llamada inicial para establecer el tamaño inicial
          handleResize();
      
          window.addEventListener('resize', handleResize);
      
          // Limpieza del evento al desmontar el componente
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        const containerStyle = {
          width: `${windowSize.width}px`,
          height: `${windowSize.height}px`,
          overflow: 'hidden', // Puedes agregar esta línea si hay problemas de desbordamiento
        };

  const styles = {
    width: `${windowSize.width}px`,
    height: `${windowSize.height}px`,
  };

  return (
    <div className="w-full    bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center  w-full h-full p-8">
        <Typography
          variant="h2"
          color="white"
          className="text-center text-2xl font-medium bg-[#e7f1fd] py-1 px-4 mb-12 mt-4 text-[#023b6d] rounded-full"
        >
          NOTICIAS
        </Typography>

        <div className="flex-col flex align-center justify-center gap-20 lg:flex-row ">
          <div>
            {/*Embeded Facebook */}
            <h4 className="text-2xl font-bold text-[#023b6d]  mb-4 mt-4 sm:text-xl md:text-3xl lg:text-4xl">
              Facebook
            </h4>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D100063591579194&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              style={{ border: "none", overflowY: "auto" }}
              className={`${style.mediaFrame} rounded-xl`}
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div>
            {/*Embeded Twitter */}
            <h4 className="text-2xl font-bold text-[#023b6d]  mb-4 mt-4 sm:text-xl md:text-3xl lg:text-4xl ">
              Twitter
            </h4>
            <div className="mediaFrame" style={containerStyle}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="cidereivregion"
        options={{ height: windowSize.height, width: windowSize.width }}
      />
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
