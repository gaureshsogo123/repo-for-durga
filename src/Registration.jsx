import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';




function Registration() {
  const navi = useNavigate();
  const [info,setinfo] = useState([])
  const sub = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    const newdata = {
      text : data.get('name'),
      email: data.get('email'),
      password: data.get('pass')
    }
     info.push(newdata);
      localStorage.setItem('user' ,JSON.stringify([...info,newdata]))
      document.getElementById('form').reset();
      navi('/login')
  }
  return (
    <div>
      <Card style={{ width: '35rem',margin:"auto",marginTop:'100px' }}>
      <Card.Body>
      <Form onSubmit={sub} id="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter Name" name='name'/>
      </Form.Group>&nbsp;
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter Email" name='email'/>
      </Form.Group>&nbsp;

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"  name='pass'/>
      </Form.Group>&nbsp;
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>&nbsp;
      <Button variant="primary" type="submit" style={{marginTop:"20px"}}>
        Submit
      </Button>
    </Form><br />
       <span>If Already Register <Card.Link href="/login" >Sign in</Card.Link></span>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Registration