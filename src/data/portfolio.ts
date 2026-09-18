export type Project = {
  title: string;
  type: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  details?: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
};

export const personal = {
  name: "Hasini Nethmini",
  primaryTitle: "IT Intern",
  secondaryTitle: "Trainee Software Developer",
  positioning: "IT Intern → Trainee Software Developer → Aspiring Software Engineer",
  tagline: "Building practical, user-focused software solutions with modern technologies.",
  email: "hasininethmini1@gmail.com",
  phone: "+94 701352955",
  location: "Ganemulla, Sri Lanka",
  cvPath: "/Hasini-Nethmini-CV.pdf",
  socials: {
    github: "https://github.com/hasininethmini1-glitch",
    linkedin: "https://linkedin.com/in/hasini-nethmini-1a31b740a",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=hasininethmini1@gmail.com",
  },
} as const;

export const navigation = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Experience", "experience"], ["Projects", "projects"], ["Education", "education"],
  ["Courses & Certifications", "certifications"], ["Contact", "contact"],
] as const;

export const skillGroups = [
  { title: "Programming Languages", skills: ["HTML5","CSS3","Java", "C#", "JavaScript", "PHP", "SQL", "Python"] },
  { title: "Web Technologies", skills: ["React.js", "Node.js", "Express.js"] },
  { title: "Databases", skills: ["MySQL", "Firebase"] },
  { title: "Office Suite", skills: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"] },
  { title: "Tools", skills: ["Figma", "GitHub", "Canva"] },
  { title: "Concepts", skills: ["Object-Oriented Programming","Database Management","Software Engineering", "Version Control","Responsive Web Development"] },
] as const;

export const projects: Project[] = [
  {
    title: "Human Resource and Inventory Management System",
    type: "Academic / Software Development Project",
    description: "A web-based ERP system designed for RN House Plan & Construction to automate multi-site inventory tracking, digital material requisitions, employee attendance and payroll processing.",
    longDescription: "Human Resource and Inventory Management System is a centralized, web-based ERP platform designed for RN House Plan & Construction to eliminate manual, paper-based resource management. Developed using the MERN (React, Node.js, Express, MySQL) stack, it unifies multi-site operations by offering real-time inventory tracking, low-stock alerts, digital requisition workflows, automated payroll and role-based access control (RBAC). The system streamlines operational efficiency, prevents stock-outs, and provides an interactive analytics dashboard for real-time cost and project monitoring.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL","Tailwind CSS","JSON Web Tokens (JWT)"," Axios","Vite"," REST API"],
    features: ["Role-Based Access Control", "Employee Information Management", "Attendance Management", "Payroll Management", "Inventory Management", "Material Request Management", "Automated Report Generation"],
    details: [
      "Role-Based Security: JWT authentication with customized user privileges for Admin, Warehouse Manager,Human Resources Manager and Site Supervisors.","  Real-Time Inventory Logic: Automated inventory tracking with proactive low-stock notifications to prevent construction halts.","  Digital Requisition Approval: Formal request and dispatch workflow connecting field site supervisors directly to the warehouse. "," Algorithmic Payroll Processing: Links digital attendance logs to predefined wage rates, automating weekly/monthly labor payouts. "," Visual Analytics Dashboard: Interactive data visualization monitoring budget overruns, resource allocations and overall project health."
    ],
    github: "https://github.com/hasininethmini1-glitch/Human-Resources-Inventory-Management-System",
    liveDemo: "https://drive.google.com/file/d/1dZxZvGmB2zOIuCSPzbu7qGP1CIwJdI_Y/view?usp=sharing",
    featured: true,
  },
  {
    title: "Employee Management System", type: "Group Project",
    description: "An Employee Management System developed to manage employee-related information and organizational activities.",
    longDescription:"Integrated Employee Performance and Payroll Management System is a standalone, desktop-based ERP solution built for RN House Plan & Construction using Java (NetBeans, Swing UI) and MySQL. Engineered to digitize manual paper-based HR workflows, the system manages the complete employee lifecycle with CRUD operations, automated daily attendance tracking, workflow-based leave management, task tracking, and dynamic payroll calculations. It includes secure Role-Based Access Control (RBAC) via JDBC and an administrative dashboard to monitor workforce productivity and attendance trends.",
    technologies: ["Java", "MySQL","Java Swing GUI","NetBeans IDE"," JDBC"],
    features: ["Role-Based Access Control", "Employee Information Management", "Attendance Management", "Leave Management", "Task Management", "Automated Report Generation"],
    details:["Engineered a graphical desktop UI with Java Swing and JDBC connected to a local MySQL database for secure data management.  ","Implemented Role-Based Access Control (RBAC) separating Administrator and Staff privileges.","  Built an Automated Attendance & Leave Management Workflow to replace handwritten logbooks and track staff leave approvals. "," Automated Payroll Engine calculations for monthly salaries, overtime and statutory deductions based on real-time attendance logs. "," Designed a Task & Performance Monitoring Module allowing managers to assign tasks, set deadlines, and evaluate staff productivity."],
    github: "https://github.com/hasininethmini1-glitch/Employee-Management-System",
    liveDemo: "https://drive.google.com/file/d/18JyYHufUt0IevWhYjK3whPI6WYGzbwNu/view?usp=sharing",
  },
  {
    title: "E-Commerce Web Application for Phone Shop", type: "Web Application",
    description: "A full-stack e-commerce web application built with PHP and MySQL featuring guest shopping, user authentication, dynamic cart management and an admin dashboard.",
    longDescription: "A full-stack responsive web application designed for online mobile phone sales and inventory control. Developed using raw PHP and MySQL, the platform provides a dual-interface architecture: a client-facing web store featuring session-based shopping cart management, real-time product availability tracking, and user authentication, paired with an administrative backend dashboard for real-time inventory updates, product management, and order processing workflows.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: ["User Registration & Role-based Login", 
  "Admin Dashboard", 
  "Product Management (Add/Delete)", 
  "Product Catalog with Quantity Tracking", 
  "Session-based Guest Shopping Cart",
  "Checkout & Order System"],
  details: [
      "Architected a responsive full-stack platform using raw PHP, MySQL, HTML5, CSS3 and JavaScript for optimal performance.",
      "Developed an Admin Control Dashboard enabling administrators to execute CRUD operations on product inventory and catalog listings.",
      "Implemented session-based guest cart functionality, allowing users to persist items across browsing sessions without immediate registration.",
      "Designed secure authentication mechanisms handling user registration, login workflows and session management.",
      "Integrated product stock quantity tracking to update inventory levels dynamically upon checkout and order placement."
    ],
    github: "https://github.com/hasininethmini1-glitch/mobile_shop",
    liveDemo: "https://drive.google.com/file/d/1e6Gp5MfQQKLHaL28qXlm5RPe1BAjjivT/view?usp=sharing", 
  },
  {
    title: "Patient Management System", type: "Group Project",
    description: "A patient management application designed to manage patient information and healthcare-related activities.",
    longDescription: "A cross-platform mobile application developed using Flutter, Dart, and SQLite to streamline clinical data management and healthcare provider operations. Built for offline-first reliability, the system features local SQLite database storage for encrypted patient medical records, interactive appointment scheduling workflows, treatment plan monitoring, and dynamic pdf report generation for clinical diagnostics.",
    technologies: ["Flutter", "Dart", "SQLite"],
    features: ["Patient Registration", "Medical Profile Management", "Appointment Management", "Treatment Management", "Automated Report Generation"],
    details: [
      "Developed a cross-platform mobile UI using Flutter and Dart targeting seamless user experiences across devices.",
      "Engineered an offline-first architecture leveraging SQLite database for local, persistent storage of medical records.",
      "Implemented a comprehensive Patient Registration and Profile Management module for history and diagnostic record updates.",
      "Designed an Appointment & Treatment Scheduler providing real-time scheduling, status updates, and doctor-patient assignment tracking.",
      "Integrated automated PDF report generation tools to export patient summaries and treatment histories for diagnostic reference."
    ]
    
  },
  {
  title: "Personal Developer Portfolio & Showcase Platform",
  type: "PERSONAL PROJECT / FRONTEND DEVELOPMENT",
  description: "A modern, highly responsive developer portfolio built with React and TypeScript to showcase software projects, technical skillsets and professional experience.",
  longDescription: "A custom-designed developer showcase application engineered with React, TypeScript and Tailwind CSS. Features an interactive UI with dynamic project detail modals, responsive component layouts, structured technical skills categorization and an optimized single-page application (SPA) architecture.",
  technologies: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lucide React", "Vite"],
  features: [
    "Interactive Project Details Modal UI",
    "Categorized Skills & Certifications Display",
    "Fully Responsive & Mobile-First Layout",
    "Smooth Scrolling & Dynamic Navigation",
    "Clean Component Architecture",
    "Optimized Single Page Application (SPA)"
  ],
  details: [
    "Designed and developed a fully responsive frontend interface using React, TypeScript, and Tailwind CSS.",
    "Integrated Shadcn UI primitives and Lucide icons to build accessible, clean, and modern UI components.",
    "Engineered dynamic modal dialogs to display detailed project breakdowns, architecture logs, and tech stacks.",
    "Structured code using modular component patterns to ensure scalability and maintainability."
  ],
  github: "https://github.com/hasininethmini1-glitch/MyProtfolio", 
  liveDemo: "https://drive.google.com/file/d/1KchoPP_zPnfvQGPbfbJ3Kpz45oyPoJuU/view?usp=sharing", 
  featured: false,
}
];

