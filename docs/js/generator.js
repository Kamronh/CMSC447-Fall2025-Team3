document.addEventListener('DOMContentLoaded', () => {

    // Get references to the button, output textarea, and all checkboxes
    const generateBtn = document.getElementById('generate-btn');
    const outputDocument = document.getElementById('output-document');
    const checkboxes = document.querySelectorAll('.clause-checkbox');

    // Add a 'click' event listener to the button
    generateBtn.addEventListener('click', () => {
        
        // Start with an empty array to hold the selected clauses
        let selectedClauses = [];

        // Loop through all the checkboxes
        checkboxes.forEach(checkbox => {
            // If a checkbox is checked, add its 'value' attribute to our array
            if (checkbox.checked) {
                selectedClauses.push(checkbox.value);
            }
        });

        // Join the array of clauses into a single string, separated by two new lines
        const finalText = selectedClauses.join('\n\n');

        // Set the value of the output textarea to our final text
        outputDocument.value = finalText;
    });
});
