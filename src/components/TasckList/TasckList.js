// import { statusFilter } from '../../redux/constants';
import { getStatusFilter, getTasks } from '../../redux/selectors';
import { Task } from '../../components/Tasck/Tasck';
import css from './TasckForm.modul.css';
import { useSelector } from 'react-redux';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.active:
      return tasks.filter(task => !task.completed);
    case statusFilter.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTask = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTask.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
