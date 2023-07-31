import inquirer from 'inquirer';

inquirer.prompt([{
    type: 'number',
    name: 'numWords',
    message: "How many words do you want in your band name?",
    default: 3
},
{
    type: 'list',
    name: 'animationName',
    message: "Which animation do you want to use?",
    choices: ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke'],
    default: "rainbow"
},
    // questions
]).then((answers) => {
    console.log(answers)
    
    // const randomSlug = generateSlug(answers.numWords, {
    //     format: 'title'
    // })

    // const animation = answers.animationName
    // chalkAnimation[animation](randomSlug)
}).catch((err) => {
    console.log(err)
})

// console.log(inquirer)