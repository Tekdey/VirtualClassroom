import React, { useEffect } from "react";
import Input from "../component/form/input/Input";
import FormButton from "../component/form/button/FormButton";
import Logo from "../component/logo/Logo";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { SignInFormContext } from "../utils/context/SignInFormContext";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    // send to the api
  };

  const propObj = {
    setShowPassword,
    showPassword,
    setFormData,
  };

  return (
    <SignInFormContext.Provider value={propObj}>
      <Logo />
      <main className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-screen h-screen justify-center xs:h-auto xs:w-auto xs:justify-start flex flex-col  gap-10 bg-white border py-10 px-8 rounded-2xl xs:shadow-lg"
        >
          <div>
            <h3 className="font-bold text-4xl text-center mx-10">
              {!forgetPassword
                ? "Se connecter"
                : "Réinitialiser le mot de passe"}
            </h3>
            {forgetPassword && (
              <h5 className="font-bold text-base text-center text-slate-500 pt-4">
                Veuillez indiquer l'adresse mail associée à votre compte
              </h5>
            )}
          </div>
          <Input
            id="email"
            name="email"
            label="Adresse mail"
            placeholder="adresse@mail.com"
            type="email"
          />
          {!forgetPassword && (
            <Input
              id="password"
              name="password"
              label="Mot de passe"
              placeholder="**************"
              type="password"
            />
          )}
          <FormButton handleSubmit={handleSubmit} />
          <p
            onClick={() => setForgetPassword((prevState) => !prevState)}
            className="flex justify-center items-center gap-2 text-slate-500 font-semibold cursor-pointer"
          >
            {!forgetPassword ? (
              "Mot de passe oublié ?"
            ) : (
              <>
                <ArrowLeftIcon className="h-5 w-5" />
                Retour
              </>
            )}
          </p>
        </form>
      </main>
    </SignInFormContext.Provider>
  );
};

export default SignIn;
