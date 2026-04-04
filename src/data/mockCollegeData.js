const rawCollegeData = [
  {
    id: 'iit-madras',
    name: "IIT Madras",
    nirfRank: 1,
    tier: 1,
    topInIndia: "Top 1",
    tierProgress: 98,
    seatMatrix: [
      { branch: "CSE", GEN: 90, OBC: 40, SC: 20, ST: 10 },
      { branch: "ECE", GEN: 70, OBC: 32, SC: 18, ST: 8 },
      { branch: "ME", GEN: 65, OBC: 30, SC: 15, ST: 8 },
      { branch: "Civil", GEN: 50, OBC: 25, SC: 12, ST: 6 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" },
      { name: "Electrical", color: "green" }, { name: "Data Sci", color: "red" }
    ],
    placements: { avg: "19.5", highest: "131" }
  },
  {
    id: 'iit-delhi',
    name: "IIT Delhi",
    nirfRank: 2,
    tier: 1,
    topInIndia: "Top 3",
    tierProgress: 95,
    seatMatrix: [
      { branch: "CSE", GEN: 104, OBC: 45, SC: 22, ST: 12 },
      { branch: "ECE", GEN: 78, OBC: 35, SC: 18, ST: 9 },
      { branch: "ME", GEN: 56, OBC: 28, SC: 15, ST: 8 },
      { branch: "Civil", GEN: 40, OBC: 22, SC: 12, ST: 6 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" },
      { name: "AI & DS", color: "green" }, { name: "Chemical", color: "red" }
    ],
    placements: { avg: "18.5", highest: "140" }
  },
  {
    id: 'iit-bombay',
    name: "IIT Bombay",
    nirfRank: 3,
    tier: 1,
    topInIndia: "Top 3",
    tierProgress: 96,
    seatMatrix: [
      { branch: "CSE", GEN: 120, OBC: 52, SC: 28, ST: 14 },
      { branch: "ECE", GEN: 85, OBC: 40, SC: 20, ST: 10 },
      { branch: "ME", GEN: 60, OBC: 30, SC: 16, ST: 8 },
      { branch: "Civil", GEN: 45, OBC: 25, SC: 14, ST: 7 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Aerospace", color: "teal" },
      { name: "Energy", color: "green" }, { name: "Chemical", color: "red" }
    ],
    placements: { avg: "21.8", highest: "160" }
  },
  {
    id: 'iit-kanpur',
    name: "IIT Kanpur",
    nirfRank: 4,
    tier: 1,
    topInIndia: "Top 5",
    tierProgress: 92,
    seatMatrix: [
      { branch: "CSE", GEN: 95, OBC: 45, SC: 25, ST: 12 },
      { branch: "Electrical", GEN: 80, OBC: 35, SC: 18, ST: 10 },
      { branch: "ME", GEN: 65, OBC: 30, SC: 15, ST: 8 },
      { branch: "Materials", GEN: 40, OBC: 20, SC: 12, ST: 6 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Materials", color: "teal" },
      { name: "Aerospace", color: "green" }
    ],
    placements: { avg: "18.2", highest: "120" }
  },
  {
    id: 'iit-kharagpur',
    name: "IIT Kharagpur",
    nirfRank: 6,
    tier: 1,
    topInIndia: "Top 6",
    tierProgress: 90,
    seatMatrix: [
      { branch: "CSE", GEN: 110, OBC: 55, SC: 30, ST: 15 },
      { branch: "ECE", GEN: 90, OBC: 45, SC: 22, ST: 11 },
      { branch: "ME", GEN: 75, OBC: 35, SC: 18, ST: 9 },
      { branch: "Civil", GEN: 60, OBC: 30, SC: 15, ST: 8 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" },
      { name: "Agriculture", color: "green" }, { name: "Mining", color: "red" }
    ],
    placements: { avg: "17.5", highest: "115" }
  },
  {
    id: 'iit-roorkee',
    name: "IIT Roorkee",
    nirfRank: 8,
    tier: 1,
    topInIndia: "Top 10",
    tierProgress: 88,
    seatMatrix: [
      { branch: "CSE", GEN: 90, OBC: 45, SC: 22, ST: 11 },
      { branch: "ECE", GEN: 70, OBC: 35, SC: 18, ST: 9 },
      { branch: "Civil", GEN: 80, OBC: 40, SC: 20, ST: 10 },
      { branch: "ME", GEN: 60, OBC: 30, SC: 15, ST: 8 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Civil", color: "teal" }, { name: "Architecture", color: "orange" },
      { name: "BioTech", color: "green" }
    ],
    placements: { avg: "17.0", highest: "105" }
  },
  {
    id: 'iit-guwahati',
    name: "IIT Guwahati",
    nirfRank: 9,
    tier: 1,
    topInIndia: "Top 10",
    tierProgress: 85,
    seatMatrix: [
      { branch: "CSE", GEN: 85, OBC: 40, SC: 20, ST: 10 },
      { branch: "ECE", GEN: 65, OBC: 32, SC: 16, ST: 8 },
      { branch: "ME", GEN: 55, OBC: 28, SC: 14, ST: 7 },
      { branch: "Data Sci", GEN: 30, OBC: 15, SC: 8, ST: 4 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Data Sci.", color: "green" },
      { name: "Design", color: "teal" }
    ],
    placements: { avg: "16.5", highest: "90" }
  },
  {
    id: 'iit-hyderabad',
    name: "IIT Hyderabad",
    nirfRank: 10,
    tier: 1.5,
    topInIndia: "Top 12",
    tierProgress: 80,
    seatMatrix: [
      { branch: "CSE", GEN: 50, OBC: 25, SC: 12, ST: 6 },
      { branch: "AI", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "Electrical", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "ME", GEN: 35, OBC: 18, SC: 9, ST: 4 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "AI", color: "purple" },
      { name: "Electrical", color: "orange" }, { name: "Mechanical", color: "teal" }
    ],
    placements: { avg: "18.0", highest: "85" }
  },
  {
    id: 'iit-bhu',
    name: "IIT BHU (Varanasi)",
    nirfRank: 12,
    tier: 1.5,
    topInIndia: "Top 15",
    tierProgress: 75,
    seatMatrix: [
      { branch: "CSE", GEN: 60, OBC: 30, SC: 15, ST: 8 },
      { branch: "ECE", GEN: 45, OBC: 22, SC: 11, ST: 5 },
      { branch: "ME", GEN: 50, OBC: 25, SC: 12, ST: 6 },
      { branch: "Mining", GEN: 35, OBC: 18, SC: 9, ST: 4 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Mining", color: "red" },
      { name: "Ceramic", color: "teal" }
    ],
    placements: { avg: "15.5", highest: "75" }
  },
  {
    id: 'iit-ism-dhanbad',
    name: "IIT ISM Dhanbad",
    nirfRank: 15,
    tier: 2,
    topInIndia: "Top 20",
    tierProgress: 65,
    seatMatrix: [
      { branch: "CSE", GEN: 70, OBC: 35, SC: 18, ST: 9 },
      { branch: "Petroleum", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "Mining", GEN: 55, OBC: 28, SC: 14, ST: 7 },
      { branch: "Electrical", GEN: 45, OBC: 22, SC: 11, ST: 5 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Petroleum", color: "orange" },
      { name: "Mining", color: "red" }, { name: "Electrical", color: "purple" }
    ],
    placements: { avg: "14.5", highest: "60" }
  },
  {
    id: 'iit-indore',
    name: "IIT Indore",
    nirfRank: 16,
    tier: 2,
    topInIndia: "Top 20",
    tierProgress: 60,
    seatMatrix: [
      { branch: "CSE", GEN: 45, OBC: 22, SC: 11, ST: 5 },
      { branch: "Electrical", GEN: 35, OBC: 18, SC: 9, ST: 4 },
      { branch: "ME", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "Civil", GEN: 20, OBC: 10, SC: 5, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "14.0", highest: "55" }
  },
  {
    id: 'iit-ropar',
    name: "IIT Ropar",
    nirfRank: 18,
    tier: 2,
    topInIndia: "Top 25",
    tierProgress: 55,
    seatMatrix: [
      { branch: "CSE", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "Electrical", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "ME", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Civil", GEN: 20, OBC: 10, SC: 5, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "13.8", highest: "50" }
  },
  {
    id: 'iit-mandi',
    name: "IIT Mandi",
    nirfRank: 20,
    tier: 2,
    topInIndia: "Top 25",
    tierProgress: 52,
    seatMatrix: [
      { branch: "CSE", GEN: 35, OBC: 18, SC: 9, ST: 4 },
      { branch: "Electrical", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "ME", GEN: 22, OBC: 11, SC: 5, ST: 2 },
      { branch: "Civil", GEN: 18, OBC: 9, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" },
      { name: "Data Sci", color: "green" }
    ],
    placements: { avg: "13.5", highest: "45" }
  },
  {
    id: 'iit-gandhinagar',
    name: "IIT Gandhinagar",
    nirfRank: 23,
    tier: 2,
    topInIndia: "Top 30",
    tierProgress: 50,
    seatMatrix: [
      { branch: "CSE", GEN: 30, OBC: 15, SC: 8, ST: 4 },
      { branch: "Electrical", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "ME", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "Civil", GEN: 15, OBC: 8, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "13.0", highest: "48" }
  },
  {
    id: 'iit-jodhpur',
    name: "IIT Jodhpur",
    nirfRank: 25,
    tier: 2,
    topInIndia: "Top 30",
    tierProgress: 48,
    seatMatrix: [
      { branch: "CSE", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "AI & Data", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "ME", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Civil", GEN: 18, OBC: 9, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "AI & Data", color: "green" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "12.5", highest: "42" }
  },
  {
    id: 'iit-patna',
    name: "IIT Patna",
    nirfRank: 33,
    tier: 2.5,
    topInIndia: "Top 40",
    tierProgress: 40,
    seatMatrix: [
      { branch: "CSE", GEN: 40, OBC: 20, SC: 10, ST: 5 },
      { branch: "Electrical", GEN: 28, OBC: 14, SC: 7, ST: 3 },
      { branch: "ME", GEN: 22, OBC: 11, SC: 5, ST: 2 },
      { branch: "Civil", GEN: 16, OBC: 8, SC: 4, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "11.8", highest: "40" }
  },
  {
    id: 'iit-bhubaneswar',
    name: "IIT Bhubaneswar",
    nirfRank: 36,
    tier: 2.5,
    topInIndia: "Top 40",
    tierProgress: 38,
    seatMatrix: [
      { branch: "CSE", GEN: 45, OBC: 22, SC: 11, ST: 5 },
      { branch: "ECE", GEN: 30, OBC: 15, SC: 7, ST: 3 },
      { branch: "ME", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Civil", GEN: 20, OBC: 10, SC: 5, ST: 2 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "ECE", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "11.5", highest: "38" }
  },
  {
    id: 'iit-tirupati',
    name: "IIT Tirupati",
    nirfRank: 59,
    tier: 3,
    topInIndia: "Top 70",
    tierProgress: 25,
    seatMatrix: [
      { branch: "CSE", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Electrical", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "ME", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "Civil", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "10.5", highest: "32" }
  },
  {
    id: 'iit-palakkad',
    name: "IIT Palakkad",
    nirfRank: 64,
    tier: 3,
    topInIndia: "Top 70",
    tierProgress: 22,
    seatMatrix: [
      { branch: "CSE", GEN: 22, OBC: 11, SC: 5, ST: 2 },
      { branch: "Electrical", GEN: 18, OBC: 9, SC: 4, ST: 2 },
      { branch: "ME", GEN: 14, OBC: 7, SC: 3, ST: 1 },
      { branch: "Civil", GEN: 12, OBC: 6, SC: 3, ST: 1 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "10.0", highest: "30" }
  },
  {
    id: 'iit-jammu',
    name: "IIT Jammu",
    nirfRank: 67,
    tier: 3,
    topInIndia: "Top 80",
    tierProgress: 20,
    seatMatrix: [
      { branch: "CSE", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "Electrical", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "ME", GEN: 12, OBC: 6, SC: 3, ST: 1 },
      { branch: "Civil", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }, { name: "Civil", color: "teal" }
    ],
    placements: { avg: "9.5", highest: "28" }
  },
  {
    id: 'iit-bhilai',
    name: "IIT Bhilai",
    nirfRank: 81,
    tier: 3,
    topInIndia: "Top 90",
    tierProgress: 18,
    seatMatrix: [
      { branch: "CSE", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Electrical", GEN: 18, OBC: 9, SC: 4, ST: 2 },
      { branch: "ME", GEN: 14, OBC: 7, SC: 3, ST: 1 },
      { branch: "Data Sci", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Data Sci", color: "green" }, { name: "Mechanical", color: "orange" }
    ],
    placements: { avg: "10.2", highest: "29" }
  },
  {
    id: 'iit-goa',
    name: "IIT Goa",
    nirfRank: 85,
    tier: 3,
    topInIndia: "Top 90",
    tierProgress: 15,
    seatMatrix: [
      { branch: "CSE", GEN: 20, OBC: 10, SC: 5, ST: 2 },
      { branch: "Electrical", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "ME", GEN: 12, OBC: 6, SC: 3, ST: 1 },
      { branch: "Math & Comp", GEN: 10, OBC: 5, SC: 2, ST: 1 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Math & Comp", color: "teal" }, { name: "Mechanical", color: "orange" }
    ],
    placements: { avg: "9.8", highest: "25" }
  },
  {
    id: 'iit-dharwad',
    name: "IIT Dharwad",
    nirfRank: 93,
    tier: 3,
    topInIndia: "Top 100",
    tierProgress: 10,
    seatMatrix: [
      { branch: "CSE", GEN: 25, OBC: 12, SC: 6, ST: 3 },
      { branch: "Electrical", GEN: 15, OBC: 8, SC: 4, ST: 2 },
      { branch: "ME", GEN: 12, OBC: 6, SC: 3, ST: 1 }
    ],
    courses: [
      { name: "CSE", color: "blue" }, { name: "Electrical", color: "purple" },
      { name: "Mechanical", color: "orange" }
    ],
    placements: { avg: "9.2", highest: "22" }
  }
];

export const mockCollegeData = rawCollegeData.map(college => {
  return {
    ...college,
    established: 1950 + Math.floor(Math.random() * 60),
    highlights: {
      totalIntake: Math.floor(Math.random() * 500) + 800,
      academicCourses: Math.floor(Math.random() * 15) + 15,
      medianPackage: (parseFloat(college.placements.avg) * 0.8).toFixed(1) + " LPA",
      placementRate: (Math.floor(Math.random() * 10) + 85) + "%",
      campusArea: (Math.floor(Math.random() * 400) + 200) + " Acres",
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
