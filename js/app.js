$(document).ready(function() {
    $('#register-form').on('submit', function(event) {
        event.preventDefault();
        var firstName = $('input[name="first_name"]').val();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        var confirmPassword = $('input[name="confirm_password"]').val();

        $('.error-message').html('');
        $('.form-group').removeClass('has-error');

        if (firstName === '') {
            showError('first_name', 'Please enter your first name.');
            return;
        }
        if (email === '') {
            showError('email', 'Please enter your email address.');
            return;
        }
        if (password === '') {
            showError('password', 'Please enter a password.');
            return;
        }
        if (confirmPassword === '') {
            showError('confirm_password', 'Please confirm your password.');
            return;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('email', 'Please enter a valid email address.');
            return;
        }

        if (password !== confirmPassword) {
            showError('password', 'Passwords do not match.');
            showError('confirm_password', 'Passwords do not match.');
            return;
        }


        var successMessage = 'Registration successful!<br><br>' +
            '<strong>First Name:</strong> ' + firstName + '<br>' +
            '<strong>Email:</strong> ' + email + '<br>' +
            '<strong>Password:</strong> ' + password;
        alert(successMessage);
    });

    function showError(fieldName, errorMessage) {
        var field = $('input[name="' + fieldName + '"]');
        var errorContainer = field.next('.error-container');
        var errorMessageContainer = errorContainer.find('.error-message');

        field.closest('.form-group').addClass('has-error');
        errorMessageContainer.html(errorMessage);
        errorContainer.show();
    }
});