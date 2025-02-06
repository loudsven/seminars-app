import useData from './hooks/useData';
import './App.css';
import SeminarList from '../Seminar/List/SeminarList';

function App() {
    const {seminars, deleteSeminarHandler, updateSeminarHandler, loading} = useData();

    if (loading) {
        return <h1>Загрузка...</h1>;
    }

    return (
        seminars.length > 0 && (
            <SeminarList
                items={seminars}
                updateSeminarHandler={updateSeminarHandler}
                deleteSeminarHandler={deleteSeminarHandler}
            />
        )
    );
}

export default App;
