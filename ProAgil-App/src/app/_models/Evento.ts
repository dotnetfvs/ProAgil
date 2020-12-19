import { Lote } from './Lote';
import { Palestrantes } from './Palestrantes';
import { RedeSocial } from './RedeSocial';

export interface Evento {
    id: number;

    local: string;

    dataEvento: Date;

    tema: string;

    qtdPessoas: number;

    imageURL: string;

    telefone: string;

    email: string;

    lotes: Lote[];

    redesSociais: RedeSocial[];

    palestranteEventos: Evento[];

    eventoid: number;
}
