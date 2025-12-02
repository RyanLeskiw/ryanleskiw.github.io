//const firebaseProjectUrl = 'https://comp101-js-alice-default-rtdb.firebaseio.com/';
const firebaseProjectUrl = 'https://comp101-lab8-ryanleskiw-default-rtdb.firebaseio.com/';
const databaseUrl = firebaseProjectUrl + 'msg.json';

const submitButton = document.getElementById('submitButton');
submitButton.onclick = submitForm; // Tell browser whenever a click happens on submitButton, call submitForm.

async function submitForm() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('your-message').value.trim();
    const email = document.getElementById('email').value.trim();


    if (name || message) {
        const data = {name, message, email};
        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }); 
            // fetch(): to make an HTTP request - POST request - write data to databaseUrl.
            // await: JS waits/pauses until the server responds. await has to be inside async func.

            if (!response.ok) { 
                throw new Error('Failed to send message');
            }
            showThanksAlert();
        } catch (error) {
            console.error('Error when sending message:', error);
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your message. We will get back to you soon!");
