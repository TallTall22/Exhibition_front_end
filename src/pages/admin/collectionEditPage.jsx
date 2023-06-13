import { Button, Form } from "react-bootstrap"
import {StyledEditInputgroup} from "../../components/input/input"
import style from '../../components/input/input.module.scss'
import { useEffect, useRef, useState } from "react"
import {  adminEditCollection, adminPutCollection } from "../../api/admin"
import { useNavigate, useParams } from "react-router-dom"

 function CollectionEditPage(){
  const [categories,setCategories]=useState([])
  const [exhibitions,setExhibitions]=useState([])
  const [collection,setCollection]=useState({})
  const formRef=useRef()
  const params=useParams()
  const navigate=useNavigate()
  const {id}=params

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const formData=new FormData(formRef.current)
    const data={
      id:id,
      name:formData.get('name'),
      categoryId:formData.get('categoryId'),
      slogan:formData.get('slogan'),
      artMaker:formData.get('artMaker'),
      artRemark:formData.get('artRemark'),
      image:formData.get('image'),
      exhibitionId:formData.get('exhibitionId'),
      description:formData.get('description')
    }
    
    await adminPutCollection(data)
    navigate('/admin/data')

  }

  useEffect(()=>{
    const getCollectionAsync=async()=>{
      const data=await adminEditCollection({id})
      const collection=data.collection
      setCollection(collection)
    }
    const getCategoriesAsync=async()=>{
      const data=await adminEditCollection({id})
      const categories=data.categories
      setCategories(categories)
    }
    const getExhibitionsAsync=async()=>{
      const data=await adminEditCollection({id})
      const exhibitions=data.exhibitions
      setExhibitions(exhibitions)
    }

    getCollectionAsync()
    getCategoriesAsync()
    getExhibitionsAsync()
  },[id])

  return(
    <>
    <h2 className="text-center">Edit Collection</h2>
    <Form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
      <StyledEditInputgroup
        label='Name'
        type='text'
        name='name'
        defaultValue={collection.name}
        placeholder='Please enter collection name'
        controlId="CreateCollectionName"
      />
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select className={style.formControl} name="categoryId" value={collection.categoryId} aria-label="Default select example">
          <option>種類</option>
          {
            categories.map(category=>
              <option key={category.id} value={category.id}>{category.name}</option>
              )
          }
        </Form.Select>
      </Form.Group>
      <StyledEditInputgroup
        label='Slogan'
        type='text'
        name='slogan'
        defaultValue={collection.slogan}
        placeholder='Please enter collection slogan'
        controlId="CreateCollectionSlogan"
      />
      <StyledEditInputgroup
        label='Art Maker'
        type='text'
        name='artMaker'
        defaultValue={collection.artMaker}
        placeholder='Please enter collection artMaker'
        controlId="CreateCollectionArtMaker"
      />
        <StyledEditInputgroup
          label='Art Remark'
          type='text'
          name='artRemark'
          defaultValue={collection.artRemark}
          placeholder='Please enter collection artRemark'
          controlId="CreateCollectionArtRemark"
        />
      <StyledEditInputgroup
        label='Image'
        type='file'
        name='image'
        controlId="CreateCollectionImage"
      />
      <Form.Group className="mb-3">
        <Form.Label>Exhibition</Form.Label>
        <Form.Select className={style.formControl} name="exhibitionId" defaultValue={collection.exhibitionId} aria-label="Default select example">
          <option>展覽</option>
          {
            exhibitions.map(exhibition=>
              <option key={exhibition.id} value={exhibition.id}>{exhibition.name}</option>
              )
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="CreateCollectionDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control className={style.formControl} name="description" defaultValue={collection.description} as="textarea" placeholder="Please enter collection description..." rows={3} />
      </Form.Group>
    <div className="mb-3 d-flex justify-content-evenly">
      <Button variant="primary" type="submit">
        Save
      </Button>{' '}
      <Button  variant="outline-secondary" onClick={()=>window.history.back()}>
        Back
      </Button>
    </div>
    </Form>
     
    </>
  )
}

export default CollectionEditPage