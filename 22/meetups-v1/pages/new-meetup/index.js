// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

    const addMeetupHandler = async (data) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST'
        });
    };

    return (
        <NewMeetupForm
            onAddMeetup={addMeetupHandler}
        />
    );
};

export default NewMeetupPage;