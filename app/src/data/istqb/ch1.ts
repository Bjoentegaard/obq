import type { QuizQuestion } from '../banks'

export const ch1Questions: QuizQuestion[] = [
    {
            id: 27, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Which of the following is a typical objective of testing?',
            options: ['To find defects and failures', 'To validate the project plan works as required', 'Ensuring of complete testing', 'Comparing actual results with expected results'],
            answer: 0,
            explanation: 'Finding defects is a core objective. Validating the project plan is project management. Exhaustive testing is impossible (principle #2). Comparing results is an activity, not an objective.'
        },
    {
            id: 28, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Which of the following is an example of a FAILURE in a car cruise control system?',
            options: ['The developer forgot to rename variables after a cut-and-paste', 'Unnecessary code that sounds an alarm when reversing was included', 'The system stops maintaining speed when the radio volume is changed', 'The design specification wrongly states speeds'],
            answer: 2,
            explanation: 'A failure is a runtime deviation from expected behavior visible to the user. C is a visible failure. A and D are defects in code/spec; B is a defect (wrong code included).'
        },
    {
            id: 29, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Which of the following is a DEFECT rather than a root cause in a fitness tracker?',
            options: ["The requirements author was unfamiliar with fitness, so wrongly assumed heartbeat in beats per hour", "The tester hadn't been trained in state transition testing, so missed a major defect", 'An incorrect configuration variable implemented for GPS could cause location problems during daylight saving', 'The designer had never worked on wearable devices and misunderstood reflected sunlight effects'],
            answer: 2,
            explanation: 'An incorrect configuration variable is faulty software (a defect). A, B, D are root causes – lack of domain knowledge or training.'
        },
    {
            id: 30, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'A product owner says your role as tester is to catch all bugs before the end of each iteration. Which testing principle best responds to this false statement?',
            options: ['Defect clustering', 'Testing shows the presence of defects, not their absence', 'Absence-of-errors fallacy', 'Root cause analysis'],
            answer: 1,
            explanation: "Testing can show presence of defects but cannot prove their absence – so you can never guarantee all bugs are caught."
        },
    {
            id: 31, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Which of the following is an example of a task that can be carried out as part of the TEST PROCESS?',
            options: ['Analyzing a defect', 'Designing test data', 'Assigning a version to a test item', 'Writing a user story'],
            answer: 1,
            explanation: 'Designing test data is a test implementation task. Analyzing a defect is debugging (development). Assigning versions is configuration management. Writing user stories is the product owner\'s task.'
        },
    {
            id: 32, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Match: A=Test design, B=Test implementation, C=Test execution, D=Test completion with 1=Entering change requests for open defects, 2=Identifying test data to support test cases, 3=Prioritizing test procedures and creating test data, 4=Analyzing discrepancies to determine their cause',
            options: ['A-2, B-3, C-4, D-1', 'A-2, B-1, C-3, D-4', 'A-3, B-2, C-4, D-1', 'A-3, B-2, C-1, D-4'],
            answer: 0,
            explanation: 'Test design → identifying data (2). Test implementation → prioritizing & creating data (3). Test execution → analyzing discrepancies (4). Test completion → entering change requests (1).'
        },
    {
            id: 33, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Which activity is part of TEST ANALYSIS in the test process?',
            options: ['Identifying required infrastructure and tools', 'Creating test suites from test scripts', 'Analyzing lessons learned for process improvement', 'Evaluating the test basis for testability'],
            answer: 3,
            explanation: 'Test analysis involves evaluating the test basis to identify testable features. A is test design, B is implementation, C is completion.'
        },
    {
            id: 34, bank: 'istqb', domain: 'Ch 1: Fundamentals',
            question: 'Which test activity produces a Test Charter as output?',
            options: ['Test planning', 'Test monitoring and control', 'Test analysis', 'Test design'],
            answer: 3,
            explanation: 'Test charters are produced during test design. They define the scope and focus of exploratory test sessions.'
        },
    {
            id: 71, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 72, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 73, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 74, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 75, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 76, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 77, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 78, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
    {
            id: 119, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 120, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 121, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 122, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 123, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 124, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 125, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 126, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
            id: 127, bank: 'istqb', domain: 'Ch 1: Fundamentals',
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
]
