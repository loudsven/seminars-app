import { useEffect, useState } from 'react';
import { Seminar, SeminarAPIResponse } from '../../../types/seminarTypes';
import { deleteSeminar, getSeminars, updateSeminar } from '../../../api/seminarService';
import { castSeminarAPIResponseToSeminar } from '../../../helpers/dataCast';

function useData() {
    const [seminars, setSeminars] = useState<Seminar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getSeminars()
            .then((data) => {
                setSeminars(data.map(castSeminarAPIResponseToSeminar));
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const deleteSeminarHandler = (id: string) => {
        deleteSeminar(id).then(() => {
            setSeminars(seminars.filter((seminar) => seminar.id !== id));
        });
    };

    const updateSeminarHandler = (seminar: SeminarAPIResponse) => {
        return updateSeminar(seminar).then((data) => {
            setSeminars(seminars.map((seminar) => {
                if (seminar.id === data.id) {
                    return castSeminarAPIResponseToSeminar(data);
                }
                return seminar;
            }));
            return data;
        });
    };

    return {
        seminars,
        loading,
        error,
        deleteSeminarHandler,
        updateSeminarHandler
    };

}

export default useData;