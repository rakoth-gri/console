import 'styled-components'
import { TTheme } from "./types";

// расширяем интерфейс стандартной темы с помощью нашего типа.
declare module 'styled-components' {
    export interface DefaultTheme extends TTheme {}
}