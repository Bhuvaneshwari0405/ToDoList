const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "EHB7U4gXVuCDTJXo"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://Bhuvaneshwari:<2EZ58X9llTeeNOtH>@todo.sj3hmth.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'Bhuvaneshwari',
        pass: '2EZ58X9llTeeNOtH'
    });
}

main().then(() => {
    console.log(`Connection Connected`);
}).catch(console.log);