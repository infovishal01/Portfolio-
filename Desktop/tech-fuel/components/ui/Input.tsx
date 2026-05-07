interface InputProps {

  type?: string;

  placeholder?: string;

  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function Input({

  type = "text",

  placeholder,

  value,

  onChange,
}: InputProps) {

  return (

    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        bg-black/60
        border
        border-zinc-800
        rounded-2xl
        px-5
        py-4
        text-white
        outline-none
        focus:border-green-500
        transition
        duration-300
      "
    />
  );
}