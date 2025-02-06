import { SeminarAPIResponse } from '../types/seminarTypes';

const API_URL = 'http://localhost:3000/seminars';

export const getSeminars = async (): Promise<SeminarAPIResponse[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Не удалось получить список семинаров');
    }
    return response.json();
};

export const updateSeminar = async (seminarData: SeminarAPIResponse): Promise<SeminarAPIResponse> => {
    const response = await fetch(`${API_URL}/${seminarData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(seminarData)
    });

    if (!response.ok) {
        throw new Error('Не удалось сохранить семинар');
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return response.json();
};

export const deleteSeminar = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Не удалось удалить семинар');
    }
    return response.json();
};