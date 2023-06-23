import { useState } from "react"
import { useEffect } from "react"
import { getCollection } from "../../../api/collection"
import { Figure } from "react-bootstrap"
import { useParams } from "react-router-dom"
import style from './collectionPage.module.scss'

function CollectionPage(){
  const [collection,setCollection]=useState([])
  const [scale,setScale]=useState(1)
  const params=useParams()
  const {id}=params

  const handleZoomIn=()=>{
    if(scale<2){
      setScale(scale+0.1)
    }
  }

  const handleZoomOut=()=>{
    if(scale>0.5){
      setScale(scale-0.1)
    }
  }

  useEffect(()=>{
    const getCollectionAsync=async()=>{
      const data=await getCollection({id})
      const collection=data.collection
      setCollection(collection)
    }
    getCollectionAsync()
  },[id])
  return (
    <div className="pb-5">
      {
        <>
        <div className="">
          <div className={style.zoomButtons}>
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleZoomOut}>-</button>
          </div>
          <Figure className={style.figure}>
          <Figure.Image className={style.image}
            src={collection.image}
            alt={collection.name}
            style={{transform: `scale(${scale})`}}
         />
        </Figure>
        </div>
        
        
        <h2>{collection.name}</h2>
            <table className={style.table}>
               <thead>
                <tr>
                  <th>基本資料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={style.tableIndex}>品名</td>
                  <td>{collection.name}</td>
                </tr>
                <tr>
                  <td className={style.tableIndex}>分類</td>
                  <td>{collection.category}</td>
                </tr>
                <tr>
                  <td className={style.tableIndex}>作者</td>
                  <td >{collection.artMaker?collection.artMaker:'時代久遠，未可得知'}</td>
                </tr>
                <tr>
                  <td className={style.tableIndex}>時代</td>
                  <td>{collection.slogan}</td>
                </tr>
                <tr>
                  <td className={style.tableIndex}>尺寸</td>
                  <td >{collection.artRemark?collection.artRemark:'未知'}</td>
                </tr>
                <tr>
                  <td className={style.tableIndex}>說明</td>
                  <td>{collection.description}</td>
                </tr>
              </tbody>
            </table>
          </>
      }
      
    </div>
  )
}

export default CollectionPage