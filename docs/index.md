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
		<input type="checkbox" id = "GEP & University Requirements" class="clause-checkbox" value="General Education/University Requirement Information ****************** University Degree Requirements: Minimum Upper-level Credits: Without exception, at least 45 of the minimum 120 credits required for 
graduation must be in UMBC courses numbered at the 300-level or above or their equivalents. 
Minimum Resident Credits: Without exception, students must complete at least 30 credits of coursework at UMBC (referred to as resident credit) to receive a UMBC degree. Of the 30 resident credits, 15 must be upper-level (courses numbered at the 300-level or above). Writing Intensive Course (WI): Without exception, students must complete one writing intensive course; a designated WI course may count for the major or a distribution requirement, or it may be taken as an elective. The WI course must be completed at UMBC; transfer courses may not be used to fulfill this requirement. General Education Requirements: To fulfill general education requirements, students will complete courses distributed across six broad areas of academic inquiry: English Composition (ENGL 100), Mathematics (1 course), Arts and Humanities (3 courses), Social Science (3 courses), Sciences (1 w/lab, 1 w/o lab), Language* and Culture (1 course for BS, 2 for BA) All courses used to satisfy general education requirements must be completed with a 'C' or better. Courses taken on a P/F or S/U basis may not be applied to general education requirements. No one course may be used to satisfy more than one area. No more than three courses from the same discipline may be used throughout the general education program. Language Requirement: The language requirement consists of completion of a foreign language through the 201 level or demonstrated proficiency at that level. Proficiency, the number of courses needed to complete the requirement, and course placement, are determined by previous experience as follows: completion of level 4 or higher of a language in high school (see table ) OR corresponding AP, IB or CLEP credit (see Appendix II, Undergraduate Catalog), OR completion of a language through the 201 level at a regionally accredited college/university For more information about the language requirement, you can visit the Department of Modern Languages, Linguistics, and Intercultural Communication (MLLI) page on 201 Proficiency and High School Language Levels.Students can receive the equivalency for 201 level proficiency to fulfill the GEP language requirement or the language component of the GDR, GER, or GFR by
a)  	demonstrating successfully completed education in a second language or
b) 	through examination.
The equivalency application does not grant credits but rather recognizes completion of the L201 requirement. See details below.
1.      International students and U.S. resident students proficient in a language other than English may receive equivalency for the 201-level proficiency requirement if they present documentation showing that:
a)      they attended a secondary school (i.e., sixth grade or above) in which the language of instruction was not only English, or
b)     they attended an English-speaking secondary school or a comprehensive bi or multi-lingual program accredited by a foreign government and have at least one year of successfully-completed education in a language other than English at that level. 
You can check out the MLLI Policy on Foreign Language 201-level for international students and multi-lingual students to determine your most accurate language placement.">
        <label for ="GEP & University Requirements">GEP & University Requirements</label>
	</div>
	<div>
		<input type="checkbox" id="Extras" class="clause-checkbox" value=" *: Gateway Course
SS & AH GEP: Social Science and Arts & Humanities General Education Program
*These course equivalencies are based on current evaluations from ARTSYS (2025)">
        <label for ="Extras">Extras</label>
	</div>
	<div>
		<input type="checkbox" id="BTA Overview" class="clause-checkbox" value="Business Technology Administration: 
