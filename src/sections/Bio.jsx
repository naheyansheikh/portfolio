import { Linkedin, AtSign, GitBranch } from "lucide-react";
import { GitHub } from 'react-feather';

const Bio = () => {
    return (
        <section className="bg-subparts text-cetner md:text-left rounded-xl p-2 md:p-5 shadow-md">
            <img src="/profile-pic.jpg" alt = "profile picture" className="h-32 w-32 rounded-full mx-auto md:mx-0" />
            <h1 className="text-lg md:text-2xl font-bold mt-3 text-fontblue">naheyan sheikh</h1>
            <p className="text-secondary-foreground py-2">computer science student at ubc</p>
            <div className="flex flex-row justify-center md:justify-start gap-2 mt-2">
                <a href="https://www.linkedin.com/in/naheyan-sheikh-6719b6243" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                </a>
                <a href="mailto:naheyans1@gmail.com" target="_blank" rel="noopener noreferrer">
                    <AtSign className="text-pink-400 hover:text-pink-500 cursor-pointer" />
                </a>
                <a href="https://github.com/naheyansheikh" target="_blank" rel="noopener noreferrer">
                    <GitHub className="text-purple-400 hover:text-purple-500 cursor-pointer" />
                </a>
            </div>
        </section>
    );
};

export default Bio;