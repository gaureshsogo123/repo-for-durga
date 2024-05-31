import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




function Login() {
  const info = localStorage.getItem('user');
  const navi = useNavigate();
  const newinfo = JSON.parse(info);
  const sub = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    const newdata = {
      email: data.get('email'),
      password: data.get('pass')
    }
      document.getElementById('form').reset(); 
      const userlogin = newinfo.filter((ele,i)=>{
        return ele.email === newdata.email && ele.password === newdata.password
      })
      if(userlogin.length===0){
        console.log('sorry')
      }else{
        console.log("login success");
        localStorage.setItem('detail', JSON.stringify(newinfo));
        navi('/dash')
      }     
  }
  
  return (
    <div>
      <Card style={{ width: '35rem',margin:"auto",marginTop:'100px' }}>
      <Card.Body>
      <Form onSubmit={sub} id="form">
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
    </Form>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Login;