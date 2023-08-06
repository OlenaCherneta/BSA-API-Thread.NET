import { expect } from "chai";
import { UsersController } from "../lib/controllers/users.controller";
import { AuthController } from "../lib/controllers/auth.controller";
import { checkStatusCode } from "../../helpers/functionsForChecking.helper";
/*

const users = new UsersController();
const auth = new AuthController();

xdescribe("Update user | with hooks", () => {
    let accessToken: string;
    let userDataBeforeUpdate, userDataToUpdate;

    before(`Login and get the token`, async () => {
        let response = await auth.login("alex.qa.test@gmail.com", "ATestsds2023!");
        checkStatusCode(response, 200);

        accessToken = response.body.token.accessToken.token;
    });

    it(`should return correct details of the currect user`, async () => {
        let response = await users.getCurrentUser(accessToken);
        checkStatusCode(response, 200);
        userDataBeforeUpdate = response.body;
    });

    it(`should update username using valid data`, async () => {
        // replace the last 3 characters of actual username with random characters.
        // Another data should be without changes
        function replaceLastThreeWithRandom(str: string): string {
            return str.slice(0, -3) + Math.random().toString(36).substring(2, 5);
        }

        userDataToUpdate = {
            id: userDataBeforeUpdate.id,
            avatar: userDataBeforeUpdate.avatar,
            email: userDataBeforeUpdate.email,
            userName: replaceLastThreeWithRandom(userDataBeforeUpdate.userName),
        };

        let response = await users.updateUser(userDataToUpdate, accessToken);
        checkStatusCode(response, 204);
    });

    it(`should return correct user details by id after updating`, async () => {
        let response = await users.getUserById(userDataBeforeUpdate.id);
        checkStatusCode(response, 200);
        expect(response.body).to.be.deep.equal(userDataToUpdate, "User details isn't correct");
    });

    afterEach(() => {
        console.log("it was a test");
    });
});
*/