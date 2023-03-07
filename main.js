// Store seed data
let processes = [
    'Do SQL Data Modeling',
    'Do Web Tracking',
    'Do Analytics Engineering',
    'Do Kimball Dimensional Modeling',
    'Do Prompt Engineering with ChatGPT',
    'Build Data Marts',
    'Build a Google Data Studio Dashboard from GA4 Data in BigQuery'
];
let keywords = [
    'SQL Data Model',
    'BigQuery SQL',
    'BigQuery GA4',
    'ETL',
    'Tableau',
    'Analytics Engineering'
];
let problems = [
    'Duplicate Sessions in GA4 BigQuery',
    "Can't Find Unique Session Key in BigQuery GA4",
    "Conversions Not Adding Up Correctly in BigQuery GA4"
];

// Initialize variables
let random_number = (Math.floor(Math.random() * 21) + 1);
let random_process_index = Math.floor(Math.random() * processes.length);
let random_process = processes[random_process_index];
let random_keyword_index = Math.floor(Math.random() * keywords.length);
let random_keyword = keywords[random_keyword_index];
let random_problem_index = Math.floor(Math.random() * problems.length);
let random_problem = problems[random_problem_index];


// Setup headline templates
let formulas = [
    `How to ${random_process} in ${random_number} Simple Steps`,
    `${random_keyword}: Everything You Need to Know`,
    `${random_problem}? Here's How to Fix It`
];
let random_formula_index = Math.floor(Math.random() * formulas.length);
let random_formula = formulas[random_formula_index];

// Output random content idea
console.log(random_formula);
