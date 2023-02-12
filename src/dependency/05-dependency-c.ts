import { Post } from "./05-dependency-b";
import localPost from "./local-database.json";

export abstract class PostProvide {
  abstract getPost(): Promise<Post[]>;
}

export class LocalDataBaseService {
  constructor() {}

  async getFakePosts() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

export class JsonDatabaseService implements PostProvide {
  async getPost() {
    return localPost;
  }
}

export class WebDatabaseService implements PostProvide {
  async getPost(): Promise<Post[]> {
    const respo = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await respo.json();
    return data;
  }
}
