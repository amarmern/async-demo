console.log('Before');

//Promise based approach
// getUser(1)
// .then(user => getRepositories(user.gitHubUsername))
// .then(repos => getCommits(repos[0]))
// .then(commits => console.log('Commits' ,commits))
// .catch(err => console.log(err.message))

//Asyc and await based approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.getRepositories);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log('Error',error.message);
    }
   
}
displayCommits();
console.log('After');

function getUser(id, ) {
    return new Promise((resolve) =>{
        setTimeout(() => {
    console.log('Reading a user from a database...');
    resolve({ id: id, gitHubUsername: 'mosh' });
  }, 2000);
    })
  
}

function getRepositories(username) {
    return new Promise((resolve ,reject ) =>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            //resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the repos.'));
          }, 2000);
    })
  
}

function getCommits(repo) {
    return new Promise((resolve,reject ) =>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);
    })
  
}