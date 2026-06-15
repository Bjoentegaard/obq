import type { QuizQuestion } from './quiz'

export const istqbQuestions: QuizQuestion[] = [
    // ── Practice 1 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Which of the following is a typical objective of testing?',
        options: ['To find defects and failures', 'To validate the project plan works as required', 'Ensuring of complete testing', 'Comparing actual results with expected results'],
        answer: 0,
        explanation: 'Finding defects is a core objective. Validating the project plan is project management. Exhaustive testing is impossible (principle #2). Comparing results is an activity, not an objective.'
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Which of the following is an example of a FAILURE in a car cruise control system?',
        options: ['The developer forgot to rename variables after a cut-and-paste', 'Unnecessary code that sounds an alarm when reversing was included', 'The system stops maintaining speed when the radio volume is changed', 'The design specification wrongly states speeds'],
        answer: 2,
        explanation: 'A failure is a runtime deviation from expected behavior visible to the user. C is a visible failure. A and D are defects in code/spec; B is a defect (wrong code included).'
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Which of the following is a DEFECT rather than a root cause in a fitness tracker?',
        options: ["The requirements author was unfamiliar with fitness, so wrongly assumed heartbeat in beats per hour", "The tester hadn't been trained in state transition testing, so missed a major defect", 'An incorrect configuration variable implemented for GPS could cause location problems during daylight saving', 'The designer had never worked on wearable devices and misunderstood reflected sunlight effects'],
        answer: 2,
        explanation: 'An incorrect configuration variable is faulty software (a defect). A, B, D are root causes – lack of domain knowledge or training.'
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'A product owner says your role as tester is to catch all bugs before the end of each iteration. Which testing principle best responds to this false statement?',
        options: ['Defect clustering', 'Testing shows the presence of defects, not their absence', 'Absence-of-errors fallacy', 'Root cause analysis'],
        answer: 1,
        explanation: "Testing can show presence of defects but cannot prove their absence – so you can never guarantee all bugs are caught."
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Which of the following is an example of a task that can be carried out as part of the TEST PROCESS?',
        options: ['Analyzing a defect', 'Designing test data', 'Assigning a version to a test item', 'Writing a user story'],
        answer: 1,
        explanation: 'Designing test data is a test implementation task. Analyzing a defect is debugging (development). Assigning versions is configuration management. Writing user stories is the product owner\'s task.'
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Match: A=Test design, B=Test implementation, C=Test execution, D=Test completion with 1=Entering change requests for open defects, 2=Identifying test data to support test cases, 3=Prioritizing test procedures and creating test data, 4=Analyzing discrepancies to determine their cause',
        options: ['A-2, B-3, C-4, D-1', 'A-2, B-1, C-3, D-4', 'A-3, B-2, C-4, D-1', 'A-3, B-2, C-1, D-4'],
        answer: 0,
        explanation: 'Test design → identifying data (2). Test implementation → prioritizing & creating data (3). Test execution → analyzing discrepancies (4). Test completion → entering change requests (1).'
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Which activity is part of TEST ANALYSIS in the test process?',
        options: ['Identifying required infrastructure and tools', 'Creating test suites from test scripts', 'Analyzing lessons learned for process improvement', 'Evaluating the test basis for testability'],
        answer: 3,
        explanation: 'Test analysis involves evaluating the test basis to identify testable features. A is test design, B is implementation, C is completion.'
    },
    {
        bank: 'istqb', domain: 'Practice 1',
        question: 'Which test activity produces a Test Charter as output?',
        options: ['Test planning', 'Test monitoring and control', 'Test analysis', 'Test design'],
        answer: 3,
        explanation: 'Test charters are produced during test design. They define the scope and focus of exploratory test sessions.'
    },

    // ── Practice 2 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'Which SDLC testing statements are TRUE? 1=Each development activity should have a corresponding test activity. 2=Reviewing should start as soon as FINAL documents are available. 3=Test design and implementation should start during the development activity. 4=Testing should start early in the SDLC.',
        options: ['True: 1,2 / False: 3,4', 'True: 2,3 / False: 1,4', 'True: 1,2,4 / False: 3', 'True: 1,4 / False: 2,3'],
        answer: 3,
        explanation: '1: TRUE. 2: FALSE – reviewing starts on DRAFTS, not final docs. 3: FALSE – test ANALYSIS & DESIGN should start; not implementation. 4: TRUE.'
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'An OS product is tested to verify support for various x86 PCs and confirm important brands work. What type of test is this?',
        options: ['Performance test', 'Processor test', 'Functional test', 'Portability test'],
        answer: 3,
        explanation: 'Testing that software runs correctly across different hardware configurations is a portability test – a non-functional test type.'
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'Which statement about regression testing is FALSE?',
        options: ['Regression testing should be performed whenever software is changed', 'Regression tests should be reviewed to ensure they are still relevant', 'Automated regression testing is always more efficient than manual regression testing', 'Regression tests can be run many times'],
        answer: 2,
        explanation: 'C is FALSE – automation can improve efficiency but does not guarantee it is always more efficient than manual testing.'
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'When should MAINTENANCE testing be carried out?',
        options: ['When any software is modified to remove defects', 'When deployed software or its environment changes', 'When deployed software has been in service for an extended period', 'When requirements change late in development'],
        answer: 1,
        explanation: 'Maintenance testing is triggered by changes to already released software or its environment.'
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'Which CORRECTLY describes the role of impact analysis in Maintenance Testing?',
        options: ['Used when deciding if a fix to a maintained system is worthwhile', 'Identifies how data should be migrated into the maintained system', 'Decides which hot fixes are of most value to the user', 'Determines the effectiveness of new maintenance test cases'],
        answer: 0,
        explanation: 'Impact analysis shows which parts are affected by a change, helping evaluate whether the fix is worthwhile given the regression testing scope.'
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'Which BEST compares confirmation and regression testing?',
        options: ["Regression: old tests still work. Confirmation: fix hasn't broken other parts", 'Confirmation: defect fixed. Regression: no other parts adversely affected', "Regression: changes haven't caused failure. Confirmation: old tests give same results", 'Confirmation: changes made successfully. Regression: failed tests now work'],
        answer: 1,
        explanation: "Confirmation testing verifies the specific defect is fixed. Regression testing checks that the fix hasn't introduced new problems elsewhere."
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'What is the key difference between ALPHA and BETA testing?',
        options: ["Alpha: at developer's site; Beta: at customer's site", 'Alpha: by developers; Beta: by customers', 'Alpha: by customers; Beta: by developers', "Alpha: at customer's site; Beta: at developer's site"],
        answer: 0,
        explanation: "Both are done by customers/users, but alpha is at the developer's site with developer present; beta is at the customer's own location."
    },
    {
        bank: 'istqb', domain: 'Practice 2',
        question: 'Which is TRUE regardless of the development lifecycle model used?',
        options: ['Testers should review all development documents', 'The majority of development activities have an associated testing activity', 'Design of tests should begin after the development activity has completed', 'Each test level has objectives specific to that level'],
        answer: 3,
        explanation: 'D is universally true – test levels always have specific objectives, regardless of the SDLC model.'
    },

    // ── Practice 3 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which statement CORRECTLY reflects the value of static testing?',
        options: ['Reviews have increased spec quality AND time required', 'Static testing gives cheaper defect management by finding defects later', 'Static analysis improved tester–developer communication', 'Static analysis finds coding defects that might not be found by dynamic testing alone'],
        answer: 3,
        explanation: 'Static analysis can find dead code, unreachable branches, etc. that dynamic testing might miss. A: reviews decrease time, not increase it. B: earlier detection = cheaper to fix.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which statement about checklists in a formal review is CORRECT?',
        options: ['During review planning, reviewers create the checklists', 'During issue communication, reviewers fill in the checklists', 'During the review meeting, reviewers create defect reports based on checklists', 'During review initiation (kick-off), reviewers receive the checklists'],
        answer: 3,
        explanation: 'Checklists are distributed during the initiation/kick-off phase and used during individual review.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which CORRECTLY matches roles in a formal review?',
        options: ['Manager – Decides on the execution of reviews', 'Review Leader – Ensures effective running of review meetings', 'Scribe – Fixes defects in the work product', 'Moderator – Monitors ongoing cost-effectiveness'],
        answer: 0,
        explanation: 'A) Correct – the manager decides whether reviews are performed. The moderator runs meetings. The author fixes defects. The manager monitors cost.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'A review has: a scribe, purpose to detect defects, the meeting is led by the AUTHOR, individual review is done first. Which review type is MOST likely?',
        options: ['Informal Review', 'Walkthrough', 'Technical Review', 'Inspection'],
        answer: 1,
        explanation: 'The author leading the meeting is characteristic of a walkthrough. Inspections use a trained moderator.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which is a benefit of carrying out static testing BEFORE dynamic testing?',
        options: ['It may find defects that would be more expensive to fix if found later', 'It detects failures before release', 'It is easier and takes less time to set up', 'It would be impossible to find the same defects with dynamic testing'],
        answer: 0,
        explanation: 'A) Early defect detection reduces cost. B) Wrong – static testing finds defects, not failures (failures require code execution).'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Requirements: 6=Librarians get responses ≤5s; 9=Borrowers fined if not returned within 3 weeks; 11=Borrowers may borrow for max 4 weeks; 15=All users get responses ≤3s. Which pairs are INCONSISTENT?',
        options: ['6-10, 6-15, 7-12', '6-15, 9-11', '6-10, 6-15, 9-11', '6-15, 7-12'],
        answer: 1,
        explanation: '6-15: Librarians ≤5s conflicts with "all users ≤3s". 9-11: Fined after 3 weeks but allowed to borrow for 4 weeks – inconsistent.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which work products CAN be reviewed? i=Business requirements, ii=Schedule, iii=Test budget, iv=Third-party executable code, v=User stories with acceptance criteria',
        options: ['i and iv', 'i, ii, iii and iv', 'i, ii, iii, and v', 'iii, iv, v'],
        answer: 2,
        explanation: 'Third-party executable code (iv) cannot be reviewed – no source available. All others (i, ii, iii, v) are readable documents and can be reviewed.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which review type BEST suits safety-critical components where the process must be demonstrably formal?',
        options: ['Informal Review', 'Technical Review', 'Inspection', 'Walkthrough'],
        answer: 2,
        explanation: 'Inspection is the most formal review type – uses defined process, entry/exit criteria, rules, checklists, and metrics.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: "A team's velocity increases after user story refinement sessions become more effective at detecting defects. Which benefit of static testing is MOST DIRECTLY related?",
        options: ['Increasing total cost of quality', 'Reducing testing cost', 'Increasing development productivity', 'Reducing total cost of quality'],
        answer: 2,
        explanation: 'Velocity measures development productivity in Agile. Early defect detection increases the whole team\'s productivity.'
    },
    {
        bank: 'istqb', domain: 'Practice 3',
        question: 'Which are TRUE for STATIC testing? i=Abnormal external behaviors easier to identify; ii=Coding standard deviations easier to find; iii=Identifies failures when software runs; iv=Objective is to identify defects early; v=Missing security coverage easier to find',
        options: ['i, iv, v', 'i, iii, iv', 'ii, iii', 'ii, iv, v'],
        answer: 3,
        explanation: 'ii) Coding standards → static. iv) Early defect detection → both static & dynamic. v) Coverage gaps → static. i) Runtime behavior → dynamic. iii) Explicitly dynamic.'
    },

    // ── Practice 4 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 4',
        question: 'Which BEST describes exploratory testing?',
        options: ["In-depth investigation of the test object to identify weaknesses examined by test cases", 'An approach where testers dynamically design and execute tests based on knowledge, exploration, and previous results', 'Testing planned as uninterrupted sessions, often used with checklist-based testing', "Testing based on the tester's experience, knowledge, and intuition"],
        answer: 1,
        explanation: 'B is the ISTQB glossary definition of exploratory testing. D describes experience-based testing in general.'
    },
    {
        bank: 'istqb', domain: 'Practice 4',
        question: 'Fitness app: ≤1000=Couch Potato | 1001–2000=Lazy Bones | 2001–4000=Getting There | 4001–6000=Not Bad | 6001+=Way to Go. Which inputs give HIGHEST equivalence partition coverage?',
        options: ['0, 1000, 2000, 3000, 4000', '1000, 2001, 4000, 4001, 6000', '123, 2345, 3456, 4567, 5678', '666, 999, 2222, 5555, 6666'],
        answer: 3,
        explanation: 'D: 666(P1), 999(P1), 2222(P3), 5555(P4), 6666(P5) = 4 distinct partitions. A, B, C each cover only 3 distinct partitions.'
    },
    {
        bank: 'istqb', domain: 'Practice 4',
        question: 'Smart home temp: ≤10°C=Icy Cool | 11–15°C=Chilled Out | 16–19°C=Cool Man | 20–22°C=Too Warm | 23°C+=Hot. Using TWO-POINT BVA, which inputs give highest boundary coverage?',
        options: ['0°C, 11°C, 20°C, 22°C, 23°C', '9°C, 15°C, 19°C, 23°C, 100°C', '10°C, 16°C, 19°C, 22°C, 23°C', '14°C, 15°C, 18°C, 19°C, 21°C, 22°C'],
        answer: 2,
        explanation: 'Boundary values: 10,11|15,16|19,20|22,23. C covers 10,16,19,22,23 = 5 boundary values. A=4, B=3, D=3.'
    },
    {
        bank: 'istqb', domain: 'Practice 4',
        question: 'You test a mobile banking app by evaluating each screen against a general list of UI best practices from a usability book. Which technique BEST categorizes this?',
        options: ['Black-box', 'Exploratory', 'Checklist-based', 'Error guessing'],
        answer: 2,
        explanation: "Using a predefined checklist (the book's best practices) to guide testing is checklist-based testing."
    },

    // ── Practice 5 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 5',
        question: 'A test plan states: "Testing will use component and integration testing. Regulations require 100% branch coverage for each critical component." Which part of the test plan is this?',
        options: ['Communication', 'Risk register', 'Context of testing', 'Test approach'],
        answer: 3,
        explanation: 'Test levels and coverage criteria belong to the test approach section of a test plan.'
    },
    {
        bank: 'istqb', domain: 'Practice 5',
        question: 'Which task is MOST LIKELY performed by the TEST MANAGER?',
        options: ['Write test summary reports based on information gathered during testing', 'Review tests developed by others', 'Prepare and acquire test data', 'Analyze, review, and assess requirements for testability'],
        answer: 0,
        explanation: 'Writing test summary/completion reports is a test manager responsibility. B, C, D are typical tester tasks.'
    },
    {
        bank: 'istqb', domain: 'Practice 5',
        question: 'Classify: 1=Budget spent, 2=96% tests executed, 3=Performance test environment set up, 4=No critical defects open, 5=Autopilot specs reviewed, 6=Tax component passed unit testing. Entry vs Exit criteria?',
        options: ['Entry: 5,6 / Exit: 1,2,3,4', 'Entry: 2,3,6 / Exit: 1,4,5', 'Entry: 1,3 / Exit: 2,4,5,6', 'Entry: 3,5,6 / Exit: 1,2,4'],
        answer: 3,
        explanation: 'Entry (prerequisites): 3=environment ready, 5=test basis reviewed, 6=passed prior level. Exit (signals to stop): 1=budget spent, 2=tests executed, 4=defect level acceptable.'
    },
    {
        bank: 'istqb', domain: 'Practice 5',
        question: 'Which statement about test estimation approaches is CORRECT?',
        options: ['Metrics-based: estimate only available after testing starts', 'Expert-based: expert users identified by the client recommend the budget', 'Expert-based: test managers predict expected testing effort', 'Metrics-based: average costs from past projects used as budget'],
        answer: 2,
        explanation: 'Expert-based estimation uses judgment of those responsible for testing. Metrics-based can use past project data before testing starts.'
    },
    {
        bank: 'istqb', domain: 'Practice 5',
        question: 'Which BEST defines risk level?',
        options: ['Sum of probabilities of all problem situations and their financial harm', 'Probability of a threat × chance the threat results in financial damage', 'Combination of the probability of an undesirable event and its expected impact', 'Sum of all potential hazards × sum of all potential losses'],
        answer: 2,
        explanation: 'Risk level = likelihood × impact. C captures this correctly.'
    },
    {
        bank: 'istqb', domain: 'Practice 5',
        question: 'Which is MOST likely an example of a PRODUCT risk?',
        options: ['The expected security features may not be supported by the system architecture', 'Developers may not have time to fix all defects found', 'Test cases may not provide full coverage of requirements', 'The performance test environment may not be ready before delivery'],
        answer: 0,
        explanation: 'Product risks relate to quality characteristics of the system. A) is a security quality risk. B, C, D are project/process risks.'
    },

    // ── Practice 6 ────────────────────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'Which describes the MOST COMMON situation for a failure discovered during testing or production?',
        options: ['The product crashed when the user selected a dialog box option', 'The wrong version of compiled source code was included in the build', 'The computation algorithm used the wrong input variables', 'The developer misinterpreted the requirement for the algorithm'],
        answer: 3,
        explanation: 'The most common root cause is human error – typically a developer misinterpreting a requirement, which leads to a defect, which causes a failure.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'Which is an example of MAINTENANCE testing?',
        options: ['Testing corrected defects during development of a new system', 'Testing enhancements to an existing operational system', 'Handling complaints about quality during UAT', 'Integrating functions during development of a new system'],
        answer: 1,
        explanation: 'Maintenance testing applies to systems already in production. B describes testing an enhancement to a live system.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'Which BEST describes non-functional testing?',
        options: ['Testing an integrated system to verify it meets specified requirements', 'Testing to determine system compliance with coding standards', 'Testing without reference to internal structure of the system', 'Testing system characteristics such as usability, reliability, or maintainability'],
        answer: 3,
        explanation: 'Non-functional testing evaluates HOW the system performs, not WHAT it does – quality characteristics like performance, security, usability.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'Which is TRUE about regression and confirmation testing?',
        options: ['Regression: check if correction was successful. Confirmation: verify no side effects', 'Regression: detect unintended side effects. Confirmation: check if system works in new environment', 'Regression: detect unintended side effects. Confirmation: check if original defect was fixed', 'Regression: check if new functionality works. Confirmation: check if original defect was fixed'],
        answer: 2,
        explanation: 'Confirmation: specific defect is fixed. Regression: no other parts broke as a result of the fix.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'What is the MAIN benefit of independent testing?',
        options: ["Avoids author bias – testing not only from the author's point of view", 'Ensures the maximum number of defects is found', 'Provides an opportunity to check that standards have been adhered to', 'Educates developers from other projects'],
        answer: 0,
        explanation: 'The primary benefit of independent testing is objectivity – testers who did not write the code have fewer blind spots.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'Many organizations call the test department the "QA department." Is this correct?',
        options: ['Correct – testing and QA mean the same thing', 'Correct – the names can be used interchangeably', 'Not correct – testing is broader; it includes all activities regarding quality', 'Not correct – QA focuses on quality-related processes; testing demonstrates fitness and detects defects'],
        answer: 3,
        explanation: 'QA is process-oriented (ensuring right processes are used); testing finds defects and evaluates quality. They overlap but are not the same.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'Regression testing should be performed when: I=Once a month; II=A defect has been fixed; III=The test environment has changed; IV=The software has changed',
        options: ['II and IV', 'II, III and IV', 'I, II and III', 'I and III'],
        answer: 1,
        explanation: 'II) Fixing a defect triggers regression. III) Environment changes may expose regressions. IV) Software changes trigger regression. I) Monthly is arbitrary, not a trigger.'
    },
    {
        bank: 'istqb', domain: 'Practice 6',
        question: 'What defines the SCOPE of maintenance testing?',
        options: ['The coverage of the current regression pack', 'The size and risk of any change(s) to the system', 'The time since the last change was made', 'Defects found at the last regression test run'],
        answer: 1,
        explanation: 'Scope of maintenance testing is determined by impact analysis – the size and risk of the change.'
    },

    // ── Practice 1 (additional) ───────────────────────────────────────────────
    {
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 1',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 2',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 3',
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
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 4',
        question: 'A field accepts values: 1-10 (low), 11-20 (medium), 21-30 (high). How many equivalence partitions exist?',
        options: ['2', '3', '4', '6'],
        answer: 2,
        explanation: 'There are 4 partitions: invalid below 1, low (1-10), medium (11-20), high (21-30), and invalid above 30 — actually 5. But if counting only valid partitions + one invalid: 4. Per standard EP, there are 4 partitions including one invalid (<1 or >30) and three valid classes.'
    },
    {
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 4',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 5',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
        bank: 'istqb', domain: 'Practice 6',
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
]
