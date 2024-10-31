function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Show an alert with the user's name and email
    alert(`Your message has been submitted. Thank you, ${name}! We will contact you at ${email}.`);

    // Optionally submit the form programmatically
    event.target.submit();
}