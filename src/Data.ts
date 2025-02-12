import smartBanking from "./assets/images/smart-banking.svg";
import facebook from "./assets/icons/facebook.svg";
import linkedin from "./assets/icons/linkedin.svg";
import twitter from "./assets/icons/x.svg";
import instagram from "./assets/icons/instagram.svg";
import { ButtonType, EmailTemplateType } from "./types";

export const emailBodyData: EmailTemplateType = {
  recipientName: "Joshua",
  emailImage: smartBanking,
  body: [
    "We regret to inform you that your callback request has been declined as it is stale. This means the request has either expired due to exceeding the processing timeframe or is no longer valid because the details have changed or are outdated.",
    "If you still require assistance, please submit a new callback request or contact our support team.",
  ],
};
export const buttonData:ButtonType = {
    text:"Reshedule Callback",
    onReshedule:()=>console.log('Reshedule Callback')
}
export const companySocials=[
    {
        id:1,
        name:"Facebook",
        link:"https://www.facebook.com/profile.php?id=100064198087840",
        icon:facebook
    },
    {
        id:1,
        name:"LinkedIn",
        link:"https://www.linkedin.com/company/sawport",
        icon:linkedin
    },
    {
        id:3,
        name:"X",
        link:"https://x.com/SawportInc",
        icon:twitter
    },
    {
        id:4,
        name:"Instagram",
        link:"https://www.instagram.com/sawport/",
        icon:instagram
    }
]

