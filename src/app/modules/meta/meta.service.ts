
import { Projects } from "../projects/projects.model";
import { Blog } from "../blog/blog.model";
import { Frontend } from "../frontent/frontend.model";
import { Backend } from "../backend/backend.model";
import { Tools } from "../tools/tools.model";

const fetchDashboardMetadata = async () => {
    let metadata;
    metadata = await getAdminDashboardMetadata();
    return metadata;
};

const getAdminDashboardMetadata = async () => {
    const projects = await Projects.countDocuments();
    const blogs = await Blog.countDocuments();
    const frontendSkills = await Frontend.countDocuments();
    const backendSkills = await Backend.countDocuments();
    const toolsSkills= await Tools.countDocuments();

    return {
   projects,
   blogs,
   frontendSkills,
   backendSkills,
   toolsSkills
    };
};

export const metaServices = {
    fetchDashboardMetadata,
};
