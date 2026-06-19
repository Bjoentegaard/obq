import type { QuizQuestion } from '../banks'

export const ch5Questions: QuizQuestion[] = [
    {
            id: 57, bank: 'istqb', domain: 'Ch 5: Management',
            question: 'A test plan states: "Testing will use component and integration testing. Regulations require 100% branch coverage for each critical component." Which part of the test plan is this?',
            options: ['Communication', 'Risk register', 'Context of testing', 'Test approach'],
            answer: 3,
            explanation: 'Test levels and coverage criteria belong to the test approach section of a test plan.'
        },
    {
            id: 58, bank: 'istqb', domain: 'Ch 5: Management',
            question: 'Which task is MOST LIKELY performed by the TEST MANAGER?',
            options: ['Write test summary reports based on information gathered during testing', 'Review tests developed by others', 'Prepare and acquire test data', 'Analyze, review, and assess requirements for testability'],
            answer: 0,
            explanation: 'Writing test summary/completion reports is a test manager responsibility. B, C, D are typical tester tasks.'
        },
    {
            id: 59, bank: 'istqb', domain: 'Ch 5: Management',
            question: 'Classify: 1=Budget spent, 2=96% tests executed, 3=Performance test environment set up, 4=No critical defects open, 5=Autopilot specs reviewed, 6=Tax component passed unit testing. Entry vs Exit criteria?',
            options: ['Entry: 5,6 / Exit: 1,2,3,4', 'Entry: 2,3,6 / Exit: 1,4,5', 'Entry: 1,3 / Exit: 2,4,5,6', 'Entry: 3,5,6 / Exit: 1,2,4'],
            answer: 3,
            explanation: 'Entry (prerequisites): 3=environment ready, 5=test basis reviewed, 6=passed prior level. Exit (signals to stop): 1=budget spent, 2=tests executed, 4=defect level acceptable.'
        },
    {
            id: 60, bank: 'istqb', domain: 'Ch 5: Management',
            question: 'Which statement about test estimation approaches is CORRECT?',
            options: ['Metrics-based: estimate only available after testing starts', 'Expert-based: expert users identified by the client recommend the budget', 'Expert-based: test managers predict expected testing effort', 'Metrics-based: average costs from past projects used as budget'],
            answer: 2,
            explanation: 'Expert-based estimation uses judgment of those responsible for testing. Metrics-based can use past project data before testing starts.'
        },
    {
            id: 61, bank: 'istqb', domain: 'Ch 5: Management',
            question: 'Which BEST defines risk level?',
            options: ['Sum of probabilities of all problem situations and their financial harm', 'Probability of a threat × chance the threat results in financial damage', 'Combination of the probability of an undesirable event and its expected impact', 'Sum of all potential hazards × sum of all potential losses'],
            answer: 2,
            explanation: 'Risk level = likelihood × impact. C captures this correctly.'
        },
    {
            id: 62, bank: 'istqb', domain: 'Ch 5: Management',
            question: 'Which is MOST likely an example of a PRODUCT risk?',
            options: ['The expected security features may not be supported by the system architecture', 'Developers may not have time to fix all defects found', 'Test cases may not provide full coverage of requirements', 'The performance test environment may not be ready before delivery'],
            answer: 0,
            explanation: 'Product risks relate to quality characteristics of the system. A) is a security quality risk. B, C, D are project/process risks.'
        },
    {
            id: 103, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 104, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 105, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 106, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 107, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 108, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 109, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 110, bank: 'istqb', domain: 'Ch 5: Management',
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
    {
            id: 153, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 154, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 155, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 156, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 157, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 158, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 159, bank: 'istqb', domain: 'Ch 5: Management',
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
            id: 160, bank: 'istqb', domain: 'Ch 5: Management',
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
]
