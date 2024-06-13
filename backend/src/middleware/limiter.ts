import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 10 * 1000, 
  max: 1,
  message: 'Too many requests, please try again later.'
});

