
let body = document.querySelectorAll("body");
body[0].addEventListener("contextmenu", function (e) {
  e.preventDefault();
});




let navtl = gsap.timeline()
function homeanimetion() {
  navtl.from("nav", {
    y: -20,
    duration: 0.5,
  });
  navtl.from("nav #nav-logo", {
    x: -50,
    opacity: 0,
    duration: 0.5,
  });
  navtl.from("#nav-ops", {
    y: -20,
    duration: 0.5,
    opacity: 0,
  })
  navtl.from("#nav-search input", {
    x: 50,
    opacity: 0,
    duration: 0.5
  })
  navtl.from("#section1 img", {
    x: 50,
    opacity: 0,
    duration: 0.5
  })
  navtl.from("#section1 #idnsticky_bar", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "elastic.out(3,0.9)",
    onComplete: function () {
      if (window.matchMedia("(min-width: 1085px)").matches) {
        gsap.to("#section1 #idnsticky_bar", {
          scale: 1.1,
          duration: 0.5,
          ease: "power1.inOut",
          hover: true
        })
      }
    }
  })
  gsap.from(".about-what img", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: ".about-what"
  })
  gsap.from(".about-what h1", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: ".about-what"
  })
  gsap.from(".about-what p", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: ".about-what"
  })
  gsap.from(".about-why img", {
    opacity: 0,
    x: 100,
    delay: 0,
    scrollTrigger: ".about-why"
  })
  gsap.from(".about-why h1", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: ".about-why"
  })
  gsap.from(".about-why p", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: ".about-why"
  })

  gsap.from("#teams", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: "#teams"
  })
}

if (window.matchMedia("(min-width: 600px)").matches) {
  homeanimetion()
}



function navanimetion() {
  let navBtn = document.querySelector('#sub-manu');
  let nav = document.querySelector('#nav-ops');
  navBtn.onclick = function () {
    nav.classList.toggle('show');
  };

};





function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    dropdowns.forEach(d => {
      if (d !== dropdown) {
        d.querySelector(".select").classList.remove("select-clicked");
        d.querySelector(".caret").classList.remove("caret-rotate");
        d.querySelector(".menu").classList.remove("menu-open");
      }
    });
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach(option => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

document.addEventListener("click", (e) => {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector(".select").classList.remove("select-clicked");
      dropdown.querySelector(".caret").classList.remove("caret-rotate");
      dropdown.querySelector(".menu").classList.remove("menu-open");
    }
  });
});
}

