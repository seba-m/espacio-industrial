import { Accordion } from 'flowbite-react';
import ExpansionPanel from "./ExpansionPanel";

const provincias =[
    {
        "id": 1,
        "name": "Arica"
        },
    {
        "id": 2,
        "name": "Parinacota"
        },
    {
        "id": 3,
        "name": "Iquique"
        },
    {
        "id": 4,
        "name": "El Tamarugal"
        },
    {
        "id": 5,
        "name": "Tocopilla"
        },
    {
        "id": 6,
        "name": "El Loa"
        },
    {
        "id": 7,
        "name": "Antofagasta"
        },
    {
        "id": 8,
        "name": "Chañaral"
        },
    {
        "id": 9,
        "name": "Copiapó"
        },
    {
        "id": 10,
        "name": "Huasco"
        },
    {
        "id": 11,
        "name": "Elqui"
        },
    {
        "id": 12,
        "name": "Limarí"
        },
    {
        "id": 13,
        "name": "Choapa"
        },
    {
        "id": 14,
        "name": "Petorca"
        },
    {
        "id": 15,
        "name": "Los Andes"
        },
    {
        "id": 16,
        "name": "San Felipe de Aconcagua"
        },
    {
        "id": 17,
        "name": "Quillota"
        },
    {
        "id": 18,
        "name": "Valparaiso"
        },
    {
        "id": 19,
        "name": "San Antonio"
        },
    {
        "id": 20,
        "name": "Isla de Pascua"
        },
    {
        "id": 21,
        "name": "Marga Marga"
        },
    {
        "id": 22,
        "name": "Chacabuco"
        },
    {
        "id": 23,
        "name": "Santiago"
        },
    {
        "id": 24,
        "name": "Cordillera"
        },
    {
        "id": 25,
        "name": "Maipo"
        },
    {
        "id": 26,
        "name": "Melipilla"
        },
    {
        "id": 27,
        "name": "Talagante"
        },
    {
        "id": 28,
        "name": "Cachapoal"
        },
    {
        "id": 29,
        "name": "Colchagua"
        },
    {
        "id": 30,
        "name": "Cardenal Caro"
        },
    {
        "id": 31,
        "name": "Curicó"
        },
    {
        "id": 32,
        "name": "Talca"
        },
    {
        "id": 33,
        "name": "Linares"
        },
    {
        "id": 34,
        "name": "Cauquenes"
        },
    {
        "id": 35,
        "name": "Diguillín"
        },
    {
        "id": 36,
        "name": "Itata"
        },
    {
        "id": 37,
        "name": "Punilla"
        },
    {
        "id": 38,
        "name": "Bio Bío"
        },
    {
        "id": 39,
        "name": "Concepción"
        },
    {
        "id": 40,
        "name": "Arauco"
        },
    {
        "id": 41,
        "name": "Malleco"
        },
    {
        "id": 42,
        "name": "Cautín"
        },
    {
        "id": 43,
        "name": "Valdivia"
        },
    {
        "id": 44,
        "name": "Ranco"
        },
    {
        "id": 45,
        "name": "Osorno"
        },
    {
        "id": 46,
        "name": "Llanquihue"
        },
    {
        "id": 47,
        "name": "Chiloé"
        },
    {
        "id": 48,
        "name": "Palena"
        },
    {
        "id": 49,
        "name": "Coyhaique"
        },
    {
        "id": 50,
        "name": "Aysén"
        },
    {
        "id": 51,
        "name": "General Carrera"
        },
    {
        "id": 52,
        "name": "Capitán Prat"
        },
    {
        "id": 53,
        "name": "Última Esperanza"
        },
    {
        "id": 54,
        "name": "Magallanes"
        },
    {
        "id": 55,
        "name": "Tierra del Fuego"
        },
    {
        "id": 56,
        "name": "Antártica Chilena"
        }
];

const region = [
    {
        "id": 1,
        "name": "Arica y Parinacota"
    },
    {
        "id": 2,
        "name": "Tarapacá"
    },
    {
        "id": 3,
        "name": "Antofagasta"
    },
    {
        "id": 4,
        "name": "Atacama"
    },
    {
        "id": 5,
        "name": "Coquimbo"
    },
    {
        "id": 6,
        "name": "Valparaiso"
    },
    {
        "id": 7,
        "name": "Metropolitana de Santiago"
    },
    {
        "id": 8,
        "name": "Libertador General Bernardo O'Higgins"
    },
    {
        "id": 9,
        "name": "Maule"
    },
    {
        "id": 10,
        "name": "Ñuble"
    },
    {
        "id": 11,
        "name": "Biobío"
    },
    {
        "id": 12,
        "name": "La Araucanía"
    },
    {
        "id": 13,
        "name": "Los Ríos"
    },
    {
        "id": 14,
        "name": "Los Lagos"
    },
    {
        "id": 15,
        "name": "Aysén del General Carlos Ibáñez del Campo"
    },
    {
        "id": 16,
        "name": "Magallanes y de la Antártica Chilena"
    }
];

const size = [
    {
        "id": 1,
        "name": "Microempresa",
        "saleMinUF": 0.01,
        "saleMaxUF": 2400
    },
    {
        "id": 2,
        "name": "Pequeña Empresa",
        "saleMinUF": 2400.01,
        "saleMaxUF": 25000
    },
    {
        "id": 3,
        "name": "Mediana Empresa",
        "saleMinUF": 25000.01,
        "saleMaxUF": 100000
    },
    {
        "id": 4,
        "name": "Gran Empresa",
        "saleMinUF": 100000.01,
        "saleMaxUF": 1000000
    }
];

