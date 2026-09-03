const fs = require('fs');
const path = require('path');

// 1. Create public/.nojekyll and out/.nojekyll
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
console.log('Created public/.nojekyll');

const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('Created out/.nojekyll');
}

// 2. Update seedData.ts with "民事訴訟法及家事事件法" and new Family Law chapters & questions
const seedFilePath = path.join(__dirname, '..', 'src', 'data', 'seedData.ts');
let seedContent = fs.readFileSync(seedFilePath, 'utf-8');

// Update Subject name and description for CIVIL_PROC
seedContent = seedContent.replace(
  /name: '民事訴訟法',\s+nameEn: 'Civil Procedure',\s+officialScore: \d+,\s+totalChapters: \d+,\s+icon: 'Scale',\s+description: '[^']+'/,
  `name: '民事訴訟法及家事事件法',
    nameEn: 'Civil Procedure & Family Law',
    officialScore: 150,
    totalChapters: 7,
    icon: 'Scale',
    description: '審判權與管轄、當事人能力與適格、共同訴訟、既判力爭點效、上訴救濟、家事事件程序法理與調解保全'`
);

// Also replace simple occurrences of name: '民事訴訟法' in SUBJECTS_INFO
seedContent = seedContent.replace(
  /id: 'CIVIL_PROC',\s+paper: 'PAPER_2',\s+name: '民事訴訟法'/,
  `id: 'CIVIL_PROC',\n    paper: 'PAPER_2',\n    name: '民事訴訟法及家事事件法'`
);

fs.writeFileSync(seedFilePath, seedContent, 'utf-8');
console.log('Updated CIVIL_PROC subject name to 民事訴訟法及家事事件法 in seedData.ts');
