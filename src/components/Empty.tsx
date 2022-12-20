import styles from './Empty.module.css'
import { Clipboard } from 'phosphor-react'


export function Empty(){
  return (
    <div className={styles.empty}>
      <Clipboard size={54} color={'#575757'} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}