import { Form } from "react-bootstrap";
import style from './input.module.scss'

export function StyledEditInputgroup({label,type,name,placeholder,controlId,ref,defaultValue,onChange}){
  return(
    <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control ref={ref} className={style.formControl} defaultValue={defaultValue} onChange={onChange} type={type} name={name} placeholder={placeholder} />
    </Form.Group>
  )
}

export default function StyledCreateInputgroup({label,type,name,placeholder,controlId,ref,value,onChange}){
  return(
    <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control ref={ref} className={style.formControl} value={value} onChange={onChange} type={type} name={name} placeholder={placeholder} />
    </Form.Group>
  )
}
