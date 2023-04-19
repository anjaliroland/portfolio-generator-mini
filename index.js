const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: "What's your name?"
        },
        {
            type: 'input',
            name: 'location',
            message: "Where are you from?" 
        },
        {
            type: 'input',
            name: 'bio',
            message: "What would you like your bio to say?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your GitHub username?" 
        },
        {
            type: 'input',
            name: 'linkedin',
            message: "What is your LinkedIn username?"    
        }
    ])
    .then((ans) => {
        const htmlFile = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> ${ans.username}'s Portfolio</title>
</head>
<body style="box-sizing: border; margin: 0; padding:0; background-color: darkseagreen;">
    <header style="border-bottom: 8px solid grey;">
        <h1 style="color: white; font-size: 80px; display:flex; padding: 3px; justify-content: center;">${ans.username}</h1>
        <h3 style="color: white; justify-content:center; display: flex; font-size: 50px;">${ans.location}</h3>
    </header>
    <main>
        <h2 style="display: flex; color:aliceblue; font-size: 40px; margin-left: 200px">Bio</h2>
            <p style="color: aliceblue; display: flex; justify-content: center; font-size: 20px;">${ans.bio}</p>

        <h2 style="display: flex; color:aliceblue; font-size: 40px; margin-left: 200px">Contact</h2>
            <p  style="color: aliceblue; display: flex; justify-content: center; font-size: 20px;">Github Profile: <a href="https://www.github.com/${ans.github}">https://www.github.com/${ans.github}</a></p>
            <br>
            <p  style="color: aliceblue; display: flex; justify-content: center; font-size: 20px;">LinkedIn Profile: <a href="https://www.linkedin.com/in/${ans.linkedin}">https://www.linkedin.com/in/${ans.linkedin}</a></p>
    </main>
</body>
</html>
        `
        fs.writeFile(`${ans.username}.html`, htmlFile, (err) => {
            if (err) {
                throw err;
            } else {
                console.log('Success! Check in the folder for a new html file with your name!');
            }
        })
    });