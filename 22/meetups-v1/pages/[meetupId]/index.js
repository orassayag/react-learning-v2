// our-domain.com/some-meetup-name
import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = () => {

    return (
        <MeetupDetails
            image="https://officechai.com/wp-content/uploads/2015/05/Cyberecture-egg-shaped-building-mumbai.jpg"
            title="A First Meetup"
            address="Some Street 5, Some City"
            description="The is a first meetup"
        />
    );
};

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
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
        ]
    }
};

export const getStaticProps = async (context) => {
    // Fetch data for a single meetup.
    const meetupId = context.params.meetupId;
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
    }
};

export default MeetupDetailsPage;