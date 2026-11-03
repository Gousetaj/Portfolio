export const profile = {
  name: "Mohammed Gouse",
  role: "Frontend engineer",
  location: "Hyderabad, India",
  email: "gousetaj001@gmail.com",
  phone: "+91 7989107782",
  linkedin: "https://linkedin.com/in/gouse-mohammed-842575262",
  github: "https://github.com/Gousetaj",
  intro:
    "I build the screens behind enterprise SaaS: travel desks, shift rosters, expense systems and an AI number plate recognition tool. Three years in React, Vue and TypeScript, with RBAC, multi-tenant setups and real-time data.",
};

export const experience = [
  {
    role: "Software Developer",
    company: "DigiDelight Solutions Pvt Ltd",
    when: "Mar 2024 – Present",
    client: "Stay Connect Digital Solution LLC",
    points: [
      "Lead frontend development for the Expense, Leave, Timesheet, Attendance, Roster and Travel Management modules.",
      "Built Travel Management and Travel Desk flows for external and provider bookings: requests, approvals, booking status and itineraries.",
      "Built the React.js frontend for an AI-based ANPR solution with the AI team, including detection-area setup and a manual gate-control fallback.",
      "Developed Roster Management for shift planning, assignments and schedule views with configurable approval workflows.",
      "Set up UI monitoring that tracks frontend errors and performance, so the team finds and fixes production issues faster.",
      "Implemented RBAC, multi-tenant architecture, I18n, RTL support and theming across modules.",
      "Integrated REST and GraphQL APIs and WebSockets for real-time data and notifications.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "SysWave Technologies Pvt Ltd",
    when: "Aug 2023 – Mar 2024",
    client: "Stay Connect Digital Solution LLC",
    points: [
      "Delivered the Expense Management solution with AI integration using React.js, Vue.js and JavaScript.",
      "Built responsive UIs from design files with Vuetify, Tailwind CSS and Bootstrap.",
      "Integrated REST APIs, charts and reports with ApexCharts, and debugged with backend teams.",
      "Built and deployed the Stay Connect company website with Email.js contact forms.",
    ],
  },
];

export const projects = [
  {
    name: "ANPR: number plate recognition",
    tech: ["React.js", "TypeScript", "REST APIs", "OCR"],
    points: [
      "UI to draw bounding boxes and detection zones where the system reads number plates.",
      "Configuration screens for detection settings and vehicle recognition features.",
      "Manual fallback that lets operators open the gate when automatic opening fails, with OCR to auto-fill the vehicle entry.",
    ],
  },
  {
    name: "Travel Management & Travel Desk",
    tech: ["Vue.js", "TypeScript", "Pinia", "WebSockets"],
    points: [
      "Request, approval and booking flows for external and vendor bookings.",
      "A travel desk with status tracking and itinerary views.",
    ],
  },
  {
    name: "Workforce Management",
    tech: ["Vue.js", "TypeScript", "Pinia", "GraphQL"],
    points: [
      "Leave workflows, approvals, calendars and analytics reports.",
      "Timesheet and attendance with multiple input sources, plus roster planning and schedule views.",
    ],
  },
  {
    name: "Expense Management System",
    tech: ["Vue.js", "Vuetify", "ApexCharts", "jsPDF"],
    points: [
      "Reusable data tables with filtering, pagination, Excel/PDF export and saved preferences.",
      "Drag-and-drop dashboards, validated bulk imports, real-time notifications and I18n/RTL.",
    ],
  },
  {
    name: "Social Media Analytics Platform",
    tech: ["Nuxt.js", "GraphQL", "FastAPI", "ApexCharts"],
    points: [
      "Analytics dashboards on GraphQL APIs served by FastAPI.",
      "Optimised API calls to speed up data visualisation.",
    ],
  },
];

export const skills = [
  ["Languages", "JavaScript (ES6+), TypeScript, HTML5, CSS3"],
  ["Frameworks", "React.js, Next.js, Vue.js, Nuxt.js, Redux, Zustand, Pinia, Material UI, Vuetify, Tailwind CSS, Bootstrap"],
  ["Data & charts", "ApexCharts, jsPDF, xlsx"],
  ["Backend & APIs", "Node.js, Express.js, FastAPI, REST, GraphQL, WebSockets"],
  ["Databases", "PostgreSQL, MongoDB, Firebase"],
  ["Tools", "Git, GitHub, Docker, Kubernetes, Prisma, Postman, Swagger"],
  ["Concepts", "RBAC, multi-tenancy, I18n/RTL, SSR, performance, accessibility, UI monitoring, service workers, OPFS"],
];
