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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-we-got-a-starting-fund-from-ellis-unit-delft-blush",
          title: 'We got a starting fund from Ellis unit Delft :blush:',
          description: "",
          section: "News",},{id: "news-we-organized-our-first-workshop-on-metascience-for-machine-learning-sparkles",
          title: 'We organized our first workshop on metascience for machine learning  ! :sparkles:',
          description: "",
          section: "News",},{id: "news-we-launched-the-metascience-for-machine-learning-website-you-are-now-viewing",
          title: 'We launched the metascience for machine learning website you are now viewing.',
          description: "",
          section: "News",},{id: "projects-ms4ml-workshop-1",
          title: 'ms4ml workshop 1',
          description: "The first workshop on Metascience for Machine Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},];
