import styles from "../../../styles/Pages/auth/register/Register.module.scss";
import { Input, Typography } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { Formik } from "formik";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Select, Option, Textarea } from "@material-tailwind/react";


export default function Register() {
  const [registerProveedor, setRegisterProveedor] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [communes, setCommunes] = useState([]);

  const regiones = [
    {
      id: 1,
      name: "Arica y Parinacota",
      provinces: [
        {
          id: 1,
          name: "Arica",
          communes: [
            {
              id: 1,
              name: "Arica",
            },
            {
              id: 2,
              name: "Camarones",
            },
          ],
        },
        {
          id: 2,
          name: "Parinacota",
          communes: [
            {
              id: 3,
              name: "General Lagos",
            },
            {
              id: 4,
              name: "Putre",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Tarapacá",
      provinces: [
        {
          id: 3,
          name: "Iquique",
          communes: [
            {
              id: 5,
              name: "Alto Hospicio",
            },
            {
              id: 6,
              name: "Iquique",
            },
          ],
        },
        {
          id: 4,
          name: "El Tamarugal",
          communes: [
            {
              id: 7,
              name: "Camiña",
            },
            {
              id: 8,
              name: "Colchane",
            },
            {
              id: 9,
              name: "Huara",
            },
            {
              id: 10,
              name: "Pica",
            },
            {
              id: 11,
              name: "Pozo Almonte",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Antofagasta",
      provinces: [
        {
          id: 5,
          name: "Tocopilla",
          communes: [
            {
              id: 12,
              name: "Tocopilla",
            },
            {
              id: 13,
              name: "María Elena",
            },
          ],
        },
        {
          id: 6,
          name: "El Loa",
          communes: [
            {
              id: 14,
              name: "Calama",
            },
            {
              id: 15,
              name: "Ollague",
            },
            {
              id: 16,
              name: "San Pedro de Atacama",
            },
          ],
        },
        {
          id: 7,
          name: "Antofagasta",
          communes: [
            {
              id: 17,
              name: "Antofagasta",
            },
            {
              id: 18,
              name: "Mejillones",
            },
            {
              id: 19,
              name: "Sierra Gorda",
            },
            {
              id: 20,
              name: "Taltal",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Atacama",
      provinces: [
        {
          id: 8,
          name: "Chañaral",
          communes: [
            {
              id: 21,
              name: "Chañaral",
            },
            {
              id: 22,
              name: "Diego de Almagro",
            },
          ],
        },
        {
          id: 9,
          name: "Copiapó",
          communes: [
            {
              id: 23,
              name: "Copiapó",
            },
            {
              id: 24,
              name: "Caldera",
            },
            {
              id: 25,
              name: "Tierra Amarilla",
            },
          ],
        },
        {
          id: 10,
          name: "Huasco",
          communes: [
            {
              id: 26,
              name: "Vallenar",
            },
            {
              id: 27,
              name: "Alto del Carmen",
            },
            {
              id: 28,
              name: "Freirina",
            },
            {
              id: 29,
              name: "Huasco",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Coquimbo",
      provinces: [
        {
          id: 11,
          name: "Elqui",
          communes: [
            {
              id: 30,
              name: "La Serena",
            },
            {
              id: 31,
              name: "Coquimbo",
            },
            {
              id: 32,
              name: "Andacollo",
            },
            {
              id: 33,
              name: "La Higuera",
            },
            {
              id: 34,
              name: "Paihuano",
            },
            {
              id: 35,
              name: "Vicuña",
            },
          ],
        },
        {
          id: 12,
          name: "Limarí",
          communes: [
            {
              id: 36,
              name: "Ovalle",
            },
            {
              id: 37,
              name: "Combarbalá",
            },
            {
              id: 38,
              name: "Monte Patria",
            },
            {
              id: 39,
              name: "Punitaqui",
            },
            {
              id: 40,
              name: "Río Hurtado",
            },
          ],
        },
        {
          id: 13,
          name: "Choapa",
          communes: [
            {
              id: 41,
              name: "Illapel",
            },
            {
              id: 42,
              name: "Canela",
            },
            {
              id: 43,
              name: "Los Vilos",
            },
            {
              id: 44,
              name: "Salamanca",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Valparaiso",
      provinces: [
        {
          id: 14,
          name: "Petorca",
          communes: [
            {
              id: 45,
              name: "La Ligua",
            },
            {
              id: 46,
              name: "Cabildo",
            },
            {
              id: 47,
              name: "Zapallar",
            },
            {
              id: 48,
              name: "Papudo",
            },
            {
              id: 49,
              name: "Petorca",
            },
          ],
        },
        {
          id: 15,
          name: "Los Andes",
          communes: [
            {
              id: 50,
              name: "Los Andes",
            },
            {
              id: 51,
              name: "San Esteban",
            },
            {
              id: 52,
              name: "Calle Larga",
            },
            {
              id: 53,
              name: "Rinconada",
            },
          ],
        },
        {
          id: 16,
          name: "San Felipe de Aconcagua",
          communes: [
            {
              id: 54,
              name: "San Felipe",
            },
            {
              id: 55,
              name: "Llaillay",
            },
            {
              id: 56,
              name: "Putaendo",
            },
            {
              id: 57,
              name: "Santa María",
            },
            {
              id: 58,
              name: "Catemu",
            },
            {
              id: 59,
              name: "Panquehue",
            },
          ],
        },
        {
          id: 17,
          name: "Quillota",
          communes: [
            {
              id: 60,
              name: "Quillota",
            },
            {
              id: 61,
              name: "La Cruz",
            },
            {
              id: 62,
              name: "La Calera",
            },
            {
              id: 63,
              name: "Nogales",
            },
            {
              id: 64,
              name: "Hijuelas",
            },
          ],
        },
        {
          id: 18,
          name: "Valparaiso",
          communes: [
            {
              id: 65,
              name: "Valparaíso",
            },
            {
              id: 66,
              name: "Viña del Mar",
            },
            {
              id: 67,
              name: "Concón",
            },
            {
              id: 68,
              name: "Quintero",
            },
            {
              id: 69,
              name: "Puchuncaví",
            },
            {
              id: 70,
              name: "Casablanca",
            },
            {
              id: 71,
              name: "Juan Fernández",
            },
          ],
        },
        {
          id: 19,
          name: "San Antonio",
          communes: [
            {
              id: 72,
              name: "San Antonio",
            },
            {
              id: 73,
              name: "Cartagena",
            },
            {
              id: 74,
              name: "El Tabo",
            },
            {
              id: 75,
              name: "El Quisco",
            },
            {
              id: 76,
              name: "Algarrobo",
            },
            {
              id: 77,
              name: "Santo Domingo",
            },
          ],
        },
        {
          id: 20,
          name: "Isla de Pascua",
          communes: [
            {
              id: 78,
              name: "Isla de Pascua",
            },
          ],
        },
        {
          id: 21,
          name: "Marga Marga",
          communes: [
            {
              id: 79,
              name: "Quilpué",
            },
            {
              id: 80,
              name: "Limache",
            },
            {
              id: 81,
              name: "Olmué",
            },
            {
              id: 82,
              name: "Villa Alemana",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Metropolitana de Santiago",
      provinces: [
        {
          id: 22,
          name: "Chacabuco",
          communes: [
            {
              id: 83,
              name: "Colina",
            },
            {
              id: 84,
              name: "Lampa",
            },
            {
              id: 85,
              name: "Tiltil",
            },
          ],
        },
        {
          id: 23,
          name: "Santiago",
          communes: [
            {
              id: 86,
              name: "Santiago",
            },
            {
              id: 87,
              name: "Vitacura",
            },
            {
              id: 88,
              name: "San Ramón",
            },
            {
              id: 89,
              name: "San Miguel",
            },
            {
              id: 90,
              name: "San Joaquín",
            },
            {
              id: 91,
              name: "Renca",
            },
            {
              id: 92,
              name: "Recoleta",
            },
            {
              id: 93,
              name: "Quinta Normal",
            },
            {
              id: 94,
              name: "Quilicura",
            },
            {
              id: 95,
              name: "Pudahuel",
            },
            {
              id: 96,
              name: "Providencia",
            },
            {
              id: 97,
              name: "Peñalolén",
            },
            {
              id: 98,
              name: "Pedro Aguirre Cerda",
            },
            {
              id: 99,
              name: "Ñuñoa",
            },
            {
              id: 100,
              name: "Maipú",
            },
            {
              id: 101,
              name: "Macul",
            },
            {
              id: 102,
              name: "Lo Prado",
            },
            {
              id: 103,
              name: "Lo Espejo",
            },
            {
              id: 104,
              name: "Lo Barnechea",
            },
            {
              id: 105,
              name: "Las Condes",
            },
            {
              id: 106,
              name: "La Reina",
            },
            {
              id: 107,
              name: "La Pintana",
            },
            {
              id: 108,
              name: "La Granja",
            },
            {
              id: 109,
              name: "La Florida",
            },
            {
              id: 110,
              name: "La Cisterna",
            },
            {
              id: 111,
              name: "Independencia",
            },
            {
              id: 112,
              name: "Huechuraba",
            },
            {
              id: 113,
              name: "Estación Central",
            },
            {
              id: 114,
              name: "El Bosque",
            },
            {
              id: 115,
              name: "Conchalí",
            },
            {
              id: 116,
              name: "Cerro Navia",
            },
            {
              id: 117,
              name: "Cerrillos",
            },
          ],
        },
        {
          id: 24,
          name: "Cordillera",
          communes: [
            {
              id: 118,
              name: "Puente Alto",
            },
            {
              id: 119,
              name: "San José de Maipo",
            },
            {
              id: 120,
              name: "Pirque",
            },
          ],
        },
        {
          id: 25,
          name: "Maipo",
          communes: [
            {
              id: 121,
              name: "San Bernardo",
            },
            {
              id: 122,
              name: "Buin",
            },
            {
              id: 123,
              name: "Paine",
            },
            {
              id: 124,
              name: "Calera de Tango",
            },
          ],
        },
        {
          id: 26,
          name: "Melipilla",
          communes: [
            {
              id: 125,
              name: "Melipilla",
            },
            {
              id: 126,
              name: "Alhué",
            },
            {
              id: 127,
              name: "Curacaví",
            },
            {
              id: 128,
              name: "María Pinto",
            },
            {
              id: 129,
              name: "San Pedro",
            },
          ],
        },
        {
          id: 27,
          name: "Talagante",
          communes: [
            {
              id: 130,
              name: "Isla de Maipo",
            },
            {
              id: 131,
              name: "El Monte",
            },
            {
              id: 132,
              name: "Padre Hurtado",
            },
            {
              id: 133,
              name: "Peñaflor",
            },
            {
              id: 134,
              name: "Talagante",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Libertador General Bernardo O'Higgins",
      provinces: [
        {
          id: 28,
          name: "Cachapoal",
          communes: [
            {
              id: 135,
              name: "Codegua",
            },
            {
              id: 136,
              name: "Coínco",
            },
            {
              id: 137,
              name: "Coltauco",
            },
            {
              id: 138,
              name: "Doñihue",
            },
            {
              id: 139,
              name: "Graneros",
            },
            {
              id: 140,
              name: "Las Cabras",
            },
            {
              id: 141,
              name: "Machalí",
            },
            {
              id: 142,
              name: "Malloa",
            },
            {
              id: 143,
              name: "Mostazal",
            },
            {
              id: 144,
              name: "Olivar",
            },
            {
              id: 145,
              name: "Peumo",
            },
            {
              id: 146,
              name: "Pichidegua",
            },
            {
              id: 147,
              name: "Quinta de Tilcoco",
            },
            {
              id: 148,
              name: "Rancagua",
            },
            {
              id: 149,
              name: "Rengo",
            },
            {
              id: 150,
              name: "Requínoa",
            },
            {
              id: 151,
              name: "San Vicente de Tagua Tagua",
            },
          ],
        },
        {
          id: 29,
          name: "Colchagua",
          communes: [
            {
              id: 152,
              name: "Chépica",
            },
            {
              id: 153,
              name: "Chimbarongo",
            },
            {
              id: 154,
              name: "Lolol",
            },
            {
              id: 155,
              name: "Nancagua",
            },
            {
              id: 156,
              name: "Palmilla",
            },
            {
              id: 157,
              name: "Peralillo",
            },
            {
              id: 158,
              name: "Placilla",
            },
            {
              id: 159,
              name: "Pumanque",
            },
            {
              id: 160,
              name: "San Fernando",
            },
            {
              id: 161,
              name: "Santa Cruz",
            },
          ],
        },
        {
          id: 30,
          name: "Cardenal Caro",
          communes: [
            {
              id: 162,
              name: "La Estrella",
            },
            {
              id: 163,
              name: "Litueche",
            },
            {
              id: 164,
              name: "Marchigüe",
            },
            {
              id: 165,
              name: "Navidad",
            },
            {
              id: 166,
              name: "Paredones",
            },
            {
              id: 167,
              name: "Pichilemu",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Maule",
      provinces: [
        {
          id: 31,
          name: "Curicó",
          communes: [
            {
              id: 168,
              name: "Curicó",
            },
            {
              id: 169,
              name: "Hualañé",
            },
            {
              id: 170,
              name: "Licantén",
            },
            {
              id: 171,
              name: "Molina",
            },
            {
              id: 172,
              name: "Rauco",
            },
            {
              id: 173,
              name: "Romeral",
            },
            {
              id: 174,
              name: "Sagrada Familia",
            },
            {
              id: 175,
              name: "Teno",
            },
            {
              id: 176,
              name: "Vichuquén",
            },
          ],
        },
        {
          id: 32,
          name: "Talca",
          communes: [
            {
              id: 177,
              name: "Talca",
            },
            {
              id: 178,
              name: "San Clemente",
            },
            {
              id: 179,
              name: "Pelarco",
            },
            {
              id: 180,
              name: "Pencahue",
            },
            {
              id: 181,
              name: "Maule",
            },
            {
              id: 182,
              name: "San Rafael",
            },
            {
              id: 183,
              name: "Constitución",
            },
            {
              id: 184,
              name: "Empedrado",
            },
            {
              id: 185,
              name: "Río Claro",
            },
          ],
        },
        {
          id: 33,
          name: "Linares",
          communes: [
            {
              id: 186,
              name: "Curepto",
            },
            {
              id: 187,
              name: "Linares",
            },
            {
              id: 188,
              name: "San Javier",
            },
            {
              id: 189,
              name: "Parral",
            },
            {
              id: 190,
              name: "Villa Alegre",
            },
            {
              id: 191,
              name: "Longaví",
            },
            {
              id: 192,
              name: "Colbún",
            },
            {
              id: 193,
              name: "Retiro",
            },
            {
              id: 194,
              name: "Yerbas Buenas",
            },
          ],
        },
        {
          id: 34,
          name: "Cauquenes",
          communes: [
            {
              id: 195,
              name: "Cauquenes",
            },
            {
              id: 196,
              name: "Chanco",
            },
            {
              id: 197,
              name: "Pelluhue",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Ñuble",
      provinces: [
        {
          id: 35,
          name: "Diguillín",
          communes: [
            {
              id: 198,
              name: "Bulnes",
            },
            {
              id: 199,
              name: "Chillán",
            },
            {
              id: 200,
              name: "Chillán Viejo",
            },
            {
              id: 201,
              name: "El Carmen",
            },
            {
              id: 202,
              name: "Pemuco",
            },
            {
              id: 203,
              name: "Pinto",
            },
            {
              id: 204,
              name: "Quillón",
            },
            {
              id: 205,
              name: "San Ignacio",
            },
            {
              id: 206,
              name: "Yungay",
            },
          ],
        },
        {
          id: 36,
          name: "Itata",
          communes: [
            {
              id: 207,
              name: "Cobquecura",
            },
            {
              id: 208,
              name: "Coelemu",
            },
            {
              id: 209,
              name: "Ninhue",
            },
            {
              id: 210,
              name: "Portezuelo",
            },
            {
              id: 211,
              name: "Quirihue",
            },
            {
              id: 212,
              name: "Ránquil",
            },
            {
              id: 213,
              name: "Treguaco",
            },
          ],
        },
        {
          id: 37,
          name: "Punilla",
          communes: [
            {
              id: 214,
              name: "San Carlos",
            },
            {
              id: 215,
              name: "Coihueco",
            },
            {
              id: 216,
              name: "San Nicolás",
            },
            {
              id: 217,
              name: "Ñiquén",
            },
            {
              id: 218,
              name: "San Fabián",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "Biobío",
      provinces: [
        {
          id: 38,
          name: "Bio Bío",
          communes: [
            {
              id: 219,
              name: "Alto Biobío",
            },
            {
              id: 220,
              name: "Antuco",
            },
            {
              id: 221,
              name: "Cabrero",
            },
            {
              id: 222,
              name: "Laja",
            },
            {
              id: 223,
              name: "Los Ángeles",
            },
            {
              id: 224,
              name: "Mulchén",
            },
            {
              id: 225,
              name: "Nacimiento",
            },
            {
              id: 226,
              name: "Negrete",
            },
            {
              id: 227,
              name: "Quilaco",
            },
            {
              id: 228,
              name: "Quilleco",
            },
            {
              id: 229,
              name: "San Rosendo",
            },
            {
              id: 230,
              name: "Santa Bárbara",
            },
            {
              id: 231,
              name: "Tucapel",
            },
            {
              id: 232,
              name: "Yumbel",
            },
          ],
        },
        {
          id: 39,
          name: "Concepción",
          communes: [
            {
              id: 233,
              name: "Concepción",
            },
            {
              id: 234,
              name: "Coronel",
            },
            {
              id: 235,
              name: "Chiguayante",
            },
            {
              id: 236,
              name: "Florida",
            },
            {
              id: 237,
              name: "Hualpén",
            },
            {
              id: 238,
              name: "Hualqui",
            },
            {
              id: 239,
              name: "Lota",
            },
            {
              id: 240,
              name: "Penco",
            },
            {
              id: 241,
              name: "San Pedro de La Paz",
            },
            {
              id: 242,
              name: "Santa Juana",
            },
            {
              id: 243,
              name: "Talcahuano",
            },
            {
              id: 244,
              name: "Tomé",
            },
          ],
        },
        {
          id: 40,
          name: "Arauco",
          communes: [
            {
              id: 245,
              name: "Arauco",
            },
            {
              id: 246,
              name: "Cañete",
            },
            {
              id: 247,
              name: "Contulmo",
            },
            {
              id: 248,
              name: "Curanilahue",
            },
            {
              id: 249,
              name: "Lebu",
            },
            {
              id: 250,
              name: "Los Álamos",
            },
            {
              id: 251,
              name: "Tirúa",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      name: "La Araucanía",
      provinces: [
        {
          id: 41,
          name: "Malleco",
          communes: [
            {
              id: 252,
              name: "Angol",
            },
            {
              id: 253,
              name: "Collipulli",
            },
            {
              id: 254,
              name: "Curacautín",
            },
            {
              id: 255,
              name: "Ercilla",
            },
            {
              id: 256,
              name: "Lonquimay",
            },
            {
              id: 257,
              name: "Los Sauces",
            },
            {
              id: 258,
              name: "Lumaco",
            },
            {
              id: 259,
              name: "Purén",
            },
            {
              id: 260,
              name: "Renaico",
            },
            {
              id: 261,
              name: "Traiguén",
            },
            {
              id: 262,
              name: "Victoria",
            },
          ],
        },
        {
          id: 42,
          name: "Cautín",
          communes: [
            {
              id: 263,
              name: "Temuco",
            },
            {
              id: 264,
              name: "Carahue",
            },
            {
              id: 265,
              name: "Cholchol",
            },
            {
              id: 266,
              name: "Cunco",
            },
            {
              id: 267,
              name: "Curarrehue",
            },
            {
              id: 268,
              name: "Freire",
            },
            {
              id: 269,
              name: "Galvarino",
            },
            {
              id: 270,
              name: "Gorbea",
            },
            {
              id: 271,
              name: "Lautaro",
            },
            {
              id: 272,
              name: "Loncoche",
            },
            {
              id: 273,
              name: "Melipeuco",
            },
            {
              id: 274,
              name: "Nueva Imperial",
            },
            {
              id: 275,
              name: "Padre Las Casas",
            },
            {
              id: 276,
              name: "Perquenco",
            },
            {
              id: 277,
              name: "Pitrufquén",
            },
            {
              id: 278,
              name: "Pucón",
            },
            {
              id: 279,
              name: "Saavedra",
            },
            {
              id: 280,
              name: "Teodoro Schmidt",
            },
            {
              id: 281,
              name: "Toltén",
            },
            {
              id: 282,
              name: "Vilcún",
            },
            {
              id: 283,
              name: "Villarrica",
            },
          ],
        },
      ],
    },
    {
      id: 13,
      name: "Los Ríos",
      provinces: [
        {
          id: 43,
          name: "Valdivia",
          communes: [
            {
              id: 284,
              name: "Valdivia",
            },
            {
              id: 285,
              name: "Corral",
            },
            {
              id: 286,
              name: "Lanco",
            },
            {
              id: 287,
              name: "Los Lagos",
            },
            {
              id: 288,
              name: "Máfil",
            },
            {
              id: 289,
              name: "Mariquina",
            },
            {
              id: 290,
              name: "Paillaco",
            },
            {
              id: 291,
              name: "Panguipulli",
            },
          ],
        },
        {
          id: 44,
          name: "Ranco",
          communes: [
            {
              id: 292,
              name: "La Unión",
            },
            {
              id: 293,
              name: "Futrono",
            },
            {
              id: 294,
              name: "Lago Ranco",
            },
            {
              id: 295,
              name: "Río Bueno",
            },
          ],
        },
      ],
    },
    {
      id: 14,
      name: "Los Lagos",
      provinces: [
        {
          id: 45,
          name: "Osorno",
          communes: [
            {
              id: 296,
              name: "Osorno",
            },
            {
              id: 297,
              name: "Puerto Octay",
            },
            {
              id: 298,
              name: "Purranque",
            },
            {
              id: 299,
              name: "Puyehue",
            },
            {
              id: 300,
              name: "Río Negro",
            },
            {
              id: 301,
              name: "San Juan de la Costa",
            },
            {
              id: 302,
              name: "San Pablo",
            },
          ],
        },
        {
          id: 46,
          name: "Llanquihue",
          communes: [
            {
              id: 303,
              name: "Calbuco",
            },
            {
              id: 304,
              name: "Cochamó",
            },
            {
              id: 305,
              name: "Fresia",
            },
            {
              id: 306,
              name: "Frutillar",
            },
            {
              id: 307,
              name: "Llanquihue",
            },
            {
              id: 308,
              name: "Los Muermos",
            },
            {
              id: 309,
              name: "Maullín",
            },
            {
              id: 310,
              name: "Puerto Montt",
            },
            {
              id: 311,
              name: "Puerto Varas",
            },
          ],
        },
        {
          id: 47,
          name: "Chiloé",
          communes: [
            {
              id: 312,
              name: "Ancud",
            },
            {
              id: 313,
              name: "Castro",
            },
            {
              id: 314,
              name: "Chonchi",
            },
            {
              id: 315,
              name: "Curaco de Vélez",
            },
            {
              id: 316,
              name: "Dalcahue",
            },
            {
              id: 317,
              name: "Puqueldón",
            },
            {
              id: 318,
              name: "Queilén",
            },
            {
              id: 319,
              name: "Quellón",
            },
            {
              id: 320,
              name: "Quemchi",
            },
            {
              id: 321,
              name: "Quinchao",
            },
          ],
        },
        {
          id: 48,
          name: "Palena",
          communes: [
            {
              id: 322,
              name: "Chaitén",
            },
            {
              id: 323,
              name: "Futaleufú",
            },
            {
              id: 324,
              name: "Hualaihué",
            },
            {
              id: 325,
              name: "Palena",
            },
          ],
        },
      ],
    },
    {
      id: 15,
      name: "Aysén del General Carlos Ibáñez del Campo",
      provinces: [
        {
          id: 49,
          name: "Coyhaique",
          communes: [
            {
              id: 326,
              name: "Lago Verde",
            },
            {
              id: 327,
              name: "Coihaique",
            },
          ],
        },
        {
          id: 50,
          name: "Aysén",
          communes: [
            {
              id: 328,
              name: "Aysén",
            },
            {
              id: 329,
              name: "Cisnes",
            },
            {
              id: 330,
              name: "Guaitecas",
            },
          ],
        },
        {
          id: 51,
          name: "General Carrera",
          communes: [
            {
              id: 331,
              name: "Río Ibáñez",
            },
            {
              id: 332,
              name: "Chile Chico",
            },
          ],
        },
        {
          id: 52,
          name: "Capitán Prat",
          communes: [
            {
              id: 333,
              name: "Cochrane",
            },
            {
              id: 334,
              name: "O'Higgins",
            },
            {
              id: 335,
              name: "Tortel",
            },
          ],
        },
      ],
    },
    {
      id: 16,
      name: "Magallanes y de la Antártica Chilena",
      provinces: [
        {
          id: 53,
          name: "Última Esperanza",
          communes: [
            {
              id: 336,
              name: "Natales",
            },
            {
              id: 337,
              name: "Torres del Paine",
            },
          ],
        },
        {
          id: 54,
          name: "Magallanes",
          communes: [
            {
              id: 338,
              name: "Laguna Blanca",
            },
            {
              id: 339,
              name: "Punta Arenas",
            },
            {
              id: 340,
              name: "Río Verde",
            },
            {
              id: 341,
              name: "San Gregorio",
            },
          ],
        },
        {
          id: 55,
          name: "Tierra del Fuego",
          communes: [
            {
              id: 342,
              name: "Porvenir",
            },
            {
              id: 343,
              name: "Primavera",
            },
            {
              id: 344,
              name: "Timaukel",
            },
          ],
        },
        {
          id: 56,
          name: "Antártica Chilena",
          communes: [
            {
              id: 345,
              name: "Cabo de Hornos",
            },
            {
              id: 346,
              name: "Antártica",
            },
          ],
        },
      ],
    },
  ];
  const rubro = [
    {
      id: 2,
      name: "OBRAS CIVILES",
    },
    {
      id: 6,
      name: "TECNOLOGÍA",
    },
    {
      id: 10,
      name: "COMUNICACIONES",
    },
    {
      id: 14,
      name: "CONSTRUCCIÓN",
    },
    {
      id: 20,
      name: "COMERCIO",
    },
    {
      id: 30,
      name: "TRANSPORTE",
    },
    {
      id: 32,
      name: "ENERGÍA",
    },
    {
      id: 33,
      name: "MINERÍA",
    },
  ];
  const tipoEmpresa = [
    {
      id: 1,
      name: "Contratistas",
    },
    {
      id: 2,
      name: "Equipos y Provisiones",
    },
    {
      id: 3,
      name: "Servicios de Consultoría e Ingeniería",
    },
    {
      id: 4,
      name: "Servicios de Soporte",
    },
  ];
  const tamanoEmpresa = [
    {
      id: 1,
      name: "Microempresa",
      saleMinUF: 0.01,
      saleMaxUF: 2400,
    },
    {
      id: 2,
      name: "Pequeña Empresa",
      saleMinUF: 2400.01,
      saleMaxUF: 25000,
    },
    {
      id: 3,
      name: "Mediana Empresa",
      saleMinUF: 25000.01,
      saleMaxUF: 100000,
    },
    {
      id: 4,
      name: "Gran Empresa",
      saleMinUF: 100000.01,
      saleMaxUF: 1000000,
    },
  ];

  const handleRegister = () => {
    setRegisterProveedor(!registerProveedor);
  };

  return (
    <div className="flex bg-[url('https://live.staticflickr.com/8020/7181914856_fd11726565_h.jpg')] bg-cover bg-center bg-no-repeat justify-center p-2 sm:p-4 md:p-16 ">
      <div className="bg-[#ffffff] p-6 rounded-xl w-100">
        <h1 className="text-center text-[#023B6D] text-2xl font-bold mb-8">REGISTRARSE</h1>
        <Formik
          initialValues={{
            email: "",
            contrasena: "",
            repetir_contrasena: "",
            rut: "",
            nombre: "",
            direccion: "",
            telefono: "",
            nombre_fantasia: "",
            razon_social: "",
            descripcion_empresa: "",
            web: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Requerido";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Correo invalido";
            }

            if (!values.contrasena) {
              errors.contrasena = "Requerido";
            } else if (
              !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.contrasena)
            ) {
              errors.contrasena = "Contraseña invalida";
            }

            if (!values.repetir_contrasena) {
              errors.repetir_contrasena = "Requerido";
            } else if (
              !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(
                values.repetir_contrasena
              )
            ) {
              errors.repetir_contrasena = "Contraseña invalida";
            } else if (values.contrasena !== values.repetir_contrasena) {
              errors.repetir_contrasena = "Contraseña no coincide";
            }

            if (!values.rut) {
              errors.rut = "Requerido";
            } else if (
              !/^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/i.test(values.rut)
            ) {
              errors.rut = "Rut invalido";
            }

            if (!values.nombre) {
              errors.nombre = "Requerido";
            }

            if (!values.direccion) {
              errors.direccion = "Requerido";
            }

            if (!values.telefono) {
              errors.telefono = "Requerido";
            }

            if (!values.nombre_fantasia) {
              errors.nombre_fantasia = "Requerido";
            }

            if (!values.razon_social) {
              errors.razon_social = "Requerido";
            }

            if (!values.descripcion_empresa) {
              errors.descripcion_empresa = "Requerido";
            }

            if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.web)) {
              errors.web = "Sitio web invalido";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.register_control}>
                <div>
                  <Input
                    className="focus:shadow-none border-0"
                    name="rut"
                    variant="standard"
                    color="blue-gray"
                    label="Rut"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rut}
                    error={errors.rut && touched.rut && errors.rut}
                    success={touched.rut && !errors.rut}
                  />
                  {errors.rut && touched.rut && errors.rut && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-2 flex items-center gap-1 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.rut}
                    </Typography>
                  )}
                </div>

                <Switch
                  className="focus:shadow-none"
                  label="Registrarse como proveedor (requiere información adicional)"
                  onClick={handleRegister}
                />
              </div>

              <div className={styles.resgister_form_body}>
                <div>
                  <Input
                    className="focus:shadow-none border-0"
                    variant="standard"
                    name="email"
                    color="blue-gray"
                    label="Coreo electrónico"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email && errors.email}
                    success={touched.email && !errors.email}
                  />
                  {errors.email && touched.email && errors.email && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-2 flex items-center gap-1 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.email}
                    </Typography>
                  )}
                </div>

                {!registerProveedor ? (
                  <div>
                    <Input
                      className="focus:shadow-none"
                      name="nombre"
                      variant="standard"
                      color="blue-gray"
                      label="Nombre"
                      size="lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre}
                      error={errors.nombre && touched.nombre && errors.nombre}
                      success={touched.nombre && !errors.nombre}
                    />
                    {errors.nombre && touched.nombre && errors.nombre && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-2 flex items-center gap-1 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.nombre}
                      </Typography>
                    )}
                  </div>
                ) : (
                  <>
                    <div>
                      <Input
                        className="focus:shadow-none"
                        name="nombre_fantasia"
                        variant="standard"
                        color="blue-gray"
                        label="Nombre de Fantasía"
                        size="lg"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre_fantasia}
                        error={
                          errors.nombre_fantasia &&
                          touched.nombre_fantasia &&
                          errors.nombre_fantasia
                        }
                        success={
                          touched.nombre_fantasia && !errors.nombre_fantasia
                        }
                      />
                      {errors.nombre_fantasia &&
                        touched.nombre_fantasia &&
                        errors.nombre_fantasia && (
                          <Typography
                            variant="small"
                            color="red"
                            className="mt-2 flex items-center gap-1 font-normal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="-mt-px h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.nombre_fantasia}
                          </Typography>
                        )}
                    </div>
                    <div>
                      <Input
                        className="focus:shadow-none"
                        name="razon_social"
                        variant="standard"
                        color="blue-gray"
                        label="Razón Social"
                        size="lg"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.razon_social}
                        error={
                          errors.razon_social &&
                          touched.razon_social &&
                          errors.razon_social
                        }
                        success={touched.razon_social && !errors.razon_social}
                      />
                      {errors.razon_social &&
                        touched.razon_social &&
                        errors.razon_social && (
                          <Typography
                            variant="small"
                            color="red"
                            className="mt-2 flex items-center gap-1 font-normal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="-mt-px h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.razon_social}
                          </Typography>
                        )}
                    </div>
                    <div>
                      <Select variant="standard" label="Región">
                        {regiones.map((region) => (
                          <Option
                            key={region.id}
                            value={region.id}
                            onClick={() => {
                              setProvinces(region.provinces);
                            }}
                          >
                            {region.name}
                          </Option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Select variant="standard" label="Provincia">
                        {provinces.length > 0 ? (
                          provinces.map((province) => (
                            <Option
                              key={province.id}
                              value={province.id}
                              onClick={() => {
                                setCommunes(province.communes);
                              }}
                            >
                              {province.name}
                            </Option>
                          ))
                        ) : (
                          <Option
                            disabled={true}
                            className="text-blue-gray-900"
                          >
                            Seleccione una región
                          </Option>
                        )}
                      </Select>
                    </div>
                    <div>
                      <Select variant="standard" label="Comuna">
                        {communes.length > 0 ? (
                          communes.map((commune) => (
                            <Option key={commune.id} value={commune.id}>
                              {commune.name}
                            </Option>
                          ))
                        ) : (
                          <Option
                            disabled={true}
                            className="text-blue-gray-900"
                          >
                            Seleccione una provincia
                          </Option>
                        )}
                      </Select>
                    </div>
                  </>
                )}

                <div>
                  <Input
                    className="focus:shadow-none"
                    variant="standard"
                    color="blue-gray"
                    label="Dirección"
                    name="direccion"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.direccion}
                    error={
                      errors.direccion && touched.direccion && errors.direccion
                    }
                    success={touched.direccion && !errors.direccion}
                  />
                  {errors.direccion &&
                    touched.direccion &&
                    errors.direccion && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-2 flex items-center gap-1 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.direccion}
                      </Typography>
                    )}
                </div>
                {!registerProveedor ? (
                  <div>
                    <Input
                      className="focus:shadow-none"
                      variant="standard"
                      color="blue-gray"
                      label="Teléfono"
                      name="telefono"
                      size="lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telefono}
                      error={
                        errors.telefono && touched.telefono && errors.telefono
                      }
                      success={touched.telefono && !errors.telefono}
                    />
                    {errors.telefono && touched.telefono && errors.telefono && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-2 flex items-center gap-1 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.telefono}
                      </Typography>
                    )}
                  </div>
                ) : (
                  <>
                    <Select variant="standard" label='Tipo de "Empresa"'>
                      {tipoEmpresa.map((tipo) => (
                        <Option key={tipo.id} value={tipo.id}>
                          {tipo.name}
                        </Option>
                      ))}
                    </Select>
                    <Select variant="standard" label='Rubro de la "Empresa"'>
                      {rubro.map((rubro) => (
                        <Option key={rubro.id} value={rubro.id}>
                          {rubro.name}
                        </Option>
                      ))}
                    </Select>
                    <Select variant="standard" label='Tamaño de la "Empresa"'>
                      {tamanoEmpresa.map((tamano) => (
                        <Option key={tamano.id} value={tamano.id}>
                          {tamano.name}
                        </Option>
                      ))}
                    </Select>
                    <div>
                      <Textarea
                        color="blue-gray"
                        className="focus:shadow-none border-0"
                        size="lg"
                        variant="standard"
                        label='Descripcción de la "Empresa"'
                        name="descripcion_empresa"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.descripcion_empresa}
                        error={
                          errors.descripcion_empresa &&
                          touched.descripcion_empresa &&
                          errors.descripcion_empresa
                        }
                        success={
                          touched.descripcion_empresa &&
                          !errors.descripcion_empresa
                        }
                      />
                      {errors.descripcion_empresa &&
                        touched.descripcion_empresa &&
                        errors.descripcion_empresa && (
                          <Typography
                            variant="small"
                            color="red"
                            className="mt-2 flex items-center gap-1 font-normal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="-mt-px h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.descripcion_empresa}
                          </Typography>
                        )}
                    </div>
                    <div>
                      <Input
                        className="focus:shadow-none"
                        variant="standard"
                        color="blue-gray"
                        label="Sitio Web (Opcional)"
                        name="web"
                        size="lg"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.web}
                        success={errors.web}
                      />
                      {errors.web && touched.web && !errors.web && (
                        <Typography
                          variant="small"
                          color="red"
                          className="mt-2 flex items-center gap-1 font-normal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-px h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.web}
                        </Typography>
                      )}
                    </div>
                  </>
                )}

                <div>
                  <Input
                    className="focus:shadow-none border-0"
                    variant="standard"
                    type="password"
                    color="blue-gray"
                    label="Contraseña"
                    name="contrasena"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contrasena}
                    error={
                      errors.contrasena &&
                      touched.contrasena &&
                      errors.contrasena
                    }
                    success={touched.contrasena && !errors.contrasena}
                  />
                  {errors.contrasena &&
                  touched.contrasena &&
                  errors.contrasena ? (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-2 flex items-center gap-1 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.contrasena}
                    </Typography>
                  ) : (
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center gap-1 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Utilice al menos 8 caracteres, una mayúscula, una
                      minúscula y un número.
                    </Typography>
                  )}
                </div>
                <div>
                  <Input
                    className="focus:shadow-none border-0"
                    variant="standard"
                    type="password"
                    name="repetir_contrasena"
                    color="blue-gray"
                    label="Repetir contraseña"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repetir_contrasena}
                    error={
                      errors.repetir_contrasena &&
                      touched.repetir_contrasena &&
                      errors.repetir_contrasena
                    }
                    success={
                      touched.repetir_contrasena && !errors.repetir_contrasena
                    }
                  />
                  {errors.repetir_contrasena &&
                    touched.repetir_contrasena &&
                    errors.repetir_contrasena && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-2 flex items-center gap-1 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.repetir_contrasena}
                      </Typography>
                    )}
                </div>
              </div>

              <div className={styles.register_button_controller}>
                <Button type="submit" className="bg-[#FFA500]">
                  Registrarse
                </Button>
                <Button onClick={resetForm} variant="outlined">
                  Limpiar
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <div className="mt-8 text-sm text-center">
            Al hacer clic en "Registrarse" aceptas nuestros <a className="text-[#023B6D]" href="https://www.espacioindustria.cl/docs/T%C3%A9rminos_y_condiciones_Espacio_Industrial_Minero.pdf" target="_blank">Términos y condiciones</a>
        </div>
      </div>
    </div>
  );
}
