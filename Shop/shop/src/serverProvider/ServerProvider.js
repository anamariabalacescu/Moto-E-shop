export default class ServerProvider {

    addTokenToHeader() {
        const token = localStorage.getItem('token')
        return {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }

    getTokenFromHeader(headers) {
        return headers['Authorization'].split(' ')[1]
    }

    getBaseUrl() {
        return 'http://localhost:80'
    }
    handleResponseStatus(response) {
        if (response.status >= 400) {
            throw new Error(response.statusText)
        }   
    }
    
    async get(url) {
        try {
        const response = await fetch(`${this.getBaseUrl()}${url}`, this.addTokenToHeader())
        this.handleResponseStatus(response)
        return await response.json()
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

    async post(url, body) {
        try {
        const response = await fetch(`${this.getBaseUrl()}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(body)
        })
        this.handleResponseStatus(response)
        return await response.json()
        } catch (error) {
            console.log(error)
            return null
        }
    }

    

    async put(url, body) {
        try {
        const response = await fetch(`${this.getBaseUrl()}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(body)
        })
        this.handleResponseStatus(response)
        return await response.json()
        } catch (error) {
            console.log(error)
            return null
        }
    }

    
    async delete(url) {
        try {
        const response = await fetch(`${this.getBaseUrl()}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        this.handleResponseStatus(response)
        return await response.json()
        } catch (error) {
            console.log(error)
            return null
        }
    } 

    async postWithImage(url, body) {
        try {
        let formData=new FormData();
        Object.keys(body).forEach(key => {
            formData.append(key, body[key]);
        });

        const response = await fetch(`${this.getBaseUrl()}${url}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        this.handleResponseStatus(response)
        return await response.json()
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
