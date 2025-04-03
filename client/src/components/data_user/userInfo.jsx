import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const UserInfo = () => {
  const dataGet = useContext(WebSocketContext);
  const [infoUser, setInfoUser] = useState(null);

  useEffect(() => {
    if (dataGet?.cmdType === "SendInfoDetails") {
      setInfoUser(dataGet.data.optionalDetails || {});
    }
  }, [dataGet]);

  const fields = [
    { label: "Số CCCD", key: "personalNumber" },
    { label: "Họ và Tên", key: "fullName" },
    { label: "Ngày Sinh", key: "birthDate" },
    { label: "Giới Tính", key: "gender" },
    { label: "Quốc Tịch", key: "nationality" },
    { label: "Dân Tộc", key: "ethnic" },
    { label: "Tôn Giáo", key: "religion" },
    { label: "Nguyên Quán", key: "placeOfOrigin" },
    { label: "Thường Trú", key: "placeOfResidence" },
    { label: "Nhận Dạng Cá Nhân", key: "personalIdentification" },
    { label: "Ngày Cấp", key: "issuanceDate" },
    { label: "Ngày Hết Hạn", key: "expiryDate" },
    { label: "Số Căn Cước Cũ", key: "idDocument" },
    { label: "Họ tên Cha, Mẹ", key: "fullNameOfParents" },
    { label: "Họ tên Vợ, Chồng", key: "fullNameOfSpouse" },
  ];

  return (
    <div>
      <table className="w-full ">
        <thead>
          <tr>
            <th className="border w-1/12  border-gray-300 text-blue-600 font-semibold">
              STT
            </th>
            <th className="border w-1/3  border-gray-300 px-4 py-2 text-blue-600 font-semibold">
              Trường Thông Tin
            </th>
            <th className="border w-max border-gray-300 px-4 py-2 text-blue-600 font-semibold">
              Giá Trị
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr
              key={field.key}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-gray-300 px-2 py-1 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {field.label}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {infoUser?.[field.key] || "..."}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
