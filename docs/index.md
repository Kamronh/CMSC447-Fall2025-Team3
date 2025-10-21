<!-- markdownlint-disable MD033 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>UMBC COEIT Copy/Paste Tool</title>
    <style>
        body {
            background-color: #0a192f; /* Dark blue background for the whole page */
            color: white;
            font-family: sans-serif;
            margin: 0;
            padding: 20px;
        }
        /* Main container for the two panels */
        .advisor-container {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }
        /* General styling for both panels */
        .content-panel {
            flex: 1; /* Each panel takes up half the space */
            background-color: #0a192f;
            border: 2px solid #ffc400; /* Gold border */
            padding: 20px;
            color: white;
            min-height: 500px;
        }
        .content-panel h2 {
            color: #ffc400; /* Gold text for headings */
            font-size: 1.2em;
            border-bottom: 1px solid #ffc400;
            padding-bottom: 10px;
            margin-top: 0;
        }
        /* Style the list of checkboxes */
        .topic-list {
            margin-top: 20px;
        }
        .checkbox-item {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .checkbox-item input[type="checkbox"] {
            margin-right: 10px;
            width: 18px;
            height: 18px;
            accent-color: #ffc400; /* Color for the checkmark */
        }
        /* Style the "Generate Document" button */
        #generate-btn {
            width: 100%;
            padding: 15px;
            background-color: #6e5f19; /* A darker gold for the button */
            color: white;
            border: 1px solid #ffc400;
            font-size: 1em;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        #generate-btn:hover {
            background-color: #8a7620;
        }
        /* Style for the output area */
        #output-content {
            margin-top: 20px;
            color: #ddd;
        }
        #output-content h3 {
            color: #ffc400;
        }
    </style>
</head>
<body>
    <h1>Clause Selector</h1>
    <p>Select the clauses you want to include in your document.</p>
    <div id="clause-options">
        <div>
            <input type="checkbox" id="Introduction Paragraph C/P" class="clause-checkbox" value=", many of the courses you have completed thus far will count towards the completion of the (insert program here)  program at UMBC. On the pages above, you will see courses highlighted and on the second page courses listed in green or black font. The courses listed in green and highlighted in bright yellow are courses that you have already completed, the light yellow are courses in progress, and the courses in black are those which still need to be completed.  Please note, these recommendations are based on current course equivalencies. Additionally, please keep in mind that this is an unofficial evaluation of the credits you have completed thus far. An official evaluation will be completed upon your admittance to the university. On the unofficial evaluation, courses listed in red are UMBC course equivalents. If a course is in parentheses, it will not be applied towards your degree requirements at UMBC.
On the pages above, you will see courses which have been highlighted. These highlighted courses are courses that you have already completed, whether at UMBC or another institution. If a course is in parenthesis, it will not be applied towards your degree requirements at UMBC.">
            <label for="Introduction Paragraph C/P">Introduction Paragraph C/P</label>
        </div>
        <div> 
            <input type="checkbox" id="Course Recommendations Paragraph C/P" class="clause-checkbox" value="When planning to transfer, I generally recommend taking courses required for the first two years of the program you are interested in. On the page above, you will find UMBC courses on the left, and their community college equivalents on the right. I recommend working on classes listed in black such as: 
As you continue to take courses, please keep in mind that grades of C or higher are required for any major course to apply towards a bachelor's degree at UMBC. Courses for which grades of D are earned will not count towards any major requirement. 
Or 
As you take courses, please keep in mind that grades of C or higher are required for any course to apply towards a bachelor's degree at UMBC. This policy excludes the gateway requirements for which higher grades are required. More information about the gateway requirements can be found below. ">
            <label for="Course Recommendations Paragraph C/P">Course Recommendations Paragraph C/P</label>
        </div>
        <div>
            <input type="checkbox" id="Repeat Policy Blurb" class="clause-checkbox" value="Please also keep in mind that our college has a strict course repeat policy and students are only allowed two attempts in any course required for the major or required to progress in the major. This means for any Math, Science, or major related class, a student has only two attempts to earn the required grade. This policy includes transfer credits and courses for which grades of W have been given.">
            <label for="Repeat Policy Blurb">Repeat Policy Blurb</label>
        </div>
        <div>
            <input type="checkbox" id="Language Requirement Blurb" class="clause-checkbox" value="Another requirement that you can continue to work on while at (Insert CC) is your language requirement. If you have completed 4 years of a language in high school, you can submit your transcript to have the requirement waived. Otherwise, in order to complete your language requirement at UMBC, you will need to take a language course to the intermediate level. There are a few other ways you can take care of your language requirement. I have included links on this requirement below but would be happy to discuss it further with you should you have more questions.">
            <label for="Language Requirement Blurb">Language Requirement Blurb</label>
        </div>
        <div>
            <input type="checkbox" id="CSEE Track Blurb" class="clause-checkbox" value="You are welcome to pursue any track for the computer science program that you may be interested in. Since you will choose your track once you have gotten to your 300-level courses, you will have plenty of time to make your decision. Track courses are 400-level computer science electives that you take towards the end of your degree. These courses are indicated by CMSC 4XX above. More information on the tracks can be found below.">
            <label for="CSEE Track Blurb">CSEE Track Blurb</label>
        </div>
        <div>
            <input type="checkbox" id="Last Paragraph" class="clause-checkbox" value="Below you will find information on the (Insert program) program as well as other information I think will be helpful as you plan your transfer. If you have any questions about anything on this document, please feel free to email COEITtransfer@umbc.edu. 
UMBC has so much to offer. Life on the UMBC Campus can be whatever you make it.
Explore recent College of Engineering and Information Technology (COEIT) news highlights on the COEIT News Archives.">
            <label for="Last Paragraph">Last Paragraph</label>
        </div>
            <button id="generate-btn">Generate Document</button>
    </div>
    <div class="content-panel" id="generated-guide">
        <h2>GENERATED ADVISOR GUIDE</h2>
        <div id="output-content">
            <p>Select topics from the left panel and click "Generate Document" to create advisor guide content.</p>
        </div>
    </div>
    <script src="js/generator.js"></script>
</body>
</html>