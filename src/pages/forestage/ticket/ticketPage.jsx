import { Button, Figure, Form } from 'react-bootstrap'
import style from './ticketPage.module.scss'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTicketExhibition, postTicket } from '../../../api/ticket'
import StyledCreateInputgroup from '../../../components/input/input'

function TicketPage(){
  const [exhibition,setExhibition]=useState([])
  const [user,setUser]=useState([])
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [validDate, setValidDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [step,setStep]=useState(1)
  const params=useParams()
  const {id}=params
  const navigate=useNavigate()

  const handleQuantityChange=(e)=>{
    setQuantity(e.target.value)
  }

  const handleNameChange=(e)=>{
    setName(e.target.value)
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }

  const handleCardNumChange=(e)=>{
    setCardNum(e.target.value)
  }

  const handleValidDateChange=(e)=>{
    setValidDate(e.target.value)
  }

  const handleCvcChange=(e)=>{
    setCvc(e.target.value)
  }

  const handlePrevClick=()=>{
    setStep(step-1)
  }

  const handleNextClick=()=>{
    setStep(step+1)
  }

  const handleSubmit=async(e)=>{
      e.preventDefault()
      const authToken=localStorage.getItem('authToken')
      if(!quantity)return
      if(!cvc) return;
      if(!validDate)return
      if(!cardNum)return 
      await postTicket({id,authToken,quantity})
      navigate('/tickets')
  }

  useEffect(()=>{
    const getExhibitionAsync=async()=>{
      const authToken=localStorage.getItem('authToken')
      const data=await getTicketExhibition({id,authToken})
      const exhibition=data.exhibition
      setExhibition(exhibition)
    }
    const getUserAsync=async()=>{
      const authToken=localStorage.getItem('authToken')
      const data=await getTicketExhibition({id,authToken})
      const user=data.user
      setUser(user)
      setName(user.name)
      setEmail(user.email)
    }

    getUserAsync()
    getExhibitionAsync()
  },[id])

     
  return(
    <div className={style.progress}>
      <div className={style.progressController}>
        <span className={style.progressGroup} dataPhase='quantity' step={step}>
          <span className={style.circleContainer}>
            <span className={style.number}>1</span>
          </span>
          <span className={style.text}>選擇張數</span>
        </span>
        <span className={style.progressBar} dataOrder='1' step={step}></span>
        <span className={style.progressGroup} dataPhase='confirmTicket' step={step}>
          <span className={style.circleContainer}>
            <span className={style.number}>2</span>
          </span>
           <span>購票確認</span>
        </span>
        <span className={style.progressBar} dataOrder='2' step={step}></span>
        <span className={style.progressGroup} dataPhase='paidInfo' step={step}>
          <span className={style.circleContainer}>
            <span className={style.number}>3</span>
          </span>
           <span>付款資訊</span>
        </span>
      </div>
      <div className={style.formContainer}>
        <Form>
          <div className={style.part} dataPhase='quantity' step={step}>
            <table> 
              <tbody>
                <tr>
                  <td>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt={exhibition.name}
                        src={exhibition.image}
                      />
                    </Figure>
                  </td>
                  <td>
                    <div className="">{exhibition.name}</div>
                    <span>{exhibition.location}  </span>
                    <span>{exhibition.startDate}—{exhibition.endDate}</span>
                  </td>  
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>票價</th>
                  <th>張數</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{exhibition.fare}</td>
                  <td>
                    <Form.Select name='quantity' value={quantity} onChange={handleQuantityChange}>
                      <option>張數</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Form.Select>
                  </td>
                  <td>最多可買10張</td>        
                </tr>
              </tbody>
            </table>           
          </div>
          <div className={style.part} dataPhase='confirmTicket' step={step}>
            <div className="userInfo">
              <h6>會員基本資料</h6>
              <table>
                <tbody>
                  <tr>
                    <td>姓名</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>電子信箱</td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ticketInfo">
              <h6>訂單</h6>
              <table>
                <thead>
                  <tr>
                    <th>展覽名稱</th>
                    <th>票價</th>
                    <th>張數</th>
                    <th>合計</th>
                  </tr>  
                </thead>
                <tbody>
                  <tr>
                    <td>{exhibition.name}</td>
                    <td>{exhibition.fare}</td>
                    <td>{quantity}</td>
                    <td>{Number(exhibition.fare)*Number(quantity)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={style.part} dataPhase='paidInfo' step={step}>
            <StyledCreateInputgroup
              label='Name'
              type='text'
              name='name'
              value={name}
              onChange={handleNameChange}
              placeholder='Please enter name'
              controlId="Name"
            />
            <StyledCreateInputgroup
              label='Email'
              type='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='Please enter email'
              controlId="Email"
            />
            <StyledCreateInputgroup
              label='Card Number'
              type='text'
              name='cardNum'
              value={cardNum}
              onChange={handleCardNumChange}
              placeholder='Please enter card number'
              controlId="CardNum"
            />
            <StyledCreateInputgroup
              label='Valid Date'
              type='text'
              name='validDate'
              value={validDate}
              onChange={handleValidDateChange}
              placeholder='Please enter validDate'
              controlId="ValidDate"
            /><StyledCreateInputgroup
              label='CVC/CCV'
              type='text'
              name='cvc'
              value={cvc}
              onChange={handleCvcChange}
              placeholder='Please enter CVC/CCV'
              controlId="CVC"
            />
          </div>
        </Form>       
      </div>
      <div className={style.progressButton}>
            <div className={style.buttonGroup} dataPhase='quantity' step={step}>
              <Button variant='outline-secondary' disabled>上一步</Button>
              <Button onClick={handleNextClick}>下一步</Button>
            </div>
            <div className={style.buttonGroup} dataPhase='confirmTicket' step={step}>
              <Button variant='outline-secondary' onClick={handlePrevClick}>上一步</Button>
              <Button onClick={handleNextClick}>下一步</Button>
            </div>
            <div className={style.buttonGroup} dataPhase='paidInfo' step={step}>
              <Button variant='outline-secondary' onClick={handlePrevClick} >上一步</Button>
              <Button onClick={handleSubmit}>完成訂單</Button>
            </div>
        </div>
    </div>
  )
}

export default TicketPage