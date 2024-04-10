export type TaskT = {
  id: string;
  title: string;
  description: string;
  priority: string;
  deadline: string;
  image?: string;
  alt?: string;
  tags: {
    title: string;
    bg: string;
    text: string
  }[]
}

type Column = {
  name: string;
  items: TaskT[]
}

export type Columns = {
  [key: string]: Column;
}