function pdfs_blogs() {
  const pdfs = [
    {
      link: 'https://drive.google.com/file/d/1XBrhGwfldQorW2W2CNXTrgBrv9p2c0Kv/view?usp=sharing',
      img: '/static/imgs/assignmentallccsem6dipcom.png',
      title: 'Cloud Computing Assignment 1',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Cloud Computing (4360709))',
      leng: 'English',
      type: 'Assignment',
      desc: 'Sem 6 Cloud Computing Chapter 1 Handwritten Assignment',
      sent_by: 'sent_by: E-Material',
      date: '28/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/krish_rajput16/'
    },
    {
      link: 'https://drive.google.com/file/d/1OpGQ4RLlvqHPC-hnqrvKVtDAJrtxjrH0/view?usp=sharing',
      img: '/static/imgs/assignmentallfiotsem6dipcom.png',
      title: 'Fundamentals Of IOT Assignment 1',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Fundamentals Of IOT (4360703))',
      leng: 'English',
      type: 'Assignment',
      desc: 'Sem 6 Fundamentals Of IOT Chapter 1 Handwritten Assignment',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/krish_rajput16/'
    },
    {
      link: 'https://drive.google.com/file/d/1GJzfjwzWm96lAoZ-8Sge5wUOX9ncVye1/view?usp=sharing',
      img: '/static/imgs/assignmentallcmtssem6dipcom.png',
      title: 'Computer Maintenance and Troubleshooting Assignment 1',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Computer Maintenance and Troubleshooting (4360701)',
      leng: 'English',
      type: 'Assignment',
      desc: 'Sem 6 Computer Maintenance and Troubleshooting Chapter 1 Handwritten Assignment',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/krish_rajput16/'
    },
    {
      link: 'https://drive.google.com/file/d/1dMdWk4uY1dZHZyjaoCQy2QY5tU1rzNZ0/view?usp=sharing',
      img: '/static/imgs/csadfdipitlabmanual.png',
      title: 'Cyber Security and Digital Forensics Lab Manual',
      course: 'Diploma',
      branch: 'IT',
      sub: 'Cyber Security and Digital Forensics',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Cyber Security and Digital Forensics Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '22/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/14b5xQvPxI4auXto9COBAUK_X4iBJ0_Ok/view?usp=sharing',
      img: '/static/imgs/cadctdipitlabmanual.png',
      title: 'Cloud and Data Center Technologies Lab Manual',
      course: 'Diploma',
      branch: 'IT',
      sub: 'Cloud and Data Center Technologies',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Cloud and Data Center Technologies Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '22/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/1dgqb3qSgRcCiWN14fHKl4HXkfGve4M58/view?usp=sharing',
      img: '/static/imgs/fiotdipcomwalabmanual.png',
      title: 'Fundamentals of IoT Lab Manual With Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Fundamentals of IoT',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Fundamentals of IoT Lab manual With Answer"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/1dgqb3qSgRcCiWN14fHKl4HXkfGve4M58/view?usp=sharing',
      img: '/static/imgs/fiotdipcomwalabmanual.png',
      title: 'Fundamentals of IoT Lab Manual With Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Fundamentals of IoT',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Fundamentals of IoT Lab manual With Answer"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/128C3bFcVZWhJ3NRapSzqXy72q61YNpzJ/view?usp=sharing',
      img: '/static/imgs/fiotdipcomlabmanual.png',
      title: 'Fundamentals of IoT Lab Manual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Fundamentals of IoT',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Fundamentals of IoT Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/1570ZUss8mXpXtFrkEjavciMq2XufA9Eq/view?usp=sharing',
      img: '/static/imgs/ccdipcomlabmanual.png',
      title: 'Cloud Computing Lab Manual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Cloud Computing',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Cloud Computing Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/1TDFaBeyfuhsnnKqS_TvWgH2hf9fcp5r7/view?usp=sharing',
      img: '/static/imgs/insdipcomlabmanual.png',
      title: 'INS Lab Manual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Introduction to NO SQL',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"INS Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/1yXsUanjxCZxJYh2FAeQj-tuvxGVlhYHM/view?usp=sharing',
      img: '/static/imgs/bisdipcomlabmanual.png',
      title: 'BIS Lab Manual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Basics of information Security',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"BIS Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/1-fyoTwiUWzYx0_GUGqIUAG4axLX26QSo/view?usp=sharing',
      img: '/static/imgs/cmtsdipcomlabmanual.png',
      title: 'CMTS Lab Manual',
      course: 'Diploma',
      branch: 'Computer',
      sem:'Sem 6',
      sub: 'Computer Maintenance and Troubleshooting',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"CMTS Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    {
      link: 'https://drive.google.com/file/d/15mNMGCLhvXCTj88MFP9GdJxn4M9pJkau/view?usp=sharing',
      img: '/static/imgs/assignmentallbissem6dipcom.png',
      title: 'BIS Assignment 1',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Basic of Information Cecurity',
      leng: 'English',
      type: 'Assignment',
      desc: '"Sem 6 BIS (Basic of Information Security) Chapter 1 Handwritten Assignment"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/krish_rajput16/'
    },
    {
      link: 'https://drive.google.com/file/d/1-eo4jppkQqhRyNVXv6b_uirNGwokhzPg/view?usp=sharing',
      img: '/static/imgs/cndipcomlabmanual.png',
      title: 'Computer Networking	 Lab Manual',
      course: 'Diploma',
      branch: 'Computer',
      sem:'Sem 4',
      sub: 'Computer Networking (4340703)',
      leng: 'English',
      type: 'Lab Manual',
      desc: '"Computer Networking Lab manual from GTU"',
      sent_by: 'sent_by: E-Material',
      date: '17/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/study_ematerial/'
    },
    







    
    {
      link: 'https://drive.google.com/file/d/1s8IcbTvbe_WkA5LWcF_SsHu-IbReVLa0/view?usp=sharing',
      img: '/static/imgs/javanoteskrish.png',
      title: 'JAVA Notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for JAVA. The notes are written by Krish Wagh.',
      sent_by: 'sent_by: Krish Wagh',
      date: '16/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/krish_rajput16/'
    },
    {
      link: 'https://drive.google.com/file/d/1Jo7EYiqKTOP2t4Y3Q2mgsY8EsiA6-Ky2/view?usp=sharing',
      img: '/static/imgs/phpnotesdevji.png',
      title: 'PHP Notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for PHP. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '06/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/13kV17UnY7hbK20kP2Drh6s60xOUZzwbr/view?usp=sharing',
      img: '/static/imgs/javascriptnotesdevji.png',
      title: 'Javascript Notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for Javascript. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '01/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/1uqnpKmwrADgmJYXyL8EWJ2BayLelJ2ZW/view?usp=sharing',
      img: '/static/imgs/cssnotesdevji.png',
      title: 'CSS Notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for CSS. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '01/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/1Uey5DXx5PiwLI0mysIgvd81uokk93Wzg/view?usp=sharing',
      img: '/static/imgs/htmlnotesdevji.png',
      title: 'HTML Notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for HTML. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '01/01/2025',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/drive/folders/1RB5t3Xt8dtoRdBMubBQQTN-fISNv687b',
      img: '/static/imgs/cnotesdevji.png',
      title: 'C Programming Notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for C Programming. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '30/12/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/1t0qGOTV2_1O4oM7UJ3JLrYTJyO71UmOG/view?usp=sharing',
      img: '/static/imgs/QuantumComputingnotesdevji.png',
      title: 'Quantum Computing notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for Quantum Computing. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '30/12/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/14Ru7qUuZEbNnpBX-N8lulWLxs9iyTJfd/view?usp=sharing',
      img: '/static/imgs/pythonnotesdevji.png',
      title: 'Python notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for Python. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '30/12/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/1TnLXta0tC2WNkkItiRaYnsHpmmlrPw8r/view?usp=sharing',
      img: '/static/imgs/javanotesdevji.png',
      title: 'Java notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for Java. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '28/12/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/1BUmgJmU4Q5oRzOmcnXUHFAzGkheOzxpl/view?usp=sharing',
      img: '/static/imgs/ccnotesdevji.png',
      title: 'C++ notes',
      course: 'Computer Science',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'IMP Notes for C++. The notes are written by Devji.',
      sent_by: 'sent_by: Devji',
      date: '30/12/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/devji__karanwal/'
    },
    {
      link: 'https://drive.google.com/file/d/1vLUEbyeu6x4Vir-5sLoYvg0vs3UIy7sk/view?usp=sharing',
      img: '/static/imgs/acndips5impfinal.png',
      title: 'Most IMP questions for ACN',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Advance Computer Network',
      leng: 'English',
      type: 'IMP',
      desc: 'Here are some most imp questions for the acn subject',
      sent_by: 'sent_by: Chirag',
      date: '23/11/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      link: 'https://drive.google.com/file/d/1kiyTb0j0IAV8SgE4bxEHayouH4yAYkxl/view?usp=sharing',
      img: '/static/imgs/coadips5impfinal.png',
      title: 'COA IMP GTU PAPER',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Computer Organisations and Architecture',
      leng: 'English',
      type: 'Paper',
      desc: 'Computer Organisations and Architecture GTU IMP Question and Answers',
      sent_by: 'sent_by: Chirag',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      link: 'https://drive.google.com/file/d/1MBLNYJmDPajiiPcYIf3pu0rspM15HaxN/view?usp=drive_link',
      img: '/static/imgs/aoops24p.png',
      title: 'AOOP GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Advance Object Oriented Programming',
      leng: 'English',
      type: 'Paper',
      desc: 'Advance Object Oriented Programming GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1nR3kmbq5dagWzjIeF5iAt19HYzvI7ke6/view?usp=drive_link',
      img: '/static/imgs/cns24p.png',
      title: 'CN GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Computer Network',
      leng: 'English',
      type: 'Paper',
      desc: 'Computer Network GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1l_ofYxNyhyIMvKK7WBAoBL2socvDEcfX/view?usp=drive_link',
      img: '/static/imgs/ises24p.png',
      title: 'ISE GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Introduction to Software Engineering',
      leng: 'English',
      type: 'Paper',
      desc: 'Introduction to Software Engineering GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1tZLRotMk1NtRAl6kzjJjUsao3MA5oqJ4/view?usp=drive_link',
      img: '/static/imgs/iwds24p.png',
      title: 'IWD GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Introduction to Web Development',
      leng: 'English',
      type: 'Paper',
      desc: 'Introduction to Web Development GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1jXXBleSP4f1xa-TQlCxDajUFk-pIBCZW/view?usp=drive_link',
      img: '/static/imgs/dsas24p.png',
      title: 'DSA GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Data Structure and Algorithms',
      leng: 'English',
      type: 'Paper',
      desc: 'Data Structure and Algorithms GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1_nt9mhqZGlllGtnzjBeyZs9FlhU0B5yK/view?usp=sharing',
      img: '/static/imgs/rdbmss24p.png',
      title: 'Relational Database Management System GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      type: 'Paper',
      sub: 'Relational Database Management System',
      leng: 'English',
      desc: 'Relational Database Management System GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1A-xSsS0LIpOgbSAbX2gMdeRp--xoWees/view?usp=drive_link',
      img: '/static/imgs/boss24p.png',
      title: 'BOS GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Basics of Operating System',
      leng: 'English',
      type: 'Paper',
      desc: 'Basics of Operating System GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1VGOGCems8h_NxCH5Tc9ylnoC2iSxFXCk/view?usp=sharing',
      img: '/static/imgs/bdes24p.png',
      title: 'BDE GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Basics of Digital Electronics',
      leng: 'English',
      type: 'Paper',
      desc: 'Basics of Digital Electronics GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1HjjbQ7cdycKJGJc8O7_LjdczrA5BiL_l/view?usp=drive_link',
      img: '/static/imgs/egmeths24p.png',
      title: 'Engineering Mathematics GTU PAPER (S-2024)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Engineering Mathematics',
      leng: 'English',
      type: 'Paper',
      desc: 'Engineering Mathematics GTU PAPER Summer 2024',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '12/11/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1QE-72N-liipTPwjAJB8SeJFBUEKoRA1C/view?usp=sharing',
      img: '/static/imgs/coadipcomwalab.png',
      title: 'COA Lab Manual With Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'COA',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'COA Lab Manual With Answer',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '21/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1SE4WCWpxw7EkHJyiL5lMqwu_4uiN9B3-/view?usp=sharing',
      img: '/static/imgs/acndipcomwalab.png',
      title: 'ACN Lab Manual With Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'ACN',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'ACN Lab Manual With Answer',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '20/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/11GDJkCDadCYT4DqrUERNbRIV1Iej5Ja7/view?usp=sharing',
      img: '/static/imgs/imldipcomwalab.png',
      title: 'IML Lab Manual With Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'IML',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'IML Lab Manual With Answer',
      sent_by: 'sent_by: Mufiz',
      insta: 'https://www.instagram.com/mr_mufiz_7/',
      date: '20/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/15edcY4wbBDCrpux6nU1XxuMcyecL_ydZ/view?usp=sharing',
      img: '/static/imgs/acndipcomlab.png',
      title: 'ACN Lab Manual (GTU)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'ACN',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'ACN Lab manual from GTU',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '20/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1_95cVuImF1LGvW2iGXIKexpeJKIubtYS/view?usp=sharing',
      img: '/static/imgs/imldipcomlab.png',
      title: 'IML Lab Manual (GTU)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'IML',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'IML Lab manual from GTU',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '20/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1I7nBPVXtxq4HrT1do6NHlfYMX0eOmadr/view?usp=sharing',
      img: '/static/imgs/coadipcomlab.png',
      title: 'COA Lab Manual (GTU)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'COA',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'COA Lab manual from GTU',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '20/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 18,
      link: 'https://drive.google.com/file/d/1rt5sGDIBlEpQiPP9tE7-vXYCFlXcdFxk/view?usp=sharing',
      img: '/static/imgs/Aacnchall.png',
      title: 'ACN Assignment All',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'ACN',
      leng: 'English',
      type: 'Assignment',
      desc: 'Sem 5 ACN (Advance Computer Network) All  Chapter Handwritten Assignment',
      sent_by: 'sent_by: Chirag',
      date: '18/10/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 18,
      link: 'https://drive.google.com/file/d/1kiyTb0j0IAV8SgE4bxEHayouH4yAYkxl/view?usp=sharing',
      img: '/static/imgs/Acoach1.jpg',
      title: 'COA Assignment All',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'COA',
      leng: 'English',
      type: 'Assignment',
      desc: 'Sem 5 COA (Computer Organisations and Architecture) All  Chapter Handwritten Assignment',
      sent_by: 'sent_by: Chirag',
      date: '15/10/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      link: 'https://drive.google.com/file/d/1NGyFToJ-uzw2JS3k6TgztJ1g_wE16dyV/view?usp=sharing',
      img: '/static/imgs/Afa2bcom.png',
      title: 'Financial Accounting assignment 2',
      course: 'B.Com',
      branch: '-',
      sub: 'Financial Accounting',
      leng: 'Gujarati',
      type: 'Assignment',
      desc: 'This is a second handwritten assignment of financial accounting b.com 1st sem.',
      sent_by: 'sent_by: Man Panchal',
      insta: '#',
      date: '11/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1ztyDv41R7I7Aa2T852TDig_mu2qvFjyy/view?usp=sharing',
      img: '/static/imgs/Nmnbcom.png',
      title: 'Marketing Management',
      course: 'B.Com',
      branch: '-',
      sub: 'Marketing Management',
      leng: 'Gujarati',
      type: 'Notes',
      desc: 'These are some handwritten notes for marketing management b.com 1st sem.',
      sent_by: 'sent_by: Man Panchal',
      insta: '#',
      date: '11/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1PvFWvnUe5GHDVsHhVtv_9RCdaAxQuSOS/view?usp=sharing',
      img: '/static/imgs/Necobcom.png',
      title: 'Economics Notes',
      course: 'B.Com',
      branch: '-',
      sub: 'Economics',
      leng: 'Gujarati',
      type: 'Notes',
      desc: 'Here are some handwritten notes for b.com 1st sem economics subject.',
      sent_by: 'sent_by: Man Panchal',
      insta: '#',
      date: '11/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1MdYSmqPiGuoaef7mprZwc59YsW5eu3nA/view?usp=sharing',
      img: '/static/imgs/Niksbcom.png',
      title: 'Indian Knowledge System Notes',
      course: 'B.Com',
      branch: '-',
      sub: 'Indian Knowledge System',
      leng: 'Gujarati',
      type: 'Notes',
      desc: 'These are some handwritten notes of IKS b.com 1st sem.',
      sent_by: 'sent_by: Man Panchal',
      insta: '#',
      date: '11/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      link: 'https://drive.google.com/file/d/1HIeWnuF64M0ZeZ4vt4GrPh5cBYm_osnp/view?usp=sharing',
      img: '/static/imgs/Afa1.png',
      title: 'Financial Accounting assignment 1',
      course: 'B.Com',
      branch: '-',
      sub: 'Financial Accounting',
      leng: 'Gujarati',
      type: 'Assignment',
      desc: 'This is handwritten assignment 1 of Financial Accounting in b.com 1st sem.',
      sent_by: 'sent_by: Man Panchal',
      insta: '#',
      date: '11/10/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 19,
      link: 'https://drive.google.com/file/d/1q-gNkWKlszG1CEsmsXm6x07TwRdRjsxF/view?usp=sharing',
      img: '/static/imgs/Aimlch1.png',
      title: 'IML Assignment All',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'IML',
      leng: 'English',
      type: 'Assignment',
      desc: 'Diploma Computer Engineering Sem 5 IML All Chapter Handwritten Assignment',
      sent_by: 'sent_by: Chirag',
      date: '10/10/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      link: 'https://drive.google.com/file/d/1_ihNj7YoNzzdTrDnFJgchTLxURWvTXZt/view?usp=sharing',
      img: '/static/imgs/dsabcanotes.png',
      title: 'DSA IMP algorithms',
      course: 'BCA',
      branch: '-',
      sub: 'DSA',
      leng: 'English',
      type: 'IMP',
      desc: 'Here are some most imp algorithms which can be helpful to memorise your basic concepts related to algorithms.',
      sent_by: 'sent_by: Chirag',
      date: '10/10/2024',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      link: './drive/css_oneshot_notes.pdf',
      img: '/static/imgs/cssnotes.png',
      title: 'CSS A TO Z Notes',
      course: '-',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Assignment',
      desc: 'Css A to Z Notes For Beginners these Notes Cover Almost All like Simple Website with Responsive Website.',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '28/09/2024',
    },
    {
      link: './drive/javascript_oneshot_notes.pdf',
      img: '/static/imgs/jsnotes.png',
      title: 'Javascript A TO Z Notes',
      course: '-',
      branch: '-',
      sub: 'Coding',
      leng: 'English',
      type: 'Notes',
      desc: 'Javascript A to Z Notes For Beginners these Notes Cover Almost All Like Simple Make Variable to Document Object Model (DOM).',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '28/09/2024',
    },
    {
      id: 44,
      link: './drive/Mahagatha_Book_Review_Project.pdf',
      img: '/static/imgs/mahagatha.png',
      title: 'Mahagatha Book Review',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'IC',
      leng: 'English',
      type: 'Project',
      desc: 'This is the review of a book named Mahagatha 100 tales from puranas written by Satyarth Nayak.',
      sent_by: 'sent_by: Chirag',
      date: '26/09/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 0,
      link: 'https://1drv.ms/p/c/25bd291b995dd854/EVTYXZkbKb0ggCUlFgAAAAAB8V4GhbLuzetHn4v0TtgqfA',
      img: '/static/imgs/book_review.png',
      title: 'Book Review(Rich Dad Poor Dad)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'CPD',
      leng: 'English',
      type: 'Project',
      desc: 'This is one type of PPT presentation Book Review, in this PPT Brife Detail and Main Points of The Book.',
      sent_by: 'sent by: Harshil',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 3,
      link: 'https://drive.google.com/file/d/16l5SwHiYIf3g3m9VN0W_bt4NvphacODr/view?usp=sharing',
      img: '/static/imgs/BSLC.png',
      title: 'Basic SQL Course',
      course: 'Comuter Releted',
      branch: '-',
      sub: 'DBMS or RDBMS',
      leng: 'English',
      type: 'Notes',
      desc: 'Basic all concepts for SQL Language with code just you copy and paste it.',
      sent_by: 'sent by: Harshil',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 4,
      link: 'https://drive.google.com/file/d/1mmHFAPABA89D-Jo6yDIuFAEgdpF_-kuP/view?usp=sharing',
      img: '/static/imgs/BPLC.png',
      title: 'Basic Python Course',
      course: 'Computer Releted',
      branch: '-',
      sub: 'Python Programming',
      leng: 'English',
      type: 'Notes',
      desc: 'Basic all concepts for Python Language with code just you copy and paste it.',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 5,
      link: 'https://drive.google.com/file/d/17w4fQlNac_hwsJWtoPDZjJq6a-JZG5Au/view?usp=sharing',
      img: '/static/imgs/ECT.png',
      title: '',
      course: 'BCA',
      branch: '-',
      sub: 'Emerging Computer Technologies',
      leng: 'English',
      type: 'Notes',
      desc: "Today's technology input, output and digital storage unit 1 (computer printed)",
      sent_by: 'sent_by: Zala Manav',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 6,
      link: 'https://drive.google.com/file/d/1ydSLtgqV_Aa9bo87DjalH-4Krb8FVG4e/view?usp=drive_link',
      img: '/static/imgs/aoopleb.png',
      title: 'AOOP Labmanual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'AOOP',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'AOOP Labmaual from gtu',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 7,
      link: 'https://drive.google.com/file/d/1ooHqCaspmF7b3c1i-kyHjU_ZVPQHbAQZ/view?usp=drive_link',
      img: '/static/imgs/cnleb.png',
      title: 'CN Labmanual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'CN',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'CN Labmaual from gtu',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 8,
      link: 'https://drive.google.com/file/d/1cFlLgd_aqO1-8Eii1cXuxpqBzdeJVF-k/view?usp=drive_link',
      img: '/static/imgs/iwdleb.png',
      title: 'IWD Labmanual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'IWD',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'IWD Labmaual from gtu',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '01/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 9,
      link: 'https://drive.google.com/file/d/1-k63z5U2_vzQR5-0jOl-GVBILTl6YqPg/view?usp=drive_link',
      img: '/static/imgs/iseleb.png',
      title: 'ISE Labmanual',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'ISE',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'ISE Labmaual from gtu',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 10,
      link: 'https://drive.google.com/file/d/1fm4FOuqW0naVVDRq2GACzvuRqDAf6hss/view?usp=drive_link',
      img: '/static/imgs/isewaleb.png',
      title: 'ISE Labmanual Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'ISE',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'ISE Labmaual With Answer',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 11,
      link: 'https://drive.google.com/file/d/1tTCGWw_CLKPYcocWl5I4vHmVc70YAn6U/view?usp=drive_link',
      img: '/static/imgs/iwdwaleb.png',
      title: 'IWD Labmanual Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'IWD',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'IWD Labmaual With Answer',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 12,
      link: 'https://drive.google.com/file/d/1ATZpolpmGhEKOSQzOpgerVIh8o6VYX2l/view?usp=drive_link',
      img: '/static/imgs/cnwaleb.png',
      title: 'CN Labmanual Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'CN',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'CN Labmaual With Answer',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 13,
      link: 'https://drive.google.com/file/d/1MueIWOdbclc0TEL9Wf6bL6YVTfHzilId/view?usp=drive_link',
      img: '/static/imgs/aoopwaleb.png',
      title: 'AOOP Labmanual Answer',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'AOOP',
      leng: 'English',
      type: 'Lab Manual',
      desc: 'AOOP Labmaual With Answer',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 14,
      link: 'https://drive.google.com/file/d/16Btq5xmgQYjylTsSu8R01-fyima-wTsZ/view?usp=drive_link',
      img: '/static/imgs/boops22p.png',
      title: 'BOOP GTU PAPER (S-2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'BOOP',
      leng: 'English',
      type: 'Paper',
      desc: 'BOOP GTU PAPER Summer 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 15,
      link: 'https://drive.google.com/file/d/1WAxlNscqI1TpFq9arsEQ6hJRresnj3zJ/view?usp=drive_link',
      img: '/static/imgs/boops22p.png',
      title: 'BOOP GTU PAPER (W-2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'BOOP',
      leng: 'English',
      type: 'Paper',
      desc: 'BOOP GTU PAPER WINTER 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '03/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 16,
      link: 'https://drive.google.com/file/d/1k79oROaeSf-H73Csm8UR8ycOXECvfLYV/view?usp=sharing',
      img: '/static/imgs/BCP22P.png',
      title: 'BCP GTU PAPER (2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'BCP',
      leng: 'English',
      type: 'Paper',
      desc: 'BCP GTU PAPER 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '10/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 17,
      link: 'https://drive.google.com/file/d/1DkZDvu2sdMwHxrcQUwUbe3hpevxgrvA4/view?usp=sharing',
      img: '/static/imgs/bde22p.png',
      title: 'BDE GTU PAPER (2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'BDE',
      leng: 'English',
      type: 'Paper',
      desc: 'BDE GTU PAPER 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '10/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 20,
      link: './drive/mid_1_imp_(gp_kheda).pdf',
      img: '/static/imgs/impcoas5m1.png',
      title: 'COA Mid imp (GP KHEDA)',
      course: 'Diploma',
      branch: 'Computer sem 5',
      sub: 'COA',
      leng: 'English',
      type: 'IMP',
      desc: 'COA Imp Question-Answer For Mid 1',
      sent_by: 'sent_by: jaincy',
      date: '11/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 21,
      link: './drive/ESU_mid_imp.pdf',
      img: '/static/imgs/impesus5m1.png',
      title: 'E&SU Mid imp (GP KHEDA)',
      course: 'Diploma',
      branch: 'Computer sem 5',
      sub: 'E&SU',
      leng: 'English',
      type: 'IMP',
      desc: 'E&SU Imp Question-Answer For Mid 1',
      sent_by: 'sent_by: veer',
      date: '11/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 22,
      link: './drive/IML_Mid_1_imp.pdf',
      img: '/static/imgs/impimls5m1.png',
      title: 'IML Mid imp (GP KHEDA)',
      course: 'Diploma',
      branch: 'Computer sem 5',
      sub: 'IML',
      leng: 'English',
      type: 'IMP',
      desc: 'IML Imp Question-Answer For Mid 1',
      sent_by: 'sent_by: veer',
      date: '11/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 23,
      link: './drive/ACN_mid_imp.pdf',
      img: '/static/imgs/impacns5m1.png',
      title: 'ACN Mid imp (GP KHEDA)',
      course: 'Diploma',
      branch: 'Computer sem 5',
      sub: 'ACN',
      leng: 'English',
      type: 'IMP',
      desc: 'ACN Imp Question-Answer For Mid 1',
      sent_by: 'sent_by: veer',
      date: '11/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 24,
      link: './drive/sem1_ch1_python.pdf',
      img: '/static/imgs/imppys1.png',
      title: 'Python imp Quetion',
      course: 'Diploma',
      branch: 'IT sem 1',
      sub: 'Python',
      leng: 'English',
      type: 'IMP',
      desc: 'Python Imp Question-Answer',
      sent_by: 'sent_by: Aastha',
      date: '12/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 25,
      link: './drive/sem2_sub_APP_all_chepter.pdf',
      img: '/static/imgs/Aappchall.png',
      title: 'APP Assignment Ch All',
      course: 'Diploma',
      branch: 'IT sem 2',
      sub: 'APP',
      leng: 'English',
      type: 'Assignment',
      desc: 'APP Assignment With Answer',
      sent_by: 'sent_by: Aastha',
      date: '12/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 26,
      link: './drive/java_imp.pdf',
      img: '/static/imgs/impjavas3.png',
      title: 'JAVA imp Quetion',
      course: 'Diploma',
      branch: 'IT',
      sub: 'JAVA',
      leng: 'English',
      type: 'IMP',
      desc: 'JAVA Imp Question - Answer',
      sent_by: 'sent_by: Aastha',
      date: '12/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 27,
      link: './drive/sem3_sub_FSD_ch_1_2.pdf',
      img: '/static/imgs/impfsds3.png',
      title: 'FSD Imp Quetion',
      course: 'Diploma',
      branch: 'IT',
      sub: 'FSD',
      leng: 'English',
      type: 'IMP',
      desc: 'FSD Imp Question - Answer',
      sent_by: 'sent_by: Aastha',
      date: '12/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 28,
      link: './drive/sem3_sub_los.pdf',
      img: '/static/imgs/imploss3.png',
      title: 'IOS Imp Quetion',
      course: 'Diploma',
      branch: 'IT',
      sub: 'IOS',
      leng: 'English',
      type: 'IMP',
      desc: 'IOS Imp Question - Answer',
      sent_by: 'sent_by: Aastha',
      date: '13/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 29,
      link: './drive/sem3_sub_DSP_ch_1_3_6.pdf',
      img: '/static/imgs/impdsps3.png',
      title: 'DSP Imp Quetion',
      course: 'Diploma',
      branch: 'IT',
      sub: 'DSP',
      leng: 'English',
      type: 'IMP',
      desc: 'DSP Imp Question - Answer',
      sent_by: 'sent_by: Aastha',
      date: '13/07/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 30,
      link: 'https://drive.google.com/file/d/1FIVTH5o3lnmdSb911r9UcZNDvXWAjoy9/view',
      img: '/static/imgs/marketing_mengement_in_practice.png',
      title: 'Marketing Management in Practice (5013)',
      course: 'B.Com',
      branch: '-',
      sub: 'MMIP',
      leng: 'English',
      type: 'Notes',
      desc: 'Marketing Management in Practice (5013) Notes',
      sent_by: 'sent_by: Chirag',
      date: '15/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 31,
      link: 'https://drive.google.com/file/d/1uR-V9o_1p_isWqs1YywbY20uz-CgDh0m/view',
      img: '/static/imgs/statistics.png',
      title: 'statistics (5013)',
      course: 'B.Com',
      branch: '-',
      sub: 'statistics',
      leng: 'English',
      type: 'Notes',
      desc: 'statistics (5013) Notes',
      sent_by: 'sent_by: Chirag',
      date: '15/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 32,
      link: 'https://drive.google.com/file/d/1oeE1rFjcf0Ak4ZqaET5S5GLBq8ZUqAeW/view',
      img: '/static/imgs/management_accountancy.png',
      title: 'Management Accountancy',
      course: 'B.Com',
      branch: '-',
      sub: 'management_accountancy',
      leng: 'English',
      type: 'Notes',
      desc: 'management_accountancy Notes',
      sent_by: 'sent_by: Chirag',
      date: '15/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 33,
      link: 'https://drive.google.com/file/d/1ljyuBGzUysOGXZWVD7189GyhbEse-wKD/view',
      img: '/static/imgs/Financial_management.png',
      title: 'Business Law',
      course: 'B.Com',
      branch: '-',
      sub: 'Business Law',
      leng: 'English',
      type: 'Notes',
      desc: 'Business Law Notes',
      sent_by: 'sent_by: Chirag',
      date: '15/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 34,
      link: 'https://drive.google.com/file/d/1katH4C1stv3wtqSg7QYktWxJUmE4FMiM/view',
      img: '/static/imgs/comm.png',
      title: 'Commercial  Communication',
      course: 'B.Com',
      branch: '-',
      sub: 'Commercial  Communication',
      leng: 'English',
      type: 'Notes',
      desc: 'Commercial  Communication Notes',
      sent_by: 'sent_by: Chirag',
      date: '28/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 35,
      link: 'https://drive.google.com/file/d/1RCDaSF8rfQvzVcGudrWJkOsi_Q-q0oUN/view',
      img: '/static/imgs/cost.png',
      title: 'Cost  Accounting',
      course: 'B.Com',
      branch: '-',
      sub: 'Cost  Accounting',
      leng: 'English',
      type: 'Notes',
      desc: 'Cost  Accounting Notes',
      sent_by: 'sent_by: Chirag',
      date: '28/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 36,
      link: 'https://drive.google.com/file/d/1PTxlGNwHQSSn-qEzTwRGeeQuaIdfJiTg/view',
      img: '/static/imgs/IND.png',
      title: 'Indian economy',
      course: 'B.Com',
      branch: '-',
      sub: 'Indian economy',
      leng: 'English',
      type: 'Notes',
      desc: 'Indian economy Notes',
      sent_by: 'sent_by: Chirag',
      date: '28/08/2024',
      time: 'Time: 10:00 AM',
      insta: 'https://www.instagram.com/chirag__1622/'
    },
    {
      id: 37,
      link: './drive/SLP_winter_2022.pdf',
      img: '/static/imgs/slp22p.png',
      title: 'SLP GTU PAPER (W - 2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'SLP',
      leng: 'English',
      type: 'Paper',
      desc: 'SLP GTU PAPER WINTER 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 38,
      link: './drive/SLP_summer_2023.pdf',
      img: '/static/imgs/slp23p.png',
      title: 'SLP GTU PAPER (S - 2023)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'SLP',
      leng: 'English',
      type: 'Paper',
      desc: 'SLP GTU PAPER Summer 2023',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 39,
      link: './drive/RDBMS_summer-2023.pdf',
      img: '/static/imgs/rdbms22p.png',
      title: 'RDBMS GTU PAPER (S - 2023)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'RDBMS',
      leng: 'English',
      type: 'Paper',
      desc: 'RDBMS GTU PAPER Summer 2023',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 40,
      link: './drive/bos_winter_2022.pdf',
      img: '/static/imgs/bos22p.png',
      title: 'BOS GTU PAPER (W - 2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'BOS',
      leng: 'English',
      type: 'Paper',
      desc: 'BOS GTU PAPER Winter 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 41,
      link: './drive/bos_summer_2023.pdf',
      img: '/static/imgs/bos23p.png',
      title: 'BOS GTU PAPER (S - 2023)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'BOS',
      leng: 'English',
      type: 'Paper',
      desc: 'BOS GTU PAPER Summer 2023',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 42,
      link: './drive/dsa_winter_2022.pdf',
      img: '/static/imgs/dsa22p.png',
      title: 'DSA GTU PAPER (W - 2022)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'DSA',
      leng: 'English',
      type: 'Paper',
      desc: 'DSA GTU PAPER Winter 2022',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 43,
      link: './drive/dsa_summer_2023.pdf',
      img: '/static/imgs/dsa23p.png',
      title: 'DSA GTU PAPER (S - 2023)',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'DSA',
      leng: 'English',
      type: 'Paper',
      desc: 'DSA GTU PAPER Summer 2023',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: '30/08/2024',
      time: 'Time: 10:00 AM',
    },

  ];



  const categories = [...new Set(pdfs.map((item) => { return item }))]



  // ----------------- COURSE FILTER -----------------------------
  const filters = document.querySelectorAll('.menu li');
  filters.forEach((item) => {
    item.addEventListener('click', (e) => {
      const searchData = e.target.textContent;
      const filteredData = categories.filter((item) => {
        if (searchData === 'All') {
          return item;
        } else if (item.course === searchData) {
          return item;
        } else if (item.branch === searchData) {
          return item;
        } else if (item.type === searchData) {
          return item;
        } else if (item.leng === searchData) {
          return item;
        }
      });
      displayItem(filteredData);
    });
  });

  // -------------------- END COURSE FILTER -----------------------------



  document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
      return (
        (item.title.toLowerCase().includes(searchData) ||
          item.course.toLowerCase().includes(searchData) ||
          item.sub.toLowerCase().includes(searchData) ||
          item.sent_by.toLowerCase().includes(searchData))
      )
    })
    displayItem(filteredData)
  });

  const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
      var {
        link,
        img,
        title,
        course,
        branch,
        sub,
        leng,
        desc,
        date,
        sent_by,
        insta
      } = item;
      return (
        `
              <a href="${link}" target="_blank">
                  <div class="pdf">
                      <img src="${img}" alt="" />
                      <p class="heading">${title}</p>
                      <p class="course">Course: ${course}</p>
                      <p class="branch">Branch: ${branch}</p>
                      <p class="subject">Subject: ${sub}</p>
                      <p class="subject">Language: ${leng}</p>
                      <p class="desc">
                          "${desc}"
                      </p>
                      <p class="sent_by">${sent_by}</p>
                      <p class="date">Date: ${date}</p>
                      <button class="material_sender_instagram_button"><a class="material_sender_instagram" href="${insta}">Follow</a></button>
                  </div>
              </a>
              `
      )
    }).join('')
  };
  displayItem(categories);
}
function blogs() {
  const blog = [
    {
      link: './blogs/the_impact_of_technology_on_education.html',
      img: '/static/imgs/iotoe.png',
      title: 'THE IMPACT OF TECHNOLOGY ON EDUCATION',
      desc: 'Discover how e-material is revolutionizing education by providing free, well-organized study resources for students and teachers. Learn about its features, benefits, and how it makes learning more accessible, anytime and anywhere',
      sent_by: 'sent by: e-material offical',
      insta: 'https://www.instagram.com/study_ematerial/',
      date: 'Date: 29-09-2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 0,
      link: './blogs/e_material_blog.html',
      img: '/static/imgs/e_material_blog.png',
      title: 'Effortless Learning with e-Material',
      desc: 'Discover how e-Material is revolutionizing education by providing free, well-organized study resources for students and teachers. Learn about its features, benefits, and how it makes learning more accessible, anytime and anywhere.',
      sent_by: 'sent by: e-material offical',
      insta: 'https://www.instagram.com/study_ematerial/',
      date: 'Date: 16-09-2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 1,
      link: './blogs/induction_prog.html',
      img: '/static/imgs/induction.png',
      title: 'Induction Program in Detail',
      desc: 'Learn about the importance of an induction program and what to do during this crucial phase. Discover how to make the most of your induction experience and set yourself up for success in your new role.',
      sent_by: 'sent by: e-material offical',
      insta: 'https://www.instagram.com/study_ematerial/',
      date: 'Date: 20-07-2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 2,
      link: './blogs/BESC.html',
      img: '/static/imgs/BOESE.png',
      title: 'Basics of Environmental Science and Engineering',
      desc: 'Discover the basics of Environmental Science and Engineering and their role in solving global environmental challenges.',
      sent_by: 'sent by: e-material offical',
      insta: 'https://www.instagram.com/study_ematerial/',
      date: 'Date: 21-08-2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 3,
      link: './blogs/presnalizelearning.html',
      img: '/static/imgs/Personalized_Learning_vs_Traditional.png',
      title: 'Personalized Learning vs Traditional',
      desc: 'Explore the benefits of personalized learning, its strategies, tools, and how it compares to traditional education to improve student outcomes.',
      sent_by: 'sent by: e-material offical',
      insta: 'https://www.instagram.com/study_ematerial/',
      date: 'Date: 11-09-2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 3,
      link: './blogs/Interview_Deep_Guidance.html',
      img: '/static/imgs/interview_guidance.png',
      title: 'Interview Success Guide',
      desc: 'Master your next interview with essential tips and strategies for success. Boost your confidence and land your dream job with expert guidance.',
      sent_by: 'sent by: e-material offical',
      insta: 'https://www.instagram.com/study_ematerial/',
      date: 'Date: 23-09-2024',
      time: 'Time: 10:00 AM',
    },

  ];
  const categories = [...new Set(blog.map((item) => { return item }))]
  document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
      return (
        (item.title.toLowerCase().includes(searchData) ||
          item.sent_by.toLowerCase().includes(searchData))
      )
    })
    displayItem(filteredData)
  });

  const displayItem = (items) => {
    document.getElementById('blogs').innerHTML = items.map((item) => {
      var {
        link,
        img,
        title,
        desc,
        date,
        sent_by,
        insta
      } = item;
      return (
        `
          <a href="${link}" target="_blank">
              <div class="pdf">
                  <img src="${img}" alt="" />
                  <p class="heading">${title}</p>
                  <p class="desc">
                      "${desc}"
                  </p>
                  <p class="sent_by">${sent_by}</p>
                  <p class="date">${date}</p>
                  <button class="material_sender_instagram_button"><a class="material_sender_instagram" href="${insta}">Follow</a></button>
              </div>
          </a>
          `
      )
    }).join('')
  };
  displayItem(categories);
}

