import { TTools } from "./tools.interface";
import { Tools } from "./tools.model";




const createToolsIntoDB = async (payload: TTools) => {
  const result = await Tools.create(payload);
  return result;
};

const getAllTools = async () => {
  const result = await Tools.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleTools = async (id: string) => {
  const result = await Tools.findById(id);
  return result;
};

const deleteTools=async(id:string)=>{
    const result =await Tools.findByIdAndDelete(id);
    return result

}

const updateTools = async (id: string, payload: Partial<TTools>) => {
    const result = await Tools.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    return result;
  };
export const ToolsServices = {
createToolsIntoDB,
getSingleTools,
getAllTools,
deleteTools,
updateTools
};
