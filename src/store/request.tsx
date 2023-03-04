import axios from "axios";

// requests
export default function request(
  endpoint: string,
  method: string,
  payloadType: "params" | "data",
  payload: any = {}
): any {
  const req: any = {
    method,
    url: `${process.env.NEXT_PUBLIC_API_PATH}/${endpoint}`,
  };

  if (payloadType === "params") {
    req.params = payload;
  } else {
    req.data = payload;
  }

  return axios
    .request(req)
    .then((response: any) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
