import React from 'react';
import ReminderForm from './ReminderForm';

const AddReminder = ({history, reminders, setReminders}) => {
  const handleOnSubmit = (reminder) => {
    setReminders([reminder, ...reminders]);
    history.push('/');
  };

  return (
    <div>
      <ReminderForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddReminder;