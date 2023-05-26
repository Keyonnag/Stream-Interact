# Stream Interact Twitch Extension

Welcome to the Stream Interact Twitch Extension! This extension allows content creators to engage with their chat and create funny moments on stream by picking various question types such as Truth, Dare, Would You Rather, Never Have I Ever, and Paranoia.

## Technologies Used

This project is built using the following technologies:

- Node.js
- Express.js
- PostgreSQL
- HTML
- CSS
- JavaScript (Vanilla DOM Manipulation)

## Getting Started

To use this Twitch Extension on your stream, follow the instructions below:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Set up the PostgreSQL database using the provided schema and seed data. You can find the schema and seed data in the `database.sql` file.
4. Configure the database connection settings in the server-side code (`server.js`) to match your PostgreSQL setup.
5. Start the server by running `npm start`.
6. Configure the Twitch Extension on your Twitch Developer Dashboard. Set the extension URL to the server URL where your extension is hosted.
7. Install and activate the extension on your Twitch channel.
8. Launch your stream and enjoy engaging with your chat using the various question types!

## Usage

Once the extension is installed and activated on your Twitch channel, you can interact with your chat using the following question types:

- Truth: Ask your chat a truth question and see their responses.
- Dare: Challenge your chat with a dare and have fun with their reactions.
- Would You Rather: Present your chat with two options and see which one they prefer.
- Never Have I Ever: Start a Never Have I Ever game with your chat and learn interesting facts about them.
- Paranoia: Ask your chat a paranoia question and see who relates to it the most.

To use a question type, simply click on the corresponding button in the extension interface. The extension will fetch a random question from the database and display it on the screen. Have fun interacting with your chat and creating memorable moments on your stream!

## Customization

You can customize the look and feel of the extension by modifying the HTML and CSS files. The HTML file (`index.html`) contains the structure of the extension interface, while the CSS file (`style.css`) contains the styling rules.

Feel free to modify the colors, fonts, and layout to match your stream's branding or personal preferences.

## Contributing

If you would like to contribute to this project, you are welcome to submit pull requests. Please include a detailed description of the changes you are proposing.

## Issues

If you encounter any issues or have suggestions for improvement, please [open an issue](https://github.com/yourusername/yourrepository/issues) on the project's GitHub repository.

## Acknowledgements

This project was inspired by the need to engage with chat and create fun moments during Twitch streams. Special thanks to the Twitch community for their support and feedback.

---

Thank you for using the Stream Interact Twitch Extension. Enjoy engaging with your chat and have a great time on your streams!
