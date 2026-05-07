import TutorialCard
from "./TutorialCard";

const tutorials = [

  {
    title:
      "Master ChatGPT Prompts",

    description:
      "Learn advanced AI prompting techniques.",

    slug:
      "master-chatgpt-prompts",
  },

  {
    title:
      "DeepSeek For Developers",

    description:
      "Use DeepSeek for coding workflows.",

    slug:
      "deepseek-for-developers",
  },

  {
    title:
      "AI Tools For Students",

    description:
      "Boost productivity using AI tools.",

    slug:
      "ai-tools-for-students",
  },
];

export default function TutorialsGrid() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {tutorials.map(
        (tutorial, index) => (

          <TutorialCard
            key={index}
            title={
              tutorial.title
            }
            description={
              tutorial.description
            }
            slug={
              tutorial.slug
            }
          />
        )
      )}

    </div>
  );
}