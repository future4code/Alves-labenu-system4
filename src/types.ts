export type Student = {
	id: string;
	nome: string;
	email: string;
	data_nasc: string;
	turma_id: string;
};

export type Turma = {
	id: string;
	nome: string;
	modulo: string;
};


export type Docente = {
	id: string;
	nome: string;
	email: string;
	data_nasc: string;
	turma_id: string;
};

export type TurmaInser = {
    id: string;
    nome: string;
    modulo: string;
}