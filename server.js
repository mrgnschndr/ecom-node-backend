const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors({}));
const { faker } = require("@faker-js/faker");

// app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.URL}:${process.env.PORT}`);
})

app.get('/users', (req, res) => {
    let userArray = [];
    for (let i = 0; i < 100; i++) {
        userArray[i] = {
            name_first: faker.person.firstName(),
            name_last: faker.person.lastName(),
            email: faker.internet.email({ firstName: name_first, lastName: name_last }),
            password: faker.internet.password(),
            phone_number: faker.phone.number(),
            date_of_birth: faker.date.birthdate(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
            postal_code: faker.location.zipCode(),
            role: faker.person.jobTitle(),
            profile_picture_url: faker.image.avatar(),
            created_at: faker.date.past(),
            updated_at: faker.date.recent()
        }
    }
    res.json(userArray);
})