import React from 'react';

const SavedJob = props => {
  const { job } = props;
  
  return(
    <div>
      <p>{job.title}</p>
      <p>{job.company}</p>    
      <p>{job.location_city}</p>  
      <p>{job.date_published}</p>
    </div>
  );
};

export default SavedJob;
