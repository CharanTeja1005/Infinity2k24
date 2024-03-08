import { FC } from 'react';
import StickyScroll from './ui/ScrollReveal';

const content = [
    {
      title: "Unleashing Generative AI: A Journey into Creative Intelligence",
      description:
        "Generative AI is a type of artificial intelligence that can create new data, like images, text, or music, similar to what it has been trained on. It's used in art, music, and other creative fields, as well as in areas like healthcare and gaming. However, its use raises ethical concerns that need to be addressed.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Unleashing Generative AI: A Journey into Creative Intelligence
        </div>
      ),
    },
    {
      title: "Genres of AI that Produce New Data",
      description: "Various AI models, such as BigGAN, StyleGAN2, CLIP, DALL-E, Turing-NLG, PULSE, and VQ-VAE-2, excel in generating new data across different domains. These models leverage advanced techniques to produce images, text, and other forms of data, contributing to the expansion of creative possibilities within artificial intelligence.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Genres of AI that Produce New Data
        </div>
      ),
    },
    {
      title: "Exploring the Frontiers: Innovative Uses of Generative AI",
      description:
        "Innovative uses of generative AI span diverse domains, showcasing its versatility and impact. From content generation and data augmentation to personalized recommendations and healthcare applications, generative AI is reshaping industries and driving creative solutions. It facilitates simulation and modeling, aids in anomaly detection, and enhances natural language processing. Moreover, its influence extends to gaming, entertainment, and fostering artificial creativity. These frontiers collectively highlight the breadth of generative AI's capabilities and its transformative potential across various sectors.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Exploring the Frontiers: Innovative Uses of Generative AI
        </div>
      ),
    },
    {
      title: "Navigating Ethics and Creativity in Generative AI",
      description:
        "In the realm of generative AI, ethical and creative considerations loom large. Issues such as bias, misinformation, privacy, security, and regulatory compliance demand attention. Additionally, the resource-intensive nature of AI models poses sustainability challenges. Ensuring robustness and incorporating human oversight are vital for ethical AI development. By navigating these complexities, we can foster creativity while upholding ethical standards in generative AI.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Navigating Ethics and Creativity in Generative AI
        </div>
      ),
    },
  ];

const GenAIComponent: FC = () => {
  return (
    <div className="flex items-center justify-center my-10 py-10">
        <div className="container mx-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                  THE THEME:{" "}
                <span className="inline bg-gradient-to-r from-[#f5aadb]  to-[#D247BF] text-transparent bg-clip-text">
                  GENERATIVE AI
                </span>
            </p>
            </h2>
            <p className="text-lg lg:text-3xl text-center leading-relaxed">
                We have meticulously chosen our theme as GenAI
            </p>
            <div className="p-10">
                <StickyScroll content={content} />
            </div>

        </div>
        <br/>
    </div>
  );
}

export default GenAIComponent;