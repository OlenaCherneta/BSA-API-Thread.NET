import { checkResponseTime, checkStatusCode } from "../../helpers/functionsForChecking.helper";
import { AuthController } from "../lib/controllers/auth.controller";
const auth = new AuthController();

/*
xdescribe("Without test data set for login", () => {
    it(`should not login using invalid credentials email: 'alex.qa.test@gmail.com', password: ''`, async () => {
        let response = await auth.login("alex.qa.test@gmail.com", "");

        checkStatusCode(response, 401);
        checkResponseTime(response, 3000);
    });

    it(`should not login using invalid credentials email: 'alex.qa.test@gmail.com', password: '      '`, async () => {
        let response = await auth.login("alex.qa.test@gmail.com", "      ");

        checkStatusCode(response, 401);
        checkResponseTime(response, 3000);
    });

    it(`should not login using invalid credentials email: 'alex.qa.test@gmail.com', password: '  ATest2023!'`, async () => {
        let response = await auth.login("alex.qa.test@gmail.com", "  ATest2023!");

        checkStatusCode(response, 401);
        checkResponseTime(response, 3000);
    });

    it(`should not login using invalid credentials email: 'alex.qa.test@gmail.com', password: 'ATest 2021'`, async () => {
        let response = await auth.login("alex.qa.test@gmail.com", "ATest 2023!");

        checkStatusCode(response, 401);
        checkResponseTime(response, 3000);
    });

    it(`should not login using invalid credentials email: 'alex.qa.test@gmail.com', password: 'alex.qa.test@gmail.com'`, async () => {
        let response = await auth.login("alex.qa.test@gmail.com", "alex.qa.test@gmail.com");

        checkStatusCode(response, 401);
        checkResponseTime(response, 3000);
    });
});
*/