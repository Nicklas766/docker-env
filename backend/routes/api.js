import { Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const router = Router();
const jsonParser = bodyParser.json();

// setup mongoose
mongoose.connect('mongodb://mongodb:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (error) => console.log(error));
mongoose.connection.once('open', () => console.log('Success: connected to DB'));

const coffeeSchema = new mongoose.Schema({ name: String });
const Coffee = mongoose.model('Coffee', coffeeSchema);

// routes
router.post('/create', jsonParser, (req, res) => {
    const coffee = new Coffee({ name: req.body.name });

    coffee.save()
        .then(() => res.send('Success!'))
        .catch(() => res.sendStatus(500))
});

router.get('/fetch', (req, res) => {
    Coffee.find()
        .then(allCoffees => res.json(allCoffees))
        .catch(err => res.sendStatus(500))
});


export default router;