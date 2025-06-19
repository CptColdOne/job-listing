import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from '../../store/positions/positionSelectors';
import styles from './JobList.module.sass';
import JobPosition from '../JobPosition';
import { addFilter, removeFilter } from '../../store/filters/filtersActions';
import { selectFilters } from '../../store/filters/filtersSelectors';
import { RootState } from '../../store/types';

const JobList = () => {
	const filters = useSelector(selectFilters);
	const positions = useSelector((state: RootState) =>
		selectVisiblePositions(state, filters),
	);
	const dispatch = useDispatch();

	const onFilterClick = (filter: string, isSelected: boolean) => {
		dispatch(isSelected ? removeFilter(filter) : addFilter(filter));
	};

	return (
		<div className={styles.wrapper}>
			{positions.map((pos) => (
				<JobPosition
					key={pos.id}
					position={pos}
					onFilterClick={onFilterClick}
				/>
			))}
		</div>
	);
};

export default JobList;
