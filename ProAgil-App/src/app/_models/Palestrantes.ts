import { RedeSocial } from './RedeSocial';
import { Evento } from './Evento';

export interface Palestrantes {
    id: number;

    nome: string;

    miniCurriculo: string;

    imageURL: string;

    telefone: string;

    email: string;

    redesSociais: RedeSocial[];

    palestranteEventos: Evento[];
}