The Bachelor of Arts degree in Business Technology Administration (BTA) program trains students for management positions in the growing job field of Information Systems. This major is housed within UMBC’s Department of Information Systems. It is an interdisciplinary program developing practical knowledge for the integration of computers
, organizational processes, and people into effective and efficient systems. The BTA program is designed for students who want a grounding in the development and use of office systems and computer-based technologies found in business, government, and nonprofit organizations. The BA degree is less technical in nature than the BS program and the focus of the courses is on using IT of different types to solve problems that arise in a business setting. Through a variety of courses such as human resources management, project management, business law, ethics, and operations management, students learn the skills to be successful managers, analysts and, administrators in an Information Systems organization. In addition, BTA students experience working with companies on projects that analyze systems and research solutions for implementation in small and large enterprises. Certificates Whichever program you choose, we offer a wide variety of undergraduate certificates to supplement your interests. From web development to MBA prep, certificates can help you supercharge your education. Certificates can only be earned in conjunction with majoring in one of our undergraduate programs. View all of our Certificate Programs. Accelerated Programs Accelerated programs, also called BS/MS programs, enable students to add a Bachelors AND Masters degree to their resume with only one additional year of study (on average). This saves you time and money. Information on our combined programs can be found here. Scholarships We believe IS students are among the best in the university, and we want to honor that high achievement. We offer several scholarships specifically for students studying Information Systems. Visit our Scholarships page to learn more. Research Opportunities UMBC is one of the few universities committed to undergraduate research, and the IS Department takes this mission seriously. For students interested in pursuing research, we have five main research areas: Artificial Intelligence and Knowledge Management, Data Science, Health Informatics, Human-Centered Computing, and Software Engineering. Check out our Undergraduate Research Opportunities.">
        <label for="BTA Overview Class">BTA Overview Class</label>
	</div>
    <div>
        <input type="checkbox" id = "Computer Engineering Overview" class="clause-checkbox" value = "Computer Engineering The Computer Engineering B.S. degree is housed within UMBC’s Department of Computer Science and Electrical Engineering and is an ABET Accredited program Computer engineering focuses on problems that arise from hardware and hardware development, whereas computer science concentrates on issues in computer applications and software development. Computer Engineering is a field that combines training in classical Electrical Engineering disciplines with in-depth preparation in Computer Science topics. The result is a trained problem solver who understands both the hardware and software aspects of computers and who can design and implement solutions on both sides of the hardware/software interface. Computer engineers are employed across the wide range of growing industries associated with communications, control, and signal processing and microelectronic fabrication. Our program provides students with challenging hands-on experiences through a broad and rigorous curriculum that includes exposure to multiple programming languages and development tools in their software courses, practical labs featuring up-to-date equipment in their hardware courses, and coverage of such advanced areas as embedded systems design, digital signal processing, and software engineering. Areas of interest to computer engineers range from circuit theory and digital signal processing to the study of software/hardware interfaces to the design and analysis of hardware systems and devices. Emphasis is placed on the development of problem-solving skills through hands-on laboratory experience with commercial electronic design software and hardware systems. All students participate in a senior-year Capstone project that culminates their training. These skills prepare computer engineers for various academic and industrial positions. The department has close ties with nearby centers of research and development, such as NASA’s Goddard Space Flight Center, the National Institute of Standards and Technology, the Department of Defense, Northrop Grumman and Verizon. The Computer Engineering degree offers three tracks: Electronic Systems, Communications, and Cybersecurity. The Electronic Systems track focuses on large electronic systems and networks. Students who specialize in this track will emerge with experience in VLSI (very large scale integrated) design and the design of programmable logic devices, including FPGAs (fully programmable gate arrays).  The Communications track focuses on computer and electrical communications networks. Students who specialize in this track will emerge with experience in the electromagnetic and signal processing techniques that are needed to design these networks.The Cybersecurity track emphasizes security of computer systems, along with in depth design of computer hardware topics closely related to the Electronic Systems Track. Gateway Courses for Computer Engineering: CMSC 201, MATH 151, PHYS 121 (or 122), CMPE 212 with a grade of “B” or better and ENES 101 with a grade of “C” or better. Enrolling in a gateway course at UMBC or a Computer Engineering Department equivalent course at another institution is considered an attempt. Repeat Policy: Computer Engineering majors are permitted two attempts in courses required for the major. A course in which the student receives a grade of “W” (Withdraw) is counted as an attempt. Please note that you will not be permitted a third attempt in required courses taken at UMBC or another institution. Students who have more than two attempts in any course required to progress in the major will not be permitted to major in Computer Engineering. This policy is applicable to transfer students. Students who are accepted into the University having already met the Gateway requirements for their major will remain a Pre-Major until all transcripts with final grades have been received, posted by the Registrar’s Office, and processed by the College of Engineering and Information Technology. Typically, this will happen after the first semester of enrollment at UMBC. Required Technology Starting Fall 2020, all students are required to follow the laptop requirement. Incoming students should follow Fall and Spring semester requirements each academic year. Laptops with a webcam are required or a separate webcam, for laptops without inbuilt one, is required. Combined BS/MS Program Students who see Graduate School in their future can choose to enroll in the combined B.S./ M.S. program, which will allow them to speedily complete a B.S. in Computer Engineering and an M.S. in Computer Engineering OR Electrical Engineering. For information about requirements and guidelines, go here.">
            <label for ="Computer Engineering Overview">Computer Engineering overview</label>
    </div>
    <div>
        <input type="checkbox" id= "Computer Science Overivew" class="clause-checkbox" value = "Computer Science The B.S. in Computer Science is housed within UMBC’s Department of Computer Science and Electrical Engineering. Computer Science concentrates on issues in computer applications and software development. UMBC’s B.S. in Computer Science, an ABET accredited program, introduces students to a rich and diverse discipline. Opportunities in the exciting emerging fields such as artificial intelligence, machine learning, cybersecurity, malware analysis, mobile computing, graphics, game design, quantum computing, human-computer interaction, forensic analysis, and data science are accessible in a wide range of environments. UMBC computer science graduates are employed by varied businesses: tech industry leaders, government agencies, the defense industry, and video game design companies. Other major employers include financial technology, transportation, and a variety of other startups. Graduates of the computer science program are well prepared for advanced studies and for problem-solving across the breadth of the discipline: theory, design, architecture, development and application of computers and computer systems. Many go on to graduate school in top Computer Science and Computer Engineering departments. Career paths include software engineers, database administrators, network architects, computer programmers, web developers and information security analysts. ------------------------------------------------------------------------------------------------------ Computer Science Gateway courses: CMSC 201, CMSC 202, and CMSC 203 with grades of B or higher in CMSC 201 and CMSC 202, and a grade of C or higher in CMSC 203. Grades of C or higher are required for any course required for the computer science major program. Repeat Policy: Computer Science majors are permitted two attempts in courses required for the major. They are considered registered for a course if they are enrolled after the end of the schedule adjustment period. A course in which the student receives a grade of “W” (Withdraw) is counted as an attempt. Please note that you will not be permitted a third attempt in required courses taken at UMBC or another institution. Students who have more than two attempts in any course required to progress in the major will not be permitted to major in Computer Science. This policy is applicable to transfer students. Students who are accepted into the University having already met the Gateway requirements for their major will remain a Pre-Major until all transcripts with final grades have been received, posted by the Registrar’s Office, and processed by the College of Engineering and Information Technology. Typically, this will happen after the first semester of enrollment at UMBC. CMSC Science Requirement: Science sequence plus a lab (sequence of BIO141/BIO142 or CHEM101/CHEM102 or PHYS121/PHYS122 + one lab science to include SCI101L or CHEM102L or PHYS122L or GES286). Additionally, students who transfer in a science course with a laboratory component will have met the laboratory portion of this requirement so long as the transferred science course is intended for science and/or engineering majors. This includes courses where the laboratory components are transferred without additional credits. The UMBC computer science B.S. program has several tracks that represent concentrations of study. Current tracks include the following:·        CYBR: Cybersecurity track
