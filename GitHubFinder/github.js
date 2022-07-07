class GitHub {
    constructor() {
        this.client_id = '2943166e3fb40968842c'
        this.client_secrets = 'fceaac36fa90dd65932e79e35e7f94e9530299c6'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profile_response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`)

        const repo_response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secrets}`)

        // console.log(profile_response)


        const profile_data = await profile_response.json()

        const repos_data = await repo_response.json()
        return {
            profile_data,
            repos_data
        }
    }
}