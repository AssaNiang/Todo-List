 export type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

 export interface ITask {
    id: number |undefined;
    content: string;
    category: CategoryType|null;
    isUrgent: boolean;
    doneDate: Date | null;
}