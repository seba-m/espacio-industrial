import React from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export function FeedbackModal({ open, setOpen }) {
    const handleOpen = () => setOpen(!open);

    const handleSubmit = (values, { resetForm }) => {
        // Aquí puedes manejar la lógica de envío del formulario
        console.log("Valores del formulario:", values);
        // Limpia el formulario después de enviar
        resetForm();
    };

    return (
        <>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    <div className="flex flex-col">
                        <p>Formulario de Retroalimentación</p>
                        <p className="text-sm">Por favor, proporciona tu email y comentarios sobre la aplicación</p>
                    </div>
                </DialogHeader>
                <DialogBody>
                    <Formik
                        initialValues={{ feedback: "" }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.feedback) {
                                errors.feedback = "Campo requerido";
                            }
                            if (!values.email) {
                                errors.email = "Campo requerido";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Email inválido";
                            }
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Ingresa tu email"
                                    required

                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mt-4">
                                    Comentarios:
                                </label>
                                <Field
                                    as="textarea"
                                    id="feedback"
                                    name="feedback"
                                    rows="4"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                />
                                <ErrorMessage name="feedback" component="div" className="text-red-500 text-sm" />
                            </>

                            <DialogFooter>
                                <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                                    <span>Cerrar</span>
                                </Button>
                                <Button type="submit" variant="gradient" color="green">
                                    <span>Enviar Comentarios</span>
                                </Button>
                            </DialogFooter>
                        </Form>
                    </Formik>
                </DialogBody>
            </Dialog>
        </>
    );
}