function Q_T() {
  const q_t = [
    {
      id: 0,
      no: "#",
      Name: "Name",
      type: "Type",
      desc: "Description",
    },
    {
      id: 0,
      no: 1,
      Name: "C Quiz",
      type: "Quiz",
      desc: "basic C Quiz",
      link: "./quiz&task/C_quiz/bca_quiz.html",
      Q_branch: "BCA",
    },
    {
      id: 1,
      no: 2,
      Name: "Java Quiz",
      type: "Quiz",
      desc: "Basic Java Programming Quiz",
      link: "./quiz&task/C_quiz/javaq.html",
      Q_branch: "BCA",

    },
    {
      id: 2,
      no: 3,
      Name: "CSE Quiz",
      type: "Quiz",
      desc: "Basic Quiz of Communication Skill In English",
      link: "./quiz&task/C_quiz/cse.html",
      Q_branch: "All",
    },
    {
      id: 3,
      no: 4,
      Name: "CSE Grammar",
      type: "Quiz",
      desc: "Basic grammar Quiz of Communication Skill In English",
      link: "./quiz&task/C_quiz/csegrammer.html",
      Q_branch: "All",
    },
  ];

  const categories = [
    ...new Set(
      q_t.map((item) => {
        return item;
      })
    ),
  ];

  document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
      return (
        (item.Name.toLowerCase().includes(searchData) ||
          item.type.toLowerCase().includes(searchData) ||
          item.Q_branch.toLowerCase().includes(searchData))
      );
    });
    displayItem(filteredData);
  });

  const displayItem = (items) => {
    document.getElementById("quiz").innerHTML = items
      .map((item) => {
        var { no, Name, type, desc, btn, link, Q_branch } = item;
        return `
                              <div class="quiz-box btn-effect page">
                                  <div class="no">${no}</div>
                                  <div class="name">${Name}</div>
                                  <div class="type">${type}</div>
                                  <div class="quiz-desc quiz-description">
                                      ${desc}
                                  </div>
                                  <div class="Q_T_branch">${Q_branch}</div>
                                  <button class="quiz-btn">
                                      <a
                                          href="${link}"
                                          class="btn-a"
                                          target="_blank"
                                          >${type}</a
                                      >
                                  </button>
                              </div>
                          `;
      })
      .join("");
  };
  displayItem(categories);
}


