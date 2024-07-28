import { MongoClient, ServerApiVersion } from 'mongodb';
var uri = "mongodb://localhost:27017" ;

export default async function dbConnect() {
    const client = new MongoClient(uri as string, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: false, 
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        return client;
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
    }
}