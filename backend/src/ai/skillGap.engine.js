import careers from "../data/careers.json" with { type: "json" };

export const findSkillGap = (
    userSkills = [],
    careerName
) => {

    const career =
        careers.find(
            (item) =>
                item.career === careerName
        );
    if (!career) {
        return [];
    }
    return career.requiredSkills.filter(
        (skill) =>
            !userSkills.includes(skill)
    );

    const missingSkills = career.requiredSkills.filter(
  (skill) => !userSkills.includes(skill)
);

console.log("Career:", careerName);
console.log("Required Skills:", career.requiredSkills);
console.log("User Skills:", userSkills);
console.log("Missing Skills:", missingSkills);

return missingSkills;
};

