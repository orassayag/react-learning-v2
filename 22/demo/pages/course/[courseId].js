// our-domain.com/course/something-important
import { useRouter } from 'next/router';

const DetailsPage = () => {
    const router = useRouter();
    const courseId = router.query.courseId;
    // Send a request to the backend API
    // to fetch the course item with
    // the courseId.
    return (
        <h1>The Details Page</h1>
    );
};

export default DetailsPage;