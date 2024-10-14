let applicants = [
    {
      name: "John Doe",
      state: "IN",
      grossMonthlyIncome: 950,
      householdSize: 4,
      dependents: ["Alice", "Bob"],
      pastApplications: [
        { date: "2023-01-15", status: "approved" },
        { date: "2022-08-10", status: "denied" },
        { date: "2022-08-20", status: "denied" }
      ]
    },
    {
      name: "Jane Smith",
      state: "IN",
      grossMonthlyIncome: 1200,
      householdSize: 2,
      dependents: ["Charlie"],
      pastApplications: [
        { date: "2023-06-01", status: "denied" }
      ]
    },
    {
      name: "Carlos Mendoza",
      state: "FL",
      grossMonthlyIncome: 800,
      householdSize: 5,
      dependents: ["Diego", "Luis", "Mia"],
      pastApplications: [
        { date: "2022-12-20", status: "denied" },
        { date: "2022-11-20", status: "denied" }
      ]
    },
    {
      name: "Emily Davis",
      state: "IN",
      grossMonthlyIncome: 950,
      householdSize: 1,
      dependents: [],
      pastApplications: [
        { date: "2023-02-10", status: "denied" },
        { date: "2023-01-04", status: "denied" }
      ]
    },
    {
      name: "Hassan Ali",
      state: "IN",
      grossMonthlyIncome: 780,
      householdSize: 6,
      dependents: ["Fatima", "Samir", "Amira", "Yousef"],
      pastApplications: [
        { date: "2023-04-15", status: "approved" },
        { date: "2022-10-30", status: "denied" }
      ]
    },
    {
      name: "Renee Johnson",
      state: "IN",
      grossMonthlyIncome: 950,
      householdSize: 2,
      dependents: ["Ella"],
      pastApplications: [
        { date: "2023-05-11", status: "approved" }
      ]
    },
    {
      name: "Maria Santos",
      state: "AZ",
      grossMonthlyIncome: 600,
      householdSize: 4,
      dependents: ["Juan", "Isabel"],
      pastApplications: [
        { date: "2023-03-21", status: "approved" }
      ]
    },
    {
      name: "Luke Patel",
      state: "IN",
      grossMonthlyIncome: 1100,
      householdSize: 2,
      dependents: [],
      pastApplications: [
        { date: "2023-07-19", status: "denied" }
      ]
    },
    {
      name: "Tina Williams",
      state: "IN",
      grossMonthlyIncome: 1000,
      householdSize: 3,
      dependents: ["Kendra", "Marcus"],
      pastApplications: [
        { date: "2022-09-25", status: "denied" },
        { date: "2021-05-12", status: "approved" }
      ]
    },
    {
      name: "Noah Green",
      state: "IN",
      grossMonthlyIncome: 1005,
      householdSize: 6,
      dependents: ["Liam", "Sophia", "Olivia", "Justin"],
      pastApplications: [
        { date: "2023-01-18", status: "denied" }
      ]
    }
  ];
  
// Follow the instructions in the README.md to build out the digitized SNAP benefits system
// You should end up with one big for loop with a conditional statement inside that approves or denies the application
// Task 1
for (let i = 0; i < applicants.length; i++){
  console.log(`Application: ${applicants[i].name}`)

  // Task 2
  if (applicants[i].state !== "IN"){
    console.log(`This application is for Indiana applicants. Please apply in ${applicants[i].state}.`)
  } 
  // Task 3
  else if (applicants[i].dependents.length > 0 && applicants[i].householdSize > 2 && applicants[i].grossMonthlyIncome < 1000) {
    console.log(`You are approved!`)
  } 
  // Task 4: There are a lot of valid alternate conditions, there are just some examples (you needed 2)
  else if (applicants[i].dependents.length >= 0 && applicants[i].householdSize >= 2 && applicants[i].grossMonthlyIncome <= 1000) {
    console.log(`Your case is being forwarded to a case worker for further review.`)
  } else if (applicants[i].grossMonthlyIncome <= 1200 && applicants[i].dependents.length > 2){ 
    console.log(`Your case is being forwarded to a case worker for further review.`)
  } else if (applicants[i].pastApplications.length >= 2){ 
    console.log(`Your case is being forwarded to a case worker for further review.`)
  } else {
    console.log(`Your application was denied as it did not meet one of the following requirements.`)
    console.log(`- Household size is greater than 2`)
    console.log(`- Number of dependents is greater than 0`)
    console.log(`- Monthly income is less than 1000`)
    console.log(`If you believe you should have been approved, please call the SNAP office.`)
  }
  // Added for extra space between applications (optional)
  console.log()
}

