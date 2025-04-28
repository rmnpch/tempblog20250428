const posts = [
  {
    title: "Getting Started with Express and EJS",
    content:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. In this post, we'll explore how to integrate these technologies to build dynamic web applications.",
    authorId: 1,
    tags: ["express", "nodejs", "ejs", "webdev"],
  },
  {
    title: "CSS Grid Layout: A Complete Guide",
    content:
      "CSS Grid Layout is a two-dimensional layout system designed for user interface design. In this comprehensive guide, we'll dive deep into Grid's capabilities and show you practical examples of responsive layouts that you can implement in your projects.",
    authorId: 2,
    tags: ["css", "frontend", "webdesign", "responsive"],
  },
  {
    title: "Working with APIs in JavaScript",
    content:
      "Modern web applications frequently need to communicate with external services. This post examines different approaches to working with APIs in JavaScript, including fetch, axios, and async/await patterns.",
    authorId: 3,
    tags: ["javascript", "api", "frontend", "async"],
  },
  {
    title: "Introduction to Database Normalization",
    content:
      "Database normalization is the process of structuring a database to reduce data redundancy and improve data integrity. This post introduces the concept of normalization and walks through the first three normal forms with practical examples.",
    authorId: 4,
    tags: ["database", "sql", "programming", "backend"],
  },
  {
    title: "Deploying Node.js Applications with Docker",
    content:
      "Containerization has revolutionized application deployment. In this tutorial, we'll learn how to containerize a Node.js application using Docker, making it easier to deploy consistently across different environments.",
    authorId: 5,
    tags: ["nodejs", "docker", "devops", "deployment"],
  },
];

module.exports = posts;
