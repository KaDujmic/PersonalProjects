// Init github
const github = new GitHub

// Init UI
const ui = new UI


// Search input
const searchUser = document.getElementById('searchUser')

// Search input event listener

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const user_text = e.target.value

    if(user_text !== ''){
        // Make HTTP call
        github.getUser(user_text)
        .then(data => {
            if( data.profile_data.message === 'Not Found') {
                // Show Alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                // Show Profile
                ui.showProfile(data.profile_data)
                ui.showRepos(data.repos_data)
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile()
    }
})