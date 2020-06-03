import React from 'react';
import {render} from '@testing-library/react';
import Job from '../view/dashboard/jobsearchcomponents/Job.jsx';

test.skip('tests if the job renders', async = () => {

    const trialjob = {
        id: 43643532,
        title: 'software testing',
        description: 'test software',
        company: 'software testing company',
        location: 'west coast'
    };

    const { getByText } = render(<Job props={trialjob} />);

    const title = getByText(/software testing/i);
    const description = getByText(/test software/i);
    const company = getByText(/software testing company/i);
    const location = getByText(/west coast/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(location).toBeInTheDocument();
})