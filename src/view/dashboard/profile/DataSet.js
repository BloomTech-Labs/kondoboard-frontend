export const dataSet = [];

// key words to use in search ['applies to all', 'first specific', 'second specific', etc...]
dataSet['Web'] = ['Software Engineer Developer Web', 'Full Stack', 'Front End', 'Back End', 'Dev Ops'];
dataSet['DS'] = ['Data Software', 'Engineer', 'Analyst', 'Python', 'Scientist'];
dataSet['UX'] = ['UX UI', 'Designer', 'Engineer', 'Content Strategist', 'Researcher Analyst'];
dataSet['iOS'] = ['iOS Mobile Application App', 'Developer'];

// suggested skills based on selected track. Second dimmension of array must match exactly, its corresponding value in ['display']['track']['value']
// when value is the track, i.e ['skills']['web'] these are universal, and apply to all sub options in that track. Do not duplicate those skills.
// all skills which are added to here must match case and spelling in SkillList.js
dataSet['skills'] = [];
dataSet['skills']['Web'] = ['Javascript', 'Git'] /* applies to all web - do not overlap these into any other sub category */
dataSet['skills']['Full Stack Developer'] = ['HTML', 'CSS', 'LESS', 'SCSS', 'Node.js', 'Ruby', 'React.js', 'Angular', 'Vue', '.NET', 'MySQL', 'PostgreSQL', 'Python', 'JQuery', 'Apache', 'Nginx', 'Express.js', 'Deno', 'PHP']; /* applies to full stack developer, etc..*/
dataSet['skills']['Front End Developer'] = ['HTML', 'CSS', 'LESS', 'SCSS', 'React.js', 'Angular', 'Vue', 'PHP'];
dataSet['skills']['Back End Developer'] = ['Node.js', 'Express.js', '.NET', 'Python', 'MySQL', 'PostgreSQL', 'ArangoDB', 'MongoDB', 'SQL'];
dataSet['skills']['Dev Ops Engineer'] = ['AWS', 'Python', 'Linux Administration', 'Firebase', 'MySQL', 'Node.js', '.NET', 'Ruby', 'Docker', 'Azure', 'Kubernetes']


// DS skills must be refined to each specific option, consult a DS instructor or student when possible to help clarify.
dataSet['skills']['DS'] = ['Python', 'R', 'SQL', 'NoSQL', 'Pandas', 'NumPy', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Flask', 'FastAPI', 'Statistics', 'Machine Learning', 'AWS', 'Git', 'Gradient Boosting', 'Tree Ensembles'];
dataSet['skills']['Data Engineer'] = [];
dataSet['skills']['Data Analyst'] = [];
dataSet['skills']['Python Engineer'] = [];
dataSet['skills']['Data Scientist'] = [];


// ['display']['track']['value']
// user track for display on page. index 0 must be empty string, this matches the 'op' value in SuggestedSkills.jsx form to index of array, starting at 1. 
dataSet['display'] = []; 
dataSet['display']['Web'] = ['', 'Full Stack Developer', 'Front End Developer', 'Back End Developer', 'Dev Ops Engineer'];
dataSet['display']['DS'] = ['', 'Data Engineer', 'Data Analyst', 'Python Engineer', 'Data Scientist'];
dataSet['display']['UX'] = ['', 'UX Designer', 'UX Engineer', 'Content Strategist', 'UX Reasearcher / Analyst'];
dataSet['display']['iOS'] = ['', 'iOS Developer'];