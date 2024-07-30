import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        name: "quizcrafter",
        description: "upload your study documents and let AI transform them into interactive quizzes. effortlessly test your knowledge and enhance your learning experience!",
        url: "https://github.com/naheyansheikh/quiz-crafter",
        imgUrl: "/proj-logos/quizcrafter-logo.png",
    },
    {
        name: "receiptify",
        description: "transform your spotify data into personalized, engaging receipt summaries in an aesthetic receipt format to view your listening history!",
        url: "https://github.com/naheyansheikh/receiptify",
        imgUrl: "/proj-logos/receiptify-logo.png"
    },
    {
        name: "heart disease prediction",
        description: "a data analysis project to predict heart disease using machine learning algorithms, leveraging a heart disease dataset",
        url: "https://github.com/naheyansheikh/dsci100project/tree/main",
        imgUrl: "/proj-logos/heartdisease-logo.png",
    }
];

const Projects = () => {
    return <>
        <h1 className="text-4xl text-left font-bold mb-2">recent projects</h1>
        <ul className="bg-subparts text-left rounded-xl p-4 shadow-md">
            {projects.map((project, i) => (
                <li key={i}>
                    <ProjectCard
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        imgUrl={project.imgUrl}
                    />
                </li>
            ))}
        </ul>
    </>;
};

export default Projects;