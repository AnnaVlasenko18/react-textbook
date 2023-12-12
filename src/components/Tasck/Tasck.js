import { MdClose } from 'react-icons/md';
import css from './Tasck.modul.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handelToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handelToggle}
      />

      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
