import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../lib/axios';
import { FilmCard } from '../../Common/FilmCard';
import { Title } from '../Title';

interface Film {
    id: string;
    title: string;
    image: string;
    movie_banner: string;
    release_date: string;
}

interface AllFilmsProps {
    limit?: number;
}

export function AllFilms({ limit }: AllFilmsProps) {
    const [apiData, setApiData] = useState<Film[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        const loadDataAPI = async () => {
            try {
                const { data } = await api.get<Film[]>('/films', {
                    signal: controller.signal,
                });
                setApiData(data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.code === 'ERR_CANCELED') return;
                    console.error('Erro ao buscar dados:', err.response?.status, err.message);
                } else {
                    console.error('Erro ao buscar dados:', err);
                }
            }
        };

        loadDataAPI();
        return () => controller.abort();
    }, []);

    const visibleFilms = useMemo(() => {
        const n = Number.isFinite(limit as number) ? Number(limit) : undefined;
        return n && n > 0 ? apiData.slice(0, n) : apiData;
    }, [apiData, limit]);

    return (
        <>
            <Title text="Todos os Filmes" />
            {visibleFilms.length > 0 ? (
                <div className="max-w-5xl mx-auto grid gap-6 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {visibleFilms.map((film) => (
                        <Link key={film.id} to={`/filmes/${film.id}`}>
                            <FilmCard
                                title={film.title}
                                image={film.image || film.movie_banner}
                                releaseDate={film.release_date}
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center">Carregando filmes...</p>
            )}
        </>
    );
}
