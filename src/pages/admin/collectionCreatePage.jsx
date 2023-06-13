import { Button, Form } from "react-bootstrap"
import StyledCreateInputgroup from "../../components/input/input"
import style from '../../components/input/input.module.scss'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { adminCreateCollections, adminPostCollection } from "../../api/admin"

 function CollectionCreatePage(){
  const navigate=useNavigate()
  const [categories,setCategories]=useState([])
  const [exhibitions,setExhibitions]=useState([])
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [artMaker, setArtMaker] = useState('');
  const [description, setDescription] = useState('');
  const [artRemark, setArtRemark] = useState('');
  const [exhibitionId, setExhibitionId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [image, setImage] = useState(null);
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSloganChange = (e) => {
    setSlogan(e.target.value);
  };

  const handleArtMakerChange = (e) => {
    setArtMaker(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleArtRemarkChange = (e) => {
    setArtRemark(e.target.value);
  };

  const handleExhibitionIdChange = (e) => {
    setExhibitionId(e.target.value);
  };

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  };


  const handleSubmit=async(e)=>{
    e.preventDefault()
    await adminPostCollection({name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image})
    setName('');
    setSlogan('');
    setArtMaker('');
    setDescription('');
    setArtRemark('');
    setExhibitionId('');
    setCategoryId('');
    setImage(null);

    navigate('/admin/data')
  }

  const handleGoBack=()=>{
    window.history.back()
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
    <Form onSubmit={handleSubmit} encType="multipart/form-data">

      {/*name*/}
      <StyledCreateInputgroup
        label='Name'
        type='text'
        name='name'
        value={name}
        onChange={handleNameChange}
        placeholder='Please enter collection name'
        controlId="CreateCollectionName"
      />

      {/*category*/}
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select  className={style.formControl} name="categoryId" value={categoryId} onChange={handleCategoryIdChange} aria-label="Default select example">
          <option>種類</option>
          {
            categories.map(category=>
              <option key={category.id} value={category.id}>{category.name}</option>
              )
          }
        </Form.Select>
      </Form.Group>

      {/*slogan */}
      <StyledCreateInputgroup
        label='Slogan'
        type='text'
        name='slogan'
        value={slogan}
        onChange={handleSloganChange}
        placeholder='Please enter collection slogan'
        controlId="CreateCollectionSlogan"
      />

      {/*art Maker */}
      <StyledCreateInputgroup
        label='Art Maker'
        type='text'
        name='artMaker'
        value={artMaker}
        onChange={handleArtMakerChange}
        placeholder='Please enter collection artMaker'
        controlId="CreateCollectionArtMaker"
      />

      {/*art remark */}
        <StyledCreateInputgroup
          label='Art Remark'
          type='text'
          name='artRemark'
          value={artRemark}
          onChange={handleArtRemarkChange}
          placeholder='Please enter collection artRemark'
          controlId="CreateCollectionArtRemark"
        />

        {/*image */}
        <Form.Group controlId="CreateCollectionImage" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} />
      </Form.Group>

          {/*exhibitionId*/}
      <Form.Group className="mb-3">
        <Form.Label>Exhibition</Form.Label>
        <Form.Select  className={style.formControl} name="exhibitionId" value={exhibitionId} onChange={handleExhibitionIdChange} aria-label="Default select example">
          <option>展覽</option>
          {
            exhibitions.map(exhibition=>
              <option key={exhibition.id} value={exhibition.id}>{exhibition.name}</option>
              )
          }
        </Form.Select>
      </Form.Group>

        {/*description */}
      <Form.Group className="mb-3" controlId="CreateCollectionDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control  className={style.formControl} name="description" value={description} onChange={handleDescriptionChange} as="textarea" placeholder="Please enter collection description..." rows={3} />
      </Form.Group>

      {/*button */}
    <div className="mb-3 d-flex justify-content-evenly">
      <Button variant="primary" type="submit">
        Create
      </Button>{' '}
      <Button variant="outline-secondary" onClick={()=>handleGoBack()}>
        Back
      </Button>
    </div>
    </Form>
     
    </>
  )
}

export default CollectionCreatePage