·        DSCI: Data Science track
·        GDEV: Game development track
·        AI/ML: Artificial Intelligence/ Machine Learning Track
Additional information on the Computer Science track requirements can be found here.
Required Technology
Starting Fall 2020, all students are required to follow the laptop requirement. Incoming students should follow Fall and Spring semester requirements each academic year. Current Laptop recommendations can be found here.">
        <label for= "Computer Science Overview">Computer Science Overview</label>
    </div>
    <div>
        <input type="checkbox" id= "Chemical Engineering Overview" class="clause-checkbox" value= "Chemical Engineering Overview Chemical and Biochemical Engineering The Department of Chemical and Biochemical Engineering offers an undergraduate program leading to a Bachelor of Science in Chemical Engineering. Chemical engineering students begin their studies by acquiring a good foundation in mathematics, physics and chemistry. Higher level courses cover the engineering, simulation and optimization of chemical processes, including the related economic principles. From creating new vaccines and antibiotics to cleaning up air and water pollution, chemical engineers develop manufacturing processes for a wide variety of applications, including food, pharmaceuticals, chemicals, biotechnology and environmental technology. Students have many opportunities to participate in faculty research. Recent student projects have explored the design of an antibody to target the protein that triggers Alzheimer's disease and the purification of a protein to control cell growth, with potential application for cancer treatment. Chemical engineering graduates are prepared for graduate study or immediate industrial employment in fields such as chemical processing, food processing, metallurgy, energy conversion, petroleum refining and pharmaceutical production. Recent graduates of the department have obtained employment as chemical engineers at W.R. Grace, DuPont, Corning, Exxon, Rohm and Haas, Merck, FMC and International Paper. ----- The B.S. in Chemical Engineering, accredited by the Accreditation Board for Engineering and Technology (ABET). All tracks lead to the B.S. in Chemical Engineering and require the same chemical engineering core classes, we offer three tracks allowing students to specialize in: The Traditional Track prepares students for graduate study or immediate industrial employment in such varied fields as chemical processing, food processing, metallurgy, energy conversion, petroleum refining and pharmaceutical production.The Biotechnology and Bioengineering Track integrates the life sciences into each year of the curriculum and is intended for students who are interested in working in the biotechnology industry, pursuing graduate work in biochemical or biomedical engineering or going to medical school.
