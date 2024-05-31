import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SVUIT-InternPrep",
  description:
    "Một website giúp các bạn sinh viên IT viết và kiểm tra CV, tham khảo các câu hỏi phỏng vấn từ những anh chị đi trước. Qua đó, có thể chuẩn bị tốt hơn cho quá trình đi thực tập của mình",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
