import React, { useState } from 'react';
import styles from "@/styles/auth/login.module.scss";
import { Input, Typography, Checkbox, Button } from "@material-tailwind/react";

export default function Login() {
    const [recordarme, setRecordarme] = useState(false);

    const enviarSesion = () => {
        // Aquí puedes manejar la lógica de inicio de sesión
    };

    const imageUrl = 'https://live.staticflickr.com/8020/7181914856_fd11726565_h.jpg';

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
            <div className={styles.login}>
                <h1 className={styles.title}>ACCEDER</h1>
                <form action="" className={styles.form}>
                    <div className="flex w-full flex-col gap-6">
                        <Input label="Correo Electrónico" size="lg" color="indigo" />
                        <Input className="focus:shadow-none" type="password" size="lg" label="Contraseña" color="indigo" />
                        <div className="flex items-center">
                            <Checkbox
                                checked={recordarme}
                                onChange={() => setRecordarme(!recordarme)}
                                color="indigo"
                                size="sm"
                            />
                            <Typography color="gray" size="sm">
                                Recordarme
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <div>
                                <Typography color="blue" size="sm">
                                    <a href="#">¿Olvidaste tu contraseña?</a>
                                </Typography>
                            </div>
                            <div>
                                <Typography color="blue" size="sm">
                                    <a href="#">¿Aún no tienes una cuenta?</a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Button
                            className={styles.sendButton}
                            color="indigo"
                            size="lg"
                            onClick={enviarSesion}
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
