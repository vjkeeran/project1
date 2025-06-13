$(document).ready(function() {
    console.log("script.js loaded and document is ready.");

    $('#registrationModal').on('hidden.bs.modal', function () {
        console.log("Registration modal hidden.");
    });

    $('#registrationModal').on('show.bs.modal', function () {
        console.log("Registration modal is about to be shown.");
    });

    if (document.getElementById('app-vue')) {
        console.log("Initializing Vue component for #app-vue.");
        new Vue({
            el: '#app-vue',
            data: {
                message: 'Welcome to Splashes! Learn to swim with us!',
                classCount: 5,
                features: [
                    'Experienced & Certified Instructors',
                    'Safe & Fun Learning Environment',
                    'Flexible Schedules & Small Class Sizes',
                    'Progressive Curriculum'
                ]
            },
            methods: {
                updateMessage: function() {
                    this.message = 'Start your exciting swimming journey today!';
                    console.log("Vue message updated.");
                }
            },
            mounted() {
                console.log('Vue app mounted successfully on #app-vue!');
            }
        });
    } else {
        console.log("Vue component target #app-vue not found on this page.");
    }

    const registrationForm = $('#registrationForm');

    if (registrationForm.length) {
        console.log("Registration form found. Attaching validation listener.");

        registrationForm.submit(function(event) {
            let isValid = true;

            $('.is-invalid').removeClass('is-invalid');
            $('.invalid-feedback').remove();

            const fullName = $('#fullName');
            if (fullName.val().trim() === '') {
                fullName.addClass('is-invalid').after('<div class="invalid-feedback">Full Name is required.</div>');
                isValid = false;
            }

            const email = $('#email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.val().trim() === '' || !emailRegex.test(email.val())) {
                email.addClass('is-invalid').after('<div class="invalid-feedback">A valid Email Address is required.</div>');
                isValid = false;
            }

            const phone = $('#phone');
            const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
            if (phone.val().trim() === '' || !phoneRegex.test(phone.val())) {
                phone.addClass('is-invalid').after('<div class="invalid-feedback">A 10-digit Phone Number is required (e.g., 123-456-7890).</div>');
                isValid = false;
            }

            const password = $('#password');
            if (password.val().length < 6) {
                password.addClass('is-invalid').after('<div class="invalid-feedback">Password must be at least 6 characters long.</div>');
                isValid = false;
            }

            const confirmPassword = $('#confirmPassword');
            if (confirmPassword.val() === '' || password.val() !== confirmPassword.val()) {
                confirmPassword.addClass('is-invalid').after('<div class="invalid-feedback">Passwords do not match.</div>');
                isValid = false;
            }

            const termsAndConditions = $('#termsAndConditions');
            if (!termsAndConditions.is(':checked')) {
                termsAndConditions.addClass('is-invalid');
                termsAndConditions.closest('.form-check').append('<div class="invalid-feedback">You must agree to the terms and conditions.</div>');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
                console.log("Form validation failed. Please correct the errors.");
            } else {
                event.preventDefault();
                console.log("Form validation passed. Simulating submission...");
                registrationForm.html(
                    '<div class="alert alert-success text-center mt-3" role="alert">' +
                        '<h4 class="alert-heading">Registration Successful!</h4>' +
                        '<p>Thank you for registering with Splashes. We have received your information and will contact you shortly to confirm your enrollment.</p>' +
                        '<hr>' +
                        '<p class="mb-0">You will receive an email with further instructions.</p>' +
                    '</div>'
                );
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
        });
    } else {
        console.log("No registration form found on this page to validate.");
    }
});
