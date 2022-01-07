import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';


const Reminder = ({
  id,
  reminderTitle,
  content,
  date,
  handleRemoveReminder
}) => {
const history = useHistory();

  return (
    <Card className="Reminder">
        <Card.Header className="Remindertitle">{reminderTitle}</Card.Header>
        <Card.Body className="Reminderdetails">
            <div>{content}</div>
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Edit
        </Button>{' '}
        <Button variant="secondary" onClick={() => handleRemoveReminder(id)}>
          Delete
        </Button>
        </Card.Body>
        <Card.Footer>
        Date Added By User: {new Date(date).toDateString()}
        </Card.Footer>
    </Card>
  );
};

export default Reminder;