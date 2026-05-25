import { APIResponse } from "./models"

export const getPack = async (): Promise<APIResponse> => {
  const response = await fetch("http://localhost:3000/api/pack")
  const json = await response.json() as APIResponse

  return json
}