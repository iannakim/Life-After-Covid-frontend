
let currentUser;
const formContainer = document.querySelector("div#sign-up-form")


// ------------------------------------------------ create user

let showSignUpForm = () => {
    categoryNameh1.innerText = ''
    mainBody.innerText = ''
    mainBody.className = ''


    let signUpForm = document.createElement('form'); // Create New Element Form
        signUpForm.className ='sign-up-form'
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
    
    let submitBtn = document.createElement('button'); // Append Submit Button
    submitBtn.type = "submit"
    submitBtn.className = "btn btn-primary btn-lg"
    submitBtn.id = 'sign-up-button'
    submitBtn.innerText = "Create Account"
    signUpForm.appendChild(submitBtn);


    mainBody.append(formContainer)
    signUpForm.addEventListener('submit', handleSignUpForm)
    
}

    let handleSignUpForm = (event) => {
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
        .then((newUser) =>{
            checkIfCartExists(newUser)
            currentUser = newUser 
            renderLogoPage()
        })
        event.target.reset()
    }// end of handleSignUpForm






// ------------------------------------------------ log in user


let showLoginForm = () => {
    categoryNameh1.innerText = ''


    let logInForm = document.createElement('form'); // Create New Element Form
    formContainer.appendChild(logInForm);
    
    let heading = document.createElement('h2'); // Heading of Form
        heading.id = 'headerLogIn'
        heading.innerText = "Welcome Back";
        logInForm.appendChild(heading);
    
    let linebreak = document.createElement('br'); // space
        logInForm.appendChild(linebreak);

    let usernameLabel = document.createElement("label")
        usernameLabel.innerText = "Username "
        logInForm.appendChild(usernameLabel);

    let usernameInput = document.createElement("input")
        usernameInput.type = "text"
        usernameInput.id = "username"
        usernameInput.placeholder = " Enter Username"
        usernameInput.autocomplete = "off"
        logInForm.appendChild(usernameInput);

    let linebreak1 = document.createElement('br'); // space
        logInForm.appendChild(linebreak1);
    
    
    let linebreak3 = document.createElement('br'); // space
        logInForm.appendChild(linebreak3);
    
    let submitButton = document.createElement('button')
        submitButton.type = "submit"
        submitButton.className = "btn btn-primary btn-lg"
        submitButton.id = 'login-button'
        submitButton.innerText = "Log in"
        logInForm.append(submitButton)

    let noaccount = document.createElement('div'); // don't have an account? 
        noaccount.className = 'no-account'
        noaccount.innerHTML = "Don't have an account? Please Sign Up"
        logInForm.appendChild(noaccount);
  
    mainBody.append(formContainer)
    logInForm.addEventListener("submit", handleLoginForm)

}   

let handleLoginForm = (evt) => {
    evt.preventDefault()
    let userLoggingIn = evt.target["username"].value

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            username: userLoggingIn
        })
    })
        .then(res => res.json())
        .then(user => {
 
            if(user.id){
                console.log(user)
                currentUser = user;
                checkIfCartExists(currentUser)
                renderLogoPage()
                
                let logIn = document.querySelector("a#login.category")
                    logIn.remove()
                let signUp = document.querySelector("a#signup.category")
                    signUp.remove()
                let loggedInUser = document.querySelector("a#namehere.category")
                    loggedInUser.innerText = `Hello, ${currentUser.name}!`
                let logOut = document.querySelector("a#logout.category")
                    logOut.innerText = "Log out"


            } else {
                alert("Username Not Found. Please try again.")
            }
        })
        evt.target.reset()
}
