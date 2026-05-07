import MainLayout
from "@/components/layout/MainLayout";

const tutorials: any = {

  "chatgpt-prompts": {
    title:
      "Master ChatGPT Prompts",

    content:
      "Learn advanced prompting techniques for better AI responses.",
  },

  "deepseek-guide": {
    title:
      "DeepSeek For Developers",

    content:
      "Use DeepSeek for coding, debugging, and productivity workflows.",
  },

  "ai-for-students": {
    title:
      "AI Tools For Students",

    content:
      "Boost productivity and learning using AI tools.",
  },
};

export default async function TutorialPage({
  params,
}: any) {

  const tutorial =
    tutorials[params.slug];

  // Not Found
  if (!tutorial) {

    return (
      <MainLayout>

        <div className="min-h-screen flex items-center justify-center text-white">

          Tutorial Not Found

        </div>

      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <article className="min-h-screen bg-black text-white py-24 px-4 sm:px-6">

        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-6">

            Tutorial

          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            {tutorial.title}

          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-xl mt-8 leading-relaxed">

            {tutorial.content}

          </p>

          {/* Divider */}
          <div className="h-px bg-zinc-800 my-16" />

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p>

              This is a detailed tutorial page for{" "}

              <strong>

                {tutorial.title}

              </strong>

              .

            </p>

            <p>

              Here you can add:
            </p>

            <ul>

              <li>
                Step-by-step guides
              </li>

              <li>
                AI workflows
              </li>

              <li>
                Code examples
              </li>

              <li>
                Images
              </li>

              <li>
                Videos
              </li>

              <li>
                Resources
              </li>

            </ul>

          </div>

        </div>

      </article>

    </MainLayout>
  );
}