import express from 'express';
import { create_story,
    get_stories,
    view_story_details,
    update_story,
    delete_story} from 'controllers/storyController';

export default(router: express.Router) => {
    router.post("/api/stories");
    router.get("/api/stories");
    router.get("/api/stories/:storyID");
    router.put("/api/stories/:storyID");
    router.delete("/api/stories/:id");
}
