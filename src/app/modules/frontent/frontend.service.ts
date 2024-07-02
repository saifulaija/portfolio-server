import { TFrontend } from "./frontend.interface";
import { Frontend } from "./frontend.model";



const createFrontendIntoDB = async (payload: TFrontend) => {
  const result = await Frontend.create(payload);
  return result;
};

const getAllFrontend = async () => {
  const result = await Frontend.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleFrontend = async (id: string) => {
  const result = await Frontend.findById(id);
  return result;
};

const deleteFrontend=async(id:string)=>{
    const result =await Frontend.findByIdAndDelete(id);
    return result

}

const updateFrontend = async (id: string, payload: Partial<TFrontend>) => {
    const result = await Frontend.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    return result;
  };
export const FrontendServices = {
createFrontendIntoDB,
getSingleFrontend,
getAllFrontend,
deleteFrontend,
updateFrontend
};
