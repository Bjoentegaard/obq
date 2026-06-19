import type { QuizQuestion } from '../banks'

export const ch3Questions: QuizQuestion[] = [
    {
            id: 43, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which statement CORRECTLY reflects the value of static testing?',
            options: ['Reviews have increased spec quality AND time required', 'Static testing gives cheaper defect management by finding defects later', 'Static analysis improved tester–developer communication', 'Static analysis finds coding defects that might not be found by dynamic testing alone'],
            answer: 3,
            explanation: 'Static analysis can find dead code, unreachable branches, etc. that dynamic testing might miss. A: reviews decrease time, not increase it. B: earlier detection = cheaper to fix.'
        },
    {
            id: 44, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which statement about checklists in a formal review is CORRECT?',
            options: ['During review planning, reviewers create the checklists', 'During issue communication, reviewers fill in the checklists', 'During the review meeting, reviewers create defect reports based on checklists', 'During review initiation (kick-off), reviewers receive the checklists'],
            answer: 3,
            explanation: 'Checklists are distributed during the initiation/kick-off phase and used during individual review.'
        },
    {
            id: 45, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which CORRECTLY matches roles in a formal review?',
            options: ['Manager – Decides on the execution of reviews', 'Review Leader – Ensures effective running of review meetings', 'Scribe – Fixes defects in the work product', 'Moderator – Monitors ongoing cost-effectiveness'],
            answer: 0,
            explanation: 'A) Correct – the manager decides whether reviews are performed. The moderator runs meetings. The author fixes defects. The manager monitors cost.'
        },
    {
            id: 46, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'A review has: a scribe, purpose to detect defects, the meeting is led by the AUTHOR, individual review is done first. Which review type is MOST likely?',
            options: ['Informal Review', 'Walkthrough', 'Technical Review', 'Inspection'],
            answer: 1,
            explanation: 'The author leading the meeting is characteristic of a walkthrough. Inspections use a trained moderator.'
        },
    {
            id: 47, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which is a benefit of carrying out static testing BEFORE dynamic testing?',
            options: ['It may find defects that would be more expensive to fix if found later', 'It detects failures before release', 'It is easier and takes less time to set up', 'It would be impossible to find the same defects with dynamic testing'],
            answer: 0,
            explanation: 'A) Early defect detection reduces cost. B) Wrong – static testing finds defects, not failures (failures require code execution).'
        },
    {
            id: 48, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Requirements: 6=Librarians get responses ≤5s; 9=Borrowers fined if not returned within 3 weeks; 11=Borrowers may borrow for max 4 weeks; 15=All users get responses ≤3s. Which pairs are INCONSISTENT?',
            options: ['6-10, 6-15, 7-12', '6-15, 9-11', '6-10, 6-15, 9-11', '6-15, 7-12'],
            answer: 1,
            explanation: '6-15: Librarians ≤5s conflicts with "all users ≤3s". 9-11: Fined after 3 weeks but allowed to borrow for 4 weeks – inconsistent.'
        },
    {
            id: 49, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which work products CAN be reviewed? i=Business requirements, ii=Schedule, iii=Test budget, iv=Third-party executable code, v=User stories with acceptance criteria',
            options: ['i and iv', 'i, ii, iii and iv', 'i, ii, iii, and v', 'iii, iv, v'],
            answer: 2,
            explanation: 'Third-party executable code (iv) cannot be reviewed – no source available. All others (i, ii, iii, v) are readable documents and can be reviewed.'
        },
    {
            id: 50, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which review type BEST suits safety-critical components where the process must be demonstrably formal?',
            options: ['Informal Review', 'Technical Review', 'Inspection', 'Walkthrough'],
            answer: 2,
            explanation: 'Inspection is the most formal review type – uses defined process, entry/exit criteria, rules, checklists, and metrics.'
        },
    {
            id: 51, bank: 'istqb', domain: 'Ch 3: Static',
            question: "A team's velocity increases after user story refinement sessions become more effective at detecting defects. Which benefit of static testing is MOST DIRECTLY related?",
            options: ['Increasing total cost of quality', 'Reducing testing cost', 'Increasing development productivity', 'Reducing total cost of quality'],
            answer: 2,
            explanation: 'Velocity measures development productivity in Agile. Early defect detection increases the whole team\'s productivity.'
        },
    {
            id: 52, bank: 'istqb', domain: 'Ch 3: Static',
            question: 'Which are TRUE for STATIC testing? i=Abnormal external behaviors easier to identify; ii=Coding standard deviations easier to find; iii=Identifies failures when software runs; iv=Objective is to identify defects early; v=Missing security coverage easier to find',
            options: ['i, iv, v', 'i, iii, iv', 'ii, iii', 'ii, iv, v'],
            answer: 3,
            explanation: 'ii) Coding standards → static. iv) Early defect detection → both static & dynamic. v) Coverage gaps → static. i) Runtime behavior → dynamic. iii) Explicitly dynamic.'
        },
    {
            id: 87, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 88, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 89, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 90, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 91, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 92, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 93, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 94, bank: 'istqb', domain: 'Ch 3: Static',
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
    {
            id: 136, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 137, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 138, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 139, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 140, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 141, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 142, bank: 'istqb', domain: 'Ch 3: Static',
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
            id: 143, bank: 'istqb', domain: 'Ch 3: Static',
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
]
