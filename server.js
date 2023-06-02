const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');

// Connect to MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/mern-counter', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Create Counter schema and model
const counterSchema = new mongoose.Schema({
    value: {
        type: Number,
        default: 0,
    },
});

const Counter = mongoose.model('Counter', counterSchema);

// Configure CORS
app.use(cors())

// Create API routes
app.get('/api/counter', async (req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
            counter = new Counter();
            await counter.save();
        }
        res.json(counter);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.post('/api/counter/increment', async (req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
            counter = new Counter();
        }
        counter.value++;
        await counter.save();
        res.json(counter);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.post('/api/counter/decrement', async (req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
            counter = new Counter();
        }
        counter.value--;
        await counter.save();
        res.json(counter);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});


// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));