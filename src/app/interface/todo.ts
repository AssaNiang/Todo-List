 export type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

 export interface ITask {
    id: number;
    content: string;
    category: CategoryType;
    isUrgent: boolean;
    doneDate: Date;
}