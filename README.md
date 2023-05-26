# Stream Interact Twitch Extension

## Overview
The Stream Interact Extension is a fun and interactive tool designed to enhance engagement between content creators and their audience during live streams on Twitch. This extension enables streamers to select and pose truth, dare, never have I ever, would you rather, and paranoia questions to their chat, creating memorable and humorous moments on stream.

## Features
- **Multiple Game Modes:** Choose from a variety of questions, including Truth, Dare, Never Have I Ever, Would You Rather, and Paranoia, to keep the stream entertaining and engaging.
- **Seamless Integration:** The extension is built using Node.js, Express.js, PostgreSQL, and vanilla HTML, CSS, and JavaScript, ensuring a smooth and reliable user experience. The front-end utilizes DOM manipulation techniques for dynamic updates and real-time interaction.

## Prerequisites
Before running the Truth or Dare Twitch Extension, ensure that you have the following dependencies installed:

- Node.js (version X.X.X)
- Express.js (version X.X.X)
- PostgreSQL (version X.X.X)
- PG (PostgreSQL package for Node.js)

## Installation
Follow these steps to set up the Truth or Dare Twitch Extension:

1. Clone the repository: [Repo Link](https://github.com/Keyonnag/FrontEndProject-CSS-HTML-Javascript-.git)


2. Navigate to the project directory


3. Install the required dependencies using npm:

```
npm i
```

4. Set up the PostgreSQL database:
- Create a new database using the PostgreSQL client or a GUI tool of your choice.
- Update the database credentials in the `config.js` file with your PostgreSQL connection details.

5. Run the database migrations to set up the required tables:


6. Start the application:


7. The Truth or Dare Twitch Extension is now running on your local server. You can access it in your web browser at `http://localhost:3000`.

## Configuration
To customize the questions for each game mode, follow these steps:

1. Open the `questions.json` file located in the project's root directory.
2. Modify the JSON structure to add, remove, or edit the questions in each category.
3. Save the changes.

The next time you run the extension, the updated questions will be loaded and available for use during your stream.

## Usage
To enable the Truth or Dare Twitch Extension during your live stream, follow these steps:

1. Visit the Twitch Developer Dashboard (https://dev.twitch.tv/dashboard/extensions) and create a new extension.
2. Fill in the required details, such as the extension's name, version, and description.
3. Set the extension's configuration to point to your local server (`http://localhost:3000`) during development.
4. Generate the necessary extension keys and copy the Client ID.
5. In the project's root directory, create a new file named `.env`.
6. In the `.env` file, add the following line and replace `YOUR_CLIENT_ID` with the copied Client ID:


7. Save the `.env` file.

Now, when you start the Truth or Dare Twitch Extension and launch your Twitch stream, the extension will be available in your channel's overlay. You and your viewers can interact with it to play truth, dare, never have I ever, would you rather, and paranoia games, creating entertaining and engaging moments during your live streams.

## Contributing
We welcome contributions to the Truth or Dare Twitch Extension project. If you encounter any bugs, issues, or have suggestions for improvements, please open an issue on the project's GitHub repository (https://github.com/your-username/truth-or-dare-twitch-extension/issues).

To contribute code changes:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them to your branch.
4. Push your branch to your forked repository.
5. Open a pull request on the main project repository, describing your changes and referencing any related issues.

We appreciate your contributions and support in making the Truth or Dare Twitch Extension even better!

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Please review the `LICENSE` file for more details.

## Acknowledgments
The Truth or Dare Twitch Extension was developed by [Keyonna Garfine](https://github.com/keyonnag) as part of a personal project. We would like to thank the open-source community for providing invaluable resources, tutorials, and libraries that made this project possible.

If you have any further questions or need assistance, please contact [keyonnaqt15@gmail.com](keyonnaqt15@gmail.com). Happy streaming and have fun with the Truth or Dare Twitch Extension!


