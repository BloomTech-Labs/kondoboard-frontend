import React from 'react';
import renderer from 'react-test-renderer';
import JobService from './JobsServices';
jest.mock('./JobServices')

test('list length of jobs should be 10', () => {
    expect.assertions(1);
    return JobService.fetchJobsList()
        .then(response => {
            expect(response.data.jobs.length).toBe(10);
        })

})