The Environmental Engineering and Sustainability Track stems from the traditional chemical engineering track and provides specialization in the application of basic chemical engineering principles in the field of environmental engineering such as cleaning up air and water pollution and managing chemical processes to minimize environmental impact.
The primary differences are in the science courses and technical electives that are taken. Your advisor can help you decide which track is right for you.
For a side-by-side comparison view the ENCH Undergraduate Curriculum chart.
Chemical Engineering Gateway Requirements: Students are admitted to the chemical engineering program only when they pass all four of the following Gateway courses: ENES 101, MATH 152, CHEM 102, and ENCH 215 with a grade of at least two B’s and two C’s.
* Enrolling in a gateway course at UMBC or a Chemical Engineering Department equivalent course at another institution is considered an attempt. Students must select a track to complete—Traditional, Biotechnology/Bioengineering or Environmental Engineering and Sustainability.
Repeat Policy: Chemical Engineering majors are permitted two attempts in courses required for the major. They are considered registered for a course if they are enrolled after the end of the schedule adjustment period. A course in which the student receives a grade of “W” (Withdraw) is counted as an attempt. Please note that you will not be permitted a third attempt in required courses taken at UMBC or another institution. Students who have more than two attempts in any course required to progress in the major will not be permitted to major in Chemical Engineering. This policy is applicable to transfer students. CENG Technology Requirements The Chemical, Biochemical and Environmental Engineering Department requires all incoming students to have their own laptop. Additional information can be found on the Undergraduate Program Policies page, under the “Computer Requirements” section. Accelerated Program UMBC’s Accelerated Program makes it possible to double-count up to 12 credits towards both your undergraduate and graduate coursework.You’ll save money and time as you further your academic career. Students applying to the BSMS program are not required to take the GRE examination. Acceptance into the BSMS program does not bind you to completing a graduate degree at UMBC. Additional information on Chemical Engineering’s Accelerated Programs can be found here. View Testimonials from current chemical engineering students">
        <label for= "Chemical Engineering Overview">Chemical Engineering Overview</label>
    </div>
    <div>
        <input type="checkbox" id= "IS Overview" class="clause-checkbox" value = "Information Systems: The Bachelor of Science in Information Systems gives students an in-depth technical education in computer information systems, and allows students to specialize through the choice of elective courses such as computer networking and health care informatics. The IS program prepares students for all potential career positions in the IS field such as: Systems Analysis and Design, Computer Networking and Health Care Informatics. The IS department teaches students how to design, build and manage computer systems and to be knowledgeable users of them. Students take courses in disciplines such as mathematics and statistics, computer programming, management science, economics and technical writing as well as specific courses in computer information system analysis, design, construction and management. Information systems students are encouraged to participate in internships or co-ops. Students gain practical work experience from companies such as Comcast Cable, the U.S. Census Bureau and the Naval Research Labs. Through the Information Systems Council of Majors, students have opportunities to attend professional meetings of computer-related societies.
