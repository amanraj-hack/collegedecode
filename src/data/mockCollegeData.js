const rawCollegeData = [
  {
    id: 'iit-madras',
    name: "IIT Madras",
    nirfRank: 1,
    establishedYear: 1959,
    campusArea: "618",
    totalIntake: 1054,
    generation: "1st Gen",
    topInIndia: "Top 1",
    tierProgress: 98,
    seatMatrix: [
      { branch: "CSE", GEN: 90, OBC: 40, SC: 20, ST: 10 },
      { branch: "ECE", GEN: 70, OBC: 32, SC: 18, ST: 8 },
      { branch: "ME", GEN: 65, OBC: 30, SC: 15, ST: 8 },
      { branch: "Civil", GEN: 50, OBC: 25, SC: 12, ST: 6 }
    ],
    courses: [
      { name: "Aerospace Engineering", color: "orange" },
      { name: "Artificial Intelligence and Data Analytics", color: "blue" },
      { name: "Biological Engineering", color: "rose" },
      { name: "Biological Science", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computational Engineering and Mechanics", color: "slate" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Design", color: "slate" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Instrumentation and Biomedical Engineering", color: "rose" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical and Materials Engineering", color: "rose" },
      { name: "Naval Architecture and Ocean Engineering", color: "orange" },
      { name: "Physics", color: "amber" }
    ],
    placements: { avg: "19.5", highest: "131" }
  },
  {
    id: 'iit-delhi',
    name: "IIT Delhi",
    nirfRank: 2,
    establishedYear: 1961,
    campusArea: "325",
    totalIntake: 1239,
    generation: "1st Gen",
    topInIndia: "Top 3",
    tierProgress: 95,
    seatMatrix: [
      { branch: "CSE", GEN: 104, OBC: 45, SC: 22, ST: 12 },
      { branch: "ECE", GEN: 78, OBC: 35, SC: 18, ST: 9 },
      { branch: "ME", GEN: 56, OBC: 28, SC: 15, ST: 8 },
      { branch: "Civil", GEN: 40, OBC: 22, SC: 12, ST: 6 }
    ],
    courses: [
      { name: "Abu Dhabi Campus - Chemical Engineering", color: "rose" },
      { name: "Abu Dhabi Campus - Computer Science and Engineering", color: "blue" },
      { name: "Abu Dhabi Campus - Energy Engineering", color: "slate" },
      { name: "Biotechnology and Biochemical Engineering", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemistry", color: "slate" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Design", color: "slate" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Energy Engineering", color: "slate" },
      { name: "Engineering and Computational Mechanics", color: "slate" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Materials Engineering", color: "rose" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Production and Industrial Engineering", color: "slate" },
      { name: "Textile Technology", color: "slate" },
      { name: "Aerospace Engineering", color: "orange" },
      { name: "Artificial Intelligence and Data Science", color: "blue" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "VLSI Design and Technology", color: "purple" }
    ],
    placements: { avg: "18.5", highest: "140" }
  },
  {
    id: 'iit-bombay',
    name: "IIT Bombay",
    nirfRank: 3,
    establishedYear: 1958,
    campusArea: "545",
    totalIntake: 1204,
    generation: "1st Gen",
    topInIndia: "Top 3",
    tierProgress: 96,
    seatMatrix: [
      { branch: "CSE", GEN: 120, OBC: 52, SC: 28, ST: 14 },
      { branch: "ECE", GEN: 85, OBC: 40, SC: 20, ST: 10 },
      { branch: "ME", GEN: 60, OBC: 30, SC: 16, ST: 8 },
      { branch: "Civil", GEN: 45, OBC: 25, SC: 14, ST: 7 }
    ],
    courses: [
      { name: "Aerospace Engineering", color: "orange" },
      { name: "Applied Geophysics", color: "slate" },
      { name: "BS in Mathematics", color: "blue" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemistry", color: "slate" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Economics", color: "slate" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Energy Engineering", color: "slate" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Environmental Science and Engineering", color: "teal" },
      { name: "Industrial Engineering and Operations Research", color: "slate" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical Engineering and Materials Science", color: "rose" }
    ],
    placements: { avg: "21.8", highest: "160" }
  },
  {
    id: 'iit-kanpur',
    name: "IIT Kanpur",
    nirfRank: 4,
    establishedYear: 1959,
    campusArea: "1055",
    totalIntake: 964,
    generation: "1st Gen",
    topInIndia: "Top 5",
    tierProgress: 92,
    seatMatrix: [
      { branch: "CSE", GEN: 95, OBC: 45, SC: 25, ST: 12 },
      { branch: "Electrical", GEN: 80, OBC: 35, SC: 18, ST: 10 },
      { branch: "ME", GEN: 65, OBC: 30, SC: 15, ST: 8 },
      { branch: "Materials", GEN: 40, OBC: 20, SC: 12, ST: 6 }
    ],
    courses: [
      { name: "Aerospace Engineering", color: "orange" },
      { name: "Biological Sciences and Bioengineering", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemistry", color: "slate" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Earth Sciences", color: "slate" },
      { name: "Economics", color: "slate" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Materials Science and Engineering", color: "rose" },
      { name: "Mathematics and Scientific Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Physics", color: "amber" },
      { name: "Statistics and Data Science", color: "blue" }
    ],
    placements: { avg: "18.2", highest: "120" }
  },
  {
    id: 'iit-kharagpur',
    name: "IIT Kharagpur",
    nirfRank: 5,
    establishedYear: 1951,
    campusArea: "2100",
    totalIntake: 1719,
    generation: "1st Gen",
    topInIndia: "Top 6",
    tierProgress: 90,
    seatMatrix: [
      { branch: "CSE", GEN: 110, OBC: 55, SC: 30, ST: 15 },
      { branch: "ECE", GEN: 90, OBC: 45, SC: 22, ST: 11 },
      { branch: "ME", GEN: 75, OBC: 35, SC: 18, ST: 9 },
      { branch: "Civil", GEN: 60, OBC: 30, SC: 15, ST: 8 }
    ],
    courses: [
      { name: "Aerospace Engineering", color: "orange" },
      { name: "Agricultural and Food Engineering", color: "slate" },
      { name: "Applied Geology", color: "slate" },
      { name: "Architecture", color: "teal" },
      { name: "Artificial Intelligence", color: "blue" },
      { name: "Biotechnology and Biochemical Engineering", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemistry", color: "slate" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Economics", color: "slate" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics and Electrical Communication Engineering", color: "purple" },
      { name: "Exploration Geophysics", color: "slate" },
      { name: "Industrial and Systems Engineering", color: "slate" },
      { name: "Instrumentation Engineering", color: "slate" },
      { name: "Manufacturing Science and Engineering", color: "slate" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical and Materials Engineering", color: "rose" },
      { name: "Mining Engineering", color: "orange" },
      { name: "Ocean Engineering and Naval Architecture", color: "orange" },
      { name: "Physics", color: "amber" }
    ],
    placements: { avg: "17.5", highest: "115" }
  },
  {
    id: 'iit-roorkee',
    name: "IIT Roorkee",
    nirfRank: 6,
    establishedYear: 1847,
    campusArea: "365",
    totalIntake: 1246,
    generation: "1st Gen",
    topInIndia: "Top 10",
    tierProgress: 88,
    seatMatrix: [
      { branch: "CSE", GEN: 90, OBC: 45, SC: 22, ST: 11 },
      { branch: "ECE", GEN: 70, OBC: 35, SC: 18, ST: 9 },
      { branch: "Civil", GEN: 80, OBC: 40, SC: 20, ST: 10 },
      { branch: "ME", GEN: 60, OBC: 30, SC: 15, ST: 8 }
    ],
    courses: [
      { name: "Architecture", color: "teal" },
      { name: "Biosciences and Bioengineering", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemical Sciences", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Data Science and Artificial Intelligence", color: "blue" },
      { name: "Economics", color: "slate" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Energy Engineering", color: "slate" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Geological Technology", color: "slate" },
      { name: "Geophysical Technology", color: "slate" },
      { name: "Mathematics & Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical and Materials Engineering", color: "rose" },
      { name: "Physics", color: "amber" },
      { name: "Production and Industrial Engineering", color: "slate" }
    ],
    placements: { avg: "17.0", highest: "105" }
  },
  {
    id: 'iit-guwahati',
    name: "IIT Guwahati",
    nirfRank: 8,
    establishedYear: 1994,
    campusArea: "705",
    totalIntake: 855,
    generation: "1st Gen",
    topInIndia: "Top 10",
    tierProgress: 85,
    seatMatrix: [
      { branch: "CSE", GEN: 85, OBC: 40, SC: 20, ST: 10 },
      { branch: "ECE", GEN: 65, OBC: 32, SC: 16, ST: 8 },
      { branch: "ME", GEN: 55, OBC: 28, SC: 14, ST: 7 },
      { branch: "Data Sci", GEN: 30, OBC: 15, SC: 8, ST: 4 }
    ],
    courses: [
      { name: "Biosciences and Bioengineering", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemical Science and Technology", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Data Science and Artificial Intelligence", color: "blue" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Electronics and Electrical Engineering", color: "purple" },
      { name: "Energy Engineering", color: "slate" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "16.5", highest: "90" }
  },
  {
    id: 'iit-hyderabad',
    name: "IIT Hyderabad",
    nirfRank: 7,
    establishedYear: 2008,
    campusArea: "576",
    totalIntake: 529,
    generation: "2nd Gen",
    topInIndia: "Top 12",
    tierProgress: 80,
    seatMatrix: [
      { branch: "CSE", GEN: 50, OBC: 25, SC: 12, ST: 6 },
      { branch: "AI", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "Electrical", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "ME", GEN: 35, OBC: 18, SC: 9, ST: 4 }
    ],
    courses: [
      { name: "Artificial Intelligence", color: "blue" },
      { name: "Biomedical Engineering", color: "rose" },
      { name: "Biotechnology and Bioinformatics", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computational Engineering", color: "slate" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Engineering Science", color: "slate" },
      { name: "Industrial Chemistry", color: "slate" },
      { name: "Materials Science and Metallurgical Engineering", color: "rose" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "18.0", highest: "85" }
  },
  {
    id: 'iit-bhu',
    name: "IIT BHU (Varanasi)",
    nirfRank: 10,
    establishedYear: 1919,
    campusArea: "425 of 1300",
    totalIntake: 1528,
    generation: "2nd Gen",
    topInIndia: "Top 15",
    tierProgress: 75,
    seatMatrix: [
      { branch: "CSE", GEN: 60, OBC: 30, SC: 15, ST: 8 },
      { branch: "ECE", GEN: 45, OBC: 22, SC: 11, ST: 5 },
      { branch: "ME", GEN: 50, OBC: 25, SC: 12, ST: 6 },
      { branch: "Mining", GEN: 35, OBC: 18, SC: 9, ST: 4 }
    ],
    courses: [
      { name: "Architecture", color: "teal" },
      { name: "Biochemical Engineering", color: "rose" },
      { name: "Bioengineering", color: "rose" },
      { name: "Ceramic Engineering", color: "slate" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Industrial Chemistry", color: "slate" },
      { name: "Materials Science and Technology", color: "rose" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical Engineering", color: "rose" },
      { name: "Mining Engineering", color: "orange" },
      { name: "Pharmaceutical Engineering & Technology", color: "slate" }
    ],
    placements: { avg: "15.5", highest: "75" }
  },
  {
    id: 'iit-ism-dhanbad',
    name: "IIT ISM Dhanbad",
    nirfRank: 15,
    establishedYear: 1926,
    campusArea: "339",
    totalIntake: 1109,
    generation: "2nd Gen",
    topInIndia: "Top 20",
    tierProgress: 65,
    seatMatrix: [
      { branch: "CSE", GEN: 70, OBC: 35, SC: 18, ST: 9 },
      { branch: "Petroleum", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "Mining", GEN: 55, OBC: 28, SC: 14, ST: 7 },
      { branch: "Electrical", GEN: 45, OBC: 22, SC: 11, ST: 5 }
    ],
    courses: [
      { name: "Applied Geology", color: "slate" },
      { name: "Applied Geophysics", color: "slate" },
      { name: "B.Tech Mining Engineering and MBA in Logistic and Supply Chain Management", color: "orange" },
      { name: "Chemical  Science", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Environmental Engineering", color: "teal" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Mineral and Metallurgical Engineering", color: "rose" },
      { name: "Mining Engineering", color: "orange" },
      { name: "Mining Machinery Engineering", color: "orange" },
      { name: "Petroleum Engineering", color: "slate" },
      { name: "Physical Science", color: "slate" }
    ],
    placements: { avg: "14.5", highest: "60" }
  },
  {
    id: 'iit-indore',
    name: "IIT Indore",
    nirfRank: 12,
    establishedYear: 2009,
    campusArea: "501",
    totalIntake: 445,
    generation: "2nd Gen",
    topInIndia: "Top 20",
    tierProgress: 60,
    seatMatrix: [
      { branch: "CSE", GEN: 45, OBC: 22, SC: 11, ST: 5 },
      { branch: "Electrical", GEN: 35, OBC: 18, SC: 9, ST: 4 },
      { branch: "ME", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "Civil", GEN: 20, OBC: 10, SC: 5, ST: 2 }
    ],
    courses: [
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical Engineering and Materials Science", color: "rose" },
      { name: "Space Science and Engineering", color: "slate" }
    ],
    placements: { avg: "14.0", highest: "55" }
  },
  {
    id: 'iit-ropar',
    name: "IIT Ropar",
    nirfRank: 32,
    establishedYear: 2008,
    campusArea: "525",
    totalIntake: 598,
    generation: "2nd Gen",
    topInIndia: "Top 25",
    tierProgress: 55,
    seatMatrix: [
      { branch: "CSE", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "Electrical", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "ME", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Civil", GEN: 20, OBC: 10, SC: 5, ST: 2 }
    ],
    courses: [
      { name: "Artificial Intelligence and Data Engineering", color: "blue" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Digital Agriculture", color: "slate" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical and Materials Engineering", color: "rose" }
    ],
    placements: { avg: "13.8", highest: "50" }
  },
  {
    id: 'iit-mandi',
    name: "IIT Mandi",
    nirfRank: 26,
    establishedYear: 2009,
    campusArea: "538",
    totalIntake: 501,
    generation: "2nd Gen",
    topInIndia: "Top 25",
    tierProgress: 52,
    seatMatrix: [
      { branch: "CSE", GEN: 35, OBC: 18, SC: 9, ST: 4 },
      { branch: "Electrical", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "ME", GEN: 22, OBC: 11, SC: 5, ST: 2 },
      { branch: "Civil", GEN: 18, OBC: 9, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "B.Tech in General Engineering", color: "slate" },
      { name: "B.Tech in Materials Science and Engineering", color: "rose" },
      { name: "B.Tech in Mathematics and Computing", color: "blue" },
      { name: "B.Tech in Microelectronics & VLSI", color: "purple" },
      { name: "Bio Engineering", color: "rose" },
      { name: "BS in Chemical Sciences", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Data Science and Artificial Intelligence", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "13.5", highest: "45" }
  },
  {
    id: 'iit-gandhinagar',
    name: "IIT Gandhinagar",
    nirfRank: 25,
    establishedYear: 2008,
    campusArea: "399",
    totalIntake: 288,
    generation: "2nd Gen",
    topInIndia: "Top 30",
    tierProgress: 50,
    seatMatrix: [
      { branch: "CSE", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "Electrical", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "ME", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "Civil", GEN: 15, OBC: 8, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "Artificial Intelligence", color: "blue" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Integrated Circuit Design & Technology", color: "slate" },
      { name: "Materials Engineering", color: "rose" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "13.0", highest: "48" }
  },
  {
    id: 'iit-jodhpur',
    name: "IIT Jodhpur",
    nirfRank: 27,
    establishedYear: 2008,
    campusArea: "852",
    totalIntake: 488,
    generation: "2nd Gen",
    topInIndia: "Top 30",
    tierProgress: 48,
    seatMatrix: [
      { branch: "CSE", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "AI & Data", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "ME", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Civil", GEN: 18, OBC: 9, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "Artificial Intelligence and Data Science", color: "blue" },
      { name: "Bio Engineering", color: "rose" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemistry with Specialization", color: "slate" },
      { name: "Civil and Infrastructure Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics Engineering", color: "purple" },
      { name: "Materials Engineering", color: "rose" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Physics with Specialization", color: "amber" }
    ],
    placements: { avg: "12.5", highest: "42" }
  },
  {
    id: 'iit-patna',
    name: "IIT Patna",
    nirfRank: 19,
    establishedYear: 2008,
    campusArea: "501",
    totalIntake: 782,
    generation: "2nd Gen",
    topInIndia: "Top 40",
    tierProgress: 40,
    seatMatrix: [
      { branch: "CSE", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "Electrical", GEN: 28, OBC: 14, SC: 7, ST: 3 },
      { branch: "ME", GEN: 22, OBC: 11, SC: 5, ST: 2 },
      { branch: "Civil", GEN: 16, OBC: 8, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "Artificial Intelligence and Data Science", color: "blue" },
      { name: "B. Tech in CE. - M. Tech.  in Geotechnical Engineering", color: "slate" },
      { name: "B. Tech in CE. - M. Tech.  in Structural Engineering", color: "slate" },
      { name: "B. Tech. and M.Tech in CSE", color: "slate" },
      { name: "B. Tech. -M. Tech. in VLSI", color: "purple" },
      { name: "B. Tech.-M. Tech. in", color: "slate" },
      { name: "B. Tech. M. Tech. in", color: "slate" },
      { name: "B. Tech. - M. Tech. in Mechatronics", color: "slate" },
      { name: "B.Tech - MBA in Digital Business Management", color: "slate" },
      { name: "B.Tech - MBA in Hospital and Health Care Management", color: "slate" },
      { name: "B.Tech - MBA", color: "slate" },
      { name: "B.Tech - MBA in Hospital and Healthcare Management", color: "slate" },
      { name: "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems", color: "purple" },
      { name: "BS in Economics with MBA", color: "slate" },
      { name: "Chemical Engineering", color: "rose" },
      { name: "Chemical Science and Technology", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Economics", color: "slate" },
      { name: "Electrical and Electronics Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical and Materials Engineering", color: "rose" },
      { name: "Architecture", color: "teal" },
      { name: "Chemical Technology", color: "rose" },
      { name: "Civil Engineering with Specialization in Construction Technology and Management", color: "teal" },
      { name: "Computer Science and Engineering with Specialization in Cyber Security", color: "blue" },
      { name: "Computer Science and Engineering with Specialization in Data Science", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electrical Engineering with Specialization In Power System Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design", color: "purple" },
      { name: "Electronics Engineering", color: "purple" },
      { name: "Material Science and Engineering", color: "slate" },
      { name: "Mathematics and Computing Technology", color: "blue" },
      { name: "Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering", color: "orange" },
      { name: "Mechatronics and Automation Engineering", color: "slate" }
    ],
    placements: { avg: "11.8", highest: "40" }
  },
  {
    id: 'iit-bhubaneswar',
    name: "IIT Bhubaneswar",
    nirfRank: 39,
    establishedYear: 2008,
    campusArea: "936",
    totalIntake: 496,
    generation: "2nd Gen",
    topInIndia: "Top 40",
    tierProgress: 38,
    seatMatrix: [
      { branch: "CSE", GEN: 45, OBC: 22, SC: 11, ST: 5 },
      { branch: "ECE", GEN: 30, OBC: 15, SC: 7, ST: 3 },
      { branch: "ME", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Civil", GEN: 20, OBC: 10, SC: 5, ST: 2 }
    ],
    courses: [
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Metallurgical and Materials Engineering", color: "rose" }
    ],
    placements: { avg: "11.5", highest: "38" }
  },
  {
    id: 'iit-tirupati',
    name: "IIT Tirupati",
    nirfRank: 57,
    establishedYear: 2016,
    campusArea: "548",
    totalIntake: 241,
    generation: "3rd Gen",
    topInIndia: "Top 70",
    tierProgress: 25,
    seatMatrix: [
      { branch: "CSE", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Electrical", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "ME", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "Civil", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "10.5", highest: "32" }
  },
  {
    id: 'iit-palakkad',
    name: "IIT Palakkad",
    nirfRank: 64,
    establishedYear: 2015,
    campusArea: "504",
    totalIntake: 160,
    generation: "3rd Gen",
    topInIndia: "Top 70",
    tierProgress: 22,
    seatMatrix: [
      { branch: "CSE", GEN: 22, OBC: 11, SC: 5, ST: 2 },
      { branch: "Electrical", GEN: 18, OBC: 9, SC: 4, ST: 2 },
      { branch: "ME", GEN: 14, OBC: 7, SC: 3, ST: 1 },
      { branch: "Civil", GEN: 12, OBC: 6, SC: 3, ST: 1 }
    ],
    courses: [
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Data Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "10.0", highest: "30" }
  },
  {
    id: 'iit-jammu',
    name: "IIT Jammu",
    nirfRank: 56,
    establishedYear: 2016,
    campusArea: "400",
    totalIntake: 305,
    generation: "3rd Gen",
    topInIndia: "Top 80",
    tierProgress: 20,
    seatMatrix: [
      { branch: "CSE", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "Electrical", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "ME", GEN: 12, OBC: 6, SC: 3, ST: 1 },
      { branch: "Civil", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "Chemical Engineering", color: "rose" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Materials Engineering", color: "rose" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "9.5", highest: "28" }
  },
  {
    id: 'iit-bhilai',
    name: "IIT Bhilai",
    nirfRank: 77,
    establishedYear: 2016,
    campusArea: "445",
    totalIntake: 316,
    generation: "3rd Gen",
    topInIndia: "Top 90",
    tierProgress: 18,
    seatMatrix: [
      { branch: "CSE", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Electrical", GEN: 18, OBC: 9, SC: 4, ST: 2 },
      { branch: "ME", GEN: 14, OBC: 7, SC: 3, ST: 1 },
      { branch: "Data Sci", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Data Science and Artificial Intelligence", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Materials Science and Metallurgical Engineering", color: "rose" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Mechatronics Engineering", color: "slate" }
    ],
    placements: { avg: "10.2", highest: "29" }
  },
  {
    id: 'iit-goa',
    name: "IIT Goa",
    nirfRank: 101,
    establishedYear: 2016,
    campusArea: "320",
    totalIntake: 132,
    generation: "3rd Gen",
    topInIndia: "Top 90",
    tierProgress: 15,
    seatMatrix: [
      { branch: "CSE", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "Electrical", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "ME", GEN: 12, OBC: 6, SC: 3, ST: 1 },
      { branch: "Math & Comp", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical Engineering", color: "purple" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" },
      { name: "Civil Engineering", color: "teal" },
      { name: "Electrical and Electronics Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" }
    ],
    placements: { avg: "9.8", highest: "25" }
  },
  {
    id: 'iit-dharwad',
    name: "IIT Dharwad",
    nirfRank: 77,
    establishedYear: 2016,
    campusArea: "470",
    totalIntake: 363,
    generation: "3rd Gen",
    topInIndia: "Top 100",
    tierProgress: 10,
    seatMatrix: [
      { branch: "CSE", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Electrical", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "ME", GEN: 12, OBC: 6, SC: 3, ST: 1 }
    ],
    courses: [
      { name: "Chemical and Biochemical Engineering", color: "rose" },
      { name: "Civil and Infrastructure Engineering", color: "teal" },
      { name: "Computer Science and Engineering", color: "blue" },
      { name: "Electrical and Electronics Engineering", color: "purple" },
      { name: "Electronics and Communication Engineering", color: "purple" },
      { name: "Engineering Physics", color: "amber" },
      { name: "Interdisciplinary Sciences", color: "slate" },
      { name: "Mathematics and Computing", color: "blue" },
      { name: "Mechanical Engineering", color: "orange" }
    ],
    placements: { avg: "9.2", highest: "22" }
  }
];

export const mockCollegeData = rawCollegeData.map(college => {
  return {
    ...college,
    established: college.establishedYear || (1950 + Math.floor(Math.random() * 60)),
    highlights: {
      totalIntake: college.totalIntake || (Math.floor(Math.random() * 500) + 800),
      academicCourses: college.courses.length,
      medianPackage: (parseFloat(college.placements.avg) * 0.8).toFixed(1) + " LPA",
      placementRate: (Math.floor(Math.random() * 10) + 85) + "%",
      campusArea: college.campusArea ? (college.campusArea.includes("Acres") ? college.campusArea : college.campusArea + " Acres") : ((Math.floor(Math.random() * 400) + 200) + " Acres"),
      highestPackage: college.placements.highest + " LPA"
    },
    topRecruiters: [
      "Google", "Microsoft", "Qualcomm", "Meta", "Morgan Stanley", "Apple", "Jane Street", "Amazon", "TSMC"
    ].sort(() => 0.5 - Math.random()).slice(0, 8),
    life: {
      campusImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      studyImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      friendsImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
      stats: {
        hostels: Math.floor(Math.random() * 5) + 10,
        wifi: "10 Gbps"
      }
    },
    uniqueFactors: [
      {
        id: "culture",
        icon: "rocket",
        title: "Startup Culture",
        desc: "Thriving environment spanning tech, consulting, and finance."
      },
      {
        id: "diversity",
        icon: "globe",
        title: "Global Diversity",
        desc: "Global exposure and culturally rich ongoing programs for everyone."
      },
      {
        id: "infrastructure",
        icon: "building",
        title: "Tech Infrastructure",
        desc: "State of the art labs and computing facilities spanning the campus."
      }
    ],
    nirfHistory: [
      { year: '2021', rank: college.nirfRank + 2 },
      { year: '2022', rank: college.nirfRank + 1 },
      { year: '2023', rank: college.nirfRank + 1 },
      { year: '2024', rank: college.nirfRank },
      { year: '2025', rank: college.nirfRank }
    ]
  };
});

export const branchesData = ['CSE', 'Electrical', 'Mechanical', 'Civil', 'Aerospace', 'Mathematics & Computing', 'ECE', 'Materials', 'Chemical', 'Agriculture'];
