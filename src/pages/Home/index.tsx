import { AllFilms } from '../../components/Home/AllFilms';
import { Directors } from '../../components/Home/Directors';
import { Hero } from '../../components/Home/Hero';

export function Home() {
    return (
        <>
            <Hero />
            <Directors />
            <hr className=" border-0 border-t-2 border-divider w-1/2 h-0.5 mx-auto my-14" />
            <AllFilms limit={8} />
        </>
    );
}