function video_data() {
  const video = [
    {
      id: 0,
      link: 'https://drive.google.com/file/d/1mZufcinDNeWGMmjHUaEDUrwmzsT7K2lZ/view?usp=sharing',
      img: '/static/imgs/java_for_beginners.png',
      title: 'Java Basic Details',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Java',
      sent_by: 'sent_by: Krish',
      insta: 'https://www.instagram.com/krish_rajput16/',
      date: 'Date: 10-07-2024',
      time: 'Time: 10:00 AM',
    },
    {
      id: 1,
      link: 'https://drive.google.com/file/d/1zrqWKve6SUFF02MZYvBqbkfi2_uGN2U8/view?usp=sharing',
      img: '/static/imgs/WBSCIT.png',
      title: 'What Is B.Sc IT?',
      course: 'B.Sc IT',
      branch: '-',
      sub: '-',
      sent_by: 'sent_by: Harshil',
      insta: 'https://www.instagram.com/harshil_chavda__/',
      date: 'Date: 20-08-2024',
      time: 'Time: 10:00 AM',
    },

  ];

  const categories = [
    ...new Set(
      video.map((item) => {
        return item
      })
    )
  ];

  document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
      return (
        (item.title.toLowerCase().includes(searchData) ||
          item.course.toLowerCase().includes(searchData) ||
          item.sub.toLowerCase().includes(searchData) ||
          item.sent_by.toLowerCase().includes(searchData))
      )
    })
    displayItem(filteredData)
  });

  const displayItem = (items) => {
    document.getElementById('video').innerHTML = items.map((item) => {
      var {
        link,
        img,
        title,
        course,
        branch,
        sub,
        date,
        sent_by,
        insta
      } = item;
      return (
        `
                <a href="${link}" target="_blank">
                    <div class="pdf">
                        <img src="${img}" alt="" />
                        <h3 class="heading">${title}</h3>
                        <p class="course">Course: ${course}</p>
                        <p class="branch">Branch: ${branch}</p>
                        <p class="subject">Subject: ${sub}</p>
                        <p class="sent_by">${sent_by}</p>
                        <p class="date">${date}</p>
                      <button class="material_sender_instagram_button"><a class="material_sender_instagram" href="${insta}">Follow</a></button>
                    </div>
                </a>
                `
      )
    }).join('')
  };
  displayItem(categories);
}

