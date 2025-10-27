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
        <div>
            <input type="checkbox" id="GEP & University Requirements" class="clause-checkbox" value="University Degree Requirements:
Minimum Upper-level Credits: Without exception, at least 45 of the  minimum 120 credits required for graduation must be in UMBC courses numbered at the 300-level or above or their equivalents.
Minimum Resident Credits: Without exception, students must complete at least 30 credits of coursework at UMBC (referred to as resident credit) to receive a UMBC degree. Of the 30 resident credits, 15 must be upper-level (courses numbered at the 300-level or above).
Writing Intensive Course (WI): Without exception, students must complete one writing intensive course; a designated WI course may count for the major or a distribution requirement, or it may be taken as an elective. The WI course must be completed at UMBC; transfer courses may not be used to fulfill this requirement.
General Education Requirements: To fulfill general education requirements, students will complete courses distributed across six broad areas of academic inquiry: English Composition (ENGL 100), Mathematics (1 course), Arts and Humanities (3 courses), Social Science (3 courses), Sciences (1 w/lab, 1 w/o lab), Language* and Culture (1 course for BS, 2 for BA)
All courses used to satisfy general education requirements must be completed with a 'C' or better. Courses taken on a P/F or S/U basis may not be applied to general education requirements. No one course may be used to satisfy more than one area. 
No more than three courses from the same discipline may be used throughout the general education program.
Language Requirement: The language requirement consists of completion of a foreign language through the 201 level or demonstrated proficiency at that level. Proficiency, the number of courses needed to complete the requirement, and course placement, are determined by previous experience as follows:
completion of level 4 or higher of a language in high school (see table ) OR
corresponding AP, IB or CLEP credit (see Appendix II, Undergraduate Catalog), OR
completion of a language through the 201 level at a regionally accredited college/university
For more information about the language requirement, you can visit the Department of Modern Languages, Linguistics, and Intercultural Communication (MLLI) page on 201 Proficiency and High School Language Levels.
Students can receive the equivalency for 201 level proficiency to fulfill the GEP language requirement or the language component of the GDR, GER, or GFR by
a)  	demonstrating successfully completed education in a second language or
b) 	through examination.
The equivalency application does not grant credits but rather recognizes completion of the L201 requirement. See details below.
1.      International students and U.S. resident students proficient in a language other than English may receive equivalency for the 201-level proficiency requirement if they present documentation showing that:
a)      they attended a secondary school (i.e., sixth grade or above) in which the language of instruction was not only English, or
b)     they attended an English-speaking secondary school or a comprehensive bi or multi-lingual program accredited by a foreign government and have at least one year of successfully-completed education in a language other than English at that level. 
">
            <label for="General Education/University Requirement Information">General Education/University Requirement Information</label>
        </div>
        <div>
            <input type="checkbox" id="BTA Overview" class="clause-checkbox" value="Business Technology Administration:
The Bachelor of Arts degree in Business Technology Administration (BTA) program trains students for management positions in the growing job field of Information Systems. This major is housed within UMBC’s Department of Information Systems. It is an interdisciplinary program developing practical knowledge for the integration of computers, organizational processes, and people into effective and efficient systems. 
The BTA program is designed for students who want a grounding in the development and use of office systems and computer-based technologies found in business, government, and nonprofit organizations. The BA degree is less technical in nature than the BS program and the focus of the courses is on using IT of different types to solve problems that arise in a business setting.
Through a variety of courses such as human resources management, project management, business law, ethics, and operations management, students learn the skills to be successful managers, analysts and, administrators in an Information Systems organization. In addition, BTA students experience working with companies on projects that analyze systems and research solutions for implementation in small and large enterprises.
Certificates
Whichever program you choose, we offer a wide variety of undergraduate certificates to supplement your interests. From web development to MBA prep, certificates can help you supercharge your education. Certificates can only be earned in conjunction with majoring in one of our undergraduate programs. View all of our Certificate Programs.
Accelerated Programs
Accelerated programs, also called BS/MS programs, enable students to add a Bachelors AND Masters degree to their resume with only one additional year of study (on average). This saves you time and money. Information on our combined programs can be found here.
Scholarships
We believe IS students are among the best in the university, and we want to honor that high achievement. We offer several scholarships specifically for students studying Information Systems. Visit our Scholarships page to learn more.
Research Opportunities
UMBC is one of the few universities committed to undergraduate research, and the IS Department takes this mission seriously. For students interested in pursuing research, we have five main research areas: Artificial Intelligence and Knowledge Management, Data Science, Health Informatics, Human-Centered Computing, and Software Engineering. Check out our Undergraduate Research Opportunities.">
            <label for="BTA Overview">BTA Overview</label>
        </div>
        <div>
            <input type="checkbox" id="Computer Engineering Overview" class="clause-checkbox" value="Computer Engineering
