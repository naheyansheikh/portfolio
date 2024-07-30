import { ChevronRight } from "lucide-react";

const ProjectCard = ({ name, description, url, imgUrl }) => {
    return (
        <a className="flex border-b border-fontblue py-8 px-2 rounded-md gap-4 mt-1" href={url}>
            <img src={imgUrl}
                alt={name}
                height="70"
                width="70"
                className="object-contain" />
            <div className="flex flex-col flex-grow">
                <p className="text-fontblue group-hover/item:text-fontblue text-xl font-semibold">{name}</p>
                <p className="text-secondary-foreground">{description}</p>
            </div>
            <div>
                <ChevronRight className="text-fontblue hover:text-fontblue cursor-pointer" />
            </div>
        </a>
    );
};

export default ProjectCard;