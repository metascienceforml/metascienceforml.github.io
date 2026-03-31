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
          section: "News",},{id: "news-our-third-workshop-is-on-friday-december-5th-2025-from-10-00-15-00-register-here-tentative-schedule-and-location-at-firma-van-buiten-address-thijsseweg-1-2629-ja-delft",
          title: 'Our third workshop is on Friday, December 5th, 2025 from 10:00-15:00; register here;...',
          description: "",
          section: "News",},{id: "news-our-fourth-workshop-is-on-friday-april-10th-2026-from-10-00-15-00-tentative-schedule-and-location-is-lecture-room-pi-at-building-36-tu-delft-campus-mekelweg-4-2628-cd-delft-register-here",
          title: 'Our fourth workshop is on Friday, April 10th, 2026 from 10:00-15:00; tentative schedule,...',
          description: "",
          section: "News",},{id: "projects-introduction-and-scoping",
          title: 'Introduction and scoping.',
          description: "20 June 2025, The first workshop on Metascience for Machine Learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-datasets-and-benchmarks",
          title: 'Datasets and benchmarks.',
          description: "9 Oct 2025, The second workshop on Metascience for Machine Learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-inspiration-from-philosophy-and-psychology",
          title: 'Inspiration from Philosophy and Psychology.',
          description: "5 Dec 2025, The third workshop on Metascience for Machine Learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-understanding-ms4ml-and-understanding-based-research-in-ml",
          title: 'Understanding ms4ml and understanding-based research in ML.',
          description: "10 Apr 2026, The fourth workshop on Metascience for Machine Learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},];
