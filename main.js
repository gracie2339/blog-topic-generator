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


// Initialize variables
let random_number = (Math.floor(Math.random() * 21) + 1);
let random_process_index = Math.floor(Math.random() * processes.length);
let random_process = processes[random_process_index];
let random_keyword_index = Math.floor(Math.random() * keywords.length);
let random_keyword = keywords[random_keyword_index];


// Setup headline templates
let formulas = [
    `How to ${random_process} in ${random_number} Simple Steps`,
    `${random_keyword}: Everything You Need to Know`
];
let random_formula_index = Math.floor(Math.random() * 2);
let random_formula = formulas[random_formula_index];

// Output random content idea
console.log(random_formula);
