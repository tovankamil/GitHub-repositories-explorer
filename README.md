Project: GitHub Repositories Explorer

Description
The GitHub Repositories Explorer is a React application built with TypeScript that integrates with the GitHub API. It allows users to search for up to 5 GitHub users with a username similar to the value entered in a text input. Upon selecting a user, the application displays all repositories for that user.

Features
User Search: Users can enter a GitHub username in a search input, and the application will display up to 5 users with similar usernames.

Repository Display: When a user is selected, the application will fetch and display all repositories for that user.

Error Handling: Proper error handling for API requests and user inputs.

Loading States: Display loading states during API requests.

Responsive Design: The application is responsive and works well on both desktop and mobile devices.

Keyboard Events: Handle keyboard events for better user experience.

Technologies

React+Vite: For building the user interface.

TypeScript: For type safety and better developer experience.

GitHub API: For fetching user and repository data.

Axios: For making HTTP requests to the GitHub API.

React Router: For navigation (if needed).

Tailwinds & ShacdnUI Modules: For styling the application

API Endpoints
Search Users: GET https://api.github.com/search/users?q={username}

Get User Repositories: GET https://api.github.com/users/{username}/repos

Steps to Implement:

1. Setup React Application with TypeScript
   Create a new React application with TypeScript using create-react-app.
   Install necessary dependencies: axios, react-router-dom (if needed), jest, @testing-library/react.

2. Create Components
   SearchUser: A component with an input field for entering the GitHub username.
   Repositories : A component to display the list of users returned from the search & A component to display the repositories of a selected user.
   LoadingSpinner: A component to display a loading spinner during API requests.

3. Fetch Users
   Use the axios library to make a GET request to the GitHub API to search for users.
   Update the state with the fetched users.