The Computer Engineering B.S. degree is housed within UMBC’s Department of Computer Science and Electrical Engineering and is an ABET Accredited program. Computer engineering focuses on problems that arise from hardware and hardware development, whereas computer science concentrates on issues in computer applications and software development. 
Computer Engineering is a field that combines training in classical Electrical Engineering disciplines with in-depth preparation in Computer Science topics. The result is a trained problem solver who understands both the hardware and software aspects of computers and who can design and implement solutions on both sides of the hardware/software interface. Computer engineers are employed across the wide range of growing industries associated with communications, control, and signal processing and microelectronic fabrication.
Our program provides students with challenging hands-on experiences through a broad and rigorous curriculum that includes exposure to multiple programming languages and development tools in their software courses, practical labs featuring up-to-date equipment in their hardware courses, and coverage of such advanced areas as embedded systems design, digital signal processing, and software engineering. Areas of interest to computer engineers range from circuit theory and digital signal processing to the study of software/hardware interfaces to the design and analysis of hardware systems and devices. Emphasis is placed on the development of problem-solving skills through hands-on laboratory experience with commercial electronic design software and hardware systems. All students participate in a senior-year Capstone project that culminates their training. These skills prepare computer engineers for various academic and industrial positions.
The department has close ties with nearby centers of research and development, such as NASA’s Goddard Space Flight Center, the National Institute of Standards and Technology, the Department of Defense, Northrop Grumman and Verizon.
The Computer Engineering degree offers three tracks: Electronic Systems, Communications, and Cybersecurity.
The Electronic Systems track focuses on large electronic systems and networks. Students who specialize in this track will emerge with experience in VLSI (very large scale integrated) design and the design of programmable logic devices, including FPGAs (fully programmable gate arrays).
 The Communications track focuses on computer and electrical communications networks. Students who specialize in this track will emerge with experience in the electromagnetic and signal processing techniques that are needed to design these networks.
The Cybersecurity track emphasizes security of computer systems, along with in depth design of computer hardware topics closely related to the Electronic Systems Track.
Gateway Courses for Computer Engineering: CMSC 201, MATH 151, PHYS 121 (or 122), CMPE 212 with a grade of “B” or better and ENES 101 with a grade of “C” or better. Enrolling in a gateway course at UMBC or a Computer Engineering Department equivalent course at another institution is considered an attempt.
Repeat Policy: Computer Engineering majors are permitted two attempts in courses required for the major. A course in which the student receives a grade of “W” (Withdraw) is counted as an attempt. Please note that you will not be permitted a third attempt in required courses taken at UMBC or another institution. Students who have more than two attempts in any course required to progress in the major will not be permitted to major in Computer Engineering. This policy is applicable to transfer students.
Students who are accepted into the University having already met the Gateway requirements for their major will remain a Pre-Major until all transcripts with final grades have been received, posted by the Registrar’s Office, and processed by the College of Engineering and Information Technology. Typically, this will happen after the first semester of enrollment at UMBC.
Required Technology
Starting Fall 2020, all students are required to follow the laptop requirement. Incoming students should follow Fall and Spring semester requirements each academic year. Laptops with a webcam are required or a separate webcam, for laptops without inbuilt one, is required.
Combined BS/MS Program
Students who see Graduate School in their future can choose to enroll in the combined B.S./ M.S. program, which will allow them to speedily complete a B.S. in Computer Engineering and an M.S. in Computer Engineering OR Electrical Engineering. For information about requirements and guidelines, go here.">
            <label for="Computer Engineering Overview">Computer Engineering Overview</label>
        </div>
        <div>
            <input type="checkbox" id="Computer Science Overview" class="clause-checkbox" value="Computer Science
