import { JobPositionProps } from './types';
import styles from './JobPosition.module.sass';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../store/filters/filtersSelectors';

const JobPosition = ({ position, onFilterClick }: JobPositionProps) => {
	const filters = [
		position.role,
		position.level,
		...position.languages,
		...position.tools,
	];
	const selectedFilters = useSelector(selectFilters);

	const isFilterSelected = (filter: string) => {
		return selectedFilters.includes(filter);
	};

	return (
		<div className={styles.content}>
			<div className={styles.info}>
				<img src={position.logo} />
				<div className={styles.description}>
					<div className={styles.company}>
						<div className={styles.name}>{position.company}</div>
						{position.new && <div className={styles.new}>NEW!</div>}
						{position.featured && (
							<div className={styles.featured}>FEATURED</div>
						)}
					</div>
					<div className={styles.position}>{position.position}</div>
					<div className={styles.job_info}>
						<div>{position.postedAt}</div>
						<div>{position.contract}</div>
						<div>{position.location}</div>
					</div>
				</div>
			</div>
			<div className={styles.filters}>
				{filters.map((filter) => (
					<div
						key={filter}
						className={clsx(styles.filter, {
							[styles.filter_selected]: isFilterSelected(filter),
						})}
						onClick={() => onFilterClick(filter, isFilterSelected(filter))}
					>
						{filter}
					</div>
				))}
			</div>
		</div>
	);
};

export default JobPosition;
