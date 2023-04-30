import { FC, ReactNode } from "react";
// глобальные стили
import { theme } from "./global/theme";

// тип глобальной theme
export type TTheme = typeof theme;

// множестов роутов
export enum routesEnum {
	home = "/",
	about = "/about",
	contacts = "/contacts",
}

export type TRoute = {
	path: routesEnum.home | routesEnum.contacts | routesEnum.about;
	element: FC;
};

export interface ILink {
	path: routesEnum.home | routesEnum.contacts | routesEnum.about;
	text: string;
}

// CONTEXT ----

export interface IRecord {
	command: string;
	id: number;
}

export interface ICurrentContext {
	addRecord: (record: IRecord) => void;
	clearAllRecords: () => void;
	state: IRecord[];	
}
