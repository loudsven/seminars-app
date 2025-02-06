export type SeminarAPIResponse = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
}

export type Seminar = {
    id: string;
    title: string;
    description: string;
    date: Date;
    time: string;
    photo: string;
}

export type SeminarFormData = {
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
}
