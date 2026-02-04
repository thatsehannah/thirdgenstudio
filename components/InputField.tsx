"use client";

import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export const InputField = ({
  label,
  name,
  placeholder,
  type,
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div className='flex flex-col w-full'>
      <label
        htmlFor={name}
        className='uppercase text-sm text-neutral-400 font-main font-bold mb-2'
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className='ring-1 ring-neutral-700 p-2 rounded-md font-main focus:border-2 focus:border-accent4 focus:outline-0 focus:ring-0'
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <p className='font-bold font-main text-accent1 mt-1.5'>
          {error.message as string}
        </p>
      )}
    </div>
  );
};
