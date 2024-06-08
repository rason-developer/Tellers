import express from 'express';
import { create_story,
    get_stories,
    view_story_details,
    update_story,
    delete_story} from '../controllers/storyController';

export default(router: express.Router) => {
    router.post("/api/stories", create_story);
    router.get("/api/stories",get_stories);
    router.get("/api/stories/:storyID",view_story_details);
    router.put("/api/stories/:storyID",update_story);
    router.delete("/api/stories/:id", delete_story);
}
