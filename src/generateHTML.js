const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const templateCard = `
<div class="row" style="display: flex; padding: 20px;">
    <div class="card text-center" style="width: 40%;">
        <h5 class="card-title" style="width: 100%;">
            Title
        </h5>
        <div class="card-body">
            <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>            
        </div>
    </div>
</div>
`;

const generateHTML = (teamArray) => 
`
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <h1 class="display-5" href="#">Team Profile</h1>
                </div>
            </nav>

            ${generateTeamCards(teamArray)}
        </body>
    </html>
`;

const generateTeamCards = (teamArray) => {
    console.log("Generating team cards...")
    var cardsHTML = '';

    teamArray.forEach(element => {
        console.log(element instanceof Manager);
        cardsHTML = cardsHTML.concat("-");

        if(element instanceof Manager){
            cardsHTML = cardsHTML.concat(generateManagerCard(element));
        }else if(element instanceof Engineer){
            cardsHTML = cardsHTML.concat(generateEngineerCard(element));
        }else if(element instanceof Intern){
            cardsHTML = cardsHTML.concat(generateInternCard(element));
        }else{
            throw("ERROR: Unkown type provided. Please check teamArray.")
        }
    });

    console.log(cardsHTML)
}

const generateManagerCard = (manager) => {
    
}


module.exports = generateHTML;