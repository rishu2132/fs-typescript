import express from 'express';
import diagnosisRouter from './routes/diagnosisRouter.ts';
import patientRouter from './routes/patientsRouter.ts';
const app = express();
app.use(express.json());

app.get('/api/ping', (_req,res) => {
    res.send('ping');
});

app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});