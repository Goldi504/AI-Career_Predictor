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
};