<!-- markdownlint-disable MD033 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>UMBC COEIT Copy/Paste Tool</title>
    <style>
        body { background-color: #0a192f; color: white; font-family: sans-serif; margin: 0; padding: 20px; }
        .advisor-container { display: flex; gap: 20px; margin-top: 20px; }
        .content-panel { flex: 1; background-color: #0a192f; border: 2px solid #ffc400; padding: 20px; color: white; min-height: 500px; display: flex; flex-direction: column; }
        .content-panel h2 { color: #ffc400; font-size: 1.2em; border-bottom: 1px solid #ffc400; padding-bottom: 10px; margin-top: 0; }
        /* --- LAYOUT FIXES (Wider Screen) --- */
        .md-grid { max-width: 95% !important; margin: 0 auto; }
        #clause-selector-panel { flex: 1; max-width: 450px; } /* Slightly wider for edit buttons */
        #generated-guide { flex: 3; }
        /* --- CHECKBOX ITEM STYLING --- */
        #clause-options { flex: 1; overflow-y: auto; padding-right: 10px; margin-bottom: 20px; max-height: 60vh; }
        .checkbox-wrapper { 
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            background: #112240;
            padding: 8px;
            border-radius: 5px;
        }
        .checkbox-group { display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;}
        .checkbox-group input { accent-color: #ffc400; width: 18px; height: 18px; }
        .checkbox-group label { cursor: pointer; }
        /* --- ACTION BUTTONS (Edit/Delete) --- */
        .item-actions { display: flex; gap: 5px; }
        .icon-btn {
            background: none; border: 1px solid #555; color: #888; cursor: pointer; padding: 4px 8px; font-size: 0.8em; border-radius: 3px; transition: 0.2s;
        }
        .icon-btn:hover { color: white; border-color: white; }
        .delete-btn:hover { color: #ff4d4d; border-color: #ff4d4d; }
        /* --- MAIN BUTTONS --- */
        .btn-group { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        button.main-btn {
            width: 100%; padding: 12px; font-weight: bold; cursor: pointer; border: 1px solid #ffc400; transition: 0.3s;
        }
        #generate-btn { background-color: #6e5f19; color: white; }
        #generate-btn:hover { background-color: #8a7620; }
        #download-btn { background-color: #ffc400; color: #0a192f; }
        #download-btn:hover { background-color: #ffd545; }
        .secondary-btn { background: transparent; color: #ffc400; border: 1px solid #ffc400; padding: 8px; cursor: pointer; }
        .secondary-btn:hover { background: rgba(255, 196, 0, 0.1); }
        #add-new-container { margin-top: 15px; border-top: 1px solid #333; padding-top: 10px; }
        #add-new-btn { width: 100%; background: #1d3557; color: white; border: 1px dashed #ffc400; padding: 10px; cursor: pointer; }
        #add-new-btn:hover { background: #26426b; }
        #editor-modal {
            display: none; /* Hidden by default */
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0,0,0,0.8); z-index: 1000;
            justify-content: center; align-items: center;
        }
        .modal-content {
            background-color: #0a192f; border: 2px solid #ffc400; padding: 20px; width: 80%; max-width: 800px; display: flex; flex-direction: column; gap: 15px;
        }
        .modal-content h3 { color: #ffc400; margin: 0; }
        .modal-content input, .modal-content textarea {
            background: #112240; color: white; border: 1px solid #555; padding: 10px; font-family: monospace;
        }
        .modal-content textarea { height: 300px; resize: vertical; }
        .modal-buttons { display: flex; justify-content: flex-end; gap: 10px; }
        /* Table Styles (for output) */
        #output-content table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        #output-content th, #output-content td { border: 1px solid #ffc400; padding: 8px; text-align: left; }
        #output-content th { background-color: #4a3e10; color: #ffc400; }
        /* Search Bar */
        #clause-search {
            width: 95%;
            padding: 12px;
            margin-bottom: 15px;
            background-color: #112240;
            border: 1px solid #ffc400;
            color: white;
            font-size: 1em;
            border-radius: 5px;
            outline: none;
        }
        #clause-search:focus {
            box-shadow: 0 0 5px #ffc400;
        }
    </style>
    <script src="https://unpkg.com/html-docx-js/dist/html-docx.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
</head>
<body>
    <div class="advisor-container">
        <div class="content-panel" id="clause-selector-panel">
            <h2>CLAUSE SELECTOR</h2>
            <input type="text" id="clause-search" placeholder="🔍 Search topics..." autocomplete="off">
            <div id="clause-options">
                </div>
            <div id="add-new-container">
                <button id="add-new-btn">+ Add New Clause</button>
            </div>
            <div class="btn-group">
                <button id="generate-btn" class="main-btn">Generate Document</button>
                <button id="download-btn" class="main-btn">Download .DOC</button>
                <div style="display: flex; gap: 10px;">
                    <button id="clear-btn" class="secondary-btn" style="flex:1">Clear Select</button>
                    <button id="reset-defaults-btn" class="secondary-btn" style="flex:1">Reset All</button>
                </div>
            </div>
        </div>
        <div class="content-panel" id="generated-guide">
            <h2>GENERATED ADVISOR GUIDE</h2>
            <div id="output-content">
                <p>Select topics from the left panel and click "Generate Document".</p>
            </div>
        </div>
    </div>
    <div id="editor-modal">
        <div class="modal-content">
            <h3>Edit Clause</h3>
            <label>Clause Title (Label)</label>
            <input type="text" id="edit-title">
            <label>Clause Content (HTML allowed)</label>
            <textarea id="edit-content"></textarea>
            <div class="modal-buttons">
                <button id="cancel-edit" class="secondary-btn">Cancel</button>
                <button id="save-edit" class="main-btn" style="width: auto; padding: 10px 30px;">Save Changes</button>
            </div>
        </div>
    </div>
    <script src="js/generator.js"></script>
</body>
</html>
