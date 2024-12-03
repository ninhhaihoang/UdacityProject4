import { checkForName } from './nameChecker'
let inputData = {};

// const form = document.getElementById('urlForm');
// form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    if(!checkForName(formText)) {
        return;
    };

    // postData(formText).then(updateUI(res));
    postData(formText).then((res) => {
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })

}

// Function to send data to the server
const postData = async (dataInput) => {
    const url = 'http://127.0.0.1:8000/analyze';
    inputData = {
        data: dataInput,
    };

    console.log(inputData);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        });

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
};

// Export the handleSubmit function
export { handleSubmit };

