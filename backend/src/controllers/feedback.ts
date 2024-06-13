let feedbackEntries: { name: string, feedback: string }[] = [];

export const getFeedback = (req :any, res:any)=>{
        res.json(feedbackEntries);
}

export const addFeedback = (req: any, res: any ) =>{
    const { name, feedback } = req.body;
    if (name && feedback) {
        feedbackEntries.push({ name, feedback });
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } else {
        res.status(400).json({ message: 'Invalid input ' });
    }
}




