import type { QuizQuestion } from '../banks'

export const ch6Questions: QuizQuestion[] = [
    {
            id: 63, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'Which describes the MOST COMMON situation for a failure discovered during testing or production?',
            options: ['The product crashed when the user selected a dialog box option', 'The wrong version of compiled source code was included in the build', 'The computation algorithm used the wrong input variables', 'The developer misinterpreted the requirement for the algorithm'],
            answer: 3,
            explanation: 'The most common root cause is human error – typically a developer misinterpreting a requirement, which leads to a defect, which causes a failure.'
        },
    {
            id: 64, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'Which is an example of MAINTENANCE testing?',
            options: ['Testing corrected defects during development of a new system', 'Testing enhancements to an existing operational system', 'Handling complaints about quality during UAT', 'Integrating functions during development of a new system'],
            answer: 1,
            explanation: 'Maintenance testing applies to systems already in production. B describes testing an enhancement to a live system.'
        },
    {
            id: 65, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'Which BEST describes non-functional testing?',
            options: ['Testing an integrated system to verify it meets specified requirements', 'Testing to determine system compliance with coding standards', 'Testing without reference to internal structure of the system', 'Testing system characteristics such as usability, reliability, or maintainability'],
            answer: 3,
            explanation: 'Non-functional testing evaluates HOW the system performs, not WHAT it does – quality characteristics like performance, security, usability.'
        },
    {
            id: 66, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'Which is TRUE about regression and confirmation testing?',
            options: ['Regression: check if correction was successful. Confirmation: verify no side effects', 'Regression: detect unintended side effects. Confirmation: check if system works in new environment', 'Regression: detect unintended side effects. Confirmation: check if original defect was fixed', 'Regression: check if new functionality works. Confirmation: check if original defect was fixed'],
            answer: 2,
            explanation: 'Confirmation: specific defect is fixed. Regression: no other parts broke as a result of the fix.'
        },
    {
            id: 67, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'What is the MAIN benefit of independent testing?',
            options: ["Avoids author bias – testing not only from the author's point of view", 'Ensures the maximum number of defects is found', 'Provides an opportunity to check that standards have been adhered to', 'Educates developers from other projects'],
            answer: 0,
            explanation: 'The primary benefit of independent testing is objectivity – testers who did not write the code have fewer blind spots.'
        },
    {
            id: 68, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'Many organizations call the test department the "QA department." Is this correct?',
            options: ['Correct – testing and QA mean the same thing', 'Correct – the names can be used interchangeably', 'Not correct – testing is broader; it includes all activities regarding quality', 'Not correct – QA focuses on quality-related processes; testing demonstrates fitness and detects defects'],
            answer: 3,
            explanation: 'QA is process-oriented (ensuring right processes are used); testing finds defects and evaluates quality. They overlap but are not the same.'
        },
    {
            id: 69, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'Regression testing should be performed when: I=Once a month; II=A defect has been fixed; III=The test environment has changed; IV=The software has changed',
            options: ['II and IV', 'II, III and IV', 'I, II and III', 'I and III'],
            answer: 1,
            explanation: 'II) Fixing a defect triggers regression. III) Environment changes may expose regressions. IV) Software changes trigger regression. I) Monthly is arbitrary, not a trigger.'
        },
    {
            id: 70, bank: 'istqb', domain: 'Ch 6: Tools',
            question: 'What defines the SCOPE of maintenance testing?',
            options: ['The coverage of the current regression pack', 'The size and risk of any change(s) to the system', 'The time since the last change was made', 'Defects found at the last regression test run'],
            answer: 1,
            explanation: 'Scope of maintenance testing is determined by impact analysis – the size and risk of the change.'
        },
    {
            id: 111, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 112, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 113, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 114, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 115, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 116, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 117, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 118, bank: 'istqb', domain: 'Ch 6: Tools',
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
    {
            id: 161, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 162, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 163, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 164, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 165, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 166, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 167, bank: 'istqb', domain: 'Ch 6: Tools',
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
            id: 168, bank: 'istqb', domain: 'Ch 6: Tools',
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
