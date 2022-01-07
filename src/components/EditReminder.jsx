import React from 'react';
import ReminderForm from './ReminderForm';
import { useParams } from 'react-router-dom';

const EditReminder = ({ history, reminders, setReminders }) => {
  const { id } = useParams();
  const reminderToEdit = reminders.find((reminder) => reminder.id === id);

  const handleOnSubmit = (reminder) => {
    const filteredReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders([reminder, ...filteredReminders]);
    history.push('/');
  };

  return (
    <div>
      <ReminderForm reminder={reminderToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditReminder;