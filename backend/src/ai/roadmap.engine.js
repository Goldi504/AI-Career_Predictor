const roadmapLibrary = {
  Git: [
    "Git Basics",
    "Git Commands",
    "GitHub Workflow",
    "Build Git Project"
  ],

  Redux: [
    "Redux Fundamentals",
    "Redux Toolkit",
    "State Management",
    "Redux Project"
  ],

  Docker: [
    "Docker Basics",
    "Containers",
    "Docker Compose",
    "Deployment"
  ],

  TypeScript: [
    "TS Basics",
    "Types",
    "Interfaces",
    "React + TS"
  ]
};

export const generateRoadmap = (missingSkills) => {

  const roadmap = [];

  let week = 1;

  missingSkills.forEach((skill) => {

    if (roadmapLibrary[skill]) {

      roadmapLibrary[skill].forEach((topic) => {

        roadmap.push({
          week: `Week ${week}`,
          topic
        });

        week++;
      });

    }
  });

  return roadmap;
};