import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import css from './StatusFilter.modul.css';
import { statusFilter } from '../../redux/constants';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilter.all}>All</Button>
      <Button selected={filter === statusFilter.active}>Active</Button>
      <Button selected={filter === statusFilter.completed}>Completed</Button>
    </div>
  );
};
