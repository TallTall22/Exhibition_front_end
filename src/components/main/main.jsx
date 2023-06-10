import style from './main.module.scss'

function Main({children}){
  return(
    <main className={style.main}>
      {children}
    </main>
  )
  
}

export default Main