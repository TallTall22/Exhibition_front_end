import style from './footer.module.scss'

function Footer(){
  return(
    <footer className={style.footer}>
      <p>Collection 和 Video 的資料皆來自故宮的OPEN API</p>
  </footer>
  )
}

export default Footer