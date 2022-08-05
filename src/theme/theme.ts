import light from "./css/light.css";
import dark from "./css/dark.css";

interface Theme { 
    light: string,
    dark: string 
}

const theme: Theme = {
    light: light,
    dark: dark
}

export default {
    theme,
}