// const Chat = require("../models/chat.model");
// const { askAI } = require("../services/chat.service");

import Chat from "../models/chat.model.js";
import { askAI } from "../services/chat.service.js";

export const chatWithAI = async (req, res) => {
    try {
        const { message } = req.body;

        const answer = await askAI(
            message,
            req.user
        );

        await Chat.create({
            userId: req.user._id,
            question: message,
            answer,
        });

        res.json({
            success: true,
            answer,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "AI Error",
        });
    }
};

 export const getHistory = async (req, res) => {
    try {
        const chats = await Chat.find({
            userId: req.user._id,
        }).sort({ createdAt: 1 });

        res.json({
            success: true,
            chats,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
        });
    }
};

// module.exports = {
//     chatWithAI,
//     getHistory,
// };