// import fs from "fs";
// import pdfParse from "pdf-parse";

// export const parseResume = async (filePath) => {
//     console.log("Reading file:", filePath);

//     const buffer = fs.readFileSync(filePath);

//     const data = await pdfParse(buffer);

//     return data.text;
// };

import fs from "fs";
import pdfParse from "pdf-parse";

export const parseResume = async (filePath) => {
    console.log("Reading file:", filePath);

    console.log(
        "Exists before read:",
        fs.existsSync(filePath)
    );

    const buffer = fs.readFileSync(filePath);

    const data = await pdfParse(buffer);

    return data.text;
};