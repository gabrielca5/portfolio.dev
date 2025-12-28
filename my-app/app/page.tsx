"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    let rafId: number | null = null;

    const updateCursor = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${clientX}px`);
        root.style.setProperty("--cursor-y", `${clientY}px`);
      });
    };

    window.addEventListener("pointermove", updateCursor);
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("pointermove", updateCursor);
    };
  }, []);

  const projects = [
    {
      title: "Nebula Motion Kit",
      description:
        "Biblioteca de microinterações para motion designers, com presets responsivos e foco em storytelling visual.",
      year: "2024",
      tags: ["Motion", "Prototype", "After Effects"],
      image: "/projects/placeholder-nebula.svg",
      url: "https://example.com/nebula-motion-kit",
    },
    {
      title: "Lighthouse Banking",
      description:
        "Aplicativo financeiro gamificado que usa luz e sombra para guiar decisões de investimento em tempo real.",
      year: "2023",
      tags: ["Product", "UX", "Fintech"],
      image: "/projects/placeholder-lighthouse.svg",
      url: "https://example.com/lighthouse-banking",
    },
    {
      title: "Aster Studio Reel",
      description:
        "Coleção de animações 3D e UI cinematográfica criada para apresentações de pitch e keynotes interativas.",
      year: "2023",
      tags: ["3D", "Realtime", "Touch"],
      image: "/projects/placeholder-aster.svg",
      url: "https://example.com/aster-studio-reel",
    },
    {
      title: "Field Notes",
      description:
        "Documentário interativo que combina vídeo, áudio espacial e tipografia cinética para contar histórias locais.",
      year: "2022",
      tags: ["Narrativa", "WebGL"],
      image: "/projects/placeholder-fieldnotes.svg",
      url: "https://example.com/field-notes",
    },
  ];

  const deepDiveText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed diam nonummy nibh euismod.";

  const certifications = [
    {
      title: "Creative Coding Lab",
      issuer: "IDEO U",
      year: "2024",
    },
    {
      title: "Advanced Motion Systems",
      issuer: "School of Motion",
      year: "2023",
    },
    {
      title: "Human-Centered Design",
      issuer: "Interaction Design Foundation",
      year: "2022",
    },
    {
      title: "WebGL Storytelling",
      issuer: "Cuberto Studio",
      year: "2022",
    },
  ];

  const timelineEntries = [
    {
      year: "2025",
      title: "Estágio em Pesquisa Interativa",
      detail: "Explorando sensores e iluminação responsiva para instalações imersivas em tempo real.",
    },
    {
      year: "2024",
      title: "Bolsa de Inovação Acadêmica",
      detail: "Projeto de UI adaptativa com foco em acessibilidade dinâmica e feedback luminoso.",
    },
    {
      year: "2023",
      title: "Residência criativa",
      detail: "Experimentos com WebGL e som espacializados para experiências performáticas.",
    },
    {
      year: "2022",
      title: "Primeiro estúdio independente",
      detail: "Produção de motion reels e ferramentas autorais para equipes híbridas.",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const heroSectionClasses = `flex flex-col gap-8 text-center lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-14 lg:text-left transition duration-300 ${
    hoveredCard ? "lg:blur-[1px] lg:opacity-80" : ""
  }`;
  const dimmedSection = hoveredCard ? "lg:blur-[0.5px] lg:opacity-85" : "";

  return (
    <main className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-12 px-6 pt-10 pb-14 text-slate-100 lg:h-screen lg:grid-cols-[360px_minmax(0,1fr)] lg:overflow-hidden lg:px-12 lg:pt-0">
      <section className={heroSectionClasses}>
        <div className="space-y-6">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/logo-branca.svg"
              alt="Logotipo branco de Gabriel Aguiar"
              width={150}
              height={160}
              priority
              className="h-16 w-auto drop-shadow-[0_15px_45px_rgba(255,255,255,0.15)]"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.65em] text-slate-300/80">
            Portfólio em construção
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 lg:text-6xl">
            Gabriel Aguiar
          </h1>
          <p className="text-lg text-slate-200/85">
            Sou um estudante de Ciência da Computação apaixonado por criar experiências digitais
            imersivas que combinam design, tecnologia e narrativa.
          </p>
          <p className="text-sm text-slate-400/90">
            Movimente o cursor para revelar a textura luminosa do cenário e role os projetos para
            ver cada estudo em detalhe.
          </p>
        </div>

        <div className="flex items-center justify-start gap-5 lg:self-start">
          <a
            href="https://github.com/gabrielca5"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-200 transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className="h-7 w-7"
              fill="currentColor"
            >
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.34.73-4.04-1.61-4.04-1.61-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.66-.3-5.46-1.34-5.46-5.95a4.66 4.66 0 0 1 1.24-3.23 4.33 4.33 0 0 1 .12-3.19s1-.32 3.28 1.23a11.3 11.3 0 0 1 5.98 0c2.27-1.55 3.27-1.23 3.27-1.23a4.33 4.33 0 0 1 .12 3.19 4.66 4.66 0 0 1 1.24 3.23c0 4.62-2.81 5.64-5.49 5.94.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielca5"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-200 transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className="h-7 w-7"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.35c0-1.28-.02-2.92-1.78-2.92-1.79 0-2.06 1.4-2.06 2.84v5.43H9.49V9h3.41v1.56h.05c.47-.89 1.63-1.83 3.35-1.83 3.58 0 4.24 2.36 4.24 5.43Zm-13.73 0H3.16V9h3.56ZM4.95 7.44a2.06 2.06 0 1 1 2.05-2.06 2.06 2.06 0 0 1-2.05 2.06Z" />
            </svg>
          </a>
          <a
            href="mailto:hello@gabriel.dev"
            aria-label="Email"
            className="text-slate-200 transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </section>

      <section
        id="projetos"
        aria-labelledby="projetos-heading"
        className="bg-transparent lg:h-screen lg:overflow-y-auto lg:py-14"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="space-y-12 bg-transparent pr-2 lg:pr-6"
          style={{ backgroundColor: "transparent" }}
        >
          <div className={`space-y-3 transition duration-300 ${dimmedSection}`}>
            <p className="text-xs uppercase tracking-[0.55em] text-slate-300/70">
              Imersão completa
            </p>
            <p className="text-base leading-relaxed text-slate-200/90">
              {deepDiveText}
            </p>
          </div>

          <div className="space-y-6">
            <header className={`space-y-2 transition duration-300 ${dimmedSection}`}>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">
                Seleção recente
              </p>
              <h2 id="projetos-heading" className="text-2xl font-semibold text-slate-50">
                Projetos e experimentos interativos
              </h2>
              <p className="text-base text-slate-300/90">
                Cada card abaixo possui notas de processo, tecnologias usadas e um foco narrativo específico.
              </p>
            </header>
            <div
              className="flex flex-col gap-8 bg-transparent"
              onMouseLeave={() => setHoveredCard(null)}
              style={{ background: "transparent", border: "none", boxShadow: "none" }}
            >
              {projects.map((project) => {
                const isActive = hoveredCard === project.title;
                const isDimmed = hoveredCard && !isActive;

                return (
                  <article
                    key={project.title}
                    onMouseEnter={() => setHoveredCard(project.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative overflow-hidden rounded-3xl border bg-transparent p-6 shadow-[0_10px_50px_rgba(3,15,40,0.35)] backdrop-blur-sm transition duration-300 hover:border-cyan-200/70 ${
                      isActive
                        ? "border-cyan-200/70 shadow-[0_20px_60px_rgba(41,160,255,0.22)]"
                        : "border-transparent"
                    } ${isDimmed ? "blur-[1px] opacity-70" : ""}`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 ease-out group-hover:opacity-85"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(5%)",
                      }}
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 bg-slate-950/80 opacity-0 transition duration-500 group-hover:opacity-70" aria-hidden />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between text-sm text-slate-300/80">
                        <span>{project.year}</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gradient-to-r from-cyan-300/90 via-sky-300/90 to-blue-400/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-[0_6px_20px_rgba(35,118,255,0.35)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-50">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-base text-slate-200/85">
                        {project.description}
                      </p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:text-white"
                        >
                          Ver projeto
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M10 7h7v7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={`space-y-4 ${dimmedSection}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">Certificações</p>
                <h3 className="text-xl font-semibold text-slate-50">Formações e selos recentes</h3>
              </div>
              <span className="rounded-full border border-slate-100/20 px-3 py-1 text-xs text-slate-300/80">
                {certifications.length}
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100/10 bg-white/5 p-4 shadow-[0_8px_30px_rgba(5,15,35,0.4)]"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">{item.year}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-50">{item.title}</p>
                  <p className="text-sm text-slate-300/90">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-4 ${dimmedSection}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">Linha do tempo</p>
                <h3 className="text-xl font-semibold text-slate-50">Evolução recente</h3>
              </div>
              <span className="text-sm text-slate-400/90">2022 — 2025</span>
            </div>
            <ol className="relative space-y-6 border-l border-slate-100/15 pl-6">
              {timelineEntries.map((entry) => (
                <li key={entry.title} className="relative">
                  <span className="absolute -left-3 top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_20px_rgba(40,160,255,0.6)]" />
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">{entry.year}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-50">{entry.title}</p>
                    <p className="text-sm text-slate-300/90">{entry.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
