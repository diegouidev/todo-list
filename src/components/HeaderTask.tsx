import styles from './HeaderTask.module.css'

export function HeaderTask(){
  return (
    <>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.done}>
          <strong>Concluidas</strong>
          <span>0 de 0</span>
        </div>
      </div>
    </>
  )
}