function Books_data() {
  const Books = [
    {
      id: 9,
      img: '/static/imgs/feebook.jpg',
      title: 'Fundamental of Electricals and Electronics',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Fundamental of Electricals and Electronics',
      condition: 'Good',
      Language: 'Gujarati',
      Author: 'Atul Prakashan',
      Price: 'Rs. 90/-',
      order: 'https://wa.link/q1r2tc',
    },
    {
      id: 8,
      img: '/static/imgs/physicsbook.jpg',
      title: 'Physics',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Physics',
      condition: 'Good',
      Language: 'Gujarati',
      Author: 'Atul Prakashan',
      Price: 'Rs. 85/-',
      order: 'https://wa.link/2dol1c',
    },
    {
      id: 7,
      img: '/static/imgs/rdbmsbook.jpg',
      title: 'Relational Database Management System',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Relational Database Management System',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 175/-',
      order: 'https://wa.link/7q3bqf',
    },
    {
      id: 6,
      img: '/static/imgs/bosbook.jpg',
      title: 'Basic Operating System',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Basic Operating System',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 135/-',
      order: 'https://wa.link/n0dkl5',
    },
    {
      id: 5,
      img: '/static/imgs/dsawcbook.jpg',
      title: 'Data Structure and Algorithm',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Data Structure and Algorithm',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 187/-',
      order: 'https://wa.link/d5jt5z',
    },
    {
      id: 4,
      img: '/static/imgs/isebook.jpg',
      title: 'Introduction to Software Engineering',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Introduction to Software Engineering',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 115/-',
      order: 'https://wa.link/xk5b3r',
    },
    {
      id: 3,
      img: '/static/imgs/cnbook.jpg',
      title: 'Computer Networking',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Computer Networking',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 90/-',
      order: 'https://wa.link/5mhn1e',
    },
    {
      id: 2,
      img: '/static/imgs/iwdbook.jpg',
      title: 'Introduction to Web Development',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Introduction to Web Development',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 180/-',
      order: 'https://wa.link/yzgplz',
    },
    {
      id: 1,
      img: '/static/imgs/aoopbook.jpg',
      title: 'AOOP in Java',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Advanced Object Oriented Programming',
      condition: 'Good',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: 'Rs. 185/-',
      order: 'https://wa.link/8ne4jf',
    },
    {
      id: 0,
      img: '/static/imgs/slpbook.jpg',
      title: 'Scripting Language Python',
      course: 'Diploma',
      branch: 'Computer',
      sub: 'Scripting Language Python',
      condition: 'Old',
      Language: 'English',
      Author: 'Atul Prakashan',
      Price: '95/-',
      order: 'https://wa.link/2v3xk3',
    },

  ];

  const categories = [
    ...new Set(
      Books.map((item) => {
        return item
      })
    )
  ];

  document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
      return (
        (item.title.toLowerCase().includes(searchData) ||
          item.course.toLowerCase().includes(searchData) ||
          item.sub.toLowerCase().includes(searchData))
      )
    })
    displayItem(filteredData)
  });

  const displayItem = (items) => {
    document.getElementById('Books').innerHTML = items.map((item) => {
      var {
        link,
        img,
        title,
        course,
        branch,
        Price,
        sub,
        condition,
        Language,
        Author,
        order
      } = item;
      return (
        `
                <a>
                    <div class="pdf Books_Store">
                        <img src="${img}" alt="" />
                        <h3 class="heading">${title}</h3>
                        <p class="course">Course: ${course}</p>
                        <p class="branch">Branch: ${branch}</p>
                        <p class="subject">Subject: ${sub}</p>
                        <p class="author">Author: ${Author}</p>
                        <p class="language_book">Language: ${Language}</p>
                        <p class="condition_book">Condition: ${condition}</p>
                        <h3 class="book_price"><i class="fa-solid fa-indian-rupee-sign"></i> ${Price}</h3>
                      <button class="Order_button"><a class="material_sender_instagram" href="${order}">Order Books</a></button>
                    </div>
                </a>
                `
      )
    }).join('')
  };
  displayItem(categories);
}