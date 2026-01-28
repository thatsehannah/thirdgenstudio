import React from "react";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { Send } from "lucide-react";

export const ContactForm = () => {
  return (
    <div className='mt-12 flex flex-col w-full gap-8'>
      <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-3 w-full'>
        <InputField
          label='name'
          type='text'
          id='name'
          name='name'
          placeholder='Tommy Vercetti'
        />
        <InputField
          label='email'
          type='email'
          id='email'
          name='email'
          placeholder='tommyv@gmail.com'
        />
      </div>
      <TextareaField
        label='message'
        id='message'
        name='message'
        placeholder='Tell us about your project...'
      />
      <div className='bg-accent2 rounded-2xl flex justify-center items-center gap-2 group p-4 hover:cursor-pointer hover:scale-105 transition-all duration-300'>
        <p className='uppercase font-main text-lg font-bold'>send message</p>
        <Send
          className='opacity-50 group-hover:opacity-100 stroke-2 duration-300 transition-all'
          size={20}
        />
      </div>
    </div>
  );
};
