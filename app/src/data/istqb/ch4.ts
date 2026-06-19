import type { QuizQuestion } from '../banks'

export const ch4Questions: QuizQuestion[] = [
    {
            id: 53, bank: 'istqb', domain: 'Ch 4: Techniques',
            question: 'Which BEST describes exploratory testing?',
            options: ["In-depth investigation of the test object to identify weaknesses examined by test cases", 'An approach where testers dynamically design and execute tests based on knowledge, exploration, and previous results', 'Testing planned as uninterrupted sessions, often used with checklist-based testing', "Testing based on the tester's experience, knowledge, and intuition"],
            answer: 1,
            explanation: 'B is the ISTQB glossary definition of exploratory testing. D describes experience-based testing in general.'
        },
    {
            id: 54, bank: 'istqb', domain: 'Ch 4: Techniques',
            question: 'Fitness app: ≤1000=Couch Potato | 1001–2000=Lazy Bones | 2001–4000=Getting There | 4001–6000=Not Bad | 6001+=Way to Go. Which inputs give HIGHEST equivalence partition coverage?',
            options: ['0, 1000, 2000, 3000, 4000', '1000, 2001, 4000, 4001, 6000', '123, 2345, 3456, 4567, 5678', '666, 999, 2222, 5555, 6666'],
            answer: 3,
            explanation: 'D: 666(P1), 999(P1), 2222(P3), 5555(P4), 6666(P5) = 4 distinct partitions. A, B, C each cover only 3 distinct partitions.'
        },
    {
            id: 55, bank: 'istqb', domain: 'Ch 4: Techniques',
            question: 'Smart home temp: ≤10°C=Icy Cool | 11–15°C=Chilled Out | 16–19°C=Cool Man | 20–22°C=Too Warm | 23°C+=Hot. Using TWO-POINT BVA, which inputs give highest boundary coverage?',
            options: ['0°C, 11°C, 20°C, 22°C, 23°C', '9°C, 15°C, 19°C, 23°C, 100°C', '10°C, 16°C, 19°C, 22°C, 23°C', '14°C, 15°C, 18°C, 19°C, 21°C, 22°C'],
            answer: 2,
            explanation: 'Boundary values: 10,11|15,16|19,20|22,23. C covers 10,16,19,22,23 = 5 boundary values. A=4, B=3, D=3.'
        },
    {
            id: 56, bank: 'istqb', domain: 'Ch 4: Techniques',
            question: 'You test a mobile banking app by evaluating each screen against a general list of UI best practices from a usability book. Which technique BEST categorizes this?',
            options: ['Black-box', 'Exploratory', 'Checklist-based', 'Error guessing'],
            answer: 2,
            explanation: "Using a predefined checklist (the book's best practices) to guide testing is checklist-based testing."
        },
    {
            id: 95, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 96, bank: 'istqb', domain: 'Ch 4: Techniques',
            question: 'A field accepts values: 1-10 (low), 11-20 (medium), 21-30 (high). How many equivalence partitions exist?',
            options: ['2', '3', '4', '6'],
            answer: 2,
            explanation: 'There are 4 partitions: invalid below 1, low (1-10), medium (11-20), high (21-30), and invalid above 30 — actually 5. But if counting only valid partitions + one invalid: 4. Per standard EP, there are 4 partitions including one invalid (<1 or >30) and three valid classes.'
        },
    {
            id: 97, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 98, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 99, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 100, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 101, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 102, bank: 'istqb', domain: 'Ch 4: Techniques',
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
    {
            id: 144, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 145, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 146, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 147, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 148, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 149, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 150, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 151, bank: 'istqb', domain: 'Ch 4: Techniques',
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
            id: 152, bank: 'istqb', domain: 'Ch 4: Techniques',
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
]
