import styles from './App.module.sass';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from '../src/mock/data.json';
import { addPositions } from './store/positions/positionActions';
import JobList from './components/JobList';
import JobFilters from './components/JobFilters';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPositions(data));
	}, []);

	return (
		<>
			<div className={styles.app}>
				<header className={styles.header}></header>
				<div className={styles.content}>
					<JobFilters />
					<JobList />
				</div>
			</div>
		</>
	);
}

export default App;
