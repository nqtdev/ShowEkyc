//@ Gửi data lên Client qua WebSocket
const WebSocket = require("ws");
const dotenv = require("dotenv");
// Kết nối đến WebSocket server thiết bị đọc
dotenv.config();
const wsUrl = process.env.WS_URL;
const sourceSocket = new WebSocket(wsUrl, {
  rejectUnauthorized: false, // Bỏ qua kiểm tra chứng chỉ (chỉ dùng trong phát triển)
});
// Tạo WebSocket server để client kết nối
const server = new WebSocket.Server({ port: 8080 });
// Xử lý khi nhận được message từ server nguồn
sourceSocket.on("message", (data) => {
  try {
    const jsonData = JSON.parse(data);
    // Gửi dữ liệu JSON tới tất cả các client đang kết nối
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(jsonData));
      }
    });
  } catch (error) {
    console.error("Lỗi :", error);
  }
});

// Xử lý khi có lỗi kết nối tới server nguồn
sourceSocket.on("error", (error) => {
  console.error("Lỗi kết nối tới server nguồn:", error);
});

// Xử lý khi có client kết nối
server.on("connection", (client) => {
  console.log("Client kết nối thành công");
  // Xử lý khi client ngắt kết nối
  client.on("close", () => {
    console.log("Client ngắt kết nối");
  });
});

console.log("WebSocket server đang chạy trên ws://localhost:8080");
