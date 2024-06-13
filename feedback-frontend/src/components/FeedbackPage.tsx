import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from './feedback';
import FeedbackList from './feedbacklist';


const FeedbackPage: React.FC = () => {
  const [feedback, setFeedback] = useState<{ name: string, feedback: string }[]>([]);
  const [error, setError] = useState('');

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/feedback');
      setFeedback(response.data);
      setError('');
    } catch (err: any) {
      if (err.response) {
        setError(`Request failed with status code ${err.response.status}`);
      } else if (err.request) {
        setError('No response received from the server');
      } else {
        setError('Error in setting up the request');
      }
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleNewFeedback = (newFeedback: { name: string, feedback: string }) => {
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div className="container">
      <h1>Feedback Management System</h1>
      <FeedbackForm onNewFeedback={handleNewFeedback} />
      <FeedbackList feedback={feedback} error={error} />
    </div>
  );
};

export default FeedbackPage;
