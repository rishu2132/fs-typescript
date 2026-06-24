import patientData from '../../data/patients.ts';
import type { Patient,NoSSN } from '../../types.ts';

const getPatients = ():Patient[] => {
    return patientData;
};

const getNonSensitveInfo = ():NoSSN[] => {
    return patientData.map(({id,name,dateOfBirth,gender,occupation}) =>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getPatients,
    getNonSensitveInfo
};