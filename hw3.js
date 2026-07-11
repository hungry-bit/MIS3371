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
