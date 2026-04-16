import { DantexLabSectionFrame } from "./dection-frame";

const cases = [
  {
    title: "De datos dispersos a copiloto operativo en retail",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&q=80",
    alt: "Profesional revisando paneles de datos",
  },
  {
    title: "Asistente clínico con controles de privacidad por diseño",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=720&q=80",
    alt: "Contexto de atención médica y tecnología",
  },
  {
    title: "Automatización inteligente en cadena logística global",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=720&q=80",
    alt: "Operaciones y logística",
  },
];

export function DantexLabCaseStudiesSection() {
  return (
    <DantexLabSectionFrame className="border-b border-white/5 bg-[#010807] py-16 sm:py-20">
      <h2 className="font-chakra mx-auto mb-12 max-w-3xl text-center text-2xl font-semibold tracking-tight text-white sm:mb-16 sm:text-3xl">
        Historias reales impulsadas por sesiones del Lab
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map(({ title, img, alt }) => (
          <article
            key={title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-colors hover:border-teal-500/30"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={img}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-chakra text-base font-semibold leading-snug text-white">
                {title}
              </h3>
              <a
                href="#contacto-lab"
                className="mt-auto pt-6 text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
              >
                Leer más
              </a>
            </div>
          </article>
        ))}
      </div>
    </DantexLabSectionFrame>
  );
}
