import React from 'react';


interface FeedbackListProps {
  feedback: { name: string, feedback: string }[];
  error: string;
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedback, error }) => {
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {feedback.length > 0 ? (
        feedback.map((entry, index) => (
          <div key={index} className="feedback-entry">
            <h4>{entry.name}</h4>
            <p>{entry.feedback}</p>
          </div>
        ))
      ) : (
        <p>No feedback entries yet.</p>
      )}
    </div>
  );
};

export default FeedbackList;
