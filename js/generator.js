// This file is generator.js
// The line "generator.js" that was here before the word "document" was the error.

document.addEventListener('DOMContentLoaded', () => {

    // Get references to the buttons, output div, and all checkboxes
    const generateBtn = document.getElementById('generate-btn');
    const outputDiv = document.getElementById('output-content');
    const checkboxes = document.querySelectorAll('.clause-checkbox');
    const clearBtn = document.getElementById('clear-btn');
    const downloadBtn = document.getElementById('download-btn');

    // Add a 'click' event listener to the clear button
    clearBtn.addEventListener('click', () => {
        // Loop through all checkboxes
        checkboxes.forEach(checkbox => {
            // Set their 'checked' property to false
            checkbox.checked = false;
        });
        
        // Also clear the output div
        outputDiv.innerHTML = '<p>Select topics from the left panel and click "Generate Document" to create advisor guide content.</p>';
    });


    // Add a 'click' event listener to the generate button
    generateBtn.addEventListener('click', () => {
        
        let selectedClauses = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedClauses.push(checkbox.value);
            }
        });

        if (selectedClauses.length === 0) {
            outputDiv.innerHTML = '<p>Select topics from the left panel and click "Generate Document" to create advisor guide content.</p>';
        } else {
            const finalText = selectedClauses.join('<br><hr><br>'); // Add a line and space between sections
            outputDiv.innerHTML = finalText;
        }
    });

    downloadBtn.addEventListener('click', () => {
        const contentToDownload = outputDiv.innerHTML;
        const defaultMessage = '<p>Select topics from the left panel and click "Generate Document" to create advisor guide content.</p>';

        if (contentToDownload === defaultMessage || contentToDownload.trim() === "") {
            alert('Please generate a document before downloading!');
            return; 
        }

        const fullHtml = `<!DOCTYPE html><html><head><title>UMBC Advisor Guide</title></head><body>${contentToDownload}</body></html>`;
        
        const blob = new Blob([fullHtml], { type: 'application/msword' });

        const tempLink = document.createElement('a');
        tempLink.href = URL.createObjectURL(blob);
        
        tempLink.download = 'UMBC_Advisor_Guide.doc';
        
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        URL.revokeObjectURL(tempLink.href);
    });
});
