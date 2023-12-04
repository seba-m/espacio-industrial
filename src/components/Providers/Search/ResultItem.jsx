import { useState, useEffect, Fragment } from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Chip, Divider } from '@mui/material';
import { Card, CardContent, CardHeader, Grid, Button, Pagination, Select, MenuItem, FormControl, InputLabel, Typography, ButtonGroup } from '@mui/material';
import Icon from '@mdi/react';
import { mdiSeal, mdiSealVariant, mdiArrowDown, mdiArrowUp } from '@mdi/js';

export default function ResultItem({ item }) {
    const { name, businessName, rut, description, scores, services, commune, smallLogo, mediumLogo, largeLogo } = item;
    const getBeltColor = (score) => {
        if (score >= 90) {
            return "black"; // Cinturón Negro
        } else if (score >= 70) {
            return "darkblue"; // Posiblemente cinturón Máster Negro
        } else if (score >= 50) {
            return "green"; // Cinturón Verde
        } else if (score >= 30) {
            return "yellow"; // Cinturón Amarillo
        } else {
            return "gray"; // Cinturón Blanco
        }
    };

    return (
        <>
            <Card className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-5 md:space-y-0 space-y-5 md:space-x-0 mb-1">
                <ListItem
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        <Avatar alt={businessName} src={`data:image/png;base64,${smallLogo}`} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Fragment>
                                <div className='flex flex-col md:flex-row'>
                                    <div className='flex flex-col w-full md:w-10/12'>
                                        <h2 className='font-bold'>{name}</h2>
                                        <Typography
                                            sx={{ display: 'inline', marginBottom: "0.3rem" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {description?.toLowerCase().charAt(0).toUpperCase() + description?.slice(1)}
                                        </Typography>

                                        <div className={`flex space-x-2 ${services?.length > 1 ? "overflow-x-auto" : ""}`}>
                                            {services && services.length > 0 ? (
                                                services.map((service, index) => (
                                                    <Chip key={index} label={service.name} sx={{ width: 'fit-content' }} />
                                                ))
                                            ) : (
                                                <Chip label={"Sin Servicios"} sx={{ width: 'fit-content' }} />
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex flex-row md:flex-col w-full space-y-1 space-x-2 md:space-y-1 md:justify-center md:text-center md:w-2/12 mt-2 md:mt-0'>
                                        <p className='truncate'>{commune.name}</p>
                                        <div className='flex flex-row space-x-1 justify-center'>
                                            <Icon path={mdiSeal}
                                                title={scores[0].name}
                                                size={1}
                                                color={getBeltColor(scores[0].score)}
                                            />
                                            <Icon path={mdiSealVariant}
                                                title={scores[1].name}
                                                size={1}
                                                color={getBeltColor(scores[1].score)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    />
                </ListItem>
            </Card>
        </>
    )
}