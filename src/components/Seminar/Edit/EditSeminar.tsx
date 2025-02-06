import { useForm } from 'react-hook-form';

import styles from './EditSeminar.module.css';
import { Seminar, SeminarAPIResponse, SeminarFormData } from '../../../types/seminarTypes';
import { castFormDataToSeminarAPIResponse, castSeminarAPIResponseToFormData, castSeminarToFormData } from '../../../helpers/dataCast';

interface EditSeminarProps {
    seminar: Seminar,
    updateSeminarHandler: (seminar: SeminarAPIResponse) => Promise<SeminarAPIResponse>
}

function EditSeminar(props: EditSeminarProps) {
    const { seminar, updateSeminarHandler } = props;
    const { register, handleSubmit, formState: { isSubmitting, errors, isDirty}, reset, setError, getValues } = useForm<SeminarFormData>(
        { defaultValues: castSeminarToFormData(seminar) }
    );

    const onSubmit = async () => {
        const data = castFormDataToSeminarAPIResponse(seminar.id, getValues());
    
        try {
            const response = await updateSeminarHandler(data);
            reset(castSeminarAPIResponseToFormData(response));
        } catch (error) {
            setError('root', { type: 'manual', message: `Ошибка при обновлении семинара: ${error}` });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="title">Название</label>
                <input type="text" id="title" {...register('title', { required: 'Поле обязательно для заполнения' })} />
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div className={styles.field}>
                <label>Описание</label>
                <textarea
                    rows={6}
                    {...register('description', { required: 'Поле обязательно для заполнения' })}
                />
                {errors.description && <span>{errors.description.message}</span>}
            </div>
            <div className={styles.field}>
                <label>Дата</label>
                <input
                    type="date"
                    {...register('date', { required: 'Поле обязательно для заполнения' })}
                />
                {errors.date && <span>{errors.date.message}</span>}
            </div>
            <div className={styles.field}>
                <label>Время</label>
                <input
                    type="time"
                    {...register('time', { required: 'Поле обязательно для заполнения' })}
                />
                {errors.time && <span>{errors.time.message}</span>}
            </div>
            <div className={styles.field}>
                <label>Ссылка на изображение</label>
                <input
                    type="url"
                    {...register('photo', { required: 'Поле обязательно для заполнения' })}
                />
                {errors.photo && <span>{errors.photo.message}</span>}
            </div>
            <button type='reset' disabled={!isDirty || isSubmitting} onClick={() => reset()}>Сбросить изменения</button>
            <button type='submit' disabled={!isDirty || isSubmitting}>{isSubmitting ? 'Сохранение...' : 'Сохранить'}</button>
        </form>
    );
}

export default EditSeminar;