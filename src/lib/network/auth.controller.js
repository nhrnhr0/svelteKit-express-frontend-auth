
import { fetch_from_backend } from "./commen";

// handle network requests related to authentication
export default class AuthController {
    // register
    /**
    * @param {string} username
    * @param {string} password
    * @return {Promise<Response>}
    * */
    static async register(username, password, email) {
        const response = await fetch_from_backend("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password,email }),
        });
        return response.json();
    }

    // login
    /**
     * @param {string} username
     * @param {string} password
     * @return {Promise<Response>}
     * */

    static async login(username, password) {
        const response = await fetch_from_backend("/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        return response.json();
    }

    // logout
    static async logout() {
        // pass
    }

    // get current user
    static async get_current_user() {
        const response = await fetch_from_backend("/api/current_user");
        return response.json();
    }
}