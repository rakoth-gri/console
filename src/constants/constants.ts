import { routesEnum, ILink } from "../types";
import { CSSProperties } from "react";

export const MENU_LINKS: ILink[] = [
	{
		path: routesEnum.home,
		text: "home",
	},
	{
		path: routesEnum.about,
		text: "about",
	},
	{
		path: routesEnum.contacts,
		text: "contacts",
	},
];

export const DEL_ICON: CSSProperties = { position: "absolute", zIndex: 8, top: "25px", right: "25px" };
export const BG_NONE: CSSProperties = { background: "transparent" };
