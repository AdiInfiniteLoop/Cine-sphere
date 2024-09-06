# CineSphere

A responsive web application built with Next.js that allows users to search for movies and view detailed information using the OMDb API. The application features a clean and responsive design, focusing on usability and performance.

## Table of Contents
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Future Development](#future-development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About The Project
Cine Sphere is a movie search application that leverages the OMDb API (Open Movie Database) to fetch movie data. Users can search for movies and view detailed information such as the release year, genre, and plot. The design is fully responsive, providing a seamless experience across all devices.

## Built With
- **Next.js** - The React framework for server-side rendering and static site generation.
- **Tailwind CSS** - A utility-first CSS framework for designing the application.
- **OMDb API** - API used for fetching movie information.
- **Framer Motion** - Library used for animations and transitions.

## Getting Started

### Prerequisites
To run this project locally, you need to have the following tools installed:
- **Node.js** (v12 or higher)
- **npm** (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AdiInfiniteLoop/Cine-sphere
    cd Cine-sphere
    ```

2. Install the required NPM packages:
    ```bash
    npm install
    ```

3. Set up your OMDb API key:
   - Create a `.env.local` file in the root directory and add your OMDb API key:
     ```
     NEXT_PUBLIC_API_KEY = your_api_key_here
     ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.


## Directory Structure
![CineSphere](./public/DirStruct)


## Usage
Once the application is running, you can:
- Search for movies using the search bar.
- View detailed information for any movie, including its plot, release year, and genre.

## Future Development
- **Multilingual Support**: Adding support for multiple languages to cater to a global audience using next-i18next.
- **SEO Improvements**: Further optimizing the application for search engines to increase visibility.
- **Movie Recommendation System**: Implementing a recommendation engine using vector embeddings to provide personalized movie suggestions.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request. If we find it up to the mark we will get it merged for sure.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Aditya Pradhan - [adityapradhanofficial1712@gmail.com](mailto:adityapradhanofficial1712@gmail.com)

Project Link: [https://github.com/AdiInfiniteLoop/Cine-sphere](https://github.com/AdiInfiniteLoop/Cine-sphere)

## Acknowledgments
- [OMDb API](http://www.omdbapi.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
