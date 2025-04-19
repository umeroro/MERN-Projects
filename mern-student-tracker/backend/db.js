const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://barterweb:barterweb@cluster0.ukaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log('DataBase is connected');
        return client.db('MernDB');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;