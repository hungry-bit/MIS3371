//validation function for each field
function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    var errorDisplay = document.getElementById("firstNameError");
        if (firstName.length < 2 || firstName.length > 30) {
            errorDisplay.textContent = "First name must be between 2 and 30 characters.";
        return false;}
        if (!/^[a-zA-Z'-]+$/.test(firstName)) {
            errorDisplay.textContent = "First name can contain only letters, dashes, and apostrophes.";
        return false;}
        if (!firstName) {
            errorDisplay.textContent = "First name is required.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateMI() {
var middleInitial = document.getElementById("middleInitial").value;
    var errorDisplay = document.getElementById("middleInitialError");
        if (middleInitial.length > 1) {
            errorDisplay.textContent = "Middle initial must be a single character.";
        return false;}
        if (middleInitial && !/^[a-zA-Z]$/.test(middleInitial)) {
            errorDisplay.textContent = "Middle initial can contain only letters.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateLastName() {
    var lastName = document.getElementById("lastName").value;
    var errorDisplay = document.getElementById("lastNameError");
        if (lastName.length < 2 || lastName.length > 30) {
            errorDisplay.textContent = "Last name must be between 2 and 30 characters.";
            return false;}
        if (!/^[a-zA-Z'-]+$/.test(lastName)) {
            errorDisplay.textContent = "Last name can contain only letters, dashes, and apostrophes.";
        return false;}
        if (!lastName) {
            errorDisplay.textContent = "Last name is required.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
//username and password validation functions
function validateUsername() {
    var username = document.getElementById("username").value;
    var errorDisplay = document.getElementById("usernameError");
        if (username.length < 3 || username.length > 20) {
            errorDisplay.textContent = "Username must be between 3 and 20 characters.";
        return false;}
        if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
            errorDisplay.textContent = "Username can contain only letters, numbers, underscores, and hyphens.";
        return false;}
        if (!username) {
            errorDisplay.textContent = "Username is required.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validatePassword() {
    var password = document.getElementById("password").value;
    var errorDisplay = document.getElementById("passwordError");
        if (password.length < 8 || password.length > 30) {
            errorDisplay.textContent = "Password must be between 8 and 30 characters.";
        return false;}
        if (!password) {
            errorDisplay.textContent = "Password is required.";
        return false;}
        if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
            errorDisplay.textContent = "Password can contain only letters, numbers, and special characters.";
        return false;} 
        if (password === username) {
            errorDisplay.textContent = "Password cannot be the same as the username.";
        return false;}
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
            errorDisplay.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;}
    var pass2 = document.getElementById("2ndpassword").value;
        if (!pass2) {
            errorDisplay.textContent = "Please confirm your password.";
        return false;}  
        if (password !== pass2) {
            errorDisplay.textContent = "Passwords do not match.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateDOB() {
    var dob = document.getElementById("DOB").value;
    var errorDisplay = document.getElementById("dobError");
        if (!dob) {
            errorDisplay.textContent = "Please enter your date of birth.";
            return false;}
        if (new Date(dob) > new Date()) {
            errorDisplay.textContent = "Date of birth cannot be in the future.";
        return false;}
        if (new Date(dob) < new Date('1900-01-01')) {
            errorDisplay.textContent = "Date of birth cannot be before January 1, 1900.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateSex() {
    var sex = document.getElementById("sex").value;
    var errorDisplay = document.getElementById("sexError");
        if (!sex) {
            errorDisplay.textContent = "Please select your sex.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateAddress() {
    var address1 = document.getElementById("address1").value;
    var errorDisplay = document.getElementById("address1Error");
        if (address1.length < 2 || address1.length > 50) {
            errorDisplay.textContent = "Address must be between 2 and 50 characters.";
        return false;}
        if (!address1) {
            errorDisplay.textContent = "Address line 1 is required.";
        return false;}
    var address2 = document.getElementById("address2").value;
    var errorDisplay2 = document.getElementById("address2Error");
        if (address2.length > 50) {
            errorDisplay2.textContent = "Address line 2 must be less than 50 characters.";
        return false;}
    errorDisplay.textContent = "";
    errorDisplay2.textContent = "";
    return true;
}
function validateCity() {
    var city = document.getElementById("city").value;
    var errorDisplay = document.getElementById("cityError");
        if (city.length < 2 || city.length > 50) {
            errorDisplay.textContent = "City must be between 2 and 50 characters.";
        return false;}
        if (!city) {
            errorDisplay.textContent = "City is required.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateState() {
    var state = document.getElementById("state").value;
    var errorDisplay = document.getElementById("stateError");
        if (!state) {
            errorDisplay.textContent = "Please select a state.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateZip() {
    var zip = document.getElementById("zip").value;
    var errorDisplay = document.getElementById("zipError");
        if (zip.length != 5) {
            errorDisplay.textContent = "Zip code must be a five-digit number.";
        return false;}
        if (!/^[0-9]+$/.test(zip)) {
            errorDisplay.textContent = "Zip code can contain only digits.";
        return false;}
        if (!zip) {
            errorDisplay.textContent = "Zip code is required.";
        return false;}  
    errorDisplay.textContent = "";
    return true;
}
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var errorDisplay = document.getElementById("phoneError");
        if (!phone) {
            errorDisplay.textContent = "Phone number is required.";
        return false;}
        if (!/^\d{10}$/.test(phone)) {
            errorDisplay.textContent = "Phone number must be a 10-digit number.";
        return false;}
        if (!/^[0-9]+$/.test(phone)) {
            errorDisplay.textContent = "Phone number can contain only digits.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var errorDisplay = document.getElementById("emailError");
        if (!email) {
            errorDisplay.textContent = "Email is required.";
        return false;}
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorDisplay.textContent = "Please enter an email address in the correct format (user@example.com).";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateSSN() {
    var ssn = document.getElementById("ssn").value;
    var errorDisplay = document.getElementById("ssnError");
        if (ssn.length != 9 || isNaN(ssn)) {
            errorDisplay.textContent = "SSN must be a nine-digit number.";
        return false;}
        if (!/^[0-9]+$/.test(ssn)) {
            errorDisplay.textContent = "SSN can contain only digits.";
        return false;}
        if (!ssn) {
            errorDisplay.textContent = "SSN is required.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateInsurance() {
    var insuredYes = document.getElementById("insuredYes").checked;
    var insuredNo = document.getElementById("insuredNo").checked;
    var errorDisplay = document.getElementById("insuranceError");
        if (!insuredYes && !insuredNo) {
            errorDisplay.textContent = "Please select whether you have health insurance.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateMaritalStatus() {
    var marriedYes = document.getElementById("married").checked;
    var marriedNo = document.getElementById("single").checked;
    var errorDisplay = document.getElementById("marStatusError");
        if (!marriedYes && !marriedNo) {
            errorDisplay.textContent = "Please select whether you are married.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
function validateContactPref() {
    var prefEmail = document.getElementById("emailcontactpref").checked;
    var prefPhone = document.getElementById("phonecontactpref").checked;
    var prefText = document.getElementById("txtmsgpref").checked;
    var errorDisplay = document.getElementById("contactPrefError");
        if (!prefEmail && !prefPhone && !prefText) {
            errorDisplay.textContent = "Please select a preferred method of contact.";
        return false;}
    errorDisplay.textContent = "";
    return true;
}
//validateForm checks the whole form on submit and holds all the rules.
function validateForm() {
    var isValid = true;
    //name validation
    if (!validateFirstName()) {
        isValid = false;}
    if (!validateMI()) {
        isValid = false;}
    if (!validateLastName()) {
        isValid = false;}
    if (!validateUsername()) {
        isValid = false;}
    if (!validatePassword()) {
        isValid = false;}
    if (!validateDOB()) {
        isValid = false;}
    if (!validateSex()) {
        isValid = false;}   
    if (!validateAddress()) {
        isValid = false;}
    if (!validateCity()) {
        isValid = false;}
    if (!validateState()) {
        isValid = false;}
    if (!validateZip()) {
        isValid = false;}
    if (!validatePhone()) {
        isValid = false;}
    if (!validateEmail()) {
        isValid = false;}
    if (!validateSSN()) {
        isValid = false;}
    if (!validateInsurance()) {
        isValid = false;}
    if (!validateMaritalStatus()) {
        isValid = false;}
    if (!validateContactPref()) {
        isValid = false;}
    return isValid;
}

//API
async function fetchPoke(){
    try{
        const idCount = 1351
        const randID = Math.floor(Math.random() * idCount) + 1; 

        const pokeName = document.getElementById("pokeName").value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randID}`)

        if(!res.ok){
            throw new Error("error")
        }
        const data = await res.json();

        const constPokeSprite = data.sprites.front_default;
        const pokeImg = document.getElementById("PokeSprite");
        pokeImg.src = constPokeSprite;
        pokeImg.style.display = "block";

        console.log(data);
        createPokeTable(data);
    }
    catch(error){
        console.error(error);
    }
}
function createPokeTable(data) {
    const tbody = document.getElementById("pokeTableBody")
    tbody.innerHTML = "";

    const rows = [
        ["Name", data.name],
        ["ID", data.id],
        ["Height", data.height],
        ["Weight", data.weight],
        ["Types", data.types.map(t => t.type.name).join(", ")]
    ];
    rows.forEach(([label, value]) => {
        const row = document.createElement("tr");

        const labelCell = document.createElement("td");
        labelCell.textContent = label;

        const valueCell = document.createElement("td");
        valueCell.textContent = value;

        row.appendChild(labelCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    });
}
/*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu') 
    .then(res => {
        if(!res.ok){
            throw new Error("error");
        }
        return res.json();
    })
    .then(data => {
        console.log(data.name);
        createPokeTable(data);
    })
    .catch(error => console.log('ERROR', error))
*/



document.addEventListener("DOMContentLoaded", function() {



//cookie
    var today = new Date();
        var expiry = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day from now

    function setCookie(name, value) {
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expiry.toUTCString() + "; path=/";
        document.getElementById("cookieDisplay").textContent = "Cookie Value: " + value;
    }
    document.getElementById("firstName").addEventListener("blur", function() {
        setCookie("firstName", this.value);
    });
//get cookie
    function getCookie(name) {
        let cookieName = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "null";
    }

//delete cookie
        document.getElementById("deleteCookieBtn").addEventListener("click", function() {
            deleteCookie("firstName");
            document.getElementById("firstName").value = "";
            document.getElementById("cookieDisplay").textContent = "Cookie deleted.";
        });
    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

//remember me checkbox
        document.getElementById("rememberMe").addEventListener("change", function() {
            const rememberMe = document.getElementById("rememberMe").checked;
            if (rememberMe) {
                setCookie("firstName", this.value);
                document.getElementById("cookieDisplay").textContent = "Cookie Value: " + this.value;
            } 
            else {
                deleteCookie("firstName");
                document.getElementById("cookieDisplay").textContent = "";
            }
        });

//fill firstName on page load
    window.onload = function() {
        const savedName = getCookie("firstName");
        if (savedName !== "null") {
            document.getElementById("firstName").value = savedName;
            document.getElementById("rememberMe").checked = true;
            document.getElementById("cookieDisplay").textContent = "Cookie Value: " + savedName;
            document.getElementById("welcomeMsg").textContent = "Welcome back, " + savedName + " :D";
        }
    };
//local storage
    document.addEventListener("DOMContentLoaded", function() {
//declaring constants to use later
        const rememberMe = document.getElementById("rememberMe");
        const lsUsernameInput = document.getElementById("username");
        const lsDOB = document.getElementById("DOB");
        const lsEmail = document.getElementById("email");
        const lsPhone = document.getElementById("phone");
        const lsInsuredYes = document.getElementById("insuredYes");
        const lsInsuredNo = document.getElementById("insuredNo");
        const lsMarried = document.getElementById("married");
        const lsSingle = document.getElementById("single");
        const lsSymptoms = document.getElementById("symptoms");
        const lsDiabetes = document.getElementById("diabetes");
        const lsAllergies = document.getElementById("allergies");
        const lsAsthma = document.getElementById("asthma");
        const lsHeartDisease = document.getElementById("heartDisease");
        const lsHighBloodPressure = document.getElementById("highBloodPressure");
        const lsPhonePref = document.getElementById("phonecontactpref");
        const lsEmailPref = document.getElementById("emailcontactpref");
        const lsTextPref = document.getElementById("txtmsgpref");

//write only if remember me is checked
        function write2ls(key, value) {
            if (rememberMe.checked) {
                localStorage.setItem(key, value)
            }
        }
//write2ls for every const
        lsUsernameInput.addEventListener("blur", function() {
            write2ls("username", this.value);
        });
        lsDOB.addEventListener("blur", function() {
            write2ls("DOB", this.value);
        });
        lsEmail.addEventListener("blur", function() {
            write2ls("email", this.value);
        });
        lsPhone.addEventListener("blur", function() {
            write2ls("phone", this.value);
        });
        lsInsuredYes.addEventListener("blur", function() {
            write2ls("isInsuredYes", this.value)
        });
        lsInsuredNo.addEventListener("blur", function() {
            write2ls("isInsuredNo", this.value);
        });
        lsMarried.addEventListener("blur", function() {
            write2ls("married", this.value);
        });
        lsSingle.addEventListener("blur", function() {
            write2ls("single", this.value);
        });
        lsSymptoms.addEventListener("blur", function(){
            write2ls("symptoms", this.value);
        });
        lsDiabetes.addEventListener("blur", function(){
            write2ls("diabetes", this.value);
        });
        lsAllergies.addEventListener("blur", function(){
            write2ls("allergies", this.value);
        });
        lsAsthma.addEventListener("blur", function(){
            write2ls("asthma", this.value);
        });
        lsHeartDisease.addEventListener("blur", function(){
            write2ls("heartDisease", this.value);
        });
        lsHighBloodPressure.addEventListener("blur", function(){
            write2ls("highBloodPressure", this.value);
        });
        lsPhonePref.addEventListener("blur", function(){
            write2ls("phonecontactpref", this.value);
        });
        lsEmailPref.addEventListener("blur", function(){
            write2ls("emailcontactpref", this.value);
        });
        lsTextPref.addEventListener("blur", function(){
            write2ls("txtmsgpref", this.value);
        });

//if remember me checked, save, else wipe
    rememberMe.addEventListener("change", function() {
        if (this.checked) {
            localStorage.setItem("lsUsernameInput", lsUsernameInput.value);
            localStorage.setItem("DOB", lsDOB.value);
            localStorage.setItem("lsEmail", lsEmail.value);
            localStorage.setItem("lsPhone", lsPhone.checked);
            localStorage.setItem("lsInsuredYes", lsInsuredYes.checked);
            localStorage.setItem("lsInsuredNo", lsInsuredNo.checked);
            localStorage.setItem("lsMarried", lsMarried.checked);
            localStorage.setItem("lsSingle", lsSingle.checked);
            localStorage.setItem("lsSymptoms", lsSymptoms.checked);
            localStorage.setItem("lsDiabetes", lsDiabetes.checked);
            localStorage.setItem("lsAllergies", lsAllergies.checked);
            localStorage.setItem("lsAsthma", lsAsthma.checked);
            localStorage.setItem("lsHeartDisease", lsHeartDisease.checked);
            localStorage.setItem("lsHighBloodPressure", lsHighBloodPressure.checked);
            localStorage.setItem("lsPhonePref", lsPhonePref.checked);
            localStorage.setItem("lsEmailPref", lsEmailPref.checked);
            localStorage.setItem("lsTextPref", lsTextPref.checked);
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.clear();    
        }
    });
//restore on page load if remememberMe.checked=true
    if (localStorage.getItem("rememberMe")==="true"){
        rememberMe.checked = true;
        if (localStorage.getItem("lsUsernameInput") !== null) {
            lsUsernameInput.value = localStorage.getItem("lsUsernameInput");
        }
        if (localStorage.getItem("DOB") !== null) {
            DOB.value = localStorage.getItem("DOB");
        }
        if (localStorage.getItem("lsEmail") !== null) {
            lsEmail.value = localStorage.getItem("lsEmail");
        }
        if (localStorage.getItem("lsPhone") !== null) {
            lsPhone.value = localStorage.getItem("lsPhone");
        }
        if (localStorage.getItem("lsInsuredYes") !== null) {
            lsInsuredYes.value = localStorage.getItem("lsInsuredYes");
        }
        if (localStorage.getItem("lsInsuredNo") !== null) {
            lsInsuredNo.value = localStorage.getItem("lsInsuredNo");
        }
        if (localStorage.getItem("lsMarried") !== null) {
            lsMarried.value = localStorage.getItem("lsMarried");
        }
        if (localStorage.getItem("lsSingle") !== null) {
            lsSingle.value = localStorage.getItem("lsSingle");
        }
        if (localStorage.getItem("lsSymptoms") !== null) {
            lsSymptoms.value = localStorage.getItem("lsSymptoms");
        }
        if (localStorage.getItem("lsDiabetes") !== null) {
            lsDiabetes.value = localStorage.getItem("lsDiabetes");
        }
        if (localStorage.getItem("lsAllergies") !== null) {
            lsAllergies.value = localStorage.getItem("lsAllergies");
        }
        if (localStorage.getItem("lsAsthma") !== null) {
            lsAsthma.value = localStorage.getItem("lsAsthma");
        }
        if (localStorage.getItem("lsHeartDisease") !== null) {
            lsHeartDisease.value = localStorage.getItem("lsHeartDisease");
        }
        if (localStorage.getItem("lsHighBloodPressure") !== null) {
            lsHighBloodPressure.value = localStorage.getItem("lsHighBloodPressure");
        }
        if (localStorage.getItem("lsPhonePref") !== null) {
            lsPhonePref.value = localStorage.getItem("lsPhonePref");
        }
        if (localStorage.getItem("lsEmailPref") !== null) {
            lsEmailPref.value = localStorage.getItem("lsEmailPref");
        }
        if (localStorage.getItem("lsTextPref") !== null) {
            lsTextPref.value = localStorage.getItem("lsTextPref");
        }
    }
//clear loacl storage on reset
        document.getElementById("PIform").addEventListener("reset", function() {
            localStorage.clear();
        });
    });
//fill in lsView table
    function fillLSview(){
        const tbody = document.getElementById("lsViewTable");
        tbody.innerHTML = " ";
        for (let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const tableRow = document.createElement("tr");

            const trKey = document.createElement("td");
            trKey.textContent = key;
            const tdValue = document.createElement("td");
            tdValue.textContent = value;

            tableRow.appendChild(trKey);
            tableRow.appendChild(tdValue);
            tbody.appendChild(tableRow);
        }
    }
});