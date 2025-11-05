document.addEventListener('DOMContentLoaded', () => {

    // Get references to the button, output textarea, and all checkboxes
    const generateBtn = document.getElementById('generate-btn');

    //Get reference to light/Dark Mode Button
    const toggleBtn = document.getElementById('toggle-light-button');
    
    // --- FIX 1 & 2 ---
    // 1. Use the correct ID: 'output-content'
    // 2. Use this variable name (outputDiv) consistently
    const outputDiv = document.getElementById('output-content'); 
    
    const checkboxes = document.querySelectorAll('.clause-checkbox');

    // Add a 'click' event listener to the button
    generateBtn.addEventListener('click', () => {
        
        // Start with an empty array to hold the selected clauses
        let selectedClauses = [];

        // Loop through all the checkboxes
        checkboxes.forEach(checkbox => {
            // If a checkbox is checked, add its 'value' attribute to our array
            if (checkbox.checked) {
                selectedClauses.push(`<p>${checkbox.value}</p>`);
            }
        });

        // If no clauses were selected, show the default message
        if (selectedClauses.length === 0) {
            // Use the correct variable name: outputDiv
            outputDiv.innerHTML = '<p>Select topics from the left panel and click "Generate Document" to create advisor guide content.</p>';
        } else {
            // Otherwise, join the paragraphs and set them as the HTML of the output div
            const finalText = selectedClauses.join('');
            // Use the correct variable name: outputDiv
            outputDiv.innerHTML = finalText;
        }
    });
    /* Code for light dark mode toggle button
    function lightDark(){
        var element = document.body;
        element.classList.toggle("toggle-light-button")
    }
    */
});