import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';



const ReminderForm = (props) => {
  const [reminder, setReminder] = useState({
    reminderTitle: props.reminder ? props.reminder.reminderTitle : '',
    content: props.reminder ? props.reminder.content : '',
    date: props.reminder ? props.reminder.date : ''
  });
  
  const [errorMsg, setErrorMsg] = useState('');
  const { reminderTitle, content } = reminder;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [reminderTitle, content];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '';
    });
  
    if (allFieldsFilled) {
      const reminder = {
        id: uuidv4(),
        reminderTitle,
        content,
        date: new Date()
      };
      props.handleOnSubmit(reminder);
    } else {
      errorMsg = 'Please try again';
    }
    setErrorMsg(errorMsg);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
        setReminder((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };


  return (
    
    <div className="main-form">
      <h1>Reminder</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label></Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="reminderTitle"
            value={reminderTitle}
            placeholder="Subject"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Control
            as="textarea" 
            rows={5} 
            className="input-control"
            type="text"
            name="content"
            value={content}
            placeholder="Type here"
            onChange = {handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Set a Reminder
        </Button>


        {errorMsg && <Alert className="alert alert-danger">{errorMsg}</Alert>}
      </Form>
    </div>
  );
};

export default ReminderForm;