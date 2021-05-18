// our-domain.com/some-meetup-name
import { Fragment } from 'react';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>{props.data.title}</title>
                <meta name="description" content={props.data.description} />
            </Head>
            <MeetupDetails
                image={props.data.image}
                title={props.data.title}
                address={props.data.address}
                description={props.data.description}
            />
        </Fragment>
    );

    /*     return (
            <MeetupDetails
                image="https://officechai.com/wp-content/uploads/2015/05/Cyberecture-egg-shaped-building-mumbai.jpg"
                title="A First Meetup"
                address="Some Street 5, Some City"
                description="The is a first meetup"
            />
        ); */
};

export const getStaticPaths = async () => {
    // Fetch data for a map all available IDs.
    const client = await MongoClient.connect('mongodb+srv://orassayag:ODCxia2kXcDvTOR6mTfy@cluster0.efrzw.mongodb.net/meetups?retryWrites=true&w=majority', { useUnifiedTopology: true });
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
        /*         paths: [
                    {
                        params: {
                            meetupId: 'm1'
                        }
                    },
                    {
                        params: {
                            meetupId: 'm2'
                        }
                    }
                ] */
    }
};

export const getStaticProps = async (context) => {
    // Fetch data for a single meetup.
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://orassayag:ODCxia2kXcDvTOR6mTfy@cluster0.efrzw.mongodb.net/meetups?retryWrites=true&w=majority', { useUnifiedTopology: true });
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            data: {
                id: meetup._id.toString(),
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description
            }
        }
    };
    /*     const meetupId = context.params.meetupId;
        return {
            props: {
                data: {
                    id: 'm1',
                    image: 'https://officechai.com/wp-content/uploads/2015/05/Cyberecture-egg-shaped-building-mumbai.jpg',
                    title: 'A First Meetup',
                    address: 'Some Street 5, Some City',
                    description: 'The is a first meetup'
                }
            }
        } */
};

export default MeetupDetailsPage;