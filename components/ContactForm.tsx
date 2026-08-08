"use client";

import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { CircleCheckBig, CircleX, Send } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import gsap from "gsap";
import { useState } from "react";
import { NewMessage } from "@/types";
import { sendBatchEmails } from "@/actions";

export const contactSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Please enter your email"),
  message: yup.string().required("Make sure to tell me about your project"),
});

export const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const runSubmitAnimation = () => {
    const onSubmitTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    onSubmitTl
      .to(".form", {
        height: 0,
        duration: 0.9,
        borderWidth: 1,
        borderColor: "#fff",
      })
      .to(".toast", {
        autoAlpha: 1,
        duration: 0.4,
        delay: 0.2,
      })
      .to(".toast", {
        autoAlpha: 0,
        duration: 0.4,
        delay: 5.6,
      });
  };

  const formMethods = form;

  const testSubmit = async (data: NewMessage) => {
    setSuccessMessage("This is success");
    // setErrorMessage("This is messed up");
    runSubmitAnimation();
  };

  const onSubmit = async (data: NewMessage) => {
    try {
      const response = await sendBatchEmails(data);
      if (response) setSuccessMessage(response);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred";
      setErrorMessage(message);
    }

    runSubmitAnimation();
    // formMethods.reset();
  };

  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className='form mt-12 px-1 flex items-center flex-col w-full gap-8 overflow-hidden'
        >
          <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 w-full'>
            <div className='w-full'>
              <InputField
                label='name'
                type='text'
                placeholder='Your Name'
                name='name'
              />
            </div>
            <div className='w-full'>
              <InputField
                label='email'
                type='email'
                name='email'
                placeholder='youremail@domain.com'
              />
            </div>
          </div>
          <div className='w-full'>
            <TextareaField
              label='message'
              name='message'
              placeholder='Tell me about your project...'
            />
          </div>
          <button
            type='submit'
            disabled={
              !formMethods.formState.isValid ||
              formMethods.formState.isSubmitting
            }
            className='disabled:bg-neutral-500 bg-accent2 rounded-2xl flex justify-center items-center gap-2 group p-4 enabled:hover:cursor-pointer disabled:cursor-not-allowed enabled:lg:hover:scale-105 transition-all duration-300 w-full lg:w-3/4'
          >
            <p className='uppercase font-main text-lg font-bold'>
              send message
            </p>
            <Send
              className='opacity-50 group-[:hover:not(:disabled)]:opacity-100 stroke-2 duration-300 transition-all'
              size={20}
            />
          </button>
        </form>
      </FormProvider>
      <div className='toast opacity-0 '>
        {errorMessage && (
          <div className='bg-red-200 flex items-center justify-center gap-2 p-2 rounded-md mt-4'>
            <CircleX className='stroke-neutral-900 stroke-2 fill-red-600' />
            <p className='font-main font-bold text-neutral-900 text-sm lg:text-[1rem]'>
              {errorMessage}
            </p>
          </div>
        )}
        {successMessage && (
          <div className='bg-green-200 flex items-center justify-center gap-2 p-2 rounded-md mt-4'>
            <CircleCheckBig className='stroke-neutral-900 stroke-2 fill-green-600' />
            <p className='font-main font-bold text-neutral-900 text-sm lg:text-[1rem]'>
              {successMessage}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
