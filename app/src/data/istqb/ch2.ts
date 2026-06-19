import type { QuizQuestion } from '../banks'

export const ch2Questions: QuizQuestion[] = [
    {
            id: 35, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'Which SDLC testing statements are TRUE? 1=Each development activity should have a corresponding test activity. 2=Reviewing should start as soon as FINAL documents are available. 3=Test design and implementation should start during the development activity. 4=Testing should start early in the SDLC.',
            options: ['True: 1,2 / False: 3,4', 'True: 2,3 / False: 1,4', 'True: 1,2,4 / False: 3', 'True: 1,4 / False: 2,3'],
            answer: 3,
            explanation: '1: TRUE. 2: FALSE – reviewing starts on DRAFTS, not final docs. 3: FALSE – test ANALYSIS & DESIGN should start; not implementation. 4: TRUE.'
        },
    {
            id: 36, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'An OS product is tested to verify support for various x86 PCs and confirm important brands work. What type of test is this?',
            options: ['Performance test', 'Processor test', 'Functional test', 'Portability test'],
            answer: 3,
            explanation: 'Testing that software runs correctly across different hardware configurations is a portability test – a non-functional test type.'
        },
    {
            id: 37, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'Which statement about regression testing is FALSE?',
            options: ['Regression testing should be performed whenever software is changed', 'Regression tests should be reviewed to ensure they are still relevant', 'Automated regression testing is always more efficient than manual regression testing', 'Regression tests can be run many times'],
            answer: 2,
            explanation: 'C is FALSE – automation can improve efficiency but does not guarantee it is always more efficient than manual testing.'
        },
    {
            id: 38, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'When should MAINTENANCE testing be carried out?',
            options: ['When any software is modified to remove defects', 'When deployed software or its environment changes', 'When deployed software has been in service for an extended period', 'When requirements change late in development'],
            answer: 1,
            explanation: 'Maintenance testing is triggered by changes to already released software or its environment.'
        },
    {
            id: 39, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'Which CORRECTLY describes the role of impact analysis in Maintenance Testing?',
            options: ['Used when deciding if a fix to a maintained system is worthwhile', 'Identifies how data should be migrated into the maintained system', 'Decides which hot fixes are of most value to the user', 'Determines the effectiveness of new maintenance test cases'],
            answer: 0,
            explanation: 'Impact analysis shows which parts are affected by a change, helping evaluate whether the fix is worthwhile given the regression testing scope.'
        },
    {
            id: 40, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'Which BEST compares confirmation and regression testing?',
            options: ["Regression: old tests still work. Confirmation: fix hasn't broken other parts", 'Confirmation: defect fixed. Regression: no other parts adversely affected', "Regression: changes haven't caused failure. Confirmation: old tests give same results", 'Confirmation: changes made successfully. Regression: failed tests now work'],
            answer: 1,
            explanation: "Confirmation testing verifies the specific defect is fixed. Regression testing checks that the fix hasn't introduced new problems elsewhere."
        },
    {
            id: 41, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'What is the key difference between ALPHA and BETA testing?',
            options: ["Alpha: at developer's site; Beta: at customer's site", 'Alpha: by developers; Beta: by customers', 'Alpha: by customers; Beta: by developers', "Alpha: at customer's site; Beta: at developer's site"],
            answer: 0,
            explanation: "Both are done by customers/users, but alpha is at the developer's site with developer present; beta is at the customer's own location."
        },
    {
            id: 42, bank: 'istqb', domain: 'Ch 2: SDLC',
            question: 'Which is TRUE regardless of the development lifecycle model used?',
            options: ['Testers should review all development documents', 'The majority of development activities have an associated testing activity', 'Design of tests should begin after the development activity has completed', 'Each test level has objectives specific to that level'],
            answer: 3,
            explanation: 'D is universally true – test levels always have specific objectives, regardless of the SDLC model.'
        },
    {
            id: 79, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 80, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 81, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 82, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 83, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 84, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 85, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 86, bank: 'istqb', domain: 'Ch 2: SDLC',
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
    {
            id: 128, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 129, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 130, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 131, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 132, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 133, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 134, bank: 'istqb', domain: 'Ch 2: SDLC',
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
            id: 135, bank: 'istqb', domain: 'Ch 2: SDLC',
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
]
