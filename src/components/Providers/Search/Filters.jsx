import { Accordion } from 'flowbite-react';
import ExpansionPanel from "./ExpansionPanel";

import { getFilter } from '@/utils/httpClient';
import { useEffect, useState } from 'react';

import { Spinner } from 'flowbite-react';

export default function Filters({ selectedFilters, onFilterChange }) {
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [size, setSize] = useState([]);
    const [region, setRegion] = useState([]);
    const [provincias, setProvincias] = useState([]);
    const [comunas, setComunas] = useState([]);

    const [loading, setLoading] = useState(true);

    const handleReset = () => {
        const resetFilters = {
            category: [],
            subcategory: [],
            size: [],
            region: [],
            provincias: [],
            comunas: [],
        };
        onFilterChange(resetFilters);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = [
                    getFilter('/category?limit=-1').then((response) => setCategory(response.data)),
                    getFilter('/subcategory?limit=-1').then((response) => setSubcategory(response.data)),
                    getFilter('/size?limit=-1').then((response) => setSize(response.data)),
                    getFilter('/region?limit=-1').then((response) => setRegion(response.data)),
                    getFilter('/province?limit=-1').then((response) => setProvincias(response.data)),
                    getFilter('/commune?limit=-1').then((response) => setComunas(response.data))
                ];

                await Promise.all(promises);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const regionIds = selectedFilters.region.map(region => region.id).join(',');

                if (selectedFilters.region.length < 1) {
                    return;
                }

                setLoading(true)

                getFilter(`/province?limit=-1&page=1&filter[regionId]=${regionIds}`)
                    .then((response) => { setProvincias(response.data); })
                
                setLoading(false);

                const provinceIds = selectedFilters.provincias.map(provincias => provincias.id).join(',');

                if (selectedFilters.provincias.length < 1) {
                    return;
                }

                let url = "/commune?limit=-1&page=1"

                if (selectedFilters.region.length > 0) {
                    url += `&filter[regionId]=${regionIds}`
                }

                if (selectedFilters.provincias.length > 0) {
                    url += `&filter[provinceId]=${provinceIds}`
                }

                setLoading(true)
    
                getFilter(url)
                    .then((response) => { setComunas(response.data); })
        
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    
    }, [selectedFilters.region, selectedFilters.provincias]);

    const updateSelectedFilters = (filterType, selectedOptions) => {
        const newFilters = {
            ...selectedFilters,
            [filterType]: selectedOptions,
        };
        onFilterChange(newFilters);
    };

    if (loading) {
        return <Spinner aria-label="loading" />
    }

    return (
        <Accordion className='flex flex-col justify-between divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg border w-full md:w-44 lg:w-96 h-fit' >
            <ExpansionPanel title="Categorías" content={category} updateFilters={selectedOptions => updateSelectedFilters('category', selectedOptions)} />
            <ExpansionPanel title="Rubros" content={subcategory} updateFilters={selectedOptions => updateSelectedFilters('subcategory', selectedOptions)} />
            <ExpansionPanel title="Tamaños" content={size} updateFilters={selectedOptions => updateSelectedFilters('size', selectedOptions)} />
            <ExpansionPanel title="Regiones" content={region} updateFilters={selectedOptions => updateSelectedFilters('region', selectedOptions)} />
            <ExpansionPanel title="Provincias" content={provincias} updateFilters={selectedOptions => updateSelectedFilters('provincias', selectedOptions)} />
            <ExpansionPanel title="Comunas" content={comunas} updateFilters={selectedOptions => updateSelectedFilters('comunas', selectedOptions)} />
        </Accordion >
    );
}
