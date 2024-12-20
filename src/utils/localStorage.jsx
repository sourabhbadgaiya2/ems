localStorage.clear();

const employees = [
  {
    id: 1,
    firstname: "Rajesh",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete onboarding",
        taskDescription:
          "Finish the onboarding process by reviewing company policies.",
        taskDate: "2024-11-21",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix login bug",
        taskDescription:
          "Resolve the issue with user authentication on the login page.",
        taskDate: "2024-11-20",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare sprint report",
        taskDescription:
          "Compile and submit the sprint performance report to the manager.",
        taskDate: "2024-11-23",
        category: "Management",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Anjali",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription:
          "Optimize SQL queries to improve database performance.",
        taskDate: "2024-11-19",
        category: "Database",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API documentation",
        taskDescription: "Document the API endpoints for the customer portal.",
        taskDate: "2024-11-24",
        category: "Development",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstname: "Vikram",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update software dependencies",
        taskDescription:
          "Upgrade all project dependencies to their latest stable versions.",
        taskDate: "2024-11-25",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare training slides",
        taskDescription: "Design training material for the upcoming workshop.",
        taskDate: "2024-11-20",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Resolve customer issue #12345",
        taskDescription:
          "Address the high-priority issue reported by a client.",
        taskDate: "2024-11-18",
        category: "Support",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct code review",
        taskDescription:
          "Review the recent pull requests for code quality and standards.",
        taskDate: "2024-11-22",
        category: "Code Review",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix session timeout issue",
        taskDescription: "Investigate and resolve session timeout problems.",
        taskDate: "2024-11-24",
        category: "Development",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    firstname: "Kiran",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Enhance UI accessibility",
        taskDescription:
          "Improve accessibility features across the web application.",
        taskDate: "2024-11-23",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare release notes",
        taskDescription:
          "Write and finalize release notes for the latest product version.",
        taskDate: "2024-11-21",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test payment gateway",
        taskDescription:
          "Run tests for payment gateway integration and resolve issues.",
        taskDate: "2024-11-18",
        category: "Testing",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [{ id: 1, email: "admin@example.com", password: "123" }];

export const setlocalstorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
