import { Button, Form } from "react-bootstrap"
import StyledCreateInputgroup from "../../components/input/input"
import style from '../../components/input/input.module.scss'
import {  useState } from "react"
import { useNavigate } from 'react-router-dom'
import {  adminPostExhibition } from "../../api/admin"

 function ExhibitionCreatePage(){
  const navigate=useNavigate()
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [fare, setFare] = useState('');
  const [image, setImage] = useState(null);
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOpenTimeChange = (e) => {
    setOpenTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };  
  
  const handleFareChange = (e) => {
    setFare(e.target.value);
  };


  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  };


  const handleSubmit=async(e)=>{
    e.preventDefault()
    const authToken=localStorage.getItem('authToken')
    await adminPostExhibition({name, startDate, endDate, description, openTime,location,fare,image, authToken})
    setName('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setOpenTime('');
    setLocation('')
    setFare('')
    setImage(null);

    navigate('/admin/data')
  }

  const handleGoBack=()=>{
    window.history.back()
  }



  return(
    <>
    <h2 className="text-center ">Create Exhibition</h2>
    <Form onSubmit={handleSubmit} encType="multipart/form-data">

      {/*name*/}
      <StyledCreateInputgroup
        label='Name'
        type='text'
        name='name'
        value={name}
        onChange={handleNameChange}
        placeholder='Please enter exhibition name'
        controlId="CreateExhibitionName"
      />

      {/*startDate */}
      <StyledCreateInputgroup
        label='Start Date'
        type='date'
        name='startDate'
        value={startDate}
        onChange={handleStartDateChange}
        placeholder='Please enter exhibition startDate'
        controlId="CreateExhibitionStartDate"
      />

      {/*End Date*/}
      <StyledCreateInputgroup
        label='End Date'
        type='date'
        name='endDate'
        value={endDate}
        onChange={handleEndDateChange}
        placeholder='Please enter exhibition endDate'
        controlId="CreateExhibitionEndDate"
      />

      {/*Open Time*/}
        <StyledCreateInputgroup
          label='Open Time'
          type='time'
          name='openTime'
          value={openTime}
          onChange={handleOpenTimeChange}
          placeholder='Please enter exhibition openTime'
          controlId="CreateExhibitionOpenTime"
        />

        {/*End Time*/}
        <StyledCreateInputgroup
          label='End Time'
          type='time'
          name='endTime'
          value={endTime}
          onChange={handleEndTimeChange}
          placeholder='Please enter exhibition endTime'
          controlId="CreateExhibitionEndTime"
        />

        {/*image */}
        <Form.Group controlId="CreateExhibitionImage" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} />
      </Form.Group>
      
        {/*location*/}
        <StyledCreateInputgroup
          label='Location'
          type='text'
          name='location'
          value={location}
          onChange={handleLocationChange}
          placeholder='Please enter exhibition location'
          controlId="CreateExhibitionLocation"
        />

        {/*fare*/}
        <StyledCreateInputgroup
          label='Fare'
          type='text'
          name='fare'
          value={fare}
          onChange={handleFareChange}
          placeholder='Please enter exhibition fare'
          controlId="CreateExhibitionFare"
        />

        {/*description */}
      <Form.Group className="mb-3" controlId="CreateExhibitionDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control  className={style.formControl} name="description" value={description} onChange={handleDescriptionChange} as="textarea" placeholder="Please enter exhibition description..." rows={3} />
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

export default ExhibitionCreatePage