/**
 * branchGroups.js
 *
 * Maps all 199 raw JoSAA branch strings from cutoff_metadata.json into
 * 41 canonical display groups. Each group carries:
 *   - label    : clean display name for dropdowns
 *   - duration : 4 or 5 (years)
 *   - degree   : 'B.Tech' | 'B.S.' | 'B.Arch' | 'B.Plan' | 'B.Des' | 'Dual'
 *   - rawBranches : exact strings from the JSON (used for filter expansion)
 *
 * NO raw data files are changed — this is purely a client-side mapping.
 */

export const DEGREE_TYPES = {
  BTECH: 'B.Tech',
  BS:    'B.S.',
  BARCH: 'B.Arch',
  BPLAN: 'B.Plan',
  BDES:  'B.Des',
  DUAL:  'Dual',
}

export const BRANCH_GROUPS = [
  {
    label: 'Artificial Intelligence & Data Science',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Artificial Intelligence',
      'Artificial Intelligence and Data Analytics',
      'Artificial Intelligence and Data Engineering',
      'Artificial Intelligence and Data Science',
      'Artificial Intelligence and Machine Learning',
      'Data Science and Artificial Intelligence',
      'Data Science and Engineering',
      'Computational and Data Science',
      'Statistics and Data Science',
      'Computer Science and Engineering with Specialization in Data Science)',
    ],
  },
  {
    label: 'Computer Science & Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Computer Science and Engineering',
      'Computer Science and Engineering)',
      'Computer Science and Engineering with Specialization in Cyber Security)',
      'Computer Engineering',
      'Information Technology',
    ],
  },
  {
    label: 'Electronics & Communication Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Electronics and Communication Engineering',
      'Electronics and Communication Engineering)',
      'Electronics and Electrical Communication Engineering',
      'Electronics and Electrical Engineering',
      'Electronics Engineering',
      'Electronics and Instrumentation Engineering',
      'Electronics and Telecommunication Engineering',
      'Electronics and VLSI Engineering',
    ],
  },
  {
    label: 'Electrical Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Electrical Engineering',
      'Electrical Engineering)',
      'Electrical and Electronics Engineering',
      'Energy and Electrical Vehicle Engineering',
      'VLSI Design and Technology',
      'Microelectronics & VLSI Engineering',
      'B.Tech in Microelectronics & VLSI',
      'Integrated Circuit Design & Technology',
    ],
  },
  {
    label: 'Mechanical Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Mechanical Engineering',
      'Mechanical Engineering)',
      'Mechatronics Engineering',
      'Mechatronics and Automation Engineering',
      'ROBOTICS & AUTOMATION',
    ],
  },
  {
    label: 'Civil Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Civil Engineering',
      'Civil Engineering)',
      'Civil and Infrastructure Engineering',
    ],
  },
  {
    label: 'Aerospace Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Aerospace Engineering',
      'Aerospace Engineering)',
    ],
  },
  {
    label: 'Chemical Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Chemical Engineering',
      'Chemical Engineering)',
      'Chemical and Biochemical Engineering',
      'Chemical  Science',
      'Chemical Science and Technology',
      'Abu Dhabi Campus - Chemical Engineering',
    ],
  },
  {
    label: 'Chemical Sciences',
    duration: 4,
    degree: DEGREE_TYPES.BS,
    rawBranches: [
      'Chemistry',
      'Chemistry)',
      'Chemistry with Specialization',
      'BS in Chemical Sciences',
      'Chemical Sciences)',
      'Physical Science',
    ],
  },
  {
    label: 'Mathematics & Computing',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Mathematics and Computing',
      'Mathematics and Computing)',
      'Mathematics & Computing)',
      'B.Tech in Mathematics and Computing',
      'Mathematics and Scientific Computing',
      'Mathematics and Computing Technology)',
      'Mathematics and Data Science)',
      'Mathematics',
      'BS in Mathematics',
      'Computational Mathematics)',
      'Computational Engineering and Mechanics',
      'Computational Engineering',
      'Engineering and Computational Mechanics',
    ],
  },
  {
    label: 'Biotechnology & Bioengineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Biotechnology and Biochemical Engineering',
      'Biotechnology and Biochemical Engineering)',
      'Biotechnology and Bioinformatics',
      'Biotechnology)',
      'Bio Engineering',
      'Bio Engineering)',
      'Bioengineering',
      'Biological Engineering',
      'Biological Engineering)',
      'Biological Sciences and Bioengineering',
      'Biological Sciences)',
      'Biological Science',
      'Biosciences and Bioengineering',
      'Biochemical Engineering',
      'Bio Technology',
      'Life Science',
    ],
  },
  {
    label: 'Biomedical Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Biomedical Engineering',
      'Bio Medical Engineering',
      'Instrumentation and Biomedical Engineering',
    ],
  },
  {
    label: 'Mining Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Mining Engineering',
      'Mining Engineering)',
      'Mining Machinery Engineering',
      'Mining Safety Engineering)',
      'Mineral and Metallurgical Engineering',
    ],
  },
  {
    label: 'Metallurgical & Materials Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Metallurgical and Materials Engineering',
      'Metallurgical and Materials Engineering)',
      'Metallurgical Engineering',
      'Metallurgical Engineering)',
      'Metallurgical Engineering and Materials Science',
      'Metallurgical Engineering & Materials Science)',
      'Metallurgy and Materials Engineering',
      'Materials Science and Engineering',
      'Materials Science and Technology',
      'Materials Science and Technology)',
      'Materials Engineering',
      'Material Science and Engineering)',
      'Materials Science and Metallurgical Engineering',
      'B.Tech in Materials Science and Engineering',
      'Ceramic Engineering',
      'Ceramic Engineering)',
    ],
  },
  {
    label: 'Engineering Physics',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Engineering Physics',
      'Engineering Physics)',
    ],
  },
  {
    label: 'Architecture',
    duration: 5,
    degree: DEGREE_TYPES.BARCH,
    rawBranches: [
      'Architecture',
      'Architecture and Planning',
    ],
  },
  {
    label: 'Planning',
    duration: 4,
    degree: DEGREE_TYPES.BPLAN,
    rawBranches: [
      'Planning',
    ],
  },
  {
    label: 'Naval & Ocean Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Naval Architecture and Ocean Engineering',
      'Ocean Engineering and Naval Architecture',
      'Ocean Engineering and Naval Architecture)',
    ],
  },
  {
    label: 'Production & Industrial Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Production and Industrial Engineering',
      'Production Engineering',
      'Industrial and Production Engineering',
      'Industrial and Systems Engineering',
      'Industrial Engineering and Operations Research',
      'Manufacturing Science and Engineering',
    ],
  },
  {
    label: 'Petroleum & Energy Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Petroleum Engineering',
      'Energy Engineering',
      'Abu Dhabi Campus - Energy Engineering',
      'SUSTAINABLE ENERGY TECHNOLOGIES',
    ],
  },
  {
    label: 'Environmental Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Environmental Engineering',
      'Environmental Science and Engineering',
      'Environmental Science and Engineering)',
    ],
  },
  {
    label: 'Pharmaceutical Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Pharmaceutical Engineering & Technology',
      'Pharmaceutical Engineering & Technology)',
    ],
  },
  {
    label: 'Geosciences',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Applied Geology',
      'Applied Geophysics',
      'Geological Technology',
      'Geophysical Technology',
      'Exploration Geophysics',
      'Earth Sciences',
    ],
  },
  {
    label: 'Agricultural Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Agricultural and Food Engineering',
      'Food Process Engineering',
      'Digital Agriculture',
    ],
  },
  {
    label: 'Instrumentation Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Instrumentation Engineering',
      'Instrumentation and Control Engineering',
    ],
  },
  {
    label: 'Industrial Chemistry',
    duration: 4,
    degree: DEGREE_TYPES.BS,
    rawBranches: [
      'Industrial Chemistry',
      'Industrial Chemistry)',
      'Chemical Technology)',
    ],
  },
  {
    label: 'Design',
    duration: 4,
    degree: DEGREE_TYPES.BDES,
    rawBranches: [
      'Design',
      'Industrial Design',
      'Engineering Design)',
    ],
  },
  {
    label: 'Engineering Science',
    duration: 4,
    degree: DEGREE_TYPES.BS,
    rawBranches: [
      'Engineering Science',
    ],
  },
  {
    label: 'Space Science & Engineering',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Space Science and Engineering',
      'Space Sciences and Engineering',
    ],
  },
  {
    label: 'Economics',
    duration: 4,
    degree: DEGREE_TYPES.BS,
    rawBranches: [
      'Economics',
      'Economics)',
    ],
  },
  {
    label: 'Physics',
    duration: 4,
    degree: DEGREE_TYPES.BS,
    rawBranches: [
      'Physics',
      'Physics)',
      'Physics with Specialization',
    ],
  },
  {
    label: 'General & Other (B.Tech)',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'B.Tech in General Engineering',
      'Abu Dhabi Campus - Computer Science and Engineering',
      'Industrial Internet of Things',
    ],
  },
  // ── Dual Degree groups (5-Year) ──────────────────────────────────────────
  {
    label: 'Dual Degree — Civil',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'B. Tech in CE. - M. Tech.  in Geotechnical Engineering)',
      'B. Tech in CE. - M. Tech.  in Structural Engineering)',
      'Civil Engineering and M. Tech. in Structural Engineering)',
      'Civil Engineering and M.Tech in Transportation Engineering)',
      'Civil Engineering and M.Tech. in Environmental Engineering)',
      'Civil Engineering with Specialization in Construction Technology and Management)',
      'Civil Engineering with any of the listed specialization)',
    ],
  },
  {
    label: 'Dual Degree — Electrical',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'Electrical  Engineering and M.Tech Power Electronics and Drives)',
      'Electrical Engineering with M.Tech. in Power Electronics)',
      'Electrical Engineering with M.Tech. in any of the listed specializations)',
      'Electrical Engineering with Specialization In Power System Engineering)',
      'B. Tech. -M. Tech. in VLSI)',
      'Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design)',
      'Electronics and Electrical Communication Engineering with M.Tech. in any of the listed specializations)',
      'B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems)',
    ],
  },
  {
    label: 'Dual Degree — Mechanical',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'Mechanical Engineering and M. Tech. in Mechanical System Design)',
      'Mechanical Engineering and M. Tech. in Thermal Science & Engineering)',
      'Mechanical Engineering and M.Tech. in Computer Integrated Manufacturing)',
      'Mechanical Engineering with M.Tech. in Manufacturing Engineering)',
      'Mechanical Engineering with M.Tech. in any of the listed specializations)',
      'Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering)',
      'B. Tech. - M. Tech. in Mechatronics)',
    ],
  },
  {
    label: 'Dual Degree — Chemical / Biotech',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology)',
      'Bioengineering with M.Tech in Biomedical Technology)',
      'Agricultural and Food Engineering with M.Tech. in any of the listed specializations)',
      'Energy Engineering with M.Tech. in Energy Systems Engineering)',
      'Ceramic Engineering and M.Tech Industrial Ceramic)',
    ],
  },
  {
    label: 'Dual Degree — Industrial / Systems',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'Manufacturing Science and Engineering with M.Tech. in Industrial and Systems Engineering and Management)',
      'Industrial and Systems Engineering with M.Tech. in Industrial and Systems Engineering and Management)',
    ],
  },
  {
    label: 'Dual Degree — CSE / Math',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'B. Tech. and M.Tech in CSE)',
      'B. Tech. and M. Tech. in Engineering and Computational Mechanics)',
    ],
  },
  {
    label: 'Dual Degree — MBA',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'B. Tech. - MBA)',
      'B.Tech - MBA)',
      'B.Tech - MBA in Digital Business Management)',
      'B.Tech - MBA in Hospital and Health Care Management)',
      'B.Tech - MBA in Hospital and Healthcare Management)',
      'BS in Economics with MBA)',
      'B.Tech Mining Engineering and MBA in Logistic and Supply Chain Management',
    ],
  },
  {
    label: 'Dual Degree — Generic',
    duration: 5,
    degree: DEGREE_TYPES.DUAL,
    rawBranches: [
      'B. Tech. M. Tech. in)',
      'B. Tech.-M. Tech. in)',
      'Interdisciplinary Sciences)',
    ],
  },
  {
    label: 'Other',
    duration: 4,
    degree: DEGREE_TYPES.BTECH,
    rawBranches: [
      'Textile Technology',
    ],
  },
]

