window.addEventListener('load', function() {
    const form = document.getElementById('registrationForm');
    const clearButton = document.getElementById('clearForm');

    // Add options for months, days, and years
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const yearSelect = document.getElementById('year');

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = i + 1;
        option.text = months[i];
        monthSelect.add(option);
    }

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.add(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 50; i <= currentYear; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.add(option);
    }

    // Add validation
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const formData = new FormData(form);
        const validationErrors = validateForm(formData);

        if (validationErrors.length > 0) {
            displayValidationErrors(validationErrors);
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    clearButton.addEventListener('click', function() {
        form.reset();
    });

    function validateForm(formData) {
        const errors = [];

        // Validate Student Name
        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const studentName = `${firstName} ${lastName}`;
        if (studentName.length === 0 || studentName.length > 20 || !/^[a-zA-Z\s]+$/.test(studentName)) {
            errors.push('Student Name should not be empty, should be at most 20 characters long, and should contain only alphabets.');
        }

        // Validate Birth Date
        const month = formData.get('month');
        const day = formData.get('day');
        const year = formData.get('year');
        if (!month || !day || !year) {
            errors.push('Birth Date is required.');
        } else if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1] || year < currentYear - 50) {
            errors.push('Invalid Birth Date.');}
            const form = document.getElementById('studentForm');
const emailInput = document.getElementById('studentEmail');
const mobileNumberInput = document.getElementById('mobileNumber');
const phoneNumberInput = document.getElementById('phoneNumber');
const workNumberInput = document.getElementById('workNumber');
const companyInput = document.getElementById('company');
const coursesSelect = document.getElementById('courses');
const additionalCommentsInput = document.getElementById('additionalComments');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    // Email Validation
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }

    // Mobile Number Validation
    if (!mobileNumberInput.value.match(/^\d{3}\d{3}\d{4}$/)) {
        showError(mobileNumberInput, 'Please enter a valid 10-digit mobile number');
        isValid = false;
    }

    // Phone Number Validation
    if (phoneNumberInput.value && !phoneNumberInput.value.match(/^\d{3}\d{3}\d{4}$/)) {
        showError(phoneNumberInput, 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    // Work Number Validation
    if (workNumberInput.value && !workNumberInput.value.match(/^\d{3}\d{3}\d{4}$/)) {
        showError(workNumberInput, 'Please enter a valid 10-digit work number');
        isValid = false;
    }

    // Company Validation
    if (!companyInput.value) {
        showError(companyInput, 'Please enter a company name');
        isValid = false;
    }

    // Courses Validation
    if (coursesSelect.value === '') {
        showError(coursesSelect, 'Please select a course');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

form.addEventListener('reset', function() {
    clearErrors();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('small');
    if (!errorMessage) {
        const small = document.createElement('small');
        small.textContent = message;
        formGroup.appendChild(small);
    } else {
        errorMessage.textContent = message;
    }
}

function clearErrors() {
    const formGroups = document.querySelectorAll('.error');
    formGroups.forEach(function(formGroup) {
        formGroup.classList.remove('error');
        const errorMessage = formGroup.querySelector('small');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
}
