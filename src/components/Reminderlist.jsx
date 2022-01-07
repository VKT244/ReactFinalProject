import React from 'react';
import _ from 'lodash';
import Reminder from './reminder';



const Reminderlist = ({reminders, setReminders}) => {
  const handleRemoveReminder = (id) => {
      setReminders(reminders.filter((reminder) => reminder.id !== id))
  };

  return (
      <div>
          <div className = "container">
              {!_.isEmpty(reminders) ? (
                  reminders.map((reminder) => (
                      <Reminder key={reminder.id} {...reminder} handleRemoveReminder={handleRemoveReminder} />
                  ))
              ) : (
                  <p className="notification">There is nothing to be displayed currently.</p>
              )}
          </div>
      </div>
  )
};

export default Reminderlist;