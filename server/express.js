import express from 'express';
import { client } from './pg.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.port || 3000;
app.use(express.static('Client'));

app.use(express.json());

app.use(
	cors({
		origin: '*',
	})
);

app.get('/truth', async (req, res) => {
	try {
		const result = await client.query('SELECT * FROM truths');
		res.json(result.rows);
	} catch (error) {
		console.error(`error retrieving tasks ${error.message}`);
	}
});

app.get('/dare', async (req, res) => {
	try {
		const result = await client.query('SELECT * FROM dares');
		res.json(result.rows);
	} catch (error) {
		console.error(`error retrieving tasks ${error.message}`);
	}
});

app.get('/wyr', async (req, res) => {
	try {
		const result = await client.query('SELECT * FROM wyrs');
		res.json(result.rows);
	} catch (error) {
		console.error(`error retrieving tasks ${error.message}`);
	}
});

app.get('/nhie', async (req, res) => {
	try {
		const result = await client.query('SELECT * FROM nhies');
		res.json(result.rows);
	} catch (error) {
		console.error(`error retrieving tasks ${error.message}`);
	}
});

app.get('/paranoia', async (req, res) => {
	try {
		const result = await client.query('SELECT * FROM paranoias');
		res.json(result.rows);
	} catch (error) {
		console.error(`error retrieving tasks ${error.message}`);
	}
});

app.use((req, res) => {
	res.status(404).type('text/plain').send('Not found');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
