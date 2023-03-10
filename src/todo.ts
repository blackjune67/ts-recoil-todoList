import { atom } from "recoil";

export interface ITodoTypes {
    id: number;
    contents: string;
    isCompleted: boolean;
};

export const inputState = atom<string>({
    key: "inputState",
    default: "",
});

export const todoState = atom<ITodoTypes[]>({
    key: "todos",
    default: [
        {
            id: 1,
            contents: "등을 조지는 날",
            isCompleted: false,
        }
    ]
});