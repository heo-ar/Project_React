import { useEffect, useState } from "react";
import { getInquiryList } from "../service/inquiry";
import InquiryListCom from "../components/InquiryListCom";

const InquiryListCon = () => {
const [inquiries, setInquiries] = useState([]);

useEffect(() => {
  setInquiries(getInquiryList()); // 더미 데이터 가져오기
}, []);

return <
    InquiryListCom inquiries={inquiries} />;
};

export default InquiryListCon;
