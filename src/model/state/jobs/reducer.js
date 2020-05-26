import * as Actions from './action.js';

const initialState = {
    jobList: [
        {
            title: 'Junior Software Engineer',
            description: 'Looking for a front end programmer who can use Angular or React',
            location: 'Denver',
            company: 'Slack',
            estimated_pay: '$80,000', 
            post_date: '5/12/2020',
            skills: 'HTML5, CSS3, JavaScript, React, Angular, Node, AWS',
            url: 'google.com'
          },
          {
            title: 'Software Engineer - Senior',
            description: 'We need a full stack programmer, who can build web apps on AWS',
            location: 'San Francisco',
            company: 'Okta',
            estimated_pay: '$120,000',
            post_date: '5/15/2020',
            skills: 'JavaScript, React, Node, AWS',
            url: 'google.com'
          },
          {
            title: 'Data Science Engineer',
            description: 'We need someone to direct our machine learning algorithim in the right direction',
            location: 'Seattle',
            company: 'Amazon',
            estimated_pay: '$180,000',  
            post_date: '5/19/2020',
            skills: 'Python, Java, C++, AI',
            url: 'google.com'
          },
    ],
    job: {

    }
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}