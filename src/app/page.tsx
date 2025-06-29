'use client';

import { redirect } from "next/navigation";
export default function Home() {
  redirect("/en/page"); // 直接跳转，页面不渲染

}
