"use client";

import { useFormContext } from "react-hook-form";

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder: string;
}

export const TextareaField = ({
  label,
  name,
  placeholder,
}: TextareaFieldProps) => {
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
      <textarea
        id={name}
        className='ring-1 ring-neutral-700 w-full p-2 rounded-md font-main focus:border-2 focus:border-accent4 focus:outline-0 focus:ring-0'
        placeholder={placeholder}
        rows={8}
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
