// @ Component hiển thị thông tin 15 trường thông tin chủ thẻ , nhận data qua WS
import { useContext } from "react";
import { WebSocketContext } from "../../config/webSocketContext";

const UserInfo = () => {
  const data = useContext(WebSocketContext);
  return (
    <div>
      <div>
        <table className="styleTable">
          <thead>
            <tr>
              <th className="rowNumber !text-center">STT</th>
              <th className="rowKey !text-center">Trường Thông Tin</th>
              <th className="rowValue !text-center ">Giá Trị</th>
            </tr>
          </thead>
          <tbody>
            <tr className="styleTableRow ">
              <td className="rowNumber">1</td>
              <td className="rowKey">Số CCCD</td>
              <td className="rowValue">
                {data ? data.optionalDetails.personalNumber : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">2</td>
              <td className="rowKey">Họ và Tên</td>
              <td className="rowValue">
                {data ? data.optionalDetails.fullName : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">3</td>
              <td className="rowKey">Ngày Sinh</td>
              <td className="rowValue">
                {data ? data.optionalDetails.birthDate : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">4</td>
              <td className="rowKey">Giới Tính</td>
              <td className="rowValue">
                {data ? data.optionalDetails.gender : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">5</td>
              <td className="rowKey">Quốc Tịch</td>
              <td className="rowValue">
                {data ? data.optionalDetails.nationality : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">6</td>
              <td className="rowKey">Dân Tộc</td>
              <td className="rowValue">
                {data ? data.optionalDetails.ethnic : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">7</td>
              <td className="rowKey">Tôn Giáo</td>
              <td className="rowValue">
                {data ? data.optionalDetails.religion : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">8</td>
              <td className="rowKey">Nguyên Quán</td>
              <td className="rowValue">
                {data ? data.optionalDetails.placeOfOrigin : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">9</td>
              <td className="rowKey">Thường Trú</td>
              <td className="rowValue">
                {data ? data.optionalDetails.placeOfResidence : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">10</td>
              <td className="rowKey">Nhận Dạng Cá Nhân</td>
              <td className="rowValue">
                {data
                  ? data.optionalDetails.personalIdentification
                  : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">11</td>
              <td className="rowKey">Ngày Cấp</td>
              <td className="rowValue">
                {data ? data.optionalDetails.issuanceDate : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">12</td>
              <td className="rowKey">Ngày Hết Hạn</td>
              <td className="rowValue">
                {data ? data.optionalDetails.expiryDate : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">13</td>
              <td className="rowKey">Số Căn Cước Cũ</td>
              <td className="rowValue">
                {data ? data.optionalDetails.idDocument : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">14</td>
              <td className="rowKey">Họ tên Cha, Mẹ</td>
              <td className="rowValue">
                {data ? data.optionalDetails.fullNameOfParents : `đang tải`}
              </td>
            </tr>
            <tr className="styleTableRow">
              <td className="rowNumber">15</td>
              <td className="rowKey">Họ tên Vợ, Chồng</td>
              <td className="rowValue">
                {data ? data.optionalDetails.fullNameOfSpouse : `đang tải`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
