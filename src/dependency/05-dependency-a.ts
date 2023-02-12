import { PostService } from "./05-dependency-b";
import {
  JsonDatabaseService,
  LocalDataBaseService,
  WebDatabaseService,
} from "./05-dependency-c";

// Main
(async () => {
  const webProvider = new WebDatabaseService();
  const postService = new PostService(webProvider);
  const posts = await postService.getPosts();

  console.log({ posts });
})();
