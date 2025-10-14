// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-activities",
          title: "activities",
          description: "Activities and projects related to metascience for machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the initiative",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-we-got-a-starting-fund-from-ellis-unit-delft-blush",
          title: 'We got a starting fund from Ellis unit Delft :blush:',
          description: "",
          section: "News",},{id: "news-we-organized-our-first-workshop-on-metascience-for-machine-learning-on-june-20-2025-sparkles",
          title: 'We organized our first workshop on metascience for machine learning on June 20,...',
          description: "",
          section: "News",},{id: "news-we-launched-the-metascience-for-machine-learning-website-you-are-now-viewing",
          title: 'We launched the metascience for machine learning website you are now viewing.',
          description: "",
          section: "News",},{id: "news-our-second-workshop-is-on-oct-9-2025-from-12-00-16-30-register-here-tentative-schedule",
          title: 'Our second workshop is on Oct 9, 2025 from 12:00-16:30; register here; tentative...',
          description: "",
          section: "News",},{id: "projects-the-first-workshop-on-metascience-for-machine-learning",
          title: 'The first workshop on Metascience for Machine Learning',
          description: "20 June 2025, Introduction and scoping.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-the-second-workshop-on-metascience-for-machine-learning",
          title: 'The second workshop on Metascience for Machine Learning',
          description: "9 Oct 2025, Datasets and benchmarks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},];
