
const topNav = document.querySelector("div.top-bar")

// top nav bar event listener
topNav.addEventListener('click', (evt) => {
    mainBody.innerText = ''
        if (evt.target.id == "cart"){console.log("clicked cart")}
        else if (evt.target.id == "login"){console.log("clicked login")}
        else if (evt.target.id == "signup"){console.log("clicked signup")}
        else {console.log("hello")}
})


// create user

let createUser = () => {


    mainBody.append



}



// handle login










let formContainer = document.querySelector("#sign-up-form");

let signUpForm = document.createElement('form'); // Create New Element Form
signUpForm.setAttribute("action", ""); // Setting Action Attribute on Form
signUpForm.setAttribute("method", "post"); // Setting Method Attribute on Form
formContainer.appendChild(signUpForm);

let heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Create an account";
signUpForm.appendChild(heading);

let line = document.createElement('hr'); // Giving Horizontal Row After Heading
signUpForm.appendChild(line);

let linebreak = document.createElement('br');
signUpForm.appendChild(linebreak);

let namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
signUpForm.appendChild(namelabel);

let inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
signUpForm.appendChild(inputelement);

let linebreak = document.createElement('br');
signUpForm.appendChild(linebreak);

let usernamelabel = document.createElement('label'); // Create Label for Address Field
usernamelabel.innerHTML = "User Name : "; // Set Field Labels
signUpForm.appendChild(usernamelabel);

let inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "usrname");
signUpForm.appendChild(inputelement);

let linebreak = document.createElement('br');
signUpForm.appendChild(linebreak);

let doblabel = document.createElement('label'); // Create Label for date of birth
doblabel.innerHTML = "Your Date of Birth : "; // Set Field Labels
signUpForm.appendChild(doblabel);

let inputelement = document.createElement('input'); // Create Input Field for date of birth
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dob");
signUpForm.appendChild(inputelement);
//code for date picker:
$(inputelement).datepicker({minDate: new Date(),
    beforeShow: function(input, inst)
    {
        inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
    }
});
let linebreak = document.createElement('br');
signUpForm.appendChild(linebreak);
let contactlabel = document.createElement('label'); // Create Label for contact number
contactlabel.innerHTML = "Your contact number : "; // Set Field Labels
signUpForm.appendChild(contactlabel);
let inputelement = document.createElement('input'); // Create Input Field for contact number
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "contno");
signUpForm.appendChild(inputelement);
let linebreak = document.createElement('br');
signUpForm.appendChild(linebreak);
let emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
signUpForm.appendChild(emaillabel);
let emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
signUpForm.appendChild(emailelement);
let emailbreak = document.createElement('br');
signUpForm.appendChild(emailbreak);
let addresslabel = document.createElement('label'); // Append Textarea
addresslabel.innerHTML = "Your Address : ";
signUpForm.appendChild(addresslabel);
let texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "daddress");
signUpForm.appendChild(texareaelement);
let messagebreak = document.createElement('br');
signUpForm.appendChild(messagebreak);
let submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
signUpForm.appendChild(submitelement);