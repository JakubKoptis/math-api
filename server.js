const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/add', (req, res) => {
  const numbers = req.query.numbers?.split(',').map(Number);
  if (!numbers || numbers.some(isNaN)) {
    return res.json({ error: 'Invalid input. Please provide a list of numbers.' });
  }
  const result = numbers.reduce((sum, num) => sum + num, 0);
  res.json({ result });
});

app.get('/sub', (req, res) => {
  const numbers = req.query.numbers?.split(',').map(Number);
  if (!numbers || numbers.some(isNaN)) {
    return res.json({ error: 'Invalid input. Please provide a list of numbers.' });
  }
  const result = numbers.reduce((diff, num) => diff - num);
  res.json({ result });
});

app.get('/mult', (req, res) => {
  const numbers = req.query.numbers?.split(',').map(Number);
  if (!numbers || numbers.some(isNaN)) {
    return res.json({ error: 'Invalid input. Please provide a list of numbers.' });
  }
  const result = numbers.reduce((prod, num) => prod * num, 1);
  res.json({ result });
});

app.get('/div', (req, res) => {
  const numbers = req.query.numbers?.split(',').map(Number);
  if (!numbers || numbers.some(isNaN)) {
    return res.json({ error: 'Invalid input. Please provide a list of numbers.' });
  }
  if (numbers.includes(0)) {
    return res.json({ error: 'Division by zero is not allowed.' });
  }
  const result = numbers.reduce((quot, num) => quot / num);
  res.json({ result });
});

app.get('/pow', (req, res) => {
  const numbers = req.query.numbers?.split(',').map(Number);
  if (!numbers || numbers.some(isNaN)) {
    return res.json({ error: 'Invalid input. Please provide a list of numbers.' });
  }
  const result = numbers.reduce((pow, num) => Math.pow(pow, num));
  res.json({ result });
});

app.get('/root', (req, res) => {
  const numbers = req.query.numbers?.split(',').map(Number);
  if (!numbers || numbers.length !== 2 || numbers.some(isNaN)) {
    return res.json({ error: 'Invalid input. Please provide exactly two numbers.' });
  }
  const [root, value] = numbers;
  if (value < 0 || root <= 0) {
    return res.json({ error: 'Invalid numbers for root operation.' });
  }
  const result = Math.pow(value, 1 / root);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
