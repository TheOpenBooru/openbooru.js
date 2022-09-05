import { TagQuery, Tag } from "../../types";
export default function search(apiUrl: string, query: TagQuery): Promise<Array<Tag>>;
