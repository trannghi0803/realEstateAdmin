import { UserManager } from "oidc-client";
import { UserService } from "../app/services";
import { GlobalState } from "../stores/GlobalState";
const config = {
    authority: "https://localhost:5001/",
    client_id: "pl-ores-web-local",
    client_secret: "secret",
    redirect_uri: "http://localhost:3000/auth/callback",
    response_type: "code",
    scope: "openid profile",
    loadUserInfo: true,
    prompt: "login"
};
const userManager = new UserManager(config);

export async function loadUserFromStorage() {
    try {
        const user = await new UserService().getUser();
        if (user) {
            GlobalState.setUser(user);
        }
    } catch (e) {
        console.error(`User not found: ${e}`)
    }
}

export function signinRedirect() {
    return userManager.signinRedirect();
}

export function signinRedirectCallback() {
    return userManager.signinRedirectCallback();
}

export async function signoutRedirect() {
    await userManager.clearStaleState();
    await userManager.removeUser();
    return userManager.signoutRedirect();
}

export async function signoutRedirectCallback() {
    await userManager.clearStaleState();
    await userManager.removeUser();
    return userManager.signoutRedirectCallback();
}

export default userManager;