// ─── Build a fast lookup map: raw branch string → group ──────────────────────
const RAW_TO_GROUP = new Map()
BRANCH_GROUPS.forEach(group => {
  group.rawBranches.forEach(raw => {
    RAW_TO_GROUP.set(raw, group)
  })
})

// ─── Public helpers ───────────────────────────────────────────────────────────

/**
 * Returns the canonical group label for a raw branch string.
 * Falls back to the raw string itself if not mapped.
 */
export function getGroupLabel(rawBranch) {
  return RAW_TO_GROUP.get(rawBranch)?.label ?? rawBranch
}

/**
 * Returns 4 or 5 (years) for a raw branch string.
 */
export function getDuration(rawBranch) {
  return RAW_TO_GROUP.get(rawBranch)?.duration ?? 4
}

/**
 * Returns the degree type string for a raw branch string.
 * e.g. 'B.Tech', 'B.S.', 'B.Arch', 'B.Plan', 'B.Des', 'Dual'
 */
export function getDegreeType(rawBranch) {
  return RAW_TO_GROUP.get(rawBranch)?.degree ?? DEGREE_TYPES.BTECH
}

/**
 * Returns all raw branch strings that belong to the given canonical label.
 * Used to expand a group selection into individual filter values.
 */
export function getRawBranchesForGroup(label) {
  const group = BRANCH_GROUPS.find(g => g.label === label)
  return group ? group.rawBranches : []
}

/**
 * Given a list of raw branch strings (e.g. from metadata or per-institute
 * filtering), returns the subset of BRANCH_GROUPS that have at least one
 * matching raw branch in the list.
 */
export function getAvailableGroups(allRawBranches) {
  const rawSet = new Set(allRawBranches)
  return BRANCH_GROUPS.filter(group =>
    group.rawBranches.some(raw => rawSet.has(raw))
  )
}

/**
 * Returns a CSS-safe class suffix for a degree type string.
 * e.g. 'B.Tech' → 'btech', 'B.S.' → 'bs', 'B.Arch' → 'barch'
 */
export function degreeCssClass(degreeType) {
  return degreeType.toLowerCase().replace(/[^a-z]/g, '')
}
