import { TBackend } from "./backend.interface";
import { Backend } from "./backend.model";




const createBackendIntoDB = async (payload: TBackend) => {
  const result = await Backend.create(payload);
  return result;
};

const getAllBackend = async () => {
  const result = await Backend.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleBackend = async (id: string) => {
  const result = await Backend.findById(id);
  return result;
};

const deleteBackend=async(id:string)=>{
    const result =await Backend.findByIdAndDelete(id);
    return result

}

const updateBackend = async (id: string, payload: Partial<TBackend>) => {
    const result = await Backend.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    return result;
  };
export const BackendServices = {
createBackendIntoDB,
getSingleBackend,
getAllBackend,
deleteBackend,
updateBackend
};
