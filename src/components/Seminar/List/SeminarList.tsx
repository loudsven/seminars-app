import { Seminar, SeminarAPIResponse } from '../../../types/seminarTypes';
import SeminarListItem from '../ListItem/SeminarListItem';

import styles from './SeminarList.module.css';

interface SeminarListProps {
    items: Seminar[];
    deleteSeminarHandler: (id: string) => void
    updateSeminarHandler: (seminar: SeminarAPIResponse) => Promise<SeminarAPIResponse>
}

function SeminarList(props: SeminarListProps) {
    const { items } = props;
    
    return (
        <div>
            <h1 className={styles.title}>Список семинаров</h1>
            <ul className={styles.list}>
                {items.map((item) => (
                    <SeminarListItem key={item.id} seminar={item} {...props} />
                ))}
            </ul>
        </div>
    );
}

export default SeminarList;