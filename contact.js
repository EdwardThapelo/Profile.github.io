function handleFormSubmit(event){
    event.preventDefault()
    //console.log(event);

   const NameInput = document.getElementById('Name')
   const SurnameInput = document.getElementById('Surname')
   const emailInput = document.getElementById('email')
   const massageInput = document.getElementById('massage')

  //  console.log(NameInput);
   // console.log(emailInput)
   // console.log(SurnameInput);
   // console.log(massageInput);


    // name validity
   let isNameValid = false;

   if( NameInput.value.trim() !== ''){
    isNameValid = true

}else{
    isNameValid = false

}

    // Surnamename validity
    let isSurnameValid = false;

    if( SurnameInput.value.trim() !== ''){
        isSurnameValid = true
    
 }else{
    isSurnameValid = false
    
 }

// Email Validity

const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid
console.log(isEmailValid);

// Massage validity
let isMassageValid = false;

if( massageInput.value.trim() !== ''){
    isMassageValid = true
   // console.log("typed");
}else{
    isMassageValid = false
   // console.log("Not typed 3")
}

console.log({isMassageValid})


// Form Validity

const isFormValid = isNameValid && isSurnameValid && isEmailValid && isMassageValid

if(isFormValid){

    

    const formData = new FormData(event.target)
    console.log(formData);
    fetch('https://formspree.io/f/xvoeddjj',
    {

    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
    })
    .then(response => response.json())
    .then( data =>{
        console.log(data);
        if(data.ok){
            // Succesfull entry
          alert("Submited successfully");
        }
    })

    

}else{
    // alert("form is invalid");

    // Span trigger for input Fields
    if(isNameValid !== true){

        const namelable = document.getElementById('Name-lable')
        console.log(namelable);
        const nameSpan = document.createElement('span')
        nameSpan.innerText = 'Name is not Typed'

        console.log(nameSpan);
        namelable.appendChild(nameSpan)
    }

    if(isSurnameValid !== true){
        const Surnamelable = document.getElementById('Surname-lable')
        console.log(Surnamelable);
        const SurnameSpan = document.createElement('span')
        SurnameSpan.innerText = 'Surame is not Typed'

        console.log(SurnameSpan);
        Surnamelable.appendChild(SurnameSpan)
        
    }
    if(isEmailValid !== true){
        const emaillable = document.getElementById('email-lable')
        console.log(emaillable);

        const emailSpan = document.createElement('span')
        emailSpan.innerText = 'Email not typed'

        console.log(emailSpan);
        emaillable.appendChild(emailSpan)
    }
    if(isMassageValid !== true){
        const massagelable = document.getElementById('massage-lable')
        console.log(massagelable);

        const massageSpan = document.createElement('span')
        massageSpan.innerText = 'massage is not Typed'

        console.log(massageSpan);
        massagelable.appendChild(massageSpan)
    }
}
}
