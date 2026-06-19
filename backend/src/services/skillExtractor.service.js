const skillDatabase = [

    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Python",
    "Java",
    "C++",
    "Machine Learning",
    "TensorFlow",
    "SQL"
];

export const extractSkills = (
    resumeText
) => {

    return skillDatabase.filter(
        skill =>
            resumeText
                .toLowerCase()
                .includes(
                    skill.toLowerCase()
                )
    );
};