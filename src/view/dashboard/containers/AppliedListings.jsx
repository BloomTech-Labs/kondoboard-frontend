import React from 'react';
import AppliedJobList from '@dashboard/appliedjobs/AppliedJobList.jsx';



const AppliedJobListings = () => {
    return(
        <div className='applied-listings'>
            <AppliedJobList />
            <div style={{width: '20%'}} />  {/* Filter Menu Goes Here */}
        </div>
    )
}

export default AppliedJobListings;