import careers from "../data/careers.json" with { type: "json" };

export const predictCareer = (userSkills = []) => {

    let bestCareer = null;
    let highestScore = 0;

    careers.forEach((career) => {

        const matchedSkills =
            career.requiredSkills.filter(
                (skill) =>
                    userSkills.includes(skill)
            );
      const score =
            (
                matchedSkills.length /
                career.requiredSkills.length
            ) * 100;
            if (score > highestScore) {

            highestScore = score;

            bestCareer = career;
        }
    });
    return {
        career: bestCareer?.career || "No Match",
        score: Math.round(highestScore)
    };
};
