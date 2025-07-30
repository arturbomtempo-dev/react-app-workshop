import { PiFire } from 'react-icons/pi';

export function Home() {
    return (
        <>
            <section
                className="h-screen relative isolate bg-[url('/home-image.png')] bg-cover bg-center bg-no-repeat flex items-center"
                aria-label="Studio Ghibli"
            >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/100" />

                <div className="container relative w-full mx-auto px-10 py-24">
                    <h1 className="font-libre text-4xl md:text-6xl leading-tight drop-shadow-sm">
                        STUDIO GHIBLI
                    </h1>
                    <p className="max-w-lg text-xl mt-4">
                        Explore os filmes encantadores do Studio Ghibli e mergulhe em mundos
                        mágicos.
                    </p>
                    <a
                        href="/filmes"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3
                     bg-white text-surface backdrop-blur
                     hover:bg-transparent hover:border hover:text-white transition"
                    >
                        <PiFire className="text-2xl" />
                        Descobrir filmes
                    </a>
                </div>
            </section>
        </>
    );
}
