// api/new-meetup
// Only POST requests.
import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        /*         const { title, image, address, descriotion } = data; */
        const client = await MongoClient.connect('mongodb+srv://orassayag:ODCxia2kXcDvTOR6mTfy@cluster0.efrzw.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'Meetup inserted! ' });
    }
};

export default handler;