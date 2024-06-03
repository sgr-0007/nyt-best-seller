
# NYT Best Seller

A web application to display the New York Times Best Seller list for hardcover fiction. Users can search for books, view details, and manage their favorite books.

## Features

- Display New York Times Best Seller list for hardcover fiction
- Search for books by title or author
- Add or remove books from favorites
- Edit book details in favorites

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Daisy UI
- Axios for API requests
- React Router for navigation
- Context API for state management

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sgr-0007/nyt-best-seller.git
   cd nyt-best-seller
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` or the URL in the terminal

## Folder Structure

```
nyt-best-seller/
│
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── assets/          # Images and other assets
│   ├── App.tsx          # Main app component
│   ├── index.tsx        # Entry point
│   ├── ...
├── .gitignore           # Git ignore file
├── package.json         # NPM package file
├── README.md            # Readme file
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## API Key

To fetch data from the New York Times API, you need to have an API key. You can get one by signing up at [NY Times Developer](https://developer.nytimes.com/). 

Create a `.env` file in the root directory and add your API key:

```
VITE_NYT_API_KEY=your_api_key_here
```

## Available Scripts

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm run preview`: Preview the production build locally.


## License

This project is licensed under the MIT License.

## Acknowledgements

- [New York Times Books API](https://developer.nytimes.com/docs/books-product/1/overview)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
