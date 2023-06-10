import { Button, Form } from "react-bootstrap"
import StyledInputgroup from "../../components/input/input"
import style from '../../components/input/input.module.scss'
import { useEffect, useRef, useState } from "react"
import { adminCreateCollections, adminPostCollection } from "../../api/admin"

 function CollectionCreatePage(){
  const [categories,setCategories]=useState([])
  const [exhibitions,setExhibitions]=useState([])
  const nameRef=useRef(null)
  const categoryRef=useRef(null)
  const sloganRef=useRef(null)
  const artMakerRef=useRef(null)
  const artRemarkRef=useRef(null)
  const imageRef=useRef(null)
  const exhibitionRef=useRef(null)
  const descriptionRef=useRef(null)

  const handleSaveClick=async()=>{
    await adminPostCollection({nameRef,categoryRef,sloganRef,artMakerRef,artRemarkRef,imageRef,exhibitionRef,descriptionRef})
  }

  useEffect(()=>{
    const getCategoriesAsync=async()=>{
      const data=await adminCreateCollections()
      const categories=data.categories
      setCategories(categories)
    }
    const getExhibitionssAsync=async()=>{
      const data=await adminCreateCollections()
      const exhibitions=data.exhibitions
      setExhibitions(exhibitions)
    }
    getCategoriesAsync()
    getExhibitionssAsync()
  },[])

  return(
    <>
    <h2 className="text-center ">Create Collection</h2>
    <Form>
      <StyledInputgroup
        ref={nameRef}
        label='Name'
        type='text'
        name='name'
        placeholder='Please enter collection name'
        controlId="CreateCollectionName"
      />
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select ref={categoryRef} className={style.formControl} name="categoryId" aria-label="Default select example">
          <option>種類</option>
          {
            categories.map(category=>
              <option value={category.id}>{category.name}</option>
              )
          }
        </Form.Select>
      </Form.Group>
      <StyledInputgroup
        ref={sloganRef}
        label='Slogan'
        type='text'
        name='slogan'
        placeholder='Please enter collection slogan'
        controlId="CreateCollectionSlogan"
      />
      <StyledInputgroup
        ref={artMakerRef}
        label='Art Maker'
        type='text'
        name='artMaker'
        placeholder='Please enter collection artMaker'
        controlId="CreateCollectionArtMaker"
      />
        <StyledInputgroup
          ref={artRemarkRef}
          label='Art Remark'
          type='text'
          name='artRemark'
          placeholder='Please enter collection artRemark'
          controlId="CreateCollectionArtRemark"
        />
      <StyledInputgroup
        ref={imageRef}
        label='Image'
        type='file'
        name='image'
        controlId="CreateCollectionImage"
      />
      <Form.Group className="mb-3">
        <Form.Label>Exhibition</Form.Label>
        <Form.Select ref={exhibitionRef} className={style.formControl} name="exhibitionId" aria-label="Default select example">
          <option>展覽</option>
          {
            exhibitions.map(exhibition=>
              <option value={exhibition.id}>{exhibition.name}</option>
              )
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="CreateCollectionDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control ref={descriptionRef} className={style.formControl} name="description" as="textarea" placeholder="Please enter collection description..." rows={3} />
      </Form.Group>
    <div className="mb-3 d-flex justify-content-evenly">
      <Button href="/admin/data" variant="primary" type="submit" onClick={()=>handleSaveClick()}>
        Create
      </Button>{' '}
      <Button href="javascript:history.back()" variant="outline-secondary">
        Back
      </Button>
    </div>
    </Form>
     
    </>
  )
}

export default CollectionCreatePage