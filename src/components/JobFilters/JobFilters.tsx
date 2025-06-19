import { clearFilters, removeFilter } from '../../store/filters/filtersActions';
import { selectFilters } from '../../store/filters/filtersSelectors';
import styles from './JobFilters.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import iconRemove from '../../assets/images/icon-remove.svg';

const JobFilters = () => {
	const filters = useSelector(selectFilters);
	const dispatch = useDispatch();

	return filters.length === 0 ? null : (
		<div className={styles.wrapper}>
			<div className={styles.filters}>
				{filters.map((filter) => (
					<div key={filter} className={styles.filter}>
						<div className={styles.filter_name}>{filter}</div>
						<img
							src={iconRemove}
							onClick={() => dispatch(removeFilter(filter))}
						/>
					</div>
				))}
			</div>
			<div
				className={styles.clear_button}
				onClick={() => dispatch(clearFilters())}
			>
				Clear
			</div>
		</div>
	);
};

export default JobFilters;
