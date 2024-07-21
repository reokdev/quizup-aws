# AWS Cloud Practitioner Quiz App

## Overview

This application is an interactive quiz designed to help users prepare for the AWS Certified Cloud Practitioner exam. It provides a user-friendly interface for practicing exam-style questions, with immediate feedback and explanations.

## Features

- Randomized quiz questions
- Immediate feedback on answers
- Detailed explanations for each question
- Responsive design for mobile and desktop
- Confetti animation for correct answers
- Score tracking
- Option to retake the quiz

## Tech Stack

- **Frontend**: React.js
- **UI Framework**: Chakra UI
- **State Management**: React Hooks
- **Styling**: CSS-in-JS (Chakra UI)
- **Animation**: react-confetti-explosion
- **Hosting & CI/CD**: AWS Amplify

## Data Source

The quiz questions (`quizData`) are sourced from [insert source here, e.g., "official AWS documentation", "a curated list by certified professionals", etc.]. These questions are designed to mimic the style and content of the actual AWS Certified Cloud Practitioner exam.

## CI/CD with AWS Amplify

This project uses AWS Amplify for continuous integration and continuous deployment:

1. Code is pushed to the main branch of the GitHub repository
2. AWS Amplify automatically detects the push and initiates a new build
3. The application is built and tested in a controlled environment
4. If all tests pass, the new version is automatically deployed to production
5. The live application is updated with zero downtime

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install` or `yarn install`
3. Start the development server with `npm start` or `yarn start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Screenshots

![Home Screen](https://i.postimg.cc/5NXQPcMH/home-screen.png)
*Home Screen*

![Quiz Question](https://i.postimg.cc/rwW0kSsM/quiz-question.png)
*Quiz Question Example*

![Results Screen](https://i.postimg.cc/Pr0p96tS/results-screen.png)
*Results Screen*

## Video Demonstration

Check out this short video demonstrating the confetti explosion on a correct answer:

https://vimeo.com/987929816?share=copy

*Confetti explosion on correct answer*

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.