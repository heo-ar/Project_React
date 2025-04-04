
const InquiryListCom = ({ inquiries }) => {
    return (
        <div>
        <h2>문의사항 목록</h2>
        <table border="1">
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>상태</th>
            </tr>
            </thead>
            <tbody>
            {inquiries.map((inquiry) => (
                <tr key={inquiry.id}>
                <td>{inquiry.id}</td>
                <td>{inquiry.title}</td>
                <td>{inquiry.author}</td>
                <td>{inquiry.date}</td>
                <td>{inquiry.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

export default InquiryListCom;
