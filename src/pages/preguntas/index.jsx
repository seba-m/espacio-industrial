import React from "react";
import FaqAccordion from "@/components/FaqAcordeon";

export default function AccordionCustomAnimation() {
  const faq = [
    {
      "id": 1,
      "question": "1. Acerca del Proyecto:",
      "answer": [
        {
          "id": 1,
          "subquestion": "a. ¿Cuál es el propósito principal de Espacio Industrial Minero?",
          "response": "El propósito principal de Espacio Industrial Minero es diseñar e implementar una plataforma única para la gestión estratégica del Ecosistema Industrial Minero de la Región de Coquimbo, con el objetivo de disminuir las asimetrías de información y aumentar la productividad de la industria."
        },
        {
          "id": 2,
          "subquestion": "b. ¿Cómo se define 'Espacio de visibilización y match' en el contexto de la plataforma?",
          "response": "En el contexto de la plataforma, 'Espacio de visibilización y match' se refiere a la creación de un espacio donde la oferta y demanda industrial-minera de la Región de Coquimbo pueden encontrarse y conectarse de manera eficiente, facilitando así la gestión estratégica del ecosistema industrial minero."
        },
        {
          "id": 3,
          "subquestion": "c. ¿Cuál es la propuesta de valor que ofrece la plataforma a la industria minera de la Región de Coquimbo?",
          "response": "La propuesta de valor de la plataforma es proporcionar un espacio de visibilización y conexión entre la oferta regional y la demanda industrial-minera, a través de una base de datos completa y actualizada de empresas proveedoras de bienes y servicios a la minería. Esto permite facilitar y gestionar el encuentro entre la oferta y la demanda industrial minera de la región."
        }
      ]
    },
    {
      "id": 2,
      "question": "2. Participantes y Colaboradores:",
      "answer": [
        {
          "id": 1,
          "subquestion": "a. ¿Quiénes son los participantes clave en el proyecto, además de la Corporación Regional de Desarrollo Productivo y CIDERE Región de Coquimbo?",
          "response": "Además de la Corporación Regional de Desarrollo Productivo y CIDERE Región de Coquimbo, participan activamente las compañías mineras como Minera Los Pelambres, TECK CDA, y Compañía Minera del Pacífico, junto con al menos 500 empresas proveedoras con dirección comercial en la Región de Coquimbo, así como entidades públicas, privadas y académicas relacionadas con el sector industrial minero regional."
        },
        {
          "id": 2,
          "subquestion": "b. ¿Qué roles desempeñan las compañías mineras y empresas proveedoras en la iniciativa?",
          "response": "Las compañías mineras y empresas proveedoras desempeñan roles clave al colaborar en la creación y actualización de la base de datos, facilitando así la conexión entre la oferta y demanda. Además, su participación contribuye al desarrollo estratégico del ecosistema industrial minero regional."
        }
      ]
    },
    {
      "id": 3,
      "question": "3. Base de Datos y Conectividad:",
      "answer": [
        {
          "id": 1,
          "subquestion": "a. ¿Cómo se mantiene actualizada la base de datos de empresas proveedoras en la plataforma?",
          "response": "La base de datos se mantiene actualizada mediante la colaboración continua de las empresas proveedoras, que registran y actualizan sus perfiles regularmente en la plataforma."
        },
        {
          "id": 2,
          "subquestion": "b. ¿Cómo facilita la plataforma el encuentro entre la oferta y demanda industrial minera de la región?",
          "response": "La plataforma facilita el encuentro mediante el uso de filtros y categorías que permiten a las empresas buscar proveedores específicos de acuerdo con sus necesidades, promoviendo así una conexión efectiva entre la oferta y la demanda."
        },
        {
          "id": 3,
          "subquestion": "c. ¿Qué información específica sobre proveedores se puede encontrar en la plataforma?",
          "response": "La plataforma proporciona información detallada sobre proveedores, incluyendo datos sobre sus productos o servicios, ubicación, tamaños, y otros criterios relevantes para facilitar la toma de decisiones empresariales."
        }
      ]
    },
    {
      "id": 4,
      "question": "4. Acceso a Proveedores:",
      "answer": [
        {
          "id": 1,
          "subquestion": "a. ¿Cómo pueden las empresas acceder a la lista de más de 500 proveedores disponibles en la plataforma?",
          "response": "Las empresas pueden acceder fácilmente a la lista de proveedores a través de la plataforma, donde encontrarán herramientas de búsqueda y filtros para adaptar la búsqueda según sus necesidades específicas."
        },
        {
          "id": 2,
          "subquestion": "b. ¿Se ofrecen opciones de filtrado y categorización para facilitar la búsqueda de proveedores según las necesidades específicas de una empresa?",
          "response": "Sí, la plataforma ofrece opciones de filtrado y categorización que permiten a las empresas buscar proveedores según criterios específicos, como categorías, rubros, tamaños, regiones, provincias, y comunas."
        },
        {
          "id": 3,
          "subquestion": "c. ¿Cuál es la variedad de categorías y rubros disponibles para la búsqueda de proveedores?",
          "response": "La plataforma ofrece una amplia variedad de categorías y rubros para la búsqueda de proveedores, abarcando todos los sectores relevantes para la industria minera."
        }
      ]
    },
    {
      "id": 5,
      "question": "5. Resultados y Estadísticas:",
      "answer": [
        {
          "id": 1,
          "subquestion": "a. ¿Cuántos resultados se pueden esperar al realizar una búsqueda en la plataforma?",
          "response": "La plataforma ofrece actualmente 614 resultados al realizar una búsqueda, proporcionando a las empresas una amplia gama de opciones para satisfacer sus necesidades."
        },
        {
          "id": 2,
          "subquestion": "b. ¿Qué tipo de información adicional se proporciona sobre los proveedores en los resultados de búsqueda?",
          "response": "Los resultados de búsqueda proporcionan información detallada sobre cada proveedor, lo que incluye datos clave para tomar decisiones informadas sobre la conexión con la oferta y demanda."
        },
       
      ]
    }
  ];
 
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-[#023B6D]  mb-8 mt-4 sm:text-2xl md:text-3xl lg:text-4xl ">Preguntas Frecuentes</h2>
      <FaqAccordion faqData={faq}/>
    </div>
  );
}