export const education = [
  { title: "Higher National Diploma in Information Technology (HNDIT)", institution: "Sri Lanka Institute of Advanced Technological Education – Gampaha", date: "2024 – Present", details: ["GPA: 3.72 / 4.00", "Academic progress: Up to Semester 03"] },
  { title: "G.C.E. Advanced Level", institution: "Physical Science Stream | 2022 (2023)", date: "", details: ["ICT — C", "Combined Mathematics — S", "Physics — S"] },
  { title: "G.C.E. Ordinary Level", institution: "2019", date: "", details: ["Buddhism — A",
      "Sinhala Language & Literature — A",
      "Mathematics — A",
      "History — A",
      "Dancing — A",
      "Information & Communication Technology — A",
      "Business & Account Studies — B",
      "English Language — C",
      "Science — C"] },
] as const;

export const courses = [
  { title: "Trainee – Full Stack Developer Programme", institution: "University of Moratuwa – Open Online Courses", date: "March 2026 – September 2026", description: "Completed the Trainee – Full Stack Developer Programme through the University of Moratuwa Open Online Courses, developing practical knowledge and skills related to full-stack web development.", status: "Completed" },

  { title: "AI Fundamentals", institution: "LEARN", date: "March 2026", description: "Completed AI Fundamentals training.", status: "Completed"},

  { title: "Certificate in Graphic Designing", institution: "Zonal Computer Resource Centre, Galahitiyawa National School", date: "2023", description: "Completed training in graphic designing.", status: "Completed" },

  { title: "Certificate in Office Application", institution: "Zonal Computer Resource Centre, Galahitiyawa National School", date: "2023", description: "Completed training in office applications and developed practical computer application skills.", status: "Completed" },

] as const;

export const journey = [
  { year: "2023", title: "Banking Internship", place: "Regional Development Bank", detail: "September 2023 – March 2024" },
  { year: "2024", title: "Started HNDIT", place: "Sri Lanka Institute of Advanced Technological Education – Gampaha", detail: "" },
  { year: "2026 – Present", title: "Software Development & Professional Growth", place: "Continuously developing full-stack development skills and practical software projects.", detail: "" },
] as const;