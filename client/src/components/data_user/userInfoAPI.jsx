// @ Component hiển thị thông tin 15 trường thông tin chủ thẻ , nhận qua API
// import getDataApi from "../../config/getDataApi";

// const UserInfo = () => {
//   const data = getDataApi("http://localhost:5000/api/datacard");
//   const dataCard = data?.data;
//   const optionalDetailsUser = dataCard?.optionalDetails;
//   return (
//     <div>
//       {optionalDetailsUser && (
//         <div>
//           <table className="table-numberuto">
//             <thead>
//               <tr>
//                 <th>STT</th>
//                 <th>Trường Thông Tin</th>
//                 <th>Giá Trị</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="table-number">1</td>
//                 <td className="table-info">Số CCCD</td>
//                 <td className="table-value">
//                   {optionalDetailsUser.personalNumber}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="table-number">2</td>
//                 <td>Họ và Tên</td>
//                 <td>{optionalDetailsUser.fullName}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">3</td>
//                 <td>Ngày Sinh</td>
//                 <td>{optionalDetailsUser.birthDate}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">4</td>
//                 <td>Giới Tính</td>
//                 <td>{optionalDetailsUser.gender}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">5</td>
//                 <td>Quốc Tịch</td>
//                 <td>{optionalDetailsUser.nationality}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">6</td>
//                 <td>Dân Tộc</td>
//                 <td>{optionalDetailsUser.ethnic}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">7</td>
//                 <td>Tôn Giáo</td>
//                 <td>{optionalDetailsUser.religion}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">8</td>
//                 <td>Nguyên Quán</td>
//                 <td>{optionalDetailsUser.placeOfOrigin}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">9</td>
//                 <td>Thường Trú</td>
//                 <td>{optionalDetailsUser.placeOfResidence}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">10</td>
//                 <td>Nhận Dạng Cá Nhân</td>
//                 <td>{optionalDetailsUser.personalIdentification}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">11</td>
//                 <td>Ngày Cấp</td>
//                 <td>{optionalDetailsUser.issuanceDate}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">12</td>
//                 <td>Ngày Hết Hạn</td>
//                 <td>{optionalDetailsUser.expiryDate}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">13</td>
//                 <td>Số Căn Cước Cũ</td>
//                 <td>{optionalDetailsUser.idDocument}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">14</td>
//                 <td>Họ tên Cha, Mẹ</td>
//                 <td>{optionalDetailsUser.fullNameOfParents}</td>
//               </tr>
//               <tr>
//                 <td className="table-number">15</td>
//                 <td>Họ tên Vợ, Chồng</td>
//                 <td>{optionalDetailsUser.fullNameOfSpouse}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;
