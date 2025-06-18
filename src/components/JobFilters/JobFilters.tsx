import { clearFilters } from '../../store/filters/filtersActions';
import { selectFilters } from '../../store/filters/filtersSelectors';
import styles from './JobFilters.module.sass';
import { useSelector, useDispatch } from 'react-redux';

const JobFilters = () => {
	const filters = useSelector(selectFilters);
	const dispatch = useDispatch();

	return (
		<div className={styles.wrapper}>
			<div className={styles.filters}>
				{filters.map((filter) => (
					<div key={filter}>{filter}</div>
				))}
			</div>
			<div
				className={styles.clear_button}
				onClick={() => dispatch(clearFilters())}
			>
				CLEAR
			</div>
		</div>
	);
};

export default JobFilters;
