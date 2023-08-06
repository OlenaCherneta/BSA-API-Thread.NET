import {
    checkResponseTime,
    checkStatusCode, 
} from '../../helpers/functionsForChecking.helper';
import { AuthController } from '../lib/controllers/auth.controller';
const auth = new AuthController();

/*
describe('Use test data set for login', () => {
    let invalidCredentialsDataSet = [
        { email: 'alex.qa.test@gmail.com', password: '' },
        { email: 'alex.qa.test@gmail.com', password: '      ' },
        { email: 'alex.qa.test@gmail.com', password: 'ATest2023! ' },
        { email: 'alex.qa.test@gmail.com', password: 'ATest 2021' },
        { email: 'alex.qa.test@gmail.com', password: 'admin' },
        { email: 'alex.qa.test@gmail.com', password: 'alex.qa.test@gmail.com' },
    ];

    invalidCredentialsDataSet.forEach((credentials) => {
        it(`should not login using invalid credentials : '${credentials.email}' + '${credentials.password}'`, async () => {
            let response = await auth.login(credentials.email, credentials.password);

            checkStatusCode(response, 401); 
            checkResponseTime(response, 3000);
        });
    });
});

*/