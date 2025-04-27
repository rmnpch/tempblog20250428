const comments = [
    {
        id: 1,
        postId: 1,
        author: "New Learner",
        content: "This was really helpful for getting started! Could you explain more about EJS partials?",
        date: new Date("2025-01-16")
    },
    {
        id: 2,
        postId: 1,
        author: "Code Explorer",
        content: "Great introduction! I'm curious about performance considerations when using EJS vs other templating engines.",
        date: new Date("2025-01-17")
    },
    {
        id: 3,
        postId: 2,
        author: "Frontend Dev",
        content: "I've been using Flexbox for everything, but this convinced me to give Grid a try. Thanks!",
        date: new Date("2025-02-04")
    },
    {
        id: 4,
        postId: 3,
        author: "API Enthusiast",
        content: "The async/await examples really cleared up my confusion. Would love to see a follow-up on error handling.",
        date: new Date("2025-02-19")
    },
    {
        id: 5,
        postId: 5,
        author: "Docker Newbie",
        content: "I followed along and got my app containerized! One question: how do you handle environment variables in this setup?",
        date: new Date("2025-03-21")
    },
    {
        id: 6,
        postId: 5,
        author: "Cloud Architect",
        content: "Nice article. For production environments, I'd recommend adding information about Docker Compose and orchestration.",
        date: new Date("2025-03-22")
    },
    {
        id: 7,
        postId: 1,
        author: "Template Master",
        content: "I've been using EJS for years and still learned something new. Great explanation of the syntax!",
        date: new Date("2025-01-20")
    }
];

module.exports = comments;
