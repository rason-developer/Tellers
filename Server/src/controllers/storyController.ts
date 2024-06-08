import express from "express";

export const create_story = async (req:express.Request, res: express.Response)  => {
    try {
        res.status(200).send("Create Story.");
    }catch(err) {
        res.status(400).send(err);
    }
}

export const get_stories = async (req:express.Request, res: express.Response)  => {
    try {
        res.status(200).send("View Stories.");
    }catch(err) {
        res.status(400).send(err);
    }
}

export const view_story_details = async (req:express.Request, res: express.Response)  => {
    try {
        const storyID = req.params.storyID;
        res.status(200).send(`Story details. Story ID: ${storyID}`);
    }catch(err) {
        res.status(400).send(err);
    }
}

export const update_story = async (req:express.Request, res: express.Response)  => {
    try {
        const storyID = req.params.storyID;
        res.status(200).send(`Update Story. Story ID: ${storyID}`);
    }catch(err) {
        res.status(400).send(err);
    }
}

export const delete_story = async (req:express.Request, res: express.Response) => {
    try {
        const storyID = req.params.storyID;
        res.status(200).send(`Delete Story. Story ID: ${storyID}`);
    }catch(err) {
        res.status(400).send(err);
    }
}

