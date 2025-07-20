import React from "react";
import AuthLogin from "../../authforms/AuthLogin";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Autenticación de Login",
  description: "Generado por create next app",
};

import Link from "next/link";
const Login = () => {
  return (
    <>

        <div className="relative overflow-hidden h-screen">
          <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
            <div className="col-span-12 sm:px-12 px-4">
              <div className="flex h-screen items-center px-3 justify-center">
                <div className="max-w-[420px] w-full mx-auto">
                  <h3 className="text-2xl font-bold my-3">Iniciar Sesión</h3>
                  <p className="text-darklink text-sm font-medium">
                    Tu Panel de Administración
                  </p>
                  <AuthLogin />
                  <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
                    <p>¿Nuevo en MaterialM?</p>
                    <Link
                      href={"/auth/auth1/register"}
                      className="text-primary text-sm font-medium"
                    >
                      Crear una cuenta
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Login;
