import express from 'express';
import bodyParser from 'body-parser';
import feedbackRouter from './routes/feedback';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', feedbackRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
