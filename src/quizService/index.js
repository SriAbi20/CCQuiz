const qBank = [
  {
    question:
      "What is cloud computing? ",
    answers: ["Cloud computing means providing services like storage, servers, database, networking, etc", "Cloud computing means storing data in a database", 
    "Cloud computing is a tool used to create an application", "None of the above"],
    correct: "Cloud computing means providing services like storage, servers, database, networking, etc",
    questionId: "099099"
  },
  {
    question:
   "Which of the following is not a type of cloud server?",
    answers: ["Public Cloud Servers", "Private Cloud Servers", "Dedicated Cloud Servers", "Merged Cloud Servers"],
    correct: "Merged Cloud Servers",
    questionId: "183452"
  },
  {
    question:
      "Who is the father of cloud computing?",
    answers: ["Sharon B. Codd", "Edgar Frank Codd", "J.C.R. Licklider", "Charles Bachman"],
    correct: "J.C.R. Licklider",
    questionId: "267908"
  },
  {
    question: "Which of the following are the features of cloud computing?",
    answers: [
      "Security",
      "Availability",
      "Large Network Access",
      "All of the above"
    ],
    correct: "All of the above",
    questionId: "333247"
  },
  {
    question: "Which of the following is a type of cloud computing service?",
    answers: ["Service-as-a-Software (SaaS)", "Software-and-a-Server (SaaS)", "Software-as-a-Service (SaaS)", "Software-as-a-Server (SaaS)"],
    correct: "Software-as-a-Service (SaaS)",
    questionId: "496293"
  },
  {
    question:
      "Which of the following is an example of the cloud?",
    answers: [
      "Amazon Web Services (AWS)",
      "Dropbox",
      "Cisco WebEx",
      "All of the above"
    ],
    correct: "All of the above",
    questionId: "588909"
  },
  {
    question:
      'Applications and services that run on a distributed network using virtualized resources is known as',
    answers: ["Parallel computing", "Soft computing", "Distributed computing", "Cloud computing"],
    correct: "Cloud computing",
    questionId: "648452"
  },
  {
    question: "Which of the following is the application of cloud computing?",
    answers: ["Adobe", "Paypal", "Google G Suite", "All of the above"],
    correct: "All of the above",
    questionId: "786649"
  },
  {
    question:
      "Which of the following is an example of a PaaS cloud service?",
    answers: ["Heroku", "AWS Elastic Beanstalk", "Windows Azure", "All of the above"],
    correct: "All of the above",
    questionId: "839754"
  },
  {
    question:
      "Which of the following is an example of an IaaS Cloud service?",
    answers: [
      "DigitalOcean",
      "Linode",
      "Rackspace",
      "All of the above"
    ],
    correct: "All of the above",
    questionId: "98390"
  },
  {
    question: "Cloud Platform provided by Amazon is ",
    answers: ["AWS", "Cloudera", "Azure", "All of the mentioned"],
    correct: "AWS",
    questionId: "1071006"
  },
  {
    question: "Into which expenditures does Cloud computing shifts capital expenditures?",
    answers: ["local", "operating", "service", "none of the mentioned"],
    correct: "operating",
    questionId: "1174154"
  },
  {
    question: "The essential element in cloud computing by CSA is",
    answers: ["Virtualization", "Multi-tenancy", "Identity and access management", "All of the mentioned"],
    correct: "Multi-tenancy",
    questionId: "1226535"
  },
  {
    question: "The most important area of concern in cloud computing is",
    answers: ["Scalability", "Storage", "Security", "All of the mentioned"],
    correct: "Security",
    questionId: "1310938"
  },
  {
    question: "The most refined and restrictive cloud service model is",
    answers: ["PaaS", "IaaS", "SaaS", "None"],
    correct: "PaaS",
    questionId: "1436873"
  },
  {
    question: "Which of the following is not a property of cloud computing?",
    answers: ["virtualization", "composability", "scalability", "all of the mentioned"],
    correct: "composability",
    questionId: "1515110"
  }
  
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
