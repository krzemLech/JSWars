export type Link = {
    id: string;
    url: string;
    text: string;
    className?: 'active' | 'disabled' | 'important';
    display: Displays;
};

export type Todo = {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

export type Displays = "Todos" | "Characters" | null