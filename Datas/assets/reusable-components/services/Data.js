class Data {
    static url = "https://api.outfino.io/v3";

    static language = navigator.language.split('-')[0];

    static supportEmail = "support@outfino.com";

    static async fetchValidation(token) {
        const response = await fetch(`${Data.url}/email/verify?token=${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "lang": this.language
            }
        });

        if (!response.ok)
            throw new Error();

        return;
    }

    static async fetchResetPassword(token, password) {
		const response = await fetch(`${Data.url}/reset-password`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"lang": this.language
			},
			body: JSON.stringify({
				token: token,
				newPassword: password
			})
		});
	
		if (response.status === 404)
			throw new Error("Request is expired!");
	
		if (!response.ok)
			throw new Error();
	
		return;
	}

    static async sendSupportRequest(name, email, message) {
        const response = await fetch(`${Data.url}/support`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "lang": this.language,
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            })
        });

        if (response.status === 400)
            throw new Error("Request is expired!");
        
        if (!response.ok)
            throw new Error();

        return;
    }
}
export default Data;