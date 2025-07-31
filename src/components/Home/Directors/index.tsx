import { Title } from '../Title';
import { DirectorCard } from './DirectorCard';
import hayaoMiyazaki from '@/assets/images/directors/hayao-miyazaki.png';
import isaoTakahata from '@/assets/images/directors/isao-takahata.png';
import yoshifumiKondo from '@/assets/images/directors/yoshifumi-kondo.png';
import goroMiyazaki from '@/assets/images/directors/goro-miyazaki.png';

export function Directors() {
    return (
        <>
            <Title text="Diretores" />
            <p className="font-libre font-normal text-center mx-10 mb-8 text-sm">
                Aqueles que tornaram reais os filmes que mudaram gerações
            </p>
            <section className="w-3/4 mx-auto flex flex-wrap justify-center flex-col gap-6 sm:justify-evenly sm:flex-row">
                <DirectorCard name="Hayao Miyazaki" image={hayaoMiyazaki} />
                <DirectorCard name="Isao Takahata" image={isaoTakahata} />
                <DirectorCard name="Yoshifumi Kondo" image={yoshifumiKondo} />
                <DirectorCard name="Goro Miyazaki" image={goroMiyazaki} />
            </section>
            <hr className=" border-0 border-t-2 border-divider w-1/2 h-0.5 mx-auto my-14" />
        </>
    );
}
