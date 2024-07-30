import Tag from "../components/Tag";

const skills = [
    "Java",
    "Python",
    "C/C++",
    "MySQL",
    "JavaScript",
    "HTML/CSS",
    "R",
    "Typescript",
    "React.js",
    "Node.js",
    "Flask",
    "JUnit",
    "WordPress",
    "Git & GitHub",
    "Google Cloud Platform",
    "VS Code",
    "Visual Studio",
    "IntelliJ",
    "NetBeans",
    "Jupyter",
];

const Skills = () => {
    return (
        <section className="bg-subparts text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
            <h2 className="text-lg md:text-2xl text-fontblue mb-3 font-semibold text-center md:text-left">skills</h2>
            <ul className="flex flex-wrap leading-10">
                {
                    skills.map((skill, index) => (
                        <li key={index} className="mr-2">
                            <Tag name={skill} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills;