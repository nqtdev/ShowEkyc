// @ Hàm lấy data từ backend -> Trao đổi qua API
// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetchData = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         setData(response.data.data);
//       } catch (error) {
//         console.error("Lỗi:", error); // Ghi lỗi vào console
//         setError(error);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, error };
// };

// export default useFetchData;
