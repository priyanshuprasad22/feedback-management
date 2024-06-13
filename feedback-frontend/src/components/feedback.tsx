import React, { useState } from 'react';
import axios from 'axios';

interface FeedbackFormProps {
  onNewFeedback: (newFeedback: { name: string, feedback: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onNewFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/feedback', { name, feedback }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      onNewFeedback({ name, feedback });
      setName('');
      setFeedback('');
      setError('');
    } catch (err: any) {
      if (err.response) {
        if(err.response.status==429){
          setError('You are submitting feedback too quickly. Please wait a few seconds and try again.');
        }else{
          setError(`Request failed with status code ${err.response.status}`);
        }
      } else if (err.request) {
        setError('No response received from the server');
      } else {
        setError('Error in setting up the request');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default FeedbackForm;
