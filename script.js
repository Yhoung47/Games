// Get to DOM Elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// Loop Through Each Option Image Element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "wait...";

        // Loop through each option image again
        optionImages.forEach((image2,index2) => {
            // console.log(index, index2);
            // if the current index doesn't match the click index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

        // Get the source of the clicked option image
        let imageSRC = e.target.querySelector("img").src;
        // set the user image to the clicked option image
        userResult.src = imageSRC;
       // console.log(imageSRC)

       // generate a random number between 0 and 2
       let randomNumber = Math.floor(Math.random() * 3);
       // console.log(randomNumber);
       // create an array of CPU image option
       let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
       // set the CPU image to a random option from the array
       cpuResult.src = cpuImages[randomNumber];

       // Assign a letter value to the CPU option (R for Rock, P for Paper, S for Scissors)
       let cpuValue = ["R","P","S"][randomNumber];
       // Assign a letter value to the clicked option (based on index)
       let userValue = ["R","P","S"][index];

       // Create an object with all possible outcomes
       let outcomes = {
           RR: "Draw",
           RP: "Cpu",
           RS: "User",
           PP: "Draw",
           PR: "User",
           PS: "CPU",
           SS: "Draw",
           SR: "CPU",
           SP: "User",
       };

       // Look up the outcome value based on user and CPU options
       let outComeValue = outcomes[userValue + cpuValue];

       //Display the result
       result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

       // console.log(cpuValue, userValue);
        },2500)
        
    });
});