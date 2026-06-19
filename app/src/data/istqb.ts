import type { QuizQuestion } from './quiz'

export const istqbQuestions: QuizQuestion[] = [
    // ── Practice 1 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following is a typical objective of testing?',
        options: ['To find defects and failures', 'To validate the project plan works as required', 'Ensuring of complete testing', 'Comparing actual results with expected results'],
        answer: 0,
        explanation: 'Finding defects is a core objective. Validating the project plan is project management. Exhaustive testing is impossible (principle #2). Comparing results is an activity, not an objective.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following is an example of a FAILURE in a car cruise control system?',
        options: ['The developer forgot to rename variables after a cut-and-paste', 'Unnecessary code that sounds an alarm when reversing was included', 'The system stops maintaining speed when the radio volume is changed', 'The design specification wrongly states speeds'],
        answer: 2,
        explanation: 'A failure is a runtime deviation from expected behavior visible to the user. C is a visible failure. A and D are defects in code/spec; B is a defect (wrong code included).'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following is a DEFECT rather than a root cause in a fitness tracker?',
        options: ["The requirements author was unfamiliar with fitness, so wrongly assumed heartbeat in beats per hour", "The tester hadn't been trained in state transition testing, so missed a major defect", 'An incorrect configuration variable implemented for GPS could cause location problems during daylight saving', 'The designer had never worked on wearable devices and misunderstood reflected sunlight effects'],
        answer: 2,
        explanation: 'An incorrect configuration variable is faulty software (a defect). A, B, D are root causes – lack of domain knowledge or training.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'A product owner says your role as tester is to catch all bugs before the end of each iteration. Which testing principle best responds to this false statement?',
        options: ['Defect clustering', 'Testing shows the presence of defects, not their absence', 'Absence-of-errors fallacy', 'Root cause analysis'],
        answer: 1,
        explanation: "Testing can show presence of defects but cannot prove their absence – so you can never guarantee all bugs are caught."
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following is an example of a task that can be carried out as part of the TEST PROCESS?',
        options: ['Analyzing a defect', 'Designing test data', 'Assigning a version to a test item', 'Writing a user story'],
        answer: 1,
        explanation: 'Designing test data is a test implementation task. Analyzing a defect is debugging (development). Assigning versions is configuration management. Writing user stories is the product owner\'s task.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Match: A=Test design, B=Test implementation, C=Test execution, D=Test completion with 1=Entering change requests for open defects, 2=Identifying test data to support test cases, 3=Prioritizing test procedures and creating test data, 4=Analyzing discrepancies to determine their cause',
        options: ['A-2, B-3, C-4, D-1', 'A-2, B-1, C-3, D-4', 'A-3, B-2, C-4, D-1', 'A-3, B-2, C-1, D-4'],
        answer: 0,
        explanation: 'Test design → identifying data (2). Test implementation → prioritizing & creating data (3). Test execution → analyzing discrepancies (4). Test completion → entering change requests (1).'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which activity is part of TEST ANALYSIS in the test process?',
        options: ['Identifying required infrastructure and tools', 'Creating test suites from test scripts', 'Analyzing lessons learned for process improvement', 'Evaluating the test basis for testability'],
        answer: 3,
        explanation: 'Test analysis involves evaluating the test basis to identify testable features. A is test design, B is implementation, C is completion.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which test activity produces a Test Charter as output?',
        options: ['Test planning', 'Test monitoring and control', 'Test analysis', 'Test design'],
        answer: 3,
        explanation: 'Test charters are produced during test design. They define the scope and focus of exploratory test sessions.'
    },

    // ── Practice 2 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which SDLC testing statements are TRUE? 1=Each development activity should have a corresponding test activity. 2=Reviewing should start as soon as FINAL documents are available. 3=Test design and implementation should start during the development activity. 4=Testing should start early in the SDLC.',
        options: ['True: 1,2 / False: 3,4', 'True: 2,3 / False: 1,4', 'True: 1,2,4 / False: 3', 'True: 1,4 / False: 2,3'],
        answer: 3,
        explanation: '1: TRUE. 2: FALSE – reviewing starts on DRAFTS, not final docs. 3: FALSE – test ANALYSIS & DESIGN should start; not implementation. 4: TRUE.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'An OS product is tested to verify support for various x86 PCs and confirm important brands work. What type of test is this?',
        options: ['Performance test', 'Processor test', 'Functional test', 'Portability test'],
        answer: 3,
        explanation: 'Testing that software runs correctly across different hardware configurations is a portability test – a non-functional test type.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which statement about regression testing is FALSE?',
        options: ['Regression testing should be performed whenever software is changed', 'Regression tests should be reviewed to ensure they are still relevant', 'Automated regression testing is always more efficient than manual regression testing', 'Regression tests can be run many times'],
        answer: 2,
        explanation: 'C is FALSE – automation can improve efficiency but does not guarantee it is always more efficient than manual testing.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'When should MAINTENANCE testing be carried out?',
        options: ['When any software is modified to remove defects', 'When deployed software or its environment changes', 'When deployed software has been in service for an extended period', 'When requirements change late in development'],
        answer: 1,
        explanation: 'Maintenance testing is triggered by changes to already released software or its environment.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which CORRECTLY describes the role of impact analysis in Maintenance Testing?',
        options: ['Used when deciding if a fix to a maintained system is worthwhile', 'Identifies how data should be migrated into the maintained system', 'Decides which hot fixes are of most value to the user', 'Determines the effectiveness of new maintenance test cases'],
        answer: 0,
        explanation: 'Impact analysis shows which parts are affected by a change, helping evaluate whether the fix is worthwhile given the regression testing scope.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which BEST compares confirmation and regression testing?',
        options: ["Regression: old tests still work. Confirmation: fix hasn't broken other parts", 'Confirmation: defect fixed. Regression: no other parts adversely affected', "Regression: changes haven't caused failure. Confirmation: old tests give same results", 'Confirmation: changes made successfully. Regression: failed tests now work'],
        answer: 1,
        explanation: "Confirmation testing verifies the specific defect is fixed. Regression testing checks that the fix hasn't introduced new problems elsewhere."
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'What is the key difference between ALPHA and BETA testing?',
        options: ["Alpha: at developer's site; Beta: at customer's site", 'Alpha: by developers; Beta: by customers', 'Alpha: by customers; Beta: by developers', "Alpha: at customer's site; Beta: at developer's site"],
        answer: 0,
        explanation: "Both are done by customers/users, but alpha is at the developer's site with developer present; beta is at the customer's own location."
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which is TRUE regardless of the development lifecycle model used?',
        options: ['Testers should review all development documents', 'The majority of development activities have an associated testing activity', 'Design of tests should begin after the development activity has completed', 'Each test level has objectives specific to that level'],
        answer: 3,
        explanation: 'D is universally true – test levels always have specific objectives, regardless of the SDLC model.'
    },

    // ── Practice 3 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which statement CORRECTLY reflects the value of static testing?',
        options: ['Reviews have increased spec quality AND time required', 'Static testing gives cheaper defect management by finding defects later', 'Static analysis improved tester–developer communication', 'Static analysis finds coding defects that might not be found by dynamic testing alone'],
        answer: 3,
        explanation: 'Static analysis can find dead code, unreachable branches, etc. that dynamic testing might miss. A: reviews decrease time, not increase it. B: earlier detection = cheaper to fix.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which statement about checklists in a formal review is CORRECT?',
        options: ['During review planning, reviewers create the checklists', 'During issue communication, reviewers fill in the checklists', 'During the review meeting, reviewers create defect reports based on checklists', 'During review initiation (kick-off), reviewers receive the checklists'],
        answer: 3,
        explanation: 'Checklists are distributed during the initiation/kick-off phase and used during individual review.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which CORRECTLY matches roles in a formal review?',
        options: ['Manager – Decides on the execution of reviews', 'Review Leader – Ensures effective running of review meetings', 'Scribe – Fixes defects in the work product', 'Moderator – Monitors ongoing cost-effectiveness'],
        answer: 0,
        explanation: 'A) Correct – the manager decides whether reviews are performed. The moderator runs meetings. The author fixes defects. The manager monitors cost.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'A review has: a scribe, purpose to detect defects, the meeting is led by the AUTHOR, individual review is done first. Which review type is MOST likely?',
        options: ['Informal Review', 'Walkthrough', 'Technical Review', 'Inspection'],
        answer: 1,
        explanation: 'The author leading the meeting is characteristic of a walkthrough. Inspections use a trained moderator.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which is a benefit of carrying out static testing BEFORE dynamic testing?',
        options: ['It may find defects that would be more expensive to fix if found later', 'It detects failures before release', 'It is easier and takes less time to set up', 'It would be impossible to find the same defects with dynamic testing'],
        answer: 0,
        explanation: 'A) Early defect detection reduces cost. B) Wrong – static testing finds defects, not failures (failures require code execution).'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Requirements: 6=Librarians get responses ≤5s; 9=Borrowers fined if not returned within 3 weeks; 11=Borrowers may borrow for max 4 weeks; 15=All users get responses ≤3s. Which pairs are INCONSISTENT?',
        options: ['6-10, 6-15, 7-12', '6-15, 9-11', '6-10, 6-15, 9-11', '6-15, 7-12'],
        answer: 1,
        explanation: '6-15: Librarians ≤5s conflicts with "all users ≤3s". 9-11: Fined after 3 weeks but allowed to borrow for 4 weeks – inconsistent.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which work products CAN be reviewed? i=Business requirements, ii=Schedule, iii=Test budget, iv=Third-party executable code, v=User stories with acceptance criteria',
        options: ['i and iv', 'i, ii, iii and iv', 'i, ii, iii, and v', 'iii, iv, v'],
        answer: 2,
        explanation: 'Third-party executable code (iv) cannot be reviewed – no source available. All others (i, ii, iii, v) are readable documents and can be reviewed.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which review type BEST suits safety-critical components where the process must be demonstrably formal?',
        options: ['Informal Review', 'Technical Review', 'Inspection', 'Walkthrough'],
        answer: 2,
        explanation: 'Inspection is the most formal review type – uses defined process, entry/exit criteria, rules, checklists, and metrics.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: "A team's velocity increases after user story refinement sessions become more effective at detecting defects. Which benefit of static testing is MOST DIRECTLY related?",
        options: ['Increasing total cost of quality', 'Reducing testing cost', 'Increasing development productivity', 'Reducing total cost of quality'],
        answer: 2,
        explanation: 'Velocity measures development productivity in Agile. Early defect detection increases the whole team\'s productivity.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which are TRUE for STATIC testing? i=Abnormal external behaviors easier to identify; ii=Coding standard deviations easier to find; iii=Identifies failures when software runs; iv=Objective is to identify defects early; v=Missing security coverage easier to find',
        options: ['i, iv, v', 'i, iii, iv', 'ii, iii', 'ii, iv, v'],
        answer: 3,
        explanation: 'ii) Coding standards → static. iv) Early defect detection → both static & dynamic. v) Coverage gaps → static. i) Runtime behavior → dynamic. iii) Explicitly dynamic.'
    },

    // ── Practice 4 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which BEST describes exploratory testing?',
        options: ["In-depth investigation of the test object to identify weaknesses examined by test cases", 'An approach where testers dynamically design and execute tests based on knowledge, exploration, and previous results', 'Testing planned as uninterrupted sessions, often used with checklist-based testing', "Testing based on the tester's experience, knowledge, and intuition"],
        answer: 1,
        explanation: 'B is the ISTQB glossary definition of exploratory testing. D describes experience-based testing in general.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Fitness app: ≤1000=Couch Potato | 1001–2000=Lazy Bones | 2001–4000=Getting There | 4001–6000=Not Bad | 6001+=Way to Go. Which inputs give HIGHEST equivalence partition coverage?',
        options: ['0, 1000, 2000, 3000, 4000', '1000, 2001, 4000, 4001, 6000', '123, 2345, 3456, 4567, 5678', '666, 999, 2222, 5555, 6666'],
        answer: 3,
        explanation: 'D: 666(P1), 999(P1), 2222(P3), 5555(P4), 6666(P5) = 4 distinct partitions. A, B, C each cover only 3 distinct partitions.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Smart home temp: ≤10°C=Icy Cool | 11–15°C=Chilled Out | 16–19°C=Cool Man | 20–22°C=Too Warm | 23°C+=Hot. Using TWO-POINT BVA, which inputs give highest boundary coverage?',
        options: ['0°C, 11°C, 20°C, 22°C, 23°C', '9°C, 15°C, 19°C, 23°C, 100°C', '10°C, 16°C, 19°C, 22°C, 23°C', '14°C, 15°C, 18°C, 19°C, 21°C, 22°C'],
        answer: 2,
        explanation: 'Boundary values: 10,11|15,16|19,20|22,23. C covers 10,16,19,22,23 = 5 boundary values. A=4, B=3, D=3.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'You test a mobile banking app by evaluating each screen against a general list of UI best practices from a usability book. Which technique BEST categorizes this?',
        options: ['Black-box', 'Exploratory', 'Checklist-based', 'Error guessing'],
        answer: 2,
        explanation: "Using a predefined checklist (the book's best practices) to guide testing is checklist-based testing."
    },

    // ── Practice 5 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'A test plan states: "Testing will use component and integration testing. Regulations require 100% branch coverage for each critical component." Which part of the test plan is this?',
        options: ['Communication', 'Risk register', 'Context of testing', 'Test approach'],
        answer: 3,
        explanation: 'Test levels and coverage criteria belong to the test approach section of a test plan.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which task is MOST LIKELY performed by the TEST MANAGER?',
        options: ['Write test summary reports based on information gathered during testing', 'Review tests developed by others', 'Prepare and acquire test data', 'Analyze, review, and assess requirements for testability'],
        answer: 0,
        explanation: 'Writing test summary/completion reports is a test manager responsibility. B, C, D are typical tester tasks.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Classify: 1=Budget spent, 2=96% tests executed, 3=Performance test environment set up, 4=No critical defects open, 5=Autopilot specs reviewed, 6=Tax component passed unit testing. Entry vs Exit criteria?',
        options: ['Entry: 5,6 / Exit: 1,2,3,4', 'Entry: 2,3,6 / Exit: 1,4,5', 'Entry: 1,3 / Exit: 2,4,5,6', 'Entry: 3,5,6 / Exit: 1,2,4'],
        answer: 3,
        explanation: 'Entry (prerequisites): 3=environment ready, 5=test basis reviewed, 6=passed prior level. Exit (signals to stop): 1=budget spent, 2=tests executed, 4=defect level acceptable.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which statement about test estimation approaches is CORRECT?',
        options: ['Metrics-based: estimate only available after testing starts', 'Expert-based: expert users identified by the client recommend the budget', 'Expert-based: test managers predict expected testing effort', 'Metrics-based: average costs from past projects used as budget'],
        answer: 2,
        explanation: 'Expert-based estimation uses judgment of those responsible for testing. Metrics-based can use past project data before testing starts.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which BEST defines risk level?',
        options: ['Sum of probabilities of all problem situations and their financial harm', 'Probability of a threat × chance the threat results in financial damage', 'Combination of the probability of an undesirable event and its expected impact', 'Sum of all potential hazards × sum of all potential losses'],
        answer: 2,
        explanation: 'Risk level = likelihood × impact. C captures this correctly.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which is MOST likely an example of a PRODUCT risk?',
        options: ['The expected security features may not be supported by the system architecture', 'Developers may not have time to fix all defects found', 'Test cases may not provide full coverage of requirements', 'The performance test environment may not be ready before delivery'],
        answer: 0,
        explanation: 'Product risks relate to quality characteristics of the system. A) is a security quality risk. B, C, D are project/process risks.'
    },

    // ── Practice 6 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which describes the MOST COMMON situation for a failure discovered during testing or production?',
        options: ['The product crashed when the user selected a dialog box option', 'The wrong version of compiled source code was included in the build', 'The computation algorithm used the wrong input variables', 'The developer misinterpreted the requirement for the algorithm'],
        answer: 3,
        explanation: 'The most common root cause is human error – typically a developer misinterpreting a requirement, which leads to a defect, which causes a failure.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which is an example of MAINTENANCE testing?',
        options: ['Testing corrected defects during development of a new system', 'Testing enhancements to an existing operational system', 'Handling complaints about quality during UAT', 'Integrating functions during development of a new system'],
        answer: 1,
        explanation: 'Maintenance testing applies to systems already in production. B describes testing an enhancement to a live system.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which BEST describes non-functional testing?',
        options: ['Testing an integrated system to verify it meets specified requirements', 'Testing to determine system compliance with coding standards', 'Testing without reference to internal structure of the system', 'Testing system characteristics such as usability, reliability, or maintainability'],
        answer: 3,
        explanation: 'Non-functional testing evaluates HOW the system performs, not WHAT it does – quality characteristics like performance, security, usability.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which is TRUE about regression and confirmation testing?',
        options: ['Regression: check if correction was successful. Confirmation: verify no side effects', 'Regression: detect unintended side effects. Confirmation: check if system works in new environment', 'Regression: detect unintended side effects. Confirmation: check if original defect was fixed', 'Regression: check if new functionality works. Confirmation: check if original defect was fixed'],
        answer: 2,
        explanation: 'Confirmation: specific defect is fixed. Regression: no other parts broke as a result of the fix.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'What is the MAIN benefit of independent testing?',
        options: ["Avoids author bias – testing not only from the author's point of view", 'Ensures the maximum number of defects is found', 'Provides an opportunity to check that standards have been adhered to', 'Educates developers from other projects'],
        answer: 0,
        explanation: 'The primary benefit of independent testing is objectivity – testers who did not write the code have fewer blind spots.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Many organizations call the test department the "QA department." Is this correct?',
        options: ['Correct – testing and QA mean the same thing', 'Correct – the names can be used interchangeably', 'Not correct – testing is broader; it includes all activities regarding quality', 'Not correct – QA focuses on quality-related processes; testing demonstrates fitness and detects defects'],
        answer: 3,
        explanation: 'QA is process-oriented (ensuring right processes are used); testing finds defects and evaluates quality. They overlap but are not the same.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Regression testing should be performed when: I=Once a month; II=A defect has been fixed; III=The test environment has changed; IV=The software has changed',
        options: ['II and IV', 'II, III and IV', 'I, II and III', 'I and III'],
        answer: 1,
        explanation: 'II) Fixing a defect triggers regression. III) Environment changes may expose regressions. IV) Software changes trigger regression. I) Monthly is arbitrary, not a trigger.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'What defines the SCOPE of maintenance testing?',
        options: ['The coverage of the current regression pack', 'The size and risk of any change(s) to the system', 'The time since the last change was made', 'Defects found at the last regression test run'],
        answer: 1,
        explanation: 'Scope of maintenance testing is determined by impact analysis – the size and risk of the change.'
    },

    // ── Practice 1 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following statements about testing and debugging is CORRECT?',
        options: [
            'Testing and debugging are the same activity',
            'Testing identifies defects; debugging locates and fixes them',
            'Debugging identifies defects; testing locates and fixes them',
            'Testing and debugging are both performed only by developers'
        ],
        answer: 1,
        explanation: 'Testing identifies failures; debugging is the development activity that locates, analyzes, and fixes defects.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following is a benefit of early testing?',
        options: [
            'Eliminates the need for testing later in the SDLC',
            'Reduces the cost of fixing defects',
            'Guarantees the product will be defect-free',
            'Allows the test team to skip system testing'
        ],
        answer: 1,
        explanation: 'The earlier a defect is found, the cheaper it is to fix. Early testing does not eliminate later testing or guarantee defect-free software.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which testing principle states that testing cannot prove the absence of defects?',
        options: [
            'Exhaustive testing is impossible',
            'Defect clustering',
            'Testing shows the presence of defects',
            'Pesticide paradox'
        ],
        answer: 2,
        explanation: 'Principle 1: Testing can show that defects are present, but cannot prove there are no defects.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'A tester notices that a small number of modules contain most of the defects found. Which testing principle does this illustrate?',
        options: [
            'Pesticide paradox',
            'Defect clustering',
            'Absence-of-errors fallacy',
            'Exhaustive testing is impossible'
        ],
        answer: 1,
        explanation: 'Defect clustering (principle 5) states that a small number of modules usually contain the majority of defects found during pre-release testing.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which activity is part of the test analysis phase?',
        options: [
            'Creating the test schedule',
            'Identifying test conditions from the test basis',
            'Executing test cases and comparing results',
            'Evaluating exit criteria'
        ],
        answer: 1,
        explanation: 'Test analysis involves analyzing the test basis to identify testable features and define test conditions. Scheduling is planning; execution is test execution; evaluating exit criteria is test completion.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following BEST describes a test oracle?',
        options: [
            'A tool that automatically generates test cases',
            'A source used to determine expected results',
            'A testing environment with pre-loaded data',
            'A checklist of testing standards'
        ],
        answer: 1,
        explanation: 'A test oracle is any source (specification, existing system, expert knowledge) used to determine whether actual test results match expected results.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'What does the "pesticide paradox" mean in testing?',
        options: [
            'Repeating the same tests will find new defects over time',
            'If the same tests are run repeatedly, they stop finding new defects',
            'Testing too early causes more defects to be introduced',
            'Test automation eliminates the need for manual testing'
        ],
        answer: 1,
        explanation: 'Principle 5 (pesticide paradox): Repeating the same tests will eventually stop finding new defects. Tests must be reviewed and updated regularly.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following BEST describes "confirmation testing"?',
        options: [
            'Testing to confirm all requirements are met',
            'Re-running tests that previously failed to verify a defect has been fixed',
            'Testing carried out by the end user to confirm acceptance',
            'Testing performed to validate the test environment'
        ],
        answer: 1,
        explanation: 'Confirmation testing (re-testing) re-executes tests that failed due to a defect, to verify the fix resolves it.'
    },

    // ── Practice 2 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which statement about the V-model is CORRECT?',
        options: [
            'Each development phase corresponds to a test level',
            'Testing begins only after coding is complete',
            'It is only applicable to agile projects',
            'Unit testing corresponds to system requirements'
        ],
        answer: 0,
        explanation: 'In the V-model, each development phase has a corresponding test level: unit testing ↔ component design, integration testing ↔ architectural design, system testing ↔ system requirements, acceptance testing ↔ business requirements.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which of the following is a characteristic of acceptance testing?',
        options: [
            'Focuses on internal code logic',
            'Is typically performed by developers',
            'Validates the system against user needs and contractual requirements',
            'Is only performed in the waterfall model'
        ],
        answer: 2,
        explanation: 'Acceptance testing validates that the system satisfies user needs and contractual requirements. It is typically performed by users or customers, not developers.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'What is the primary purpose of integration testing?',
        options: [
            'To test individual components in isolation',
            'To test interactions between components or systems',
            'To verify the whole system meets requirements',
            'To validate the software with end users'
        ],
        answer: 1,
        explanation: 'Integration testing focuses on defects in the interfaces and interactions between components or systems.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which test type focuses on NON-functional characteristics such as performance and usability?',
        options: [
            'Functional testing',
            'Regression testing',
            'Non-functional testing',
            'Structural testing'
        ],
        answer: 2,
        explanation: 'Non-functional testing evaluates characteristics like performance, usability, reliability, and security — how well the system works, not what it does.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'In which SDLC model is testing most integrated with development from the start?',
        options: [
            'Waterfall',
            'V-model',
            'Agile',
            'Big Bang'
        ],
        answer: 2,
        explanation: 'Agile development integrates testing throughout the development lifecycle with short iterations, continuous feedback, and collaboration between testers and developers.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'What is the main purpose of regression testing?',
        options: [
            'To test new features for the first time',
            'To confirm that changes have not introduced new defects in unchanged areas',
            'To validate performance under peak load',
            'To test the system in the production environment'
        ],
        answer: 1,
        explanation: 'Regression testing confirms that changes (bug fixes, new features) have not adversely affected existing functionality.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which of the following BEST describes "smoke testing"?',
        options: [
            'A detailed functional test of all features',
            'A quick check to see if a build is stable enough for further testing',
            'Performance testing under extreme load conditions',
            'Testing focused on security vulnerabilities'
        ],
        answer: 1,
        explanation: 'Smoke testing (build verification) is a shallow, wide test used to assess whether a build is stable enough for more rigorous testing to proceed.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which test level is MOST associated with verifying that modules work together correctly?',
        options: [
            'Component testing',
            'Integration testing',
            'System testing',
            'Acceptance testing'
        ],
        answer: 1,
        explanation: 'Integration testing verifies that components work together correctly. Component testing tests them in isolation.'
    },

    // ── Practice 3 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following is a static testing technique?',
        options: [
            'Equivalence partitioning',
            'Exploratory testing',
            'Code walkthrough',
            'Boundary value analysis'
        ],
        answer: 2,
        explanation: 'A code walkthrough is a static review technique. Equivalence partitioning and BVA are dynamic test design techniques. Exploratory testing is a dynamic approach.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which type of review is the MOST formal?',
        options: [
            'Informal review',
            'Walkthrough',
            'Technical review',
            'Inspection'
        ],
        answer: 3,
        explanation: 'Inspection is the most formal review type: it follows a defined process, has trained moderators, uses entry/exit criteria, and produces formal metrics.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'What is the role of the "author" in a formal review?',
        options: [
            'Leads the review meeting',
            'Creates the work product being reviewed',
            'Logs defects found during the review',
            'Decides which defects to fix'
        ],
        answer: 1,
        explanation: 'The author creates the work product under review and participates to understand feedback and plan fixes.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following defects is BEST detected by static testing?',
        options: [
            'Incorrect calculation at runtime',
            'Inconsistent terminology in requirements documents',
            'System failure under high load',
            'Unexpected UI behavior'
        ],
        answer: 1,
        explanation: 'Static testing (reviewing documents) is ideal for finding defects like inconsistencies, ambiguities, and omissions in requirements documents before execution.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'What is the purpose of "entry criteria" in a formal review?',
        options: [
            'To define when the review meeting can begin',
            'To specify conditions that must be met before the review starts',
            'To list defects found in the review',
            'To assign review tasks to participants'
        ],
        answer: 1,
        explanation: 'Entry criteria define the preconditions that must be met before the review process begins (e.g., the document is complete, review checklist is available).'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'In which review activity are individual reviewers examine the work product before the review meeting?',
        options: [
            'Planning',
            'Review initiation',
            'Individual review',
            'Issue communication and analysis'
        ],
        answer: 2,
        explanation: 'In the individual review (preparation) activity, reviewers examine the work product and identify potential defects, questions, and comments prior to the group meeting.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following is a benefit of static testing over dynamic testing?',
        options: [
            'It can verify runtime behavior of the system',
            'It finds defects earlier when they are cheaper to fix',
            'It always requires a working software build',
            'It replaces the need for any dynamic testing'
        ],
        answer: 1,
        explanation: 'Static testing finds defects early in documents or code before execution, when they are cheapest to fix. It does not require a running build and does not replace dynamic testing.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following is a typical checklist item used in a code review?',
        options: [
            'Does the system meet performance targets?',
            'Are all variables initialized before use?',
            'Is the user interface intuitive?',
            'Does the system scale to 10,000 users?'
        ],
        answer: 1,
        explanation: 'Code review checklists focus on static code quality concerns: variable initialization, naming conventions, error handling, and code complexity — not runtime behavior.'
    },

    // ── Practice 4 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Using 2-value Boundary Value Analysis on a field accepting values 1–100, which set of test values is CORRECT?',
        options: [
            '1, 50, 100',
            '0, 1, 100, 101',
            '1, 2, 99, 100',
            '0, 1, 2, 99, 100, 101'
        ],
        answer: 1,
        explanation: '2-value BVA tests the boundary and just outside: 0 (invalid), 1 (min valid), 100 (max valid), 101 (invalid).'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'A field accepts values: 1-10 (low), 11-20 (medium), 21-30 (high). How many equivalence partitions exist?',
        options: ['2', '3', '4', '6'],
        answer: 2,
        explanation: 'There are 4 partitions: invalid below 1, low (1-10), medium (11-20), high (21-30), and invalid above 30 — actually 5. But if counting only valid partitions + one invalid: 4. Per standard EP, there are 4 partitions including one invalid (<1 or >30) and three valid classes.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which test design technique is BEST suited for testing combinations of conditions that produce different system behaviors?',
        options: [
            'Boundary Value Analysis',
            'Equivalence Partitioning',
            'Decision Table Testing',
            'State Transition Testing'
        ],
        answer: 2,
        explanation: 'Decision table testing systematically addresses combinations of conditions and the actions that result — ideal for business rule testing with multiple conditions.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'State transition testing is MOST appropriate when:',
        options: [
            'The system behavior depends on the current state and past events',
            'The inputs can be grouped into equivalent classes',
            'Business rules involve many condition combinations',
            'There are clear boundary values to test'
        ],
        answer: 0,
        explanation: 'State transition testing is used when a system can be in different states and transitions between them based on events/inputs — like login attempts, ATM workflows, etc.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which coverage criterion requires that every statement in the code is executed at least once?',
        options: [
            'Branch coverage',
            'Statement coverage',
            'Condition coverage',
            'Path coverage'
        ],
        answer: 1,
        explanation: 'Statement coverage measures whether each executable statement has been executed at least once during testing.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which of the following is a BLACK-BOX test design technique?',
        options: [
            'Statement coverage',
            'Branch coverage',
            'Equivalence partitioning',
            'Condition coverage'
        ],
        answer: 2,
        explanation: 'Equivalence partitioning is a black-box technique based on the specification. Statement, branch, and condition coverage are white-box (structural) techniques.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'What is "experience-based testing"?',
        options: [
            'Testing using formal mathematical proofs',
            'Testing that relies on the tester\'s knowledge, intuition, and past experience',
            'Testing that follows only written specifications',
            'Testing that requires full code coverage'
        ],
        answer: 1,
        explanation: 'Experience-based techniques like exploratory testing and error guessing rely on the tester\'s skill, intuition, and knowledge of common failure modes.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which of the following BEST describes "use case testing"?',
        options: [
            'Testing based on the internal structure of code',
            'Testing based on scenarios describing how users interact with the system to achieve goals',
            'Testing focused on performance under load',
            'Testing based on invalid and unexpected inputs'
        ],
        answer: 1,
        explanation: 'Use case testing derives test cases from use cases — scenarios that describe the interactions between actors and the system to achieve a goal.'
    },

    // ── Practice 5 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'What is the PRIMARY purpose of a test plan?',
        options: [
            'To record actual test results',
            'To document the approach, scope, resources, and schedule of testing activities',
            'To list all defects found during testing',
            'To define the expected outputs of each test case'
        ],
        answer: 1,
        explanation: 'A test plan describes the scope, approach, resources, and schedule for testing — it guides the overall testing effort.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which of the following BEST describes "risk-based testing"?',
        options: [
            'Testing only the riskiest components until time runs out',
            'Prioritizing testing efforts based on the likelihood and impact of failures',
            'Avoiding testing features that are unlikely to fail',
            'Using automated tools to eliminate testing risk'
        ],
        answer: 1,
        explanation: 'Risk-based testing prioritizes test effort based on product risk — the combination of likelihood of failure and its potential impact.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'What is the purpose of a "defect report"?',
        options: [
            'To request a new software feature',
            'To provide developers with information needed to reproduce and fix a defect',
            'To document passed test cases',
            'To summarize the overall test coverage achieved'
        ],
        answer: 1,
        explanation: 'A defect report (bug report) provides sufficient detail for the developer to reproduce, understand, and fix the defect.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which metric is MOST useful for monitoring test progress during execution?',
        options: [
            'Number of requirements reviewed',
            'Percentage of planned test cases executed',
            'Number of code reviews completed',
            'Lines of code written'
        ],
        answer: 1,
        explanation: 'During test execution, tracking the percentage of planned test cases executed against the schedule is a key progress metric.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'What is "exit criteria" in testing?',
        options: [
            'Conditions that must be met before testing begins',
            'Conditions that must be met to consider testing complete',
            'Criteria for selecting which tests to automate',
            'Criteria for deciding when to escalate a defect'
        ],
        answer: 1,
        explanation: 'Exit criteria (completion criteria) define the conditions that must be satisfied before testing can be considered complete and the test phase can be closed.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'A defect has been reported but the developer cannot reproduce it. What is the MOST likely next step?',
        options: [
            'Close the defect as "not a bug"',
            'Mark the defect as "cannot reproduce" and request more information from the tester',
            'Immediately fix the code where the tester says the defect occurred',
            'Re-run all tests to find the defect automatically'
        ],
        answer: 1,
        explanation: 'If a defect cannot be reproduced, it should be flagged as such and more information (environment, steps, data) should be requested rather than closing or blindly fixing it.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which of the following is a product risk?',
        options: [
            'Insufficient time for testing',
            'Inexperienced test team',
            'Software failing to meet performance requirements under load',
            'Unclear test objectives'
        ],
        answer: 2,
        explanation: 'Product risks relate to the quality of the work product itself (e.g., performance failure, security vulnerability). Project risks relate to the project management (budget, schedule, team).'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'What is the role of "configuration management" in testing?',
        options: [
            'Managing changes to test objectives',
            'Ensuring that testware is properly identified, controlled, and tracked',
            'Defining the test approach for each release',
            'Scheduling tester assignments for each sprint'
        ],
        answer: 1,
        explanation: 'Configuration management ensures that testware (test cases, environments, scripts) and the items under test are properly identified, version-controlled, and traceable.'
    },

    // ── Practice 6 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which of the following is a KEY benefit of test automation?',
        options: [
            'It eliminates the need for manual testing entirely',
            'It reduces the effort for regression testing and enables faster feedback',
            'It makes exploratory testing unnecessary',
            'It guarantees 100% test coverage'
        ],
        answer: 1,
        explanation: 'Test automation reduces the effort required for repeated regression testing and enables faster feedback, especially in CI/CD pipelines. It does not eliminate manual or exploratory testing.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which of the following is a risk of test automation?',
        options: [
            'Faster test execution',
            'Reduced regression effort',
            'Maintenance overhead as the application evolves',
            'Improved consistency of test execution'
        ],
        answer: 2,
        explanation: 'A key risk of automation is maintenance overhead: automated tests must be updated whenever the application changes, which can be costly if not planned for.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'A test tool that checks whether code meets coding standards without executing it is an example of which tool type?',
        options: [
            'Test execution tool',
            'Static analysis tool',
            'Performance testing tool',
            'Test management tool'
        ],
        answer: 1,
        explanation: 'Static analysis tools analyze code without executing it, checking for coding standards violations, potential vulnerabilities, and code complexity.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which of the following BEST describes "keyword-driven testing"?',
        options: [
            'Tests written in natural language without any tool support',
            'Test scripts that use keywords representing actions, making tests readable without scripting knowledge',
            'Testing that searches for keywords in the application under test',
            'A technique for generating test cases from keywords in requirements'
        ],
        answer: 1,
        explanation: 'Keyword-driven testing uses keywords (like "Login", "ClickButton") representing actions, separating test logic from implementation so non-programmers can write tests.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'When introducing a test tool into an organization, what is the FIRST step?',
        options: [
            'Purchase the most expensive tool available',
            'Evaluate and select a tool that fits the organization\'s needs and context',
            'Automate all existing manual test cases immediately',
            'Replace the test manager with the tool'
        ],
        answer: 1,
        explanation: 'The first step is evaluation and selection: assessing tools against the organization\'s needs, technical environment, and constraints before purchasing or deploying.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which type of tool supports testers by capturing and replaying user interactions with the application?',
        options: [
            'Static analysis tool',
            'Test management tool',
            'Test execution / capture-replay tool',
            'Coverage measurement tool'
        ],
        answer: 2,
        explanation: 'Capture-replay (test execution) tools record user interactions and replay them automatically for regression testing.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which of the following is an example of a "test management tool" capability?',
        options: [
            'Measuring how much code has been executed',
            'Analyzing code for potential bugs without running it',
            'Tracking test cases, results, and defects in a centralized repository',
            'Simulating thousands of concurrent users'
        ],
        answer: 2,
        explanation: 'Test management tools provide centralized repositories for test cases, execution results, defect links, and test planning — supporting the overall management of testing activities.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'What is a "CI/CD pipeline" in the context of testing?',
        options: [
            'A manual process for deploying software',
            'An automated sequence of build, test, and deployment steps that runs on each code change',
            'A specialized database for storing test results',
            'A method for conducting user acceptance testing'
        ],
        answer: 1,
        explanation: 'A CI/CD pipeline automates building, testing, and deploying code on each commit — enabling rapid feedback and continuous delivery with automated tests at each stage.'
    },
    // ── Practice 1 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'A developer accidentally uses the wrong comparison operator (< instead of <=) when checking a boundary condition. The code compiles and runs but produces wrong output in edge cases. In the error → defect → failure chain, what is the CORRECT classification of each item?',
        options: [
            'The wrong operator is the error; the wrong logic in the code is the defect; the wrong output is the failure',
            'The wrong output is the error; the wrong operator is the defect; the developer is the root cause',
            'The wrong operator is the defect; the wrong output is the error; the root cause is the failure',
            'The wrong output is the failure; the wrong operator is the error; there is no defect until the software is run'
        ],
        answer: 0,
        explanation: 'An error is a human action (using < instead of <=). This creates a defect — a flaw in the work product (wrong operator in code). When executed and the wrong output is produced, that is a failure — a visible deviation from expected behavior.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following BEST illustrates the "absence-of-defects fallacy" (Testing Principle 7)?',
        options: [
            'A safety-critical system is fully tested and no defects are found, so it is released',
            'An e-commerce checkout flow passes all tests but the checkout process requires 12 steps, causing 80% of users to abandon their carts',
            'A system has known defects, but all are low-severity so testing is stopped',
            'A test team finds no failures because all test cases are testing invalid partitions'
        ],
        answer: 1,
        explanation: 'The absence-of-defects fallacy states that fixing all defects does not help if the system does not fulfill user needs. The checkout flow may be defect-free yet fail to satisfy users. Options A, C, and D describe other issues unrelated to this principle.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Principle 5 ("Tests wear out") advises that repeated tests stop finding new defects. Which EXCEPTION to this principle is explicitly recognized in ISTQB CTFL?',
        options: [
            'Performance testing, because load patterns change over time',
            'Security testing, because new vulnerabilities are continuously discovered',
            'Confirmation testing and regression testing, because repeatability is the key requirement',
            'Exploratory testing, because it is non-deterministic'
        ],
        answer: 2,
        explanation: 'ISTQB explicitly states that confirmation testing and regression testing are exceptions to the "tests wear out" principle — they rely on repeatability to confirm a fix worked and to detect unintended side effects.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'A root cause analysis after a production failure reveals: "Budget restrictions prevented adequate training for requirements engineers, who consequently misunderstood the performance requirements, leading to an architectural defect that caused system timeouts under load." Which element in this chain is the ROOT CAUSE?',
        options: [
            'The architectural defect in the design',
            'The misunderstood performance requirements',
            'The system timeouts under load',
            'The budget restrictions that prevented training'
        ],
        answer: 3,
        explanation: 'The root cause is the source of the defect in the process. Budget restrictions → lack of training → misunderstanding → defect → failure. Removing the root cause (addressing budget/training) would prevent the defect type from recurring. The defect, requirements misunderstanding, and failure are downstream effects.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Testing Principle 3 states "Early testing saves time and money." Which of the following activities BEST demonstrates applying this principle?',
        options: [
            'Running full regression tests immediately after a production release',
            'Testers reviewing requirement specifications during the requirements phase to find defects before coding begins',
            'Delaying test planning until the system is fully built to avoid rework',
            'Performing only acceptance testing because it catches all defects'
        ],
        answer: 1,
        explanation: 'Reviewing requirements during the requirements phase catches defects at the earliest possible point — before they propagate to design and code. The earlier defects are found, the cheaper and easier they are to fix. Options A, C, D all delay testing to later stages.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which statement CORRECTLY distinguishes "verification" from "validation" in ISTQB terminology?',
        options: [
            'Verification checks that the product meets user needs; validation checks it meets specifications',
            'Verification evaluates whether work products meet specified requirements; validation evaluates whether the product meets user needs in its intended environment',
            'Verification and validation are synonyms in ISTQB — both mean checking the product is correct',
            'Verification is dynamic testing; validation is static testing'
        ],
        answer: 1,
        explanation: 'Verification = "Are we building the software right?" — checks against specifications. Validation = "Are we building the right software?" — checks against user needs. They are distinct concepts; verification can be static or dynamic.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'A team working under high time pressure releases software that later causes a critical production failure. An investigation reveals the developer misunderstood a requirement. Which of the following is MOST likely a cause of defects according to ISTQB?',
        options: [
            'The use of agile methodology',
            'The lack of automated testing tools',
            'Time pressure and misunderstandings related to project activities',
            'The absence of a test completion report'
        ],
        answer: 2,
        explanation: 'ISTQB lists time pressure and misunderstandings related to project activities and goals as typical causes of errors and defects. These are direct human factors. Methodology, tool absence, or report absence are not listed as primary defect causes.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which statement CORRECTLY describes the relationship between testing and debugging?',
        options: [
            'Debugging is a testing activity performed by testers after a failure is found',
            'Testing finds failures; debugging is a development activity where developers reproduce, diagnose, and fix defects',
            'Testing and debugging are the same activity performed in different phases',
            'Debugging proves the absence of defects after the tester confirms a fix'
        ],
        answer: 1,
        explanation: 'Testing (by testers) finds failures and reports them. Debugging (by developers) involves reproducing the failure, diagnosing the root cause, and fixing the defect. Retesting (confirmation testing) then verifies the fix. They are separate activities performed by different roles.'
    },
    {
        bank: 'istqb', domain: 'Fundamentals of Testing',
        question: 'Which of the following is NOT a typical test objective according to ISTQB CTFL?',
        options: [
            'Providing information to stakeholders to allow informed decisions about release',
            'Proving that the software has zero defects',
            'Reducing the level of risk of inadequate software quality',
            'Verifying that the test object complies with contractual and regulatory requirements'
        ],
        answer: 1,
        explanation: 'Proving zero defects is not a valid test objective — Testing Principle 1 explicitly states that testing can show the presence of defects but cannot prove their absence. All other options are listed as typical test objectives in ISTQB CTFL.'
    },
    // ── Practice 2 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'In the V-model, component integration testing verifies the interfaces between components. Which test LEVEL is responsible for testing the interfaces between the system under test and EXTERNAL systems or services?',
        options: [
            'Component testing',
            'System testing',
            'System integration testing',
            'Acceptance testing'
        ],
        answer: 2,
        explanation: 'System integration testing specifically focuses on the interfaces between the system under test and other external systems or services. Component integration testing focuses on internal component interfaces; system testing tests the system as a whole.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'A project uses a "bottom-up" integration testing strategy. What does this mean?',
        options: [
            'Testing starts at the highest-level components and stubs are used for lower-level modules',
            'Testing starts at the lowest-level components, and higher-level components are added one at a time',
            'All components are assembled at once and the entire system is tested in one phase',
            'Testing proceeds from the user interface down to the database layer'
        ],
        answer: 1,
        explanation: 'Bottom-up integration starts with the lowest-level components (those with no dependencies) and progressively adds higher-level components. Drivers are used to simulate higher-level callers. Top-down is the reverse, using stubs for lower components. Big bang assembles everything at once.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which statement CORRECTLY describes the PRIMARY purpose of acceptance testing compared to system testing?',
        options: [
            'Acceptance testing focuses on finding defects; system testing focuses on confirming readiness for release',
            'Acceptance testing is performed by independent testers in the test environment; system testing is performed by users',
            'Acceptance testing aims to gain confidence and confirm the system is fit for purpose; system testing aims to test the system as a whole against requirements',
            'Acceptance testing and system testing have the same purpose but are performed at different times'
        ],
        answer: 2,
        explanation: 'The main purpose of acceptance testing is no longer to find defects but to gain confidence and confirm the system is ready for release and fit for its intended purpose. System testing tests the whole system against specifications and typically does aim to find defects.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'A software product is given to real end users at the supplier\'s environment before commercial release to gather feedback. Which type of acceptance testing is this?',
        options: [
            'Beta testing',
            'Alpha testing',
            'Operational acceptance testing',
            'Regulatory acceptance testing'
        ],
        answer: 1,
        explanation: 'Alpha testing is performed by end users at the supplier\'s (developer\'s) environment before release. Beta testing is performed by end users at their own environment. Both are forms of acceptance testing for commercial software to gather feedback before full release.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which of the following BEST describes what "shift-left" means in the context of testing?',
        options: [
            'Moving all testing activities to a separate team on the left side of the organization chart',
            'Starting testing earlier in the SDLC without neglecting later testing activities',
            'Replacing all right-side activities (deployment, release) with testing activities',
            'Shifting the test schedule leftward by one sprint to allow for more review time'
        ],
        answer: 1,
        explanation: 'Shift-left means starting test activities earlier in the SDLC — reviewing requirements, writing tests before code (TDD), using static analysis, etc. It does NOT mean abandoning later testing; the note in ISTQB is explicit that later tests are not neglected.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'In BDD (Behavior-Driven Development), test cases are written in which format?',
        options: [
            'If–Then–Else structured pseudocode',
            'Given–When–Then natural language using Gherkin',
            'As a [role], I want [goal], so that [value] (user story format)',
            'Precondition–Step–Expected result table format'
        ],
        answer: 1,
        explanation: 'BDD uses the Gherkin format: Given (context/precondition) – When (action/event) – Then (expected outcome). This is natural language that non-technical stakeholders can understand. User story format is for ATDD/user stories; table format is not BDD-specific.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Which of the following is a recognized CHALLENGE of implementing DevOps from a testing perspective?',
        options: [
            'DevOps produces too much documentation for testers to review',
            'CI/CD pipelines eliminate the need for system testing',
            'The delivery pipeline must be established and CI/CD tools must be maintained, requiring additional resources',
            'DevOps forces all testing to be manual because automated tests are incompatible with continuous deployment'
        ],
        answer: 2,
        explanation: 'ISTQB identifies that establishing and maintaining CI/CD pipelines and tools requires resources, and test automation itself requires additional investment. DevOps reduces documentation, enables automation, and does not eliminate system testing.'
    },
    {
        bank: 'istqb', domain: 'Testing Throughout the SDLC',
        question: 'Operational Acceptance Testing (OAT) is performed by which group and focuses on which aspects?',
        options: [
            'End users; functional completeness and usability',
            'System administrators; backup/restore, disaster recovery, user management, maintenance, security',
            'Independent testers; compliance with legal regulations and security rules',
            'Developers; confirming that all unit tests pass in the production environment'
        ],
        answer: 1,
        explanation: 'OAT is performed by system administrators and focuses on operational aspects: backup and restore procedures, disaster recovery, user management, maintenance tasks, and security operations — not end-user functionality.'
    },
    // ── Practice 3 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'In a formal inspection, which role is SPECIFICALLY PROHIBITED from also acting as review leader, reader, or scribe?',
        options: [
            'The moderator',
            'The scribe',
            'The author',
            'The reviewer'
        ],
        answer: 2,
        explanation: 'In an Inspection (the most formal review type), the author cannot act as review leader, reader, or scribe. This separation ensures objectivity and thorough examination. In less formal review types this restriction does not apply.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'A technical review is being held. Which statement BEST distinguishes a technical review from a walkthrough?',
        options: [
            'A walkthrough is led by a trained moderator; a technical review is led by the author',
            'A technical review is led by a moderator (different from the author) and a scribe takes notes; a walkthrough is led by the author who presents the material',
            'A technical review uses checklists based on standards; a walkthrough uses only expert judgment',
            'A walkthrough requires all participants to study material before the meeting; a technical review has no such requirement'
        ],
        answer: 1,
        explanation: 'In a technical review, a moderator (not the author) leads the meeting and a scribe takes notes. In a walkthrough, the author leads and presents the material to the audience. Inspection (not technical review) requires pre-meeting study and uses checklists based on standards.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which statement CORRECTLY describes what the "moderator (facilitator)" does in a formal review?',
        options: [
            'Creates the material to be reviewed and fixes all defects found',
            'Plans the review, assigns staff, and controls the budget',
            'Ensures the review meeting runs effectively and moderates discussions',
            'Collates defects and takes minutes during the review meeting'
        ],
        answer: 2,
        explanation: 'The moderator (facilitator) ensures the review meeting runs effectively and moderates discussions. The author creates material and fixes defects. The manager plans and assigns resources. The scribe collates defects and takes minutes.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following is a type of defect that static testing can find that is TYPICALLY DIFFICULT to find with dynamic testing?',
        options: [
            'Runtime performance bottlenecks under production load',
            'Unreachable (dead) code that can never be executed',
            'Incorrect outputs when processing boundary values',
            'System crashes caused by unhandled exceptions'
        ],
        answer: 1,
        explanation: 'ISTQB specifically mentions dead code (unreachable code) as a defect that static testing finds but dynamic testing typically misses — because dynamic testing only finds failures when code actually executes, and dead code never executes. Runtime performance, wrong outputs, and crashes require code execution to detect.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following statements about the five steps of a formal review process is CORRECT?',
        options: [
            'Individual review happens before review initiation',
            'The author presents the material and defects are discussed during the "Review Initiation" step',
            'In the "Communication and Analysis" step, the review outcome can be: accepted, accepted with minor changes, or rejected',
            'The "Planning" step includes distributing the material to reviewers'
        ],
        answer: 2,
        explanation: 'In the "Communication and Analysis" step, defects are discussed and the formal outcome is decided: accepted / accepted with minor changes / rejected. Review Initiation (step 2) is where material is distributed. Individual Review (step 3) comes after Initiation. The author presents material during Communication and Analysis, not Initiation.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following work products is LEAST SUITABLE for static testing?',
        options: [
            'A requirements specification document',
            'A user manual',
            'Third-party compiled executable code that cannot be analyzed by tools',
            'A test plan'
        ],
        answer: 2,
        explanation: 'ISTQB states that work products not suitable for static testing include those difficult to interpret by humans or code produced by third parties that cannot be analyzed by tools. Compiled executables fall in this category. Requirements specs, user manuals, and test plans are all suitable for static testing.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'In early agile iterations, a team holds short review sessions on each user story before development begins. Which benefit of static testing MOST DIRECTLY explains why this improves project outcomes?',
        options: [
            'It provides objective quality metrics for the test report',
            'It prevents defects in requirements from propagating into code, reducing development time and costs',
            'It measures quality characteristics that depend on code execution',
            'It allows testers to identify performance bottlenecks early'
        ],
        answer: 1,
        explanation: 'A key benefit of static testing is preventing defects from proceeding from documentation to code. Catching ambiguous or incorrect requirements before coding avoids far more expensive fixes later. Options C and D require code execution; option A is a monitoring benefit, not the primary prevention benefit.'
    },
    {
        bank: 'istqb', domain: 'Static Testing',
        question: 'Which of the following review types is MOST appropriate when the goal is to evaluate quality, gain consensus on technical issues, and discuss solutions — with no strict requirement for a formal process or standards compliance?',
        options: [
            'Inspection',
            'Technical review',
            'Walkthrough',
            'Informal review'
        ],
        answer: 1,
        explanation: 'A technical review is a systematic defect detection event led by a moderator (not the author), where participants can discuss solutions to problems, gain consensus, and make decisions on technical problems. Inspection is the most formal type. Walkthrough is led by the author. Informal review has no defined process.'
    },
    // ── Practice 4 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'A system accepts integer temperatures. Valid range is 5°C to 25°C (inclusive). Using TWO-VALUE BVA, which set of test values is CORRECT for the boundaries of this range?',
        options: [
            '{4, 5, 6} and {24, 25, 26}',
            '{4, 5} and {25, 26}',
            '{5, 6} and {24, 25}',
            '{5} and {25}'
        ],
        answer: 1,
        explanation: 'Two-value BVA requires 2 test cases per boundary: the boundary value itself and the closest value in the neighboring class. Lower boundary: 5 (boundary) and 4 (closest invalid neighbor). Upper boundary: 25 (boundary) and 26 (closest invalid neighbor). Three-value BVA would also include 6 and 24.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'When applying three-value BVA at the boundary between two VALID partitions (e.g., 100–199 gives 2.5% discount; 200–499 gives 5% discount), what is the CORRECT minimal set of test values at that boundary?',
        options: [
            '{199, 200}',
            '{198, 199, 200}',
            '{198, 199, 200, 201}',
            '{199, 200, 201}'
        ],
        answer: 2,
        explanation: 'At a boundary between two valid classes, three-value BVA requires {one below, boundary, one above} for each boundary. At boundary 199/200: {198, 199, 200} from the lower partition and {199, 200, 201} from the upper. The minimal combined set that covers all three-value requirements is {198, 199, 200, 201}.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'In Equivalence Partitioning, why must INVALID equivalence classes be tested INDIVIDUALLY (one test case per invalid class)?',
        options: [
            'To increase overall coverage metrics',
            'Because invalid inputs always cause system crashes that prevent further testing',
            'To prevent masking of failures — one invalid input might cause an error that prevents detection of failures from other invalid inputs in the same test',
            'Because the ISTQB standard requires at least three test cases for each partition'
        ],
        answer: 2,
        explanation: 'If multiple invalid inputs are combined in one test, one invalid input might cause an error/rejection that masks the behavior of the other invalid inputs — so failures from other invalid classes are never seen. Each invalid class must be tested separately to prevent this masking effect.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'A decision table has 4 conditions, each with 2 possible values (True/False). How many combinations exist in a full limited-entry decision table, and what does 100% decision table coverage require?',
        options: [
            '8 combinations; test 4 of them',
            '16 combinations; test all 16 feasible combinations',
            '16 combinations; test at least 8 (50%) combinations',
            '8 combinations; test all 8 combinations'
        ],
        answer: 1,
        explanation: 'For 4 conditions each with 2 values: 2×2×2×2 = 16 combinations. 100% decision table coverage (coverage items = feasible columns/combinations) requires all feasible combinations to be tested at least once. If all 16 are feasible, all 16 must be covered.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which statement BEST describes the relationship between branch coverage and statement coverage?',
        options: [
            '100% statement coverage guarantees 100% branch coverage',
            '100% branch coverage guarantees 100% statement coverage, but 100% statement coverage does NOT guarantee 100% branch coverage',
            'Branch coverage and statement coverage always produce the same percentage result',
            '100% branch coverage only guarantees 100% statement coverage when there are no loops'
        ],
        answer: 1,
        explanation: 'Branch coverage is stronger than statement coverage. Achieving 100% branch coverage means all branches (including both outcomes of decisions) are exercised, which necessarily executes all statements. However, 100% statement coverage only requires each statement to be executed once and may miss the false-branch of a decision.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'In state transition testing, which coverage criterion requires testing all VALID transitions AND all INVALID transitions (attempting undefined/invalid events in each state)?',
        options: [
            'All states coverage',
            'Valid transitions coverage (0-switch coverage)',
            'All transitions coverage',
            'All paths coverage'
        ],
        answer: 2,
        explanation: 'All transitions coverage is the strongest standard criterion: it requires exercising all valid transitions AND attempting all invalid transitions. ISTQB states this should be the minimum for mission-critical and safety-critical software. Valid transitions coverage (0-switch) only covers valid transitions.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which statement about valid transitions coverage (0-switch coverage) is CORRECT?',
        options: [
            'Achieving 100% valid transitions coverage guarantees 100% all states coverage',
            'Achieving 100% all states coverage guarantees 100% valid transitions coverage',
            'Valid transitions coverage and all states coverage are equivalent criteria',
            'Valid transitions coverage is stronger than all transitions coverage'
        ],
        answer: 0,
        explanation: 'ISTQB states that 100% valid transitions coverage guarantees 100% state coverage — to exercise all transitions you must visit all states. However, the reverse is NOT true: visiting all states does not guarantee all transitions between them are exercised. Valid transitions coverage is weaker than all transitions coverage.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'Which of the following BEST describes the key WEAKNESS of statement coverage compared to branch coverage?',
        options: [
            'Statement coverage is more expensive to measure than branch coverage',
            'Statement coverage cannot be applied to object-oriented code',
            'Statement coverage does not test the decision logic — a decision with a false-branch that is never taken can still achieve 100% statement coverage',
            'Statement coverage requires more test cases than branch coverage'
        ],
        answer: 2,
        explanation: 'The key weakness of statement coverage is that it does not test decision logic. If an "if" statement always evaluates to true, all statements inside the block execute (giving 100% statement coverage) but the false-branch path is never tested. Branch coverage catches this by requiring both true and false branches to be exercised.'
    },
    {
        bank: 'istqb', domain: 'Test Analysis and Design',
        question: 'A tester uses knowledge of how similar systems have failed in the past, combined with a list of typical developer errors (wrong initialization, off-by-one errors), to design targeted test cases. Which experience-based technique is this?',
        options: [
            'Exploratory testing',
            'Checklist-based testing',
            'Error guessing with fault attacks',
            'Boundary value analysis'
        ],
        answer: 2,
        explanation: 'Error guessing uses tester knowledge of past failures and typical developer errors. When made more systematic by creating lists of potential errors and designing test cases against those lists, ISTQB calls these "fault attacks." Exploratory testing is simultaneous design and execution; checklist-based uses predefined checklists.'
    },
    // ── Practice 5 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which of the following is an example of an EXIT CRITERION (rather than an entry criterion) for a test level?',
        options: [
            'All planned test cases have been designed and reviewed',
            'The test environment has been set up and is available',
            'All critical and high-priority defects have been fixed and confirmed, and code coverage of 85% has been achieved',
            'The test basis (requirements specification) has been approved'
        ],
        answer: 2,
        explanation: 'Exit criteria define when testing is complete (Definition of Done). Coverage metrics, defect density thresholds, and passed/failed counts are exit criteria. Entry criteria (Definition of Ready) include resources (environment, test basis, personnel) being available before testing begins.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'A test manager uses the Three-Point Estimation formula E = (a + 4m + b) / 6 where a=10 days, m=15 days, b=26 days. What is the estimated effort E?',
        options: [
            '17 days',
            '51 days',
            '15.5 days',
            '16 days'
        ],
        answer: 3,
        explanation: 'E = (a + 4m + b) / 6 = (10 + 4×15 + 26) / 6 = (10 + 60 + 26) / 6 = 96 / 6 = 16 days. The formula weights the most likely estimate (m) four times to reflect that it is the most probable outcome.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which statement CORRECTLY describes the difference between "product risks" and "project risks" in ISTQB?',
        options: [
            'Product risks relate to development schedules; project risks relate to software quality',
            'Product risks are related to quality characteristics of the system and CAN be affected by testing; project risks are related to project management and CANNOT be affected by testing',
            'Product risks are always more severe than project risks',
            'Project risks include code defects; product risks include staffing issues'
        ],
        answer: 1,
        explanation: 'ISTQB defines product risks as related to quality characteristics (functionality, performance, security, etc.) — these can be reduced by testing. Project risks are related to project management and control (schedule, budget, staffing, organizational issues) — testing cannot directly affect these.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'In risk-based testing, how is the RISK LEVEL of a product risk calculated?',
        options: [
            'Severity × frequency of occurrence',
            'Likelihood of occurrence × impact (or cost/severity)',
            'Number of defects found × test effort spent',
            'Business value × technical complexity'
        ],
        answer: 1,
        explanation: 'ISTQB defines risk level = likelihood × impact (sometimes expressed as likelihood × severity or likelihood × cost). This formula is used in both quantitative risk assessment (mathematical) and as the basis for qualitative risk matrices to prioritize testing effort.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which of the following is classified as a PROJECT RISK (not a product risk)?',
        options: [
            'The payment module may calculate incorrect totals',
            'The system may fail under peak load during sales events',
            'Key test staff may leave the project due to reorganization, causing schedule delays',
            'The login feature may have security vulnerabilities'
        ],
        answer: 2,
        explanation: 'Staff departing and causing schedule delays is a people/organizational project risk — related to project management, not software quality. Incorrect calculations, load failures, and security vulnerabilities are all product risks related to quality characteristics that testing can directly address.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'In Planning Poker (the agile variant of Wideband Delphi), what happens after each round of estimates is revealed and there is NO consensus?',
        options: [
            'The average of all estimates is automatically accepted',
            'The highest estimator wins and their estimate is used',
            'The team discusses the reasons for differences, then another round of estimation is done',
            'The test manager makes the final decision based on project constraints'
        ],
        answer: 2,
        explanation: 'In Wideband Delphi (including Planning Poker), when estimates diverge, the group discusses reasons for the differences — especially outliers explain their reasoning. Then another estimation round is conducted. This continues until consensus is reached. The average is not automatically used; discussion drives convergence.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'In the testing quadrants model, which quadrant contains smoke tests and non-functional automated tests (except usability)?',
        options: [
            'Q1 — Technology facing, supporting the team',
            'Q2 — Business facing, supporting the team',
            'Q3 — Business facing, critiquing the product',
            'Q4 — Technology facing, critiquing the product'
        ],
        answer: 3,
        explanation: 'Q4 is technology-facing and critiques the product. It contains smoke tests, performance tests, load tests, security tests and other non-functional tests (except usability, which is in Q3). Q1 has automated component/integration tests. Q2 has functional tests and user story tests. Q3 has exploratory testing and UAT.'
    },
    {
        bank: 'istqb', domain: 'Managing the Test Activities',
        question: 'Which statement about the TEST PYRAMID (Mike Cohn) is CORRECT?',
        options: [
            'The top layer (end-to-end/UI tests) should contain the most test cases because they provide the most confidence',
            'The bottom layer (unit/component tests) should have many small fast tests; the top layer should have few complex slow tests',
            'The pyramid implies equal numbers of tests at each level for balanced coverage',
            'The pyramid applies only to automated testing and does not include manual testing'
        ],
        answer: 1,
        explanation: 'The test pyramid model shows: bottom (unit/component) = many small, fast, isolated tests; middle (integration/service) = fewer; top (end-to-end/UI) = few, complex, slow, high-level tests. More tests are needed at lower levels. The pyramid supports automation but the principle applies to test effort allocation broadly.'
    },
    // ── Practice 6 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'In a defect lifecycle, a developer investigates a reported defect and concludes it is actually caused by incorrect test data, not a code defect. What status should the defect report most likely be given?',
        options: [
            'Fixed',
            'Postponed',
            'Rejected',
            'Re-opened'
        ],
        answer: 2,
        explanation: 'A defect report can be rejected when investigation shows there is no actual defect in the code — for example, if it was caused by a test environment issue, incorrect test data (false positive), or an invalid test case. "Fixed" is for genuine defects that are resolved; "Postponed" is when the fix is deferred; "Re-opened" is after a failed fix verification.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which of the following is an example of a FALSE POSITIVE in testing?',
        options: [
            'A test case that fails because a genuine defect in the code causes wrong output',
            'A test case that passes despite a defect existing in the code',
            'A test case that fails but investigation reveals no actual defect — the failure was due to an environment issue',
            'A test case that is never executed because of a dependency issue'
        ],
        answer: 2,
        explanation: 'A false positive is a test that fails (reports a defect) when there is actually no real defect — the failure was caused by something other than a code defect (e.g., test environment instability, wrong test data). A false negative is when a test passes despite a real defect existing (option B).'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which category of test tools includes tools that measure how much of the code has been executed during testing?',
        options: [
            'Static testing tools',
            'Test design and implementation tools',
            'Test execution and coverage tools',
            'Non-functional testing tools'
        ],
        answer: 2,
        explanation: 'Code coverage tools that measure what percentage of code (statements, branches) has been executed fall under "test execution and coverage tools" in ISTQB\'s tool categories. Static testing tools analyze code without executing it. Test design tools help generate test cases. Non-functional tools handle performance, security, etc.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which of the following is a recognized RISK of test automation according to ISTQB?',
        options: [
            'Automated tests execute faster than manual tests',
            'Tools may be abandoned by vendors or open-source development may stop, leaving the organization unable to maintain them',
            'Automated tests are always more reliable than manual tests',
            'Test automation eliminates the need for test managers'
        ],
        answer: 1,
        explanation: 'ISTQB identifies vendor problems and open-source risks as specific automation risks: a vendor may close or stop support, and open-source development may stop — forcing the organization to maintain tools themselves. Fast execution and high reliability are benefits, not risks. Automation does not eliminate the need for test managers.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which tool category would BEST support a team wanting to track defects, manage test cases, and view test execution dashboards in one place?',
        options: [
            'Static testing tools',
            'Test design and implementation tools',
            'Test execution and coverage tools',
            'Management tools (test management tools)'
        ],
        answer: 3,
        explanation: 'Management tools increase test process efficiency by facilitating management of requirements, tests, defects, and configuration. Test management tools specifically provide centralized tracking of test cases, defect management, execution status, and reporting dashboards. Coverage tools measure code coverage; static tools analyze code without execution.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'A test team wants to simulate 10,000 concurrent users accessing a web application to measure its response time under peak load. Which tool category supports this?',
        options: [
            'Collaboration tools',
            'Non-functional testing tools (performance/load testing tools)',
            'Test execution and coverage tools',
            'DevOps tools'
        ],
        answer: 1,
        explanation: 'Non-functional testing tools allow testing of characteristics that are difficult or impossible to test manually. Performance/load testing tools simulate high volumes of concurrent users to measure response time, throughput, and system behavior under load. This is not achievable manually with real users at scale.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which statement about the contents of a defect report (incident report) per ISO/IEC/IEEE 29119-3 is CORRECT?',
        options: [
            'A defect report must include the full source code of the component where the defect was found',
            'A defect report should include the expected result, actual result, impact/severity, and priority of the fix',
            'A defect report only needs the defect title and a screenshot — other details slow down the fix process',
            'Defect reports are only required for critical defects; minor defects can be communicated verbally'
        ],
        answer: 1,
        explanation: 'ISTQB (per ISO/IEC/IEEE 29119-3) specifies that defect reports should include: identifier, title, date/author, test item identification, context (SDLC phase, test case, test data), description with logs/screenshots, expected and actual results, impact/severity, fix priority, and status. Source code is not a required component.'
    },
    {
        bank: 'istqb', domain: 'Test Tools',
        question: 'Which statement about test automation BEST reflects the ISTQB position on the relationship between tools and testers?',
        options: [
            'Once comprehensive test automation is in place, the number of testers can be reduced proportionally',
            'Tools are not a substitute for people; testers cannot be removed from software development projects because of automation',
            'Test automation should eventually replace all manual testing activities',
            'The primary purpose of automation is to reduce the need for skilled testers'
        ],
        answer: 1,
        explanation: 'ISTQB explicitly states: "Tools are not a substitute for people. Testers cannot be removed from software development projects because of automation." Automation handles repetitive tasks and enables testers to focus on more creative/critical testing that tools cannot perform. The goal is not headcount reduction.'
    },
]
