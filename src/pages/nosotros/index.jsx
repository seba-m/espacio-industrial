import styles from "@/styles/Pages/About/About.module.scss";

const image = [
  "https://grupogespre.com/wp-content/uploads/bfi_thumb/Gespreobra-Riotinto-04-o9g4x7os0vyo17fix08xcz26at4zktsbls0rcdxo5w.jpg",
  "https://www.espacioindustria.cl/img/cidere_logo.5ccd5843.png",
  "https://www.espacioindustria.cl/img/crdp_logo.614e125b.png",
  "https://www.espacioindustria.cl/img/cmp_logo.4ff1786d.jpg",
  "https://www.espacioindustria.cl/img/pelambres_logo.261f578e.png",
  "https://www.espacioindustria.cl/img/teck_logo2.81fc2c93.jpg",
];

export default function About() {
  return (
    <div className="flex gap-8 flex-col bg-[#F5F5F5] p-4 py-12 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col gap-4">
        <section className="flex justify-center items-center">
          <div className={"text-center"}>
            <h2 className="text-xl font-bold text-[#023B6D] mb-2">PROYECTO</h2>
            <p className="text-lg font-bold  mb-2">
              Acerca de Espacio Industrial Minero
            </p>
          </div>
        </section>
        <section>
          <div className={styles.div_definition}>
            <div className={styles.div_definition_text}>
              <b>“Espacio Industrial Minero”</b>
              es un proyecto Bien Público Estratégico y tiene por objetivo:
              Diseñar e implementar una plataforma única para la gestión
              estratégica del Ecosistema Industrial Minero de la Región de
              Coquimbo para disminuir las asimetrías de información que permitan
              aumentar la productividad de la industria.
              <br></br>
              <br></br>
              La propuesta de valor de la plataforma es generar un
              <b>
                “Espacio de visibilización y match entre la oferta regional y la
                demanda industrial – minera de la Región de Coquimbo”.{" "}
              </b>
              Por ende, la iniciativa dispone al ecosistema minero regional una
              base de datos completa y actualizada de empresas proveedoras
              prestadoras de bienes y servicios a la minería, permitiendo de
              este modo conectar, facilitar y gestionar el encuentro entre la
              oferta y demanda industrial minera de la región.
              <br></br>
              <br></br>
              Espacio Industrial Minero, es un Proyecto Bien Público
              Estratégico, el cual considera la participación de La Corporación
              Regional de Desarrollo Productivo Región de Coquimbo (CRDP) como
              institución mandante de la iniciativa y CIDERE Región de Coquimbo
              como institución ejecutora, cuenta con la colaboración de las
              Compañías Mineras:
              <b>
                Minera Los Pelambres, TECK CDA y Compañía Minera del Pacífico;{" "}
              </b>
              Empresas Proveedoras: registro actual de
              <b>500 empresas proveedoras </b>
              con dirección comercial en la
              <b>Región de Coquimbo</b>; y entidades: públicas, privadas y
              académicas relacionadas directamente con el sector industrial
              minero regional.
            </div>
            <div className={styles.div_definition_img}>
              <div
                className={styles.definition_img}
                style={{ backgroundImage: `url(${image[0]})` }}
              ></div>
            </div>
          </div>
        </section>
      </div>

      <section id="asociados" className="flex justify-center">
        <div className={styles.div_ejecutado_patrocinado}>
          <div className={styles.div_cidere_ejecutado}>
            <label>Ejecutado por</label>
            <div className={styles.div_cidere_ejecutado_img}>
              <div
                className={styles.cidere_ejecutado_img}
                style={{ backgroundImage: `url(${image[1]})` }}
              ></div>
            </div>
          </div>
          <div className={styles.div_cidere_ejecutado}>
            <label>Patrocinado por</label>
            <div className={styles.div_cidere_ejecutado_img}>
              <div
                className={styles.cidere_ejecutado_img}
                style={{ backgroundImage: `url(${image[2]})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.colaboran_section}>
        <div className={styles.div_colaboran_apoyo}>
          <div className={styles.div_title_colaboran_apoyo}>
            <h2 className="text-xl font-bold text-[#023B6D] mb-2">COLABORAN</h2>
            <p className="text-lg font-bold  mb-2">Contamos con el apoyo de</p>
          </div>
          <div className={styles.div_colaboradores}>
            <div className={styles.div_colaborador}>
              <div className={styles.div_cidere_ejecutado_img}>
                <div
                  className={styles.cidere_ejecutado_img}
                  style={{ backgroundImage: `url(${image[3]})` }}
                ></div>
              </div>
              <label>CMP</label>
              <label>Compañía Minera del Pacífico</label>
            </div>
            <div className={styles.div_colaborador}>
              <div className={styles.div_cidere_ejecutado_img}>
                <div
                  className={styles.cidere_ejecutado_img}
                  style={{ backgroundImage: `url(${image[4]})` }}
                ></div>
              </div>
              <label>LOS PELAMBRES</label>
              <label>Minera Los Pelambres</label>
            </div>
            <div className={styles.div_colaborador}>
              <div className={styles.div_cidere_ejecutado_img}>
                <div
                  className={styles.cidere_ejecutado_img}
                  style={{ backgroundImage: `url(${image[5]})` }}
                ></div>
              </div>
              <label>TECK</label>
              <label>Compañía Minera Teck Carmen de Andacollo</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
