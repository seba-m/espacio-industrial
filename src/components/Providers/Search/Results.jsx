import { useState, useEffect, Fragment } from 'react';
import { Card, CardContent, CardHeader, Grid, Button, Pagination, Select, MenuItem, FormControl, InputLabel, Typography, ButtonGroup } from '@mui/material';
import Icon from '@mdi/react';
import { mdiSeal, mdiSealVariant, mdiArrowDown, mdiArrowUp } from '@mdi/js';

import { Spinner } from 'flowbite-react';

import ResultItem from './ResultItem';

import { get } from '@/utils/httpClient';

export default function Results({ selectedFilters, search }) {
    const [page, setPage] = useState(1);
    const [result, setResult] = useState([]);
    const [arrowFueraFaena, setArrowFueraFaena] = useState(undefined)
    const [arrowDentroFaena, setArrowDentroFaena] = useState(undefined)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [currentSort, setCurrentSort] = useState(undefined);
    const [displayItems, setDisplayItems] = useState("25");
    const [loading, setLoading] = useState(true);
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        lastPage: 1,
        nextPageUrl: null,
        prevPageUrl: null
    });

    const sortTypes = {
        "score": {
            "ASC": "score",
            "DES": "-score"
        },
        "faena": {
            "ASC": "scoreFaena",
            "DES": "-scoreFaena"
        }
    };

    const handleNextPage = () => {
        if (paginationData.nextPageUrl) {
            setPage(paginationData.currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (paginationData.prevPageUrl) {
            setPage(paginationData.currentPage - 1);
        }
    };


    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleChangeItems = (event, value) => {
        setDisplayItems(event.target.value);
    }

    const handleToggleFuera = () => {
        setArrowFueraFaena(!arrowFueraFaena);
        setArrowDentroFaena(undefined)
        setCurrentSort(arrowFueraFaena ? sortTypes.score.ASC : sortTypes.score.DES);
    };

    const handleToggleDentro = () => {
        setArrowDentroFaena(!arrowDentroFaena);
        setArrowFueraFaena(undefined)
        setCurrentSort(arrowDentroFaena ? sortTypes.faena.ASC : sortTypes.faena.DES);
    }

    useEffect(() => {
        setLoading(true);

        let link = "?";

        if (currentSort) {
            link += `&sort=${currentSort}`;
        }

        if (displayItems) {
            link += `&limit=${displayItems}`;
        }

        if (page) {
            link += `&page=${page}`;
        }

        if (search) {
            link += `&filter[search]=${search}`;
        }

        if (selectedFilters.category.length > 0) {
            link += `&filter[categoryId]=${selectedFilters.category.map((item) => item.id).join(',') }`;
        }
        if (selectedFilters.subcategory.length > 0) {
            link += `&filter[subcategoryId]=${selectedFilters.subcategory.map((item) => item.id).join(',') }`;
        }
        if (selectedFilters.size.length > 0) {
            link += `&filter[sizeId]=${selectedFilters.size.map((item) => item.id).join(',') }`;
        }
        if (selectedFilters.region.length > 0) {
            link += `&filter[regionId]=${selectedFilters.region.map((item) => item.id).join(',') }`;
        }
        if (selectedFilters.provincias.length > 0) {
            link += `&filter[provinceId]=${selectedFilters.provincias.map((item) => item.id).join(',') }`;
        }
        if (selectedFilters.comunas.length > 0) {
            link += `&filter[communeId]=${selectedFilters.comunas.map((item) => item.id).join(',') }`;
        }

        get(link)
            .then(response => {
                setResult(response.data);
                setTotalItems(response.total);
                setCurrentPage(response.current_page);
                setPaginationData({
                    currentPage: response.current_page,
                    lastPage: response.last_page,
                    nextPageUrl: response.next_page_url,
                    prevPageUrl: response.prev_page_url
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                
            }).finally(() => {
                setLoading(false);
            });
    }, [page, displayItems, currentSort, selectedFilters, search]);

    useEffect(() => {
        console.log("buscando por: ", currentSort)
    }, [currentSort])

    if (loading)
        return <div className='text-center w-full' >
            <Spinner aria-label="loading" size="xl" className='text-center w-full' />
        </div>;

    return (
        <Card id="proveedores" className='md:ml-5 h-fit w-full mt-5 md:mt-0'>
            {/* Header */}
            <CardHeader
                title={
                    <div className="flex flex-row justify-between">
                        <Typography>Exactamente {totalItems} resultados</Typography>
                        {/* <Typography>Page: {page}</Typography> */}
                        <ButtonGroup variant="text" aria-label="outlined button group">
                            <Button id="boton-fuera-faena" type="button" className="mx-auto md:w-20" onClick={handleToggleFuera}>
                                {arrowFueraFaena == true && (
                                    <Icon path={mdiArrowDown}
                                        title="Arrow Down"
                                        size={1}
                                    />
                                )}

                                {arrowFueraFaena == false && (
                                    <Icon path={mdiArrowUp}
                                        title="Arrow Up"
                                        size={1}
                                    />
                                )}
                                <Icon path={mdiSeal}
                                    title="Cinturon fuera de la faena"
                                    size={1}
                                />
                            </Button>
                            <Button id="boton-dentro-faena" type="button" className="mx-auto md:w-20" onClick={handleToggleDentro}>
                                <Icon path={mdiSealVariant}
                                    title="Cinturon dentro de la faena"
                                    size={1}
                                />
                                {arrowDentroFaena == true && (
                                    <Icon path={mdiArrowDown}
                                        title="Arrow Down"
                                        size={1}
                                    />
                                )}

                                {arrowDentroFaena == false && (
                                    <Icon path={mdiArrowUp}
                                        title="Arrow Up"
                                        size={1}
                                    />
                                )}
                            </Button>
                        </ButtonGroup>
                    </div>
                }
            />

            {/* Body */}
            <CardContent>
                <div className="flex flex-col">
                    {result && result.map((item) => (
                        <ResultItem key={item.id} item={item} />
                    ))}
                </div>
            </CardContent>

            {/* Footer */}
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center" >
                    <Grid item xs={12} sm={9} classes={
                        {
                            root: "flex flex-row justify-center"
                        }
                    }>
                        <Pagination count={paginationData.lastPage}
                            page={paginationData.currentPage}
                            onChange={handleChange}
                            size="small"
                            boundaryCount={2}
                            showFirstButton
                            showLastButton />
                    </Grid>
                    <Grid item xs={12} sm={3} classes={
                        {
                            root: "flex flex-row justify-center mt-5 md:mt-0"
                        }
                    }>
                        <FormControl sx={{ minWidth: 100 }}>
                            <InputLabel id="Items">Items</InputLabel>
                            <Select labelId="Items" label="Items" variant="outlined" value={displayItems} onChange={handleChangeItems}>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={25}>25</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}