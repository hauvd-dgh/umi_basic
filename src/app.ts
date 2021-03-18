import { getCurrentUserInfo } from "./services/APILibrary";

export async function getInitialState() {
    const data = getCurrentUserInfo()
    return data;
}