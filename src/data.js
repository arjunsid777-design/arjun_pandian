/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Arjun",
  last: "Pandian",
  fullName: "Arjun Pandian",
  tagline: "Aspiring Engineering Student • Robotics & Electronics Enthusiast • Competitive Tennis Player",
  location: "Chennai, Tamil Nadu, India",
  email: "",
  phone: "",
  bio: [
    "I am a Grade 12 student and school topper with strong academic performance in Mathematics, Physics, and Computer Science. I am passionate about robotics, electronics, and practical engineering, and I enjoy turning ideas into working devices — from a microcontroller-based temperature logger to a remote-controlled car I built from scratch and control through a website on my phone.",
    "Alongside academics, competitive lawn tennis has been a constant in my life since 2015. More than ten years of training in technical skills, match strategy, conditioning, and endurance have taught me discipline and long-term commitment. Competing for Tamil Nadu at the CISCE National Championships has shown me how to perform under pressure while balancing a demanding academic schedule.",
    "As I prepare for university, I hope to study engineering and explore robotics, electronics, and technology-driven problem-solving, bringing the same hands-on curiosity and consistency I have built through my projects and my sport.",
  ],
  quote:
    "I enjoy building things with my own hands — assembling components, testing them, and seeing an idea become a working device. Engineering and tennis have both taught me that steady practice and persistence turn effort into results.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/cv.pdf",
  photo: "/placeholder.png",
  aboutPhoto: "/placeholder.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "ssn-microcontroller-internship",
    role: "Microcontroller Project Intern",
    org: "SSN College of Engineering",
    logo: "/logos/ssn.png",
    location: "Chennai, India",
    dates: "Apr – May 2026",
    meta: "Apr – May 2026 · Chennai, India ·",
    badge: "Internship",
    desc: "An internship focused on microcontroller fundamentals and their use in electronic systems, culminating in a working temperature recording and logging device.",
    bullets: [
      "Learned the fundamentals of microcontroller operation and their applications in electronic systems",
      "Built a temperature recording and logging device using a microcontroller, gaining practical experience in electronic hardware",
      "Applied concepts of microcontroller-based systems to develop a functional electronic project",
    ],
    tags: ["Microcontrollers", "Electronics", "Data Logging", "Hardware"],
    featured: true,
  },
  {
    slug: "academic-excellence",
    role: "School Topper",
    org: "Chettinad Hari Shree Vidyalayam",
    logo: "",
    location: "Chennai, India",
    dates: "2025 – 2027",
    meta: "2025 – 2027 · Chennai, India ·",
    badge: "Academics",
    desc: "A consistently strong academic record in Mathematics, Physics, and Computer Science, now in Grade 12 (Class of 2027).",
    bullets: [
      "Recognised among the Grade 10 board exam toppers (Best of 5) and featured on the school website",
      "Grade 10 board scores: Mathematics 99, Science 98, Social Studies 98, English 95, Computer Science 95, Tamil 93",
      "Grade 11 scores include Computer Science 93 and Physics 90",
    ],
    tags: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
    featured: true,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Remote-Controlled Car with Web-Based Control",
    org: "Independent Electronics Project",
    meta: "2026 · Independent Electronics Project",
    desc: "Designed and built a remote-controlled car from scratch by assembling individual electronic and mechanical components, with a control mechanism that lets the car be driven through a website accessed on a mobile phone.",
    tags: ["Electronics", "Web-Based Control", "Motors", "Mechanical Assembly"],
    featured: true,
  },
  {
    name: "Microcontroller-Based Temperature Logger",
    org: "SSN College of Engineering — Microcontroller Project Internship",
    meta: "Apr – May 2026 · Internship Project",
    desc: "Built a temperature recording and logging device using a microcontroller, applying concepts of microcontroller-based systems to create a functional electronic project.",
    tags: ["Microcontrollers", "Sensors", "Data Logging", "Electronic Hardware"],
    featured: true,
  },
  {
    name: "Motorised Vehicle and Aircraft Prototypes",
    org: "Independent Engineering Projects",
    meta: "2023 · Independent Engineering Projects",
    desc: "Constructed motorised prototypes, including model motorbikes and a propeller aircraft model, exploring mechanical movement, motor operation, and the basics of electronic model construction through hands-on experimentation.",
    tags: ["Prototyping", "Motors", "Mechanical Design", "Model Building"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "Grade 10 Board Exam Topper — 97% (Best of Five)",
    meta: "2025 · Academic Honours",
    detail: "Recognised among the Grade 10 ICSE board exam toppers (Best of 5) and featured on the school website.",
    link: "",
    featured: true,
  },
  {
    icon: "🏅",
    title: "Sports Day Torch Bearer — 3 Consecutive Years",
    meta: "2024–2026 · Sports & Leadership",
    detail: "Selected as the torch bearer at the school's annual Sports Day for three consecutive years, from 2024 to 2026.",
    link: "",
    featured: false,
  },
  {
    icon: "🎾",
    title: "CISCE U-19 Lawn Tennis — Zonal Singles & Doubles Champion",
    meta: "2026",
    detail: "1st in zonal singles and doubles; 3rd in regional singles and 2nd in regional doubles; reached the national singles pre-quarterfinals representing Tamil Nadu.",
    link: "",
    featured: true,
  },
  {
    icon: "🏅",
    title: "CISCE U-17 Lawn Tennis — National Quarterfinalist",
    meta: "2025",
    detail: "1st in zonal singles and doubles; 1st in regional singles and 2nd in regional doubles; reached the national singles quarterfinals representing Tamil Nadu.",
    link: "",
    featured: true,
  },
  {
    icon: "📈",
    title: "UTR Rating of 6.37",
    meta: "2026",
    detail: "Achieved a Universal Tennis Rating (UTR) of 6.37.",
    link: "",
    featured: true,
  },
  {
    icon: "🎾",
    title: "AITA CS-7 U-16 Ranking Tournament — Doubles Semifinalist",
    meta: "2025",
    detail: "Reached the doubles semifinals at an AITA CS-7 Under-16 ranking tournament.",
    link: "",
    featured: false,
  },
  {
    icon: "🥉",
    title: "CISCE U-17 Lawn Tennis — 3rd in Regional Singles",
    meta: "2024",
    detail: "Placed 3rd in regional singles and represented Tamil Nadu at the CISCE National Championships.",
    link: "",
    featured: false,
  },
  {
    icon: "🏃",
    title: "School Athletics — Shot Put & 400m Relay Champion",
    meta: "2026",
    detail: "1st place in shot put, 1st place in the 400-metre relay, and 2nd place in the 200-metre dash.",
    link: "",
    featured: false,
  },
  {
    icon: "🏃",
    title: "School Athletics — 400m Relay Champion",
    meta: "2025",
    detail: "1st place in the 400-metre relay race.",
    link: "",
    featured: false,
  },
  {
    icon: "🏃",
    title: "School Athletics — 200m Dash & Open Event",
    meta: "2024",
    detail: "3rd place in the 200-metre dash and 3rd place in an open athletics event.",
    link: "",
    featured: false,
  },
];

