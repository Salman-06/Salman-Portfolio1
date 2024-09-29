/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Salman Barick",
  title: "Hi all, I'm Salman",
  subTitle: emoji(
    "A passionate Front-End Developer 🚀 having an knowledge of building Web and Mobile applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink: "https://docs.google.com/document/d/1s64-7-cApJYrrM6HTDHNZR4pWQpORYWJ/edit?usp=drive_link&ouid=101452613115539452204&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Salman-06",
  linkedin: "http://www.linkedin.com/in/salman-barick-m-383035251",
  gmail: "salmanshaa1825@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61564457826580&mibextid=LQQJ4d",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Had a interest in Mobile App development with Nodejs and Flutter"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rathinam College of Arts and Science",
      logo: require("./assets/images/rathinam.jpeg"),
      subHeader: "Bachelor of Science in Artificial Intelligence and Machine Learning",
      duration: "August 2022 - May 2025",
      descBullets: [
        "Current CGPA : 7.4%",
        ]
    },
    {
      schoolName: "Presentation Convent",
      logo: require("./assets/images/presentation.jpeg"),
      duration: "12th : September 2021 - April 2022, 10th : September 2019 - April 2020",
      descBullets: ["12th Grade : 81.8",
        "10th Grade : 52.8"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "I have created those project for my college",
  projects: [
    {
      image: require("./assets/images/meshnetwork.jpeg"),
      projectName: "Mesh Network",
      projectDesc: "Design and develop a technology solution for detecting apps like Fire chat that use Mesh Network to connect users without cell service in a given area",
    },
    {
      image: require("./assets/images/texttovideo.jpeg"),
      projectName: "Text to Video Converstion",
      projectDesc: "Hands on experience on Video to text convert software with model from hugging face and ai framework includes Pytorch & Keras.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Database Management",
      subtitle:
        "Oracle Cloud Data Management 2023 Certified Foundations Associate ",
      image: require("./assets/images/Oracle-Logo.png"),
      imageAlt: "Oracle Database Management",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CAb6wCO_b-Tx9DYEDKXTYlc5Ft5Pa7WK/view?usp=drive_link"
        },
      ]
    },
    {
      title: "Microsoft Azure Fundamentals:",
      subtitle:
        "I have completed the Describe Cloud Concepts",
      image: require("./assets/images/msazure.jpeg"),
      imageAlt: "Microsoft Azure Fundamentals:",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1BMOL3Gv-1dF-ZCdGPG3wPB1bsQERx-X8/view?usp=drive_link"
        }
      ]
    },

    {
      title: "HackerRank",
      subtitle: "Completed Java Certifcation from HackerRank platform ",
      image: require("./assets/images/hackerRank.jpeg"),
      imageAlt: "Java",
      footerLink: [
        {name: "Certification", url: "https://www.hackerrank.com/certificates/e0c6736d8541"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section



// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://drive.google.com/file/d/1OG4WOGaL77dkwuaaT9DUoKvk0YVNLRNn/view?usp=drive_link",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "https://docs.google.com/document/d/1s64-7-cApJYrrM6HTDHNZR4pWQpORYWJ/edit?usp=drive_link&ouid=101452613115539452204&rtpof=true&sd=true", // Set to empty to hide the button
  
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8344655555",
  email_address: "salmanshaa1825@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SalmanBarick", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
