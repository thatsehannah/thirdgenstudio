"use client";

import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { Send } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//TODO: install and use resend for sending emails
const contactSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Please enter your email"),
  message: yup.string().required("Make sure to tell me about your project"),
});

export const ContactForm = () => {
  const form = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const formMethods = form;

  const onSubmit = async (data: yup.InferType<typeof contactSchema>) => {
    console.log("onSubmit handling...");
    console.log("Email: ", data.email);
    console.log("Name: ", data.name);
    console.log("Message: ", data.message);
    formMethods.reset();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className='mt-12 flex flex-col w-full gap-8'
      >
        <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 w-full'>
          <div className='w-full'>
            <InputField
              label='name'
              type='text'
              placeholder='Tommy Vercetti'
              name='name'
            />
          </div>
          <div className='w-full'>
            <InputField
              label='email'
              type='email'
              name='email'
              placeholder='tommyv@vicecity.com'
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
          disabled={!formMethods.formState.isValid}
          className='disabled:bg-neutral-500 bg-accent2 rounded-2xl flex justify-center items-center gap-2 group p-4 enabled:hover:cursor-pointer disabled:cursor-not-allowed enabled:hover:scale-105 transition-all duration-300'
        >
          <p className='uppercase font-main text-lg font-bold'>send message</p>
          <Send
            className='opacity-50 group-[:hover:not(:disabled)]:opacity-100 stroke-2 duration-300 transition-all'
            size={20}
          />
        </button>
      </form>
    </FormProvider>
  );
};
