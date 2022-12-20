import { ChangeEvent, useState, FormEvent } from "react";
import { PlusCircle} from "phosphor-react"
import styles from './NewTask.module.css'
import { Task } from "./Task";
import { Empty } from "./Empty";
import { HeaderTask } from "./HeaderTask";

interface Task {
  text: string;
  completed: boolean;
}

export function NewTask(){
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { text: newTask, completed: false }]);

    setNewTask('');
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.text !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne);
  }

  function changeTask(taskToComplete: string) {
    const taskWithChange = tasks.findIndex(task => {
      return task.text === taskToComplete
    })

    const taskTmp = [...tasks];
    taskTmp[taskWithChange].completed = !taskTmp[taskWithChange].completed;

    setTasks(taskTmp);

    let tasksCompleted = taskTmp.filter(({ completed }) => completed === true)

    setTasksCompleted(tasksCompleted.length);

  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          value={newTask}
          onChange={handleNewTask}
        />
        <button
          type="submit"
          className={styles.button}
        >
          Criar <PlusCircle size={32} weight="bold" />
        </button>
      </form>
      <section className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.done}>
          <strong>Concluidas</strong>
          <span>{tasksCompleted} de {tasks.length}</span>
        </div>
      </section>
      {tasks.length === 0 ?
        <Empty />
        :
        tasks.map(task => (
          <Task
            text={task.text}
            completed={task.completed}
            onDeleteTask={deleteTask}
            onChangeTask={changeTask}
          />
        ))
      }
    </>
  )
}