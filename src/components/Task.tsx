import { useState } from 'react'
import { Circle, CheckCircle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  text: string;
  completed: boolean;
  onDeleteTask: (text: string) => void;
  onChangeTask: (text: string) => void;
}


export function Task({ text, completed, onDeleteTask, onChangeTask }: TaskProps) {

  const [task] = useState<TaskProps>({ text, completed, onDeleteTask, onChangeTask });

  function handleClickCheckBox() {
    completed = !completed;

    onChangeTask(text);
  }

  function handleDeleteTask() {
    onDeleteTask(task.text);
  }

  return (
    <div key={text} className={styles.task}>
      <div className={styles.input}>
        {completed ?
          <>
            <CheckCircle size={25} onClick={handleClickCheckBox} className={styles.checkCircle}/>
            <p className={styles.taskCompleted}>{text}</p>
          </>
          :
          <>
            <Circle size={25} onClick={handleClickCheckBox} className={styles.check} />
            <p className={styles.taskNotCompleted}>{text}</p>
          </>
        }
      </div>
      <Trash size={20} onClick={handleDeleteTask} />
    </div>
  )
}