/* ---- Interests ---- */

export const ARTICLES = [
  {
    title: "Robotics",
    outlet: "Building machines where electronics, motors, and control come together",
    link: "",
  },
  {
    title: "Electronics & Microcontrollers",
    outlet: "Microcontroller-based devices, sensors, and data logging",
    link: "",
  },
  {
    title: "Practical Engineering & Prototyping",
    outlet: "Assembling motorised vehicles and models from individual components",
    link: "",
  },
  {
    title: "Technology-Driven Problem-Solving",
    outlet: "An area I plan to explore further at the undergraduate level",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "10+", label: "Years of Competitive Tennis" },
    { value: "3", label: "Years at CISCE Nationals" },
    { value: "6", label: "Years of Flute Training" },
  ],
  orgs: [
    {
      name: "Representing Tamil Nadu",
      role: "CISCE National Championships · 2024 – 2026",
      desc: "Represented Tamil Nadu at the CISCE National Lawn Tennis Championships three years in a row, reaching the national singles quarterfinals in 2025 and the pre-quarterfinals in 2026.",
    },
    {
      name: "Teamwork in Doubles & Relays",
      role: "Lawn Tennis · School Athletics",
      desc: "Won zonal doubles titles in tennis and first place in the 400-metre relay at school athletics, learning to rely on and support teammates in competition.",
    },
    {
      name: "Balancing Academics & Athletics",
      role: "Long-term commitment · 2015 – Present",
      desc: "Balanced rigorous tennis training with academic responsibilities for over ten years while remaining among the top students in school, demonstrating discipline, time management, and long-term commitment.",
    },
  ],
};

/* ---- Athletics, activities & creative pursuits (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🎾",
    name: "Competitive Lawn Tennis",
    desc: "Training consistently since 2015, focusing on technical skills, match strategy, physical conditioning, and endurance. Balancing rigorous training with academics has built long-term commitment and discipline.",
  },
  {
    icon: "🏃",
    name: "Track & Field",
    desc: "Competing in school sprinting, relay races, and athletics events since 2024, developing speed, agility, coordination, and teamwork.",
  },
  {
    icon: "🎶",
    name: "Flute",
    desc: "Six years of weekly flute lessons (2018 – 2024), supplemented with regular independent practice.",
  },
  {
    icon: "🗾",
    name: "Origami",
    desc: "Learned origami independently through instructional videos, experimenting with different paper-folding techniques (2015 – 2021).",
  },
  {
    icon: "🛠️",
    name: "Model Making",
    desc: "Created original miniature figures from scratch, developing creativity and hands-on design skills (2015 – 2021).",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["Microcontroller Programming", "Web-Based Device Control", "Computer Science Fundamentals"],
  },
  {
    group: "Tools & Technologies",
    items: ["Microcontrollers", "Electronic Hardware", "Temperature Sensing & Data Logging", "Motor Integration", "Mechanical Assembly", "Model Making"],
  },
  {
    group: "Specialised Interests",
    items: ["Robotics", "Electronics", "Practical Engineering", "Technology-Driven Problem-Solving"],
  },
  {
    group: "Core Strengths",
    items: ["Discipline", "Long-Term Commitment", "Teamwork", "Endurance", "Balancing Academics & Athletics"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Chettinad Hari Shree Vidyalayam",
    location: "Chennai, India",
    level: "Grade 12 (ICSE)",
    dates: "Class of 2027",
    gpa: "Grade 10: 97% (Best of Five) — recognised among board exam toppers",
    coursework: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],
  },
];

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "FeaturedProjects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