The B.S. in Computer Science is housed within UMBC’s Department of Computer Science and Electrical Engineering. Computer Science concentrates on issues in computer applications and software development. 
UMBC’s B.S. in Computer Science, an ABET accredited program, introduces students to a rich and diverse discipline. Opportunities in the exciting emerging fields such as artificial intelligence, machine learning, cybersecurity, malware analysis, mobile computing, graphics, game design, quantum computing, human-computer interaction, forensic analysis, and data science are accessible in a wide range of environments. UMBC computer science graduates are employed by varied businesses: tech industry leaders, government agencies, the defense industry, and video game design companies. Other major employers include financial technology, transportation, and a variety of other startups.
Graduates of the computer science program are well prepared for advanced studies and for problem-solving across the breadth of the discipline: theory, design, architecture, development and application of computers and computer systems. Many go on to graduate school in top Computer Science and Computer Engineering departments. Career paths include software engineers, database administrators, network architects, computer programmers, web developers and information security analysts.
------------------------------------------------------------------------------------------------------
Computer Science Gateway courses: CMSC 201, CMSC 202, and CMSC 203 with grades of B or higher in CMSC 201 and CMSC 202, and a grade of C or higher in CMSC 203.
Grades of C or higher are required for any course required for the computer science major program.
Repeat Policy: Computer Science majors are permitted two attempts in courses required for the major. They are considered registered for a course if they are enrolled after the end of the schedule adjustment period. A course in which the student receives a grade of “W” (Withdraw) is counted as an attempt. Please note that you will not be permitted a third attempt in required courses taken at UMBC or another institution. Students who have more than two attempts in any course required to progress in the major will not be permitted to major in Computer Science. This policy is applicable to transfer students.
Students who are accepted into the University having already met the Gateway requirements for their major will remain a Pre-Major until all transcripts with final grades have been received, posted by the Registrar’s Office, and processed by the College of Engineering and Information Technology. Typically, this will happen after the first semester of enrollment at UMBC.
CMSC Science Requirement: Science sequence plus a lab (sequence of BIO141/BIO142 or CHEM101/CHEM102 or PHYS121/PHYS122 + one lab science to include SCI101L or CHEM102L or PHYS122L or GES286).
Additionally, students who transfer in a science course with a laboratory component will have met the laboratory portion of this requirement so long as the transferred science course is intended for science and/or engineering majors. This includes courses where the laboratory components are transferred without additional credits.
The UMBC computer science B.S. program has several tracks that represent concentrations of study. Current tracks include the following:
·        CYBR: Cybersecurity track
·        DSCI: Data Science track
·        GDEV: Game development track
·        AI/ML: Artificial Intelligence/ Machine Learning Track
Additional information on the Computer Science track requirements can be found here.
Required Technology
Starting Fall 2020, all students are required to follow the laptop requirement. Incoming students should follow Fall and Spring semester requirements each academic year. Current Laptop recommendations can be found here.
">
            <label for="Computer Science Overview">Computer Science Overview</label>
        </div>
        <div>
            <input type="checkbox" id="BTA Overview" class="clause-checkbox" value="">
            <label for="BTA Overview">BTA Overview</label>
        </div>
        <div>
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