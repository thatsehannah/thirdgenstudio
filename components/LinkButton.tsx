interface LinkButtonProps {
  className: string;
  text: string;
  target: string;
}

export const LinkButton = ({ className, text, target }: LinkButtonProps) => {
  return (
    <a href={`#${target}`}>
      <div
        className={`${className} hover:scale-110 transition-all ease-in-out duration-300 rounded-lg w-fit font-main py-2 px-4`}
      >
        {text}
      </div>
    </a>
  );
};
