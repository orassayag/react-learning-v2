// our-domain.com/course
import { Fragment } from 'react';
import Link from 'next/link';

const CoursePage = () => {
    return (
        <Fragment>
            <h1>The Course Page</h1>
            <ul>
                <li><Link href="/course/nextjs-ia-a-great-framework">Next.js Is A Great Framework</Link></li>
                <li>Something Else</li>
            </ul>
        </Fragment>
    );
};

export default CoursePage;