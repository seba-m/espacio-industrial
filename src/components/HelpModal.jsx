import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";


const keyMap = {
    "Buscar proveedor": 'ctrl+k',
    "Limpiar filtro de busqueda": 'ctrl+l',
    "Ir a la siguiente pagina": 'ctrl+right',
    "Ir a la pagina anterior": 'ctrl+left',
    "Cerrar todos los filtros": 'esc',
    "Ordenar por cinturón fuera de la faena": 'ctrl+f',
    "Ordenar por cinturón dentro de la faena": 'ctrl+d',
    "Abrir esta interfaz de ayuda": 'ctrl+h',
};

const getKeyLabels = (shortcut) => {
    const keys = shortcut.split('+');
    return keys.map((key, index) => (
        <React.Fragment key={index}>
            {index > 0 && '+'}
            <kbd
                className="px-2 mx-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
            >
                {key}
            </kbd>
        </React.Fragment>
    ));
};


const KeyMapLabels = () => {
    return (
        <div>
            {Object.entries(keyMap).map(([action, shortcut]) => (
                <div key={action} className="mb-2">
                    <strong>{action}:</strong> {getKeyLabels(shortcut)}
                </div>
            ))}
        </div>
    );
};


export function HelpModal({ open, setOpen }) {
    const handleOpen = () => setOpen(false);

    return (
        <>
            <Dialog open={open} handler={handleOpen} id="modal-help">
                <DialogHeader>
                    <p>Teclas de Acceso Rápido - Solo para <Link href="/buscar" className="text-blue-500">proveedores</Link></p>
                </DialogHeader>
                <DialogBody>
                    <KeyMapLabels />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cerrar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
