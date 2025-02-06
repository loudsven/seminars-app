import { DateTime } from 'luxon';
import { Seminar, SeminarAPIResponse, SeminarFormData } from '../types/seminarTypes';

export const castSeminarAPIResponseToSeminar = (data: SeminarAPIResponse): Seminar => {
    return {
        id: data.id,
        title: data.title,
        description: data.description,
        date: castStringToDate(data.date),
        time: data.time,
        photo: data.photo
    };
};

export const castSeminarToSeminarAPIResponse = (seminar: Seminar): SeminarAPIResponse => {
    return {
        id: seminar.id,
        title: seminar.title,
        description: seminar.description,
        date: castDateToString(seminar.date),
        time: seminar.time,
        photo: seminar.photo
    };
};

export const castSeminarToFormData = (seminar: Seminar): SeminarFormData => {
    return {
        title: seminar.title,
        description: seminar.description,
        date: castDateToInputDate(seminar.date),
        time: seminar.time,
        photo: seminar.photo,
    };
};

export const castFormDataToSeminarAPIResponse = (id: string, formData: SeminarFormData): SeminarAPIResponse => {
    return {
        id,
        title: formData.title,
        description: formData.description,
        date: castInputDateToString(formData.date),
        time: formData.time,
        photo: formData.photo,
    };
};

export const castSeminarAPIResponseToFormData = (data: SeminarAPIResponse): SeminarFormData => {
    return {
        title: data.title,
        description: data.description,
        date: castStringToInputDate(data.date),
        time: data.time,
        photo: data.photo,
    };
};

// String is date from server like: "19.02.2025"
// InputDate is date from input type "date" like: "2025-02-19"
// Date is JS date object.

export const castInputDateToString = (date: string): string => {
    return DateTime.fromISO(date).toFormat('dd.MM.yyyy');
};

export const castStringToInputDate = (dateStr: string): string => {
    const parsedDate = DateTime.fromFormat(dateStr, 'dd.MM.yyyy');
    return parsedDate.isValid ? parsedDate.toFormat('yyyy-MM-dd') : '';
};

export const castDateToInputDate = (date: Date): string => {
    return DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
};

export const castInputDateToDate = (date: string): Date => {
    return DateTime.fromISO(date).toJSDate();
};

export const castDateToString = (date: Date): string => {
    return DateTime.fromJSDate(date).toFormat('dd.MM.yyyy');
};

export const castStringToDate = (date: string): Date => {
    return DateTime.fromFormat(date, 'dd.MM.yyyy').toJSDate();
};