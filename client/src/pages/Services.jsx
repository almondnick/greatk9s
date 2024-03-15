import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SITTING, ADD_TRAINING } from '../utils/mutations';

const Services = () => {
  const [formState, setFormState] = useState({
    date: '',
    time: '',
    comments: '',
    appointmentStartDate: '',
    appointmentEndDate: '',
    startTime: '',
    endTime: ''
  });
  const [addTrainingMutation] = useMutation(ADD_TRAINING);
  const [addSittingMutation] = useMutation(ADD_SITTING);

  const handleAddTraining = async () => {
    try {
      const { data } = await addTrainingMutation({
        variables: {
          date: formState.date,
          time: formState.time,
          comments: formState.comments
        }
      });
      console.log('New training added:', data.addTraining);
      setFormState({ date: '', time: '', comments: '' });
    } catch (error) {
      console.error('Error adding training:', error);
    }
  };

  const handleAddSitting = async () => {
    try {
      const { data } = await addSittingMutation({
        variables: {
          appointmentStartDate: formState.appointmentStartDate,
          appointmentEndDate: formState.appointmentEndDate,
          startTime: formState.startTime,
          endTime: formState.endTime,
          comments: formState.comments
        }
      });
      console.log('New sitting added:', data.addSitting);
      setFormState({
        appointmentStartDate: '',
        appointmentEndDate: '',
        startTime: '',
        endTime: '',
        comments: ''
      });
    } catch (error) {
      console.error('Error adding sitting:', error);
    }
  };

      
      

   return (
    <div>
      <h2>Add Training</h2>
      <form onSubmit={handleAddTraining}>
        <input
          type="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
          required
        />
        <input
          type="time"
          value={formState.time}
          onChange={(e) => setFormState({ ...formState, time: e.target.value })}
          required
        />
        <textarea
          value={formState.comments}
          onChange={(e) => setFormState({ ...formState, comments: e.target.value })}
        />
        <button type="submit">Add Training</button>
      </form>
      </div>
      /*<main>
        <div>
          <h1>Services!</h1>
        </div>
      </main>*/
    );
  };
  export default Services;
  