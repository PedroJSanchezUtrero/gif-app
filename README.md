# Project Description: GifApp

GifApp is a web application developed with Angular, designed to search and view animated GIFs. This project was generated using Angular CLI version 18.1.4.

## Project Structure

The project follows a typical modular Angular structure, with components, services, and modules organized coherently. Below are some of the most important parts of the project:

### Main Components:

- **AppComponent**: The root component of the application.
- **HomePageComponent**: The main page that contains the user interface for searching and viewing GIFs.

### Modules:

- **AppModule**: The main module of the application.
- **AppRoutingModule**: Configuration of the application's routes.

### Services:

- **GifGatewayService**: Service responsible for communication with the GIFs API.

### Interfaces:

- **Gif**: Defines the structure of the GIF data.

## Features

- **GIF Search**: Users can search for GIFs using a search bar.
- **GIF Viewing**: Search results are displayed in a GIF gallery.
- **Search History**: A history of recent searches is maintained.
- **User Interface**: Uses Angular Material for a modern and responsive interface.

## Available Scripts

- **Development Server**: `npm start` or `ng serve` to start the development server at `http://localhost:4200/`.
- **Build**: `npm run build` or `ng build` to build the project.
- **Unit Tests**: `npm test` or `ng test` to run unit tests with Karma.

## Development Configuration

The project includes specific configurations for the development and production environments in the `angular.json` file. Configurations for tasks and launches in Visual Studio Code are also provided in the `.vscode/tasks.json` and `.vscode/launch.json` files.

## Additional Documentation

For more help on using Angular CLI, you can run `ng help` or visit the [Angular CLI reference page](https://angular.io/cli).

This project is maintained by PedroJSanchezUtrero.
