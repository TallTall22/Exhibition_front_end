import { Button, Form } from "react-bootstrap"
import {StyledEditInputgroup} from "../../components/input/input"
import style from '../../components/input/input.module.scss'
import { useEffect, useRef, useState } from "react"
import {  adminEditExhibition, adminPutExhibition } from "../../api/admin"
import { useNavigate, useParams } from "react-router-dom"

 function ExhibitionEditPage(){
  const [exhibition,setExhibition]=useState({})
  const formRef=useRef()
  const params=useParams()
  const navigate=useNavigate()
  const {id}=params

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const ExhibitionData=new FormData(formRef.current)
    const authToken=localStorage.getItem('authToken')
    const data={
      id:id,
      name:ExhibitionData.get('name'),
      startDate:ExhibitionData.get('startDate'),
      endDate:ExhibitionData.get('endDate'),
      description:ExhibitionData.get('description'),
      openTime:ExhibitionData.get('openTime'),
      endTime:ExhibitionData.get('endTime'),
      image:ExhibitionData.get('image'),
      location:ExhibitionData.get('location'),
      fare:ExhibitionData.get('fare'),
      authToken
    }
    
    await adminPutExhibition(data)
    navigate('/admin/data')

  }

  useEffect(()=>{
     const authToken=localStorage.getItem('authToken')
    const getExhibitionAsync=async()=>{
      const data=await adminEditExhibition({id,authToken})
      const exhibition=data.exhibition
      setExhibition(exhibition)
    }

    getExhibitionAsync()
  },[id])

  return(
    <>
    <h2 className="text-center">Edit Exhibition</h2>
    <Form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
      {/*name*/}
      <StyledEditInputgroup
        label='Name'
        type='text'
        name='name'
        defaultValue={exhibition.name}
        placeholder='Please enter exhibition name'
        controlId="CreateExhibitionName"
      />

      {/*startDate */}
      <StyledEditInputgroup
        label='Start Date'
        type='text'
        name='startDate'
        defaultValue={exhibition.startDate}
        placeholder='Please enter exhibition startDate'
        controlId="CreateExhibitionStartDate"
      />

      {/*End Date*/}
      <StyledEditInputgroup
        label='End Date'
        type='text'
        name='endDate'
        defaultValue={exhibition.endDate}
        placeholder='Please enter exhibition endDate'
        controlId="CreateExhibitionEndDate"
      />

      {/*Open Time*/}
        <StyledEditInputgroup
          label='Open Time'
          type='time'
          name='openTime'
          defaultValue={exhibition.openTime}
          placeholder='Please enter exhibition openTime'
          controlId="CreateExhibitionOpenTime"
        />

      {/*End Time*/}
        <StyledEditInputgroup
          label='End Time'
          type='time'
          name='endTime'
          defaultValue={exhibition.endTime}
          placeholder='Please enter exhibition endTime'
          controlId="CreateExhibitionEndTime"
        />

        {/*image */}
        <Form.Group controlId="CreateExhibitionImage" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" />
      </Form.Group>
      
        {/*location*/}
        <StyledEditInputgroup
          label='Location'
          type='text'
          name='location'
          defaultValue={exhibition.location}
          placeholder='Please enter exhibition location'
          controlId="CreateExhibitionLocation"
        />

        {/*fare*/}
        <StyledEditInputgroup
          label='Fare'
          type='text'
          name='fare'
          defaultValue={exhibition.fare}
          placeholder='Please enter exhibition fare'
          controlId="CreateExhibitionFare"
        />

        {/*description */}
      <Form.Group className="mb-3" controlId="CreateExhibitionDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control  className={style.formControl} name="description" defaultValue={exhibition.description}  as="textarea" placeholder="Please enter exhibition description..." rows={3} />
      </Form.Group>

      {/*button */}
    <div className="mb-3 d-flex justify-content-evenly">
      <Button variant="primary" type="submit">
        Save
      </Button>{' '}
      <Button variant="outline-secondary" onClick={()=>window.history.back()}>
        Back
      </Button>
    </div>
    </Form>
     
    </>
  )
}

export default ExhibitionEditPage