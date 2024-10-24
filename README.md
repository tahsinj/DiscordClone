[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HWOPiRJG)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16752897)

# The Project

The project provides you an opportunity to build upon the foundational knowledge acquired in this course. It is designed to help you develop an advanced understanding of software engineering principles, tools, and techniques using structured requirements gathering and analysis, software development process, design patterns, software architecture, and software testing.  You will also need to consider your development methodology (don’t use waterfall), software metrics, and software quality assurance.

As a team, you will select a project, develop a set of requirements, conduct a formal analysis of the project, develop an architecture, and then using TDD and an Agile workflow, iterate and develop your projects.  During your project, you MUST consider design patterns and anti-patterns, TDD, dockerization, and CI/CD.  The goal is not necessarily to build a complex system, but to practice and become comfortable with the techniques, be able to analyze and decompose a problem, and incrementally develop and deploy a solution using a branching workflow.  The systems needs to be properly planned, analyzed, modelled and implement.   

Internally, within your team, you are free to manage efforts and tasks with the understanding that everyone is expected to contribute equally in some fashion.  During the project, you will have the chance to confidentially conduct peer reviews using the credit-earned model (see document on Canvas regarding this) at a number of key points.   Your individual project grade will be impacted using the results of the peer evaluation.   The key point is that if you don’t contribute to the project, your mark will reflect this.  This will be discussed in class.

**You must have:**

* Unit tests and integration tests to ensure code quality and functionality
* A CI to automatically test
* Set of user requirements, identified user groups, and developed use-cases
* Identified what design patterns you are using and describe why
* Dockerized deployment
* Continual and ongoing work using TDD 
* A team between 3-5 people (no more, no less) - target for 4

**Stretch goals:**

* CD pipeline to deploy changes to the codebase
  
## Project Goals:

* To deepen the students' understanding of software engineering principles, tools, and techniques.
* To enable students to apply software engineering principles, tools, and techniques to the development of complex software systems.
* To introduce students to agile development methodologies, software metrics, and software quality assurance.
* To foster collaboration and teamwork among students in the development of software systems.

The goal is to be able to build good code quickly (using the proper processes).  Remember: **Perfect is the enemy of good**

Build incrementally with this in mind, making small and incremental improvements.   

## Project Objectives:

By the end of this project, students will be able to:

* Apply the software development process model, to the development of a software system
* Design software systems using appropriate design patterns and principles
* Develop software architectures for complex software systems
* Use software testing techniques to ensure the quality of software systems
* Apply agile development methodologies to the development of software systems
* Apply software metrics to evaluate the quality of software systems
* Develop software quality assurance plans to ensure the quality of software systems
* Apply and develop a CI/CD pipeline for automated testing and deployment
* Utilize dockerization to containerize your application
* Work collaboratively in teams to develop software systems

**Peer Evaluation:** see [Peer Evaluation](https://canvas.ubc.ca/courses/150415/pages/peer-evaluation?wrap=1)

## Evaluation: 

See Canvas for [details](https://canvas.ubc.ca/courses/150415/pages/the-project).

## The Projects (all are web apps):

**Your team MUST select one of the these projects.**  Please take the time to review the details for each.

**Todo App:**  Develop a basic to-do list app that allows users to manage tasks. Users can add, edit, delete tasks, and organize them by categories or due dates.  Users will also be able to share (view/edit) with other users.  The system needs to allow tasks to be organized into custom categories (e.g., Work, Personal) as well as support optional due dates with simple reminders or alerts.  Users will be able to ssign priority to tasks (e.g., High, Medium, Low) as well as view tasks based on categories, priorities, or due dates.  The platform should incorporate the Command Pattern to implement undo and redo functionalities for task actions, the Observer Pattern to update task lists dynamically when changes occur and the Strategy Pattern for sorting algorithms based on different criteria. Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

**Flashcard Study App:**  Create a simple flashcard application that allows users to create, edit, and review flashcards for studying. The app supports text-based cards and simple categorization into decks.  With the online system,  users will be able to create and organize flashcards into decks by subject or topic.  They will be able to create flashcards but adding questions and answers to flashcards.   The system will have a study mode that will allow flashcards to be reviewed in order or in a randomized fashion.   The system will also allow for progress tracking, allowing users to  mark flashcards as known or unknown so progress can be tracked.  Users will also allow their flashcards to be shared with other users or publicly as well as having the ability to share decks with others via simple file formats.  The platform should incorporate the Factory Pattern for creating different types of flashcards or decks, the Iterator Pattern to  navigate through flashcards efficiently and the Singleton Pattern to manage user settings or session data.  Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

**Weather Forecast Application:** Build a simple application that displays current weather information and a 5-day forecast for a user-selected location using a public weather API.  Users will need to create an account so they can access and edit  their dashboard as well as being able to share it with other users.  The system must support location search where users can search for weather information by city name as well as display the current weather showing temperature, weather conditions, and an icon representing the weather (with the user being able to select formats/options for how data is displayed).  The system will also show a 5-day forecast which will display basic forecast information for the next five days.  Users will also be able to save favourite locations for quick access on their dashboard as well as being able to save and share with other users.   The platform should incorporate the Adapter Pattern to interface with the external weather API. the Singleton Pattern to  manage a single instance of the API client and the Facade Pattern to simplify the interface for fetching and displaying weather data.   Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

**Discord Clone:** This project involves the development of a web-based platform for online communication and collaboration, similar to the popular chat app, Discord. The platform should incorporate the Observer design pattern to notify users of new messages, and the Mediator design pattern to manage communication between users and channels. The platform should also implement the Singleton design pattern to ensure that only one instance of the chat server is running at any given time, and the Command design pattern to enable users to execute commands (e.g. change username, join channel). Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

## Statement on the Use of GitHub Copilot and Generative AI Tools

Students are permitted and encouraged to utilize AI-powered tools such as GitHub Copilot and other generative AI assistants for coding, user interface (UI), and user experience (UX) design aspects of their projects. These tools can serve as valuable resources to enhance productivity, inspire creativity, and assist in overcoming technical challenges.  The focus of the project is to develop and improve skills surrounding the process of developing software BUT the team must observe the process and work in an iterative fashion using TDD.  

Please see further detals on Canvas in for [Guidelines for Responsible Use](https://canvas.ubc.ca/courses/150415/pages/the-project)