-----------------------------------
Information Systems Gateway: Before being allowed to take IS 410 and 450 (and then the rest of the IS 400-level core courses), a student must first complete the following gateway requirements:
A grade of “C” or higher in:
MATH 155 – Elementary Calculus and
IS 147 – Introduction to Computer Programming
And a grade of “B” or higher in:
IS 300 – Management Information Systems and
IS 310 – Software and Hardware Concepts
What is Information Systems?
The human side of computing.
Information systems (IS) are everywhere, from the phone in your pocket to scientists studying the polar ice caps. At its core, IS focuses on the entire system of information, knowledge, delivery and use involved in computer technology.
In our IS program, you will investigate the societal impact of technology, dealing with real and imminent challenges. With the help of our faculty members, you will study, design, develop, and evaluate information technologies to address the needs of a broad range of individuals and organizations.
You will be able to leave UMBC with technical skills like programming, database management, and web design, as well as the business skills required to help you excel in your career.
The information systems department offers undergraduate certificates in
Cybersecurity Informatics Certificate
Health IT Certificate
Decision Making Support Certificate
Network Administration Certificate
Web Development Certificate
Certificate in Auditing for Information System
Research Opportunities
UMBC is one of the few universities committed to undergraduate research, and the IS Department takes this mission seriously. For students interested in pursuing research, we have five main research areas: Artificial Intelligence and Knowledge Management, Data Science, Health Informatics, Human-Centered Computing, and Software Engineering.
Check out our Undergraduate Research Opportunities.
Special Opportunities for Information Systems Students
UMBC has the largest cooperative education program in Maryland. Information Systems students participate in this program in greater numbers than any other major on campus. The department encourages all students to participate in co-op or internship programs. Students have found the experience invaluable in helping them understand class concepts and in getting a job after graduation.  All co-op and many internship programs are paid positions.  Many may also be used toward college credits.
The IS Department is excited to share a new mentoring program for new IS transfer students! Please check out our flyer, and use the information provided to contact us if you're interested in learning more.
Why IS @ UMBC?
IS Student Outlook
Our faculty members are engaged in state-of-the-art research that has resulted in multiple new external grants in areas such as Health IT, Cybersecurity, Big Data/Data Science, Human Centered Computing, and Artificial Intelligence. You can view more of our research projects here.
A career in information systems means you can choose from a variety of job types and know you will be in demand. According to the U.S. Bureau Of Labor Statistics, jobs in computers and information technology are projected to grow 12% between now and 2028, well above the average for all occupations. In 2020, the median annual wage for computers and information technology jobs was $86,320, more than twice the national average.
Certain subsets of the technology industry, like cybersecurity and data science, have job growth and average salary numbers much higher than those above.
Explore the Occupational Outlook Handbook for specifics. We hope you become part of the IS department culture of diverse, welcoming, and inclusive excellence. We look forward to your successful and fruitful learning experiences in the department -------------------------------------- ">
        <label for= "IS Overview">IS Overview </label>
    </div>
    <div>
        <input type="checkbox" id="Mechanical Engineering Overview" class="clause-checkbox" value= "The Department of Mechanical Engineering focuses on the design and production of energy-producing systems and on mechanical devices or mechanisms. These systems and mechanisms are applied to fields ranging from biology to transport systems to manufacturing. The mechanical engineering curriculum at UMBC provides students with thorough training in mathematics, physical sciences, engineering sciences and engineering design. Mechanical engineering students gain a broad education by completing a cross section of courses in the arts and humanities, social sciences, and language and culture. Students are exposed to engineering design by a primary sequence of four required core design courses that are distributed across the curriculum from the freshman through the senior years, plus a design elective. Further design experience is gained in most of the 300 level and above engineering science courses, which have design projects embedded in them. The design courses contain technical material that is appropriate to the level of the course in the curriculum and provide opportunities to practice oral and written communication. An accelerated B.S./M.S. program is offered for undergraduate students who choose to take graduate-level classes in their senior year. Mechanical engineering students participate in activities and professional societies to strengthen their connections to the discipline. A full list of Mechanical Engineering organizations can be found here. Mechanical Engineering Gateway courses: MATH 152-B required, ENES 101-B required, ENME 110-B required Students who are accepted into the University having already met the Gateway requirements for their major will remain a Pre-Major until all transcripts with final grades have been received, posted by the Registrar’s Office, and processed by the College of Engineering and Information Technology. Typically, this will happen after the first semester of enrollment at UMBC.Repeat Policy: Mechanical Engineering majors are permitted two attempts in courses required for the major. They are considered registered for a course if they are enrolled after the end of the schedule adjustment period. A course in which the student receives a grade of “W” (Withdraw) is counted as an attempt. Please note that you will not be permitted a third attempt in required courses taken at UMBC or another institution. Students who have more than two attempts in any course required to progress in the major will not be permitted to major in Mechanical Engineering. This policy is applicable to transfer students Curriculum: Mechanical engineering students begin their studies by acquiring a solid foundation in mathematics, physics and design. Higher-level courses cover the fundamental principles in the areas of solid mechanics, thermo fluids and design and manufacturing systems. Laboratory and elective courses give students the opportunity to test these principles and apply them individually and as teams in projects that involve design challenges from the material processing, energy conversion and aerospace industries, among others. You can find the recommended four-year academic pathway here, as well as tools to help you create your individualized degree plan. Course Descriptions A detailed description of the Mechanical Engineering courses can be found at  UMBC Undergraduate Catalog (select the most recent undergraduate catalog). Select the course descriptions tab or browse for Mechanical Engineering courses (ENME) under E. Click here to see Annual Course Offerings Capstone Design Experience All Mechanical Engineering students take courses in Engineering Design as part of the core curriculum.  The ME Design Experience culminates in a capstone design project, completed as part of a team and designed to provide the students with the type of work they will be performing as practicing engineers.  The projects require hands-on participation in the design process and students learn the progression from identification of customer needs to concept generation and the entire design-build-test cycle. Course topics include system engineering, project management, engineering economics, team dynamics, and legal and ethical responsibility of today’s engineers. Formal technical documentation and oral presentations are emphasized as critical professional skills.See past senior capstone projects here! Laptop Requirements As of Fall 2020, the Department of Mechanical Engineering has put out Laptop Recommendations that are updated regularly. Students may be able to utilize financial aid to cover the cost of a required laptop. Entrepreneurship Interested students may also pursue a minor in Entrepreneurship through the Alex Brown Center for Entrepreneurship by taking a combination of entrepreneurship courses and Mechanical Engineering courses that include entrepreneurial skills development. If you have questions, please contact the Mechanical Engineering Department">
        <label for= "Mechnaical Engineering Overview">Mechnaical Engineering Overview</label>
    </div>
    <div>
        <input type="checkbox" id="COEIT Databook" class="clause-checkbox" value= "College of Engineering and Information Technology Undergraduate Student Databook (Fall 2022) Information below reflects class profiles for COEIT undergraduate students. Additional information and data, including the Freshman Class Profile and Student Body Profile are available from UMBC Undergraduate Admissions. Admissions + Enrollment 4,056 Enrollment Full-time: 3 579 (88.2%) Part-time: 477 (11.8%) 913 Freshmen 891 New Freshmen 275 New Transfer Diversity (including gender + ethnicity) Gender/Sex Female: 961 (23.7%) Male: 3,095 (76.3%) Race/Ethnicity 2 or More: 207 (5.1%) Asian: 1,078 (26.6%) Underrepresented: 1,171 (28.9%) American Indian: 4 Black: 899 Hawaiian/Pacific Islander: 2 Hispanic: 266 White: 1,337 (33.0%) Other/Unspecified: 61 (1.5%) International: 202 (5.0%) Outcomes 869 bachelor’s degrees awarded. 90% of COEIT Bachelor degree recipients reported firm plans of being employed and/or heading to graduate school within six months of graduation. 92% of employed undergraduate degree recipients are in positions directly related to their career goals. 55% of employed undergraduate degree recipients previously interned or worked for that organization while at UMBC. 74% of UMBC’s COEIT seniors engaged in applied learning, such as internships, research, service-learning, study abroad, student teaching and leadership positions while at UMBC. $70,000-$74,999 median starting salary bachelor’s degree full-time. Additional data, including admissions and enrollment, are available from the Institutional Research and Decision Support Databook and website. Additional outcomes and success stories are shared on the UMBC Career Center website. Version: Begin Term Census Note: Enrollments include enrollment counts for Primary Plan only. Note: Due to rounding, percentages may not always appear to add up to 100%. Transfer Admissions Admissions Information: Deadlines for Transfer Student">
    <label for= "COEIT Databook">COEIT Databook</label>
    </div>
    <div>
        <input type="checkbox" id="Transfer Admissions" class="clause-checkbox" value= "Spring Deadlines Fall Deadlines Priority Deadline: October 15th Priority Deadline: March 1st Regular Deadline: December 1st Regular Deadline: June 1st Honor’s College (Priority) October 15th Honor’s College (Priority): March 1st Honor’s College (Regular) December 1st Honor’s College (Regular) June 1st. UMBC is a member of teh Common Application. To apply for admisson, you must submit the completed Common Applicaton, a $75 application fee, and official transcripts from all previously attended institutions. The Admissions Committee evaluates transfer applicants on the basis of their academic record at previous institutions. Cumulative grade point average as calculated by UMBC, academic trends, strength of curriculum, and performance in courses related to the intended area of study are considered. Competitive applicants typically present an overall cumulative grade point average of 3.0 or higher in all college level coursework. Applicants can expect a decision notification 3-4 weeks from the time a completed application is received by the Office of Undergraduate Admissions.Once you have completed your application you will be assigned a student ID number. You can use this information to search for scholarships in Scholarship Retriever. Undergraduate Admissions Upcoming Events Transfer Central can show how courses will transfer in the context of our degree requirements, including your anticipated major(s). You can select up to three majors at a time before entering your coursework. Click view details to see what credits are transferable and how they apply toward general education requirements and major requirements. Community College Partnerships - Choose your community college below to explore opportunities available to you. How to Apply for Transfer Admission Complete the Common Application in its entirety. Apply Online Complete the residency questions. This information is located in the Member Questions section for applicants seeking in-state residency for tuition purposes. Submit the Common Application and $75 non-refundable application fee. Prior to the deadline, make sure that there are green “complete” checkmarks under the application in your “My Colleges” dashboard under UMBC, and click submit. UMBC does not require submissions of an Academic Evaluator, College Report, Secondary School Final Report, or Midterm Report to complete the transfer application. Submit official transcripts. Official transcripts from each college or university you have attended are required as part of your transfer application. It is the applicant’s responsibility to request transcripts from each of their prior colleges. The transcript should be sent directly from the institution to UMBC electronically at admissions@umbc.edu or by mail to the address below after the application is submitted If you have any questions that you’d like to discuss with an admissions counselor, you can schedule an appointment by visiting the following link, https://undergraduate.umbc.edu/counselors/ UMBC Tuition Information">
        <label for="Transfer Admissions">Transfer Admissions</label>
    </div>
    <div>
        <input type="checkbox" id="Financial Aid" class="clause-checkbox" value= "Financial Aid UMBC offers a range of financial aid and payment options so that all students may benefit from a UMBC education. Students may apply for need-based financial aid using the Free Application for Federal Student Aid (FAFSA). Students may also be considered for general merit scholarships by meeting priority admissions application deadlines. For more information, please visit our Financial Aid and Scholarships Website. Submit/update your Free Application for Federal Student Aid (FAFSA) online or via the myStudentAid mobile app. Be sure to add UMBC/school code 002105 Need help submitting the FAFSA? Get help directly from the source. -Financial aid eligibility is evaluated after university admission. Students are notified via email when their financial aid offer is available to view in myUMBC. Estimate your out-of-pocket expenses using our Cost Calculator tool. Apply for Scholarships: UMBC offers both need and merit-based aid for prospective freshmen and transfer students Learn more about the scholarship opportunities available at UMBC here: Income Transfer Student Scholarships UMBC Scholarship Retriever  Outside Scholarships Scholars Programs Admissions Application (Common App) and college transcripts must be received by the priority deadline in order to be guaranteed consideration for merit-based scholarships. Our staff is available Monday-Friday 8:30AM-4:30PM. Feel free to contact our office with any questions you might have! Be sure to visit the rest of our website for more information that may meet your specific needs. Scholars Programs: UMBC’s Cyber Scholars Program is geared towards preparing the next generation of cybersecurity professionals in an increasingly digital age.  The program was launched through a generous grant from the Northrop Grumman Foundation and in partnership with the Center for Women in Technology (CWIT). Transfer Student Priority Deadline: March 1 for fall applicants and January 15 for spring applicants. T-SITE Scholars - The Transfer Scholars in Information Technology and Engineering  (T-SITE) program began in March of 2012. Funded by a second award from the National Science Foundation (NSF), this need-based scholarship supports new transfer students with scholarships of up to $8,000 per year based on financial eligibility on the FAFSA. Transfer Scholars also receive academic support through a variety of CWIT programs and services. Scholarship Details: Scholarships of up to $8,000 per year based on UMBC Financial Aid Office review Transfer Scholars must maintain a 3.0 GPA at UMBC. Required participation in CWIT community events focused on academic, professional, and leadership development. Women and underrepresented minorities are strongly encouraged to apply. T-SITE Scholar Experience:   T-SITE Scholars are part of the larger CWIT community of Scholars and Affiliates.  Academic success and professional development are achieved through a number of program elements. Members of the CWIT community are encouraged to live in the CWIT Living Learning Community in the residence halls. All T-SITE Scholars: Are assigned a faculty and peer mentor in their major; Explore career options, develop lifelong career management skills, and identify internships, and post-graduation jobs through professional development events and an assigned Industry mentor; Participate in a seminar specifically designed for transfer students; Meet regularly with a CWIT professional advisor to set goals and track individual progress; Develop leadership skills through involvement in student organizations and K-12 outreach. T-SITE Application for Fall cohort (Due March 1)">
    <label for="Financial Aid">Financial Aid</label>
    </div>
    <div>
        <input type="checkbox" id="Pre-Professional Programs" class="clause-checkbox" value= "Pre-Professional Programs: Pre-Dental Hygiene, Pre-Nursing, Pre-Occupational Therapy, Pre-Pharmacy, Pre-Physical Therapy, Pre-Physician Assistant, Pre-Medicine, Pre-Dentistry, Pre-Veterinary or Pre-Optometry, Pre- Law UMBC offers allied health programs to prepare students for clinical training in Dental Hygiene, Nursing, Occupational Therapy, Pharmacy, Physical Therapy, and Physician Assistant. These programs involve two to four years of intensive study at UMBC. After completing 63 to 120 credits of required coursework and satisfying other requirements (which may include, shadowing experiences, volunteer work, patient contact hours, and scores on a national entrance examination), students apply to allied health programs in Maryland and throughout the United States. Because students who are planning to pursue admission to a professional program have great deal of freedom when it comes to choosing an undergraduate major, Pre-Professional Advising is provided to students separately from the Academic Advising provided by the department of a student’s declared major. Students planning to pursue a health profession work with specially-trained health professions advisors in one of two offices on campus, determined by the specific health profession being pursued. The PreMedical and PreDental Advising Office has information for students planning to apply to Medical, Dental, Veterinary, Optometry, and Podiatry programs. The Office for Academic & Pre-Professional Advising has information for students planning to apply to Nursing, Pharmacy, Physical Therapy, Occupational Therapy, Physician Assistant, Dental Hygiene, Medical & Research Technology, and other allied health programs. Students planning to apply to Law School, or who wish to pursue employment in law-related areas, work with the UMBC Department of Political Science, which coordinates the Pre-Law program.">
    <label for="Pre-Professional Programs">Pre-Professional Programs</label>
    </div>
    <div>
        <input type="checkbox" id="Applied & Experiential Learning" class="clause-checkbox" value= "">
    <label for="Applied & Experiential Learning">Applied & Experiential Learning</label>
    </div>
    <div>
        <input type="checkbox" id="Transfer Student Alliance" class="clause-checkbox" value= "">
    <label for="Transfer Student Alliance">Transfer Student Alliance</label>
    </div>
    <div>
        <input type="checkbox" id="First-Year Transfer Opportunities" class="clause-checkbox" value= "">
    <label for="First-Year Transfer Opportunities">First-Year Transfer Opportunities</label>
    </div>
    <div>
        <input type="checkbox" id="CETI" class="clause-checkbox" value= "">
    <label for="CETI">CETI</label>
    </div>
    <div>
        <input type="checkbox" id="COEIT Student Orgs" class="clause-checkbox" value= "">
    <label for="COEIT Student Orgs">COEIT Student Orgs</label>
    </div>
    <div>
        <input type="checkbox" id="Academic Resources" class="clause-checkbox" value= "">
    <label for="Academic Resources">Academic Resources</label>
    </div>
    <div>
        <input type="checkbox" id="Transferring Coursework" class="clause-checkbox" value= "">
    <label for="Transferring Coursework">Transferring Coursework</label>
    </div>
    <div>
        <input type="checkbox" id="Credit When it's Due" class="clause-checkbox" value= "">
    <label for="Credit When it's Due">Credit When it's Due</label>
    </div>
    <div>
        <input type="checkbox" id="Career & Goal Setting" class="clause-checkbox" value= "">
    <label for="Career & Goal Setting">Career & Goal Setting</label>
    </div>
    <div>
        <input type="checkbox" id="Military and Veteran Students" class="clause-checkbox" value= "">
    <label for="Military and Veteran Students">Military and Veteran Students</label>
    </div>
    <div>
        <input type="checkbox" id="ROTC" class="clause-checkbox" value= "">
    <label for="ROTC">ROTC</label>
    </div>
    <div>
        <input type="checkbox" id="Second BS info" class="clause-checkbox" value= "">
    <label for="Second BS info">Second BS info</label>
    </div>
    <div>
        <input type="checkbox" id="Dual Major/Double Major" class="clause-checkbox" value= "">
    <label for="Dual Major/Double Major">Dual Major/Double Major</label>
    </div>
    <div>
        <input type="checkbox" id="The Honors College" class="clause-checkbox" value= "">
    <label for="The Honors College">The Honors College</label>
    </div>
    <div>
        <input type="checkbox" id="SDS" class="clause-checkbox" value= "">
    <label for="SDS">SDS</label>
    </div>
    <div>
        <input type="checkbox" id="Reslife" class="clause-checkbox" value= "">
    <label for="Reslife">Reslife</label>
    </div>
    <div>
        <input type="checkbox" id="IS vs. CMSC" class="clause-checkbox" value= "">
    <label for="IS vs. CMSC">IS vs. CMSC</label>
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
