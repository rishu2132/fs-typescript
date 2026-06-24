import express,{type Response} from 'express';
import patientService from '../services/patientService.ts';
import type { NoSSN } from '../../types.ts';

const router = express.Router();

router.get('/', (_req,res: Response<NoSSN[]>) => {
    const data = patientService.getNonSensitveInfo();
    res.send(data);
});

export default router;