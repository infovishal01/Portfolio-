interface Props {

  label: string;

  title: string;

  description?: string;
}

export default function SectionHeading({

  label,

  title,

  description,
}: Props) {

  return (

    <div className="text-center mb-20">

      <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

        {label}

      </p>

      <h2 className="text-4xl sm:text-5xl font-black">

        {title}

      </h2>

      {description && (

        <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg">

          {description}

        </p>
      )}

    </div>
  );
}