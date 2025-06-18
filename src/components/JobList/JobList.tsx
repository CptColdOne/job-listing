import { useSelector, useDispatch } from 'react-redux';
import { selectAllPositions } from '../../store/positions/positionSelectors';
import styles from './JobList.module.sass';
import JobPosition from '../JobPosition';
import { addFilter, removeFilter } from '../../store/filters/filtersActions';

const JobList = () => {
	const positions = useSelector(selectAllPositions);
	const dispatch = useDispatch();

	const onFilterClick = (filter: string, isSelected: boolean) => {
		dispatch(isSelected ? removeFilter(filter) : addFilter(filter));
	};

	return (
		<div className={styles.wrapper}>
			{positions.map((pos) => (
				<>
					<JobPosition
						key={pos.id}
						position={pos}
						onFilterClick={onFilterClick}
					/>
				</>
			))}
		</div>
	);
};

export default JobList;
