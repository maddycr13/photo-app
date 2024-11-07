# Photo App
A Next.js application for displaying photos with a custom layout, utilizing local fonts and including unit tests. The project fetches and displays images from an external API (like Flickr) and uses a debounced search input to improve performance.

### Features
- Next.js 13+: Uses the latest version of Next.js with App Router.
- Custom Fonts: Integrates locally hosted custom fonts (Geist Sans and Geist Mono).
- Debounced Search: Implements a custom useDebounce hook to minimize excessive API calls while typing.
- Optimized Images: Uses the Next.js <Image /> component for image optimization.
- Unit Tests: Includes tests for components and custom hooks using Jest and React Testing Library.

### Prerequisites
- Node.js (v16 or higher)
- npm 

### Getting Started

#### Installation

1. Clone the repository:
 `https://github.com/maddycr13/photo-app.git
   cd photo-app `

2. Install dependencies:

     ` npm install `
3. Set up Environment Variables

    Create a .env.local file in the root of the project with the following content, replacing YOUR_FLICKR_API_KEY with your actual Flickr API key: 

   ` NEXT_PUBLIC_FLICKR_API_KEY=YOUR_FLICKR_API_KEY`


### Running the Application

To start the development server, run:

`npm run dev`

Open `http://localhost:3000` to view the app in the browser.

#### Building for Production
To build the application for production, run:

`npm run build`

Then start the production server with:

`npm start `

## Project Structure
- `src/app/layout.tsx`: Root layout for the - app, applying custom fonts and global CSS.
- `src/components/PhotoDisplay.tsx`: Component for displaying photos based on search queries.
- `src/hooks/useDebounce.tsx`: Custom hook to debounce search input.
- `src/styles/globals.css`: Global CSS file for styling.
- `__mocks__/`: Mock setup for testing, including mocks for next/font/local.

## Testing

This project uses Jest and React Testing Library for unit tests.

### Running Tests

To run all test: 
 
 `npm run test` 

### Test Coverate

To test coverage:

`npm run test -- -- coverage`

Coverage reports are generated in the `coverage directory`.

## Environment Variables
Add any required environment variables to `.env.local`. The app currently expects:

`NEXT_PUBLIC_FLICKR_API_KEY: Your Flickr API key for photo fetching`.