/** @format */

const { faker } = require("@faker-js/faker");
const User = require("./model");

async function createDemoUser(userNo = 5) {
    for (let i = 0; i < userNo; i++) {
        let sex = faker.person.sexType();
        let firstName = faker.person.firstName(sex);
        let lastName = faker.person.lastName(sex);
        let email = faker.internet.email({ firstName, lastName });

        const user = new User({
            _id: faker.string.uuid(),
            avatar: faker.image.avatar(),
            birthday: faker.date.birthdate(),
            email: email,
            firstName: firstName,
            lastName: lastName,
            sex: sex,
        });
        await user.save();
    }
}

module.exports = createDemoUser;