const subcategory = [
    {
        "id": 1,
        "name": "MINERÍA"
    },
    {
        "id": 2,
        "name": "OBRAS CIVILES"
    },
    {
        "id": 3,
        "name": "ASESORÍAS"
    },
    {
        "id": 4,
        "name": "AGRICOLA"
    },
    {
        "id": 5,
        "name": "MINERÍA"
    },
    {
        "id": 6,
        "name": "TECNOLOGÍA"
    },
    {
        "id": 7,
        "name": "RESTAURANTES"
    },
    {
        "id": 8,
        "name": "COMERCIO"
    },
    {
        "id": 9,
        "name": "SERVICIOS DE IMPRENTA"
    },
    {
        "id": 10,
        "name": "COMUNICACIONES"
    },
    {
        "id": 11,
        "name": "TRANSPORTE"
    },
    {
        "id": 12,
        "name": "SERVICIO DE COMBUSTIBLE"
    },
    {
        "id": 13,
        "name": "ARQUITECTURA"
    },
    {
        "id": 14,
        "name": "CONSTRUCCIÓN"
    },
    {
        "id": 15,
        "name": "CONSULTORÍAS"
    },
    {
        "id": 16,
        "name": "SERVICIO DE FACTORING"
    },
    {
        "id": 17,
        "name": "GRÁFICA"
    },
    {
        "id": 18,
        "name": "SERVICIOS GRÁFICOS"
    },
    {
        "id": 19,
        "name": "ALMACENAMIENTO"
    },
    {
        "id": 20,
        "name": "COMERCIO"
    },
    {
        "id": 21,
        "name": "HOTELES"
    },
    {
        "id": 22,
        "name": "COMUNICACIONES"
    },
    {
        "id": 23,
        "name": "CONSULTORÍAS"
    },
    {
        "id": 24,
        "name": "ENERGÍA"
    },
    {
        "id": 25,
        "name": "SALUD"
    },
    {
        "id": 26,
        "name": "COMBUSTIBLE"
    },
    {
        "id": 27,
        "name": "MINERÍA"
    },
    {
        "id": 28,
        "name": "SERVICIO DE HOSPEDAJE"
    },
    {
        "id": 29,
        "name": "SERVICIOS EMPRESARIALES"
    },
    {
        "id": 30,
        "name": "TRANSPORTE"
    },
    {
        "id": 31,
        "name": "SEGURIDAD"
    },
    {
        "id": 32,
        "name": "ENERGÍA"
    },
    {
        "id": 33,
        "name": "MINERÍA"
    },
    {
        "id": 34,
        "name": "COMERCIO"
    },
    {
        "id": 35,
        "name": "SERVICIOS DE EVENTOS"
    },
    {
        "id": 36,
        "name": "TECNOLOGÍA"
    },
    {
        "id": 37,
        "name": "SERVICIO DE LABORATORIO"
    },
    {
        "id": 38,
        "name": "CONSULTORÍAS"
    },
    {
        "id": 39,
        "name": "RESTAURANTES"
    },
    {
        "id": 40,
        "name": "ASEO INDUSTRIAL"
    },
    {
        "id": 41,
        "name": "SERVICIOS DE ASESORÍA"
    },
    {
        "id": 42,
        "name": "TECNOLOGÍA"
    },
    {
        "id": 43,
        "name": "HOTELES"
    },
    {
        "id": 44,
        "name": "SERVICIOS EMPRESARIALES"
    },
    {
        "id": 45,
        "name": "ALIMENTACIÓN"
    },
    {
        "id": 46,
        "name": "TELECOMUNICACIONES"
    },
    {
        "id": 47,
        "name": "SERVICIOS"
    },
    {
        "id": 48,
        "name": "SERVICIOS DE PUBLICIDAD"
    },
    {
        "id": 49,
        "name": "INMOBILIARIA"
    },
    {
        "id": 50,
        "name": "ENERGÍA"
    },
    {
        "id": 51,
        "name": "INDUSTRIA MANUFACTURERA"
    },
    {
        "id": 52,
        "name": "OBRAS CIVILES"
    },
    {
        "id": 53,
        "name": "TRANSPORTE"
    },
    {
        "id": 54,
        "name": "COMUNICACIONES"
    },
    {
        "id": 55,
        "name": "BANQUETERÍA"
    },
    {
        "id": 56,
        "name": "ASESORÍAS"
    },
    {
        "id": 57,
        "name": "INDUSTRIA MANUFACTURERA"
    },
    {
        "id": 58,
        "name": "ASESORÍAS"
    },
    {
        "id": 59,
        "name": "CONSTRUCCIÓN"
    }
]

const category = [
    {
        "id": 1,
        "name": "Contratistas"
    },
    {
        "id": 2,
        "name": "Equipos y Provisiones"
    },
    {
        "id": 3,
        "name": "Servicios de Consultoría e Ingeniería"
    },
    {
        "id": 4,
        "name": "Servicios de Soporte"
    }
]

export default function Filters() {
    return (
        <Accordion className='flex flex-col justify-between divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg border w-11/12 md:w-3/12' >
            <ExpansionPanel title="Categorías" content={category} />
            <ExpansionPanel title="Rubros" content={subcategory} />
            <ExpansionPanel title="Tamaños" content={size} />
            <ExpansionPanel title="Regiones" content={region} />
            <ExpansionPanel title="Provincias" content={provincias} />
            <ExpansionPanel title="Comunas" content={region} />
        </Accordion >
    );
}
