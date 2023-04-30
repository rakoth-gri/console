import { IRecord } from "../types";

export const ls = {
	set: (key: string, data: IRecord[]) => localStorage.setItem(key, JSON.stringify(data)),
	get: (key: string): [] | IRecord[] => JSON.parse(localStorage.getItem(key) || "[]"),
};
