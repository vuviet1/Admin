import * as request from "utils/request";

export const show = async () => {
  try {
    const res = await request.get("/Payment");
    // console.log(res);
    return res; 
  } catch (error) {
    console.log(error);
  }
};

export const add = async () => {
  try {
    const res = await request.post("/Payment");
    return res;
  } catch (error) {
    
  }
}
