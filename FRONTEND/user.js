
const topNav = document.querySelector("div.top-bar")
let currentUser;

// ------------------------------------------------ top nav bar event listener
topNav.addEventListener('click', (evt) => {
    mainBody.innerText = ''
        if (evt.target.id == "cart"){console.log("clicked cart")}
        else if (evt.target.id == "login"){console.log("clicked login")}
        else if (evt.target.id == "signup"){createUser()}
        else {console.log("hello")}
})


// ------------------------------------------------ create user

let createUser = () => {

    const formContainer = document.querySelector("div#sign-up-form");

    let signUpForm = document.createElement('form'); // Create New Element Form
    // signUpForm.setAttribute("action", ""); // Setting Action Attribute on Form
    // signUpForm.setAttribute("method", "post"); // Setting Method Attribute on Form
    formContainer.appendChild(signUpForm);
    
    let heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = "Create an account";
    signUpForm.appendChild(heading);
    
    let line = document.createElement('hr'); // linebreak
    signUpForm.appendChild(line);
    
    let linebreak = document.createElement('br'); // space
    signUpForm.appendChild(linebreak);
    
    let nameLabel = document.createElement('label'); // Full Name label
    nameLabel.innerHTML = "Full Name: ";
    signUpForm.appendChild(nameLabel);
    
    let nameInput = document.createElement('input'); // Full Name input
    nameInput.id = "fullname"
    signUpForm.appendChild(nameInput);
    
    let linebreak1 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak1);
    
    let usernameLabel = document.createElement('label'); // Username label
    usernameLabel.innerHTML = "Username: "; // 
    signUpForm.appendChild(usernameLabel);
    
    let userNameInput = document.createElement('input'); // Username input
    userNameInput.id = "username"
    signUpForm.appendChild(userNameInput);

    let linebreak2 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak2);

    let address1 = document.createElement('label'); // street address 1 label
    address1.innerHTML = "Street address 1: ";
    signUpForm.appendChild(address1);
    
    let address1Input = document.createElement('input'); // street address 1 input
    address1Input.id = "street-1"
    signUpForm.appendChild(address1Input);
    
    let linebreak3 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak3);
    
    let address2 = document.createElement('label'); // street address 2 label
    address2.innerHTML = "Street address 2: ";
    signUpForm.appendChild(address2);
    
    let address2Input = document.createElement('input'); // street address 1 input
    address2Input.id = "street-2"
    signUpForm.appendChild(address2Input);

    let linebreak4 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak4);
    
    let cityLabel = document.createElement('label'); // city label
    cityLabel.innerHTML = "City: ";
    signUpForm.appendChild(cityLabel);
    
    let cityInput = document.createElement('input'); // city input
    cityInput.id = "city"
    signUpForm.appendChild(cityInput);

    let linebreak5 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak5);
    
    let zipcodeLabel = document.createElement('label'); // zip code label
    zipcodeLabel.innerHTML = "Zip code:";
    signUpForm.appendChild(zipcodeLabel);
    
    let zipcodeInput = document.createElement('input'); // zip code input
    zipcodeInput.id = "zipcode"
    signUpForm.appendChild(zipcodeInput);

    let linebreak6 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak6);
    
    let emailLabel = document.createElement('label'); // email label
    emailLabel.innerHTML = "Email: ";
    signUpForm.appendChild(emailLabel);
    
    let emailInput = document.createElement('input'); // email input
    emailInput.id = "email"
    signUpForm.appendChild(emailInput);
    
    let linebreak8 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak8);

    let lastline = document.createElement('hr'); // linebreak
    signUpForm.appendChild(lastline);

    let linebreak9 = document.createElement('br'); // space
    signUpForm.appendChild(linebreak9);
    
    let submitBtn = document.createElement('input'); // Append Submit Button
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("name", "dsubmit");
    submitBtn.setAttribute("value", "Submit");
    signUpForm.appendChild(submitBtn);


    mainBody.append(formContainer)

    // submit form event listener //
    signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()
        let newName = event.target["fullname"].value
        let newUsername = event.target["username"].value
        let newStreet1 = event.target["street-1"].value
        let newStreet2 = event.target["street-2"].value
        let newCity = event.target["city"].value
        let newZip = parseInt(event.target["zipcode"].value)
        let newEmail = event.target["email"].value
    

        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                username: newUsername,
                street_address: newStreet1,
                street_address_2: newStreet2,
                city: newCity,
                zip_code: newZip,
                email: newEmail
            })
        })
        .then(res => res.json())
        .then((newUserObj) =>{
            currentUser = newUserObj  //becomes the current user set in global var
            console.log(currentUser)
        })
        event.target.reset()
    })// end of form event listener
} //end of create user method





// ------------------------------------------------ log in user



