# Percucello Website

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Deployment](#deployment)
- [Contact](#contact)

## Project Description
The Percucello Website is a custom-built platform for Jesús Vasquez, professionally known as Percucello. This website serves as a digital showcase for his musical career as a cellist, cultural manager, teacher, and conductor. It aims to provide visitors with a comprehensive view of his work, projects, and performances through an elegant and user-friendly interface, highlighting his diverse roles in the music industry.

## Features
- Portfolio showcase of musical projects and performances
- Sections dedicated to his roles as a cellist, cultural manager, teacher, and conductor
- Integration with YouTube for video content
- Responsive design for optimal viewing on various devices
- Dynamic content management for easy updates
- Serverless architecture for scalability and cost-effectiveness

## Technologies Used
- **Frontend**:
  - React.js: Chosen for its component-based architecture and efficient rendering
  - CSS3: For styling, with potential use of Sass for more maintainable stylesheets
- **Backend**:
  - AWS S3: For cost-effective storage of static assets
  - AWS Lambda: Enables serverless architecture for backend logic
  - PostgreSQL: Provides a robust solution for storing and querying dynamic content
- **APIs**:
  - YouTube API: For seamless integration of video content
- **Version Control**: 
  - Git: Ensures efficient collaboration and version tracking

## Project Structure

```
percucello/
│
├── src/                    # React application source files
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-specific components
│   ├── styles/             # CSS or Sass files
│   ├── utils/              # Utility functions and helpers
│   ├── App.js              # Main React component
│   └── index.js            # Entry point for React app
│
├── public/                 # Public assets
│   ├── index.html          # HTML template
│   └── favicon.ico         # Website favicon
│
├── lambda/                 # AWS Lambda functions
│   ├── getProjects/        # Lambda function for fetching projects
│   └── updateContent/      # Lambda function for updating content
│
├── db/                     # Database-related files
│   ├── migrations/         # Database migration scripts
│   └── schema.sql          # Database schema
│
├── scripts/                # Build and deployment scripts
│
├── tests/                  # Test files
│   ├── unit/               # Unit tests
│   └── integration/        # Integration tests
│
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore file
├── package.json            # NPM package file
├── README.md               # This file
└── serverless.yml          # Serverless framework configuration (if used)
```

## Getting Started

### Prerequisites
- Node.js (v14)
- AWS CLI
- PostgreSQL (v12)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/frpalmap/percucello.git
   cd percucello
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up AWS CLI:
   ```bash
   aws configure
   ```

4. Set up PostgreSQL database:
   ```bash
   psql -c "CREATE DATABASE percucello;"
   ```

5. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your specific configuration

6. Deploy Lambda functions (if applicable):
   ```bash
   # Instructions for deploying Lambda functions will be added here
   ```

7. Start the development server:
   ```bash
   npm start
   ```

## Usage
After installation, the website will be available at `http://localhost:3000` in development mode.

## Development
- The `src/` directory contains the React components and related frontend code.
- Backend Lambda functions are located in the `lambda/` directory.
- Database schema and migrations can be found in the `db/` directory.

## Deployment
Instructions for deploying to production will be added here. This will include steps for:
- Building the React application
- Deploying to AWS S3
- Setting up CloudFront (if used)
- Deploying Lambda functions
- Configuring the production database

## Contributing
We welcome contributions to the Percucello Website project. Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
Jesús Vasquez (Percucello) - [contact@percucello.com](mailto:contact@percucello.com)
Fidel Palma (Palmaf) - [webmaster@percucello.com](mailto:webmaster@percucello.com)

Project Link: [https://github.com/frpalmap/percucello](https://github.com/username/percucello)
