import { useContext, createContext, ReactNode, useState, useEffect } from "react";
// context && hook
const myContext = createContext({});
export const getCurrentContext = () => useContext(myContext);
// types
import { ICurrentContext, IRecord } from "../types";
// services
import { ls } from "../services/ls";

interface IContextProvider {
	children: ReactNode;
}

export default function ContextProvider({ children }: IContextProvider) {
	const [state, setState] = useState<Array<IRecord>>(ls.get("commands"));

	const addRecord = (record: IRecord): void => setState([...state, record]);

	const clearAllRecords = (): void => setState([]);	

	useEffect(() => {
		ls.set("commands", state);
	}, [state]);

	const value: ICurrentContext = {
		addRecord,
		clearAllRecords,		
		state
	};

	return <myContext.Provider value={value}>{children}</myContext.Provider>;
}
