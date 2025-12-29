import Image from "next/image";
import Link from "next/link";

const dogImage = "/projects/cachorro-triste.png";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <section className="flex w-full max-w-5xl flex-col gap-10 rounded-[16px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_30px_120px_rgba(2,8,30,0.6)] lg:flex-row lg:items-center lg:gap-16 lg:p-12">
        <div className="flex-1">
          <Image
            src={dogImage}
            alt="Cachorro sentado olhando para baixo"
            width={640}
            height={640}
            priority
            className="h-auto w-full max-h-[1000px] object-contain"
          />
        </div>
        <div className="flex max-w-md flex-1 flex-col items-start gap-6 text-left lg:items-end lg:text-right">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400/80">Erro 404</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Rota não encontrada
          </h1>
          <p className="text-base text-slate-300">
            Verifique o endereço digitado ou retorne para a página inicial.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-100/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 transition hover:border-slate-100"
          >
            Voltar para o início
          </Link>
        </div>
      </section>
    </main>
  );
}
