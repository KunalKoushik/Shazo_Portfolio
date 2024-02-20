import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
// const BASE_URL = "http://localhost:4000/api/v1/"
const BASE_URL = process.env.REACT_APP_BASE_URL


// AUTH ENDPOINTS
export const mailpoint = {
  // SENDMAIL_API : "https://portfolio-backend-an8n.onrender.com/api/v1/mail"
  SENDMAIL_API : BASE_URL+"/mail",
}



export function sendmail(email, firstname, lastname, message, phoneNo, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", mailpoint.SENDMAIL_API, {
        email, firstname, lastname, message, phoneNo
      })
      console.log("SENDMAIL API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Mail Sent Successfully")
      navigate("/Completion")
    } catch (error) {
      console.log("SENDMAIL API ERROR............", error)
      toast.error("Could Not Send MAIL")
    }
  }
}