import { VFC } from "react";
import { TodoType } from "./types/todo";

// props: TodoType
// props: Pick<TodoType, "userId" | "title" | "completed"> 抽出
// props: Omit<TodoType, "id"> 省略

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
