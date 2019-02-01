console.log("before");
console.log("after");

getProfile(1)
    .then(user => getRepo(user.githubUsername))
    .then(repo => getCommits(repo[0]))
    .then(commits => getCommits(commits[0]))
    .catch(err => console.log(err.message));


function getProfile(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading database from user");
            resolve({"id": id , "githubUsername": "pdrojack"});
        },2000);
    });    
};

function getRepo(username){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Getting repos of ${username}`);
           resolve(['repo1','repo2','repo3']);
        },2000);
    });
};

function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Getting user commits for ${repo}`);
            resolve(['commit1','commit2','commit3']);
        },2000);
    });
};