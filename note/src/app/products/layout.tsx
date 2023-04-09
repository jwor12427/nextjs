import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품을 판매하는 사이트 | 전체 제품 확인",
  description: "제품을 확인 해 보세요",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/products/women">여성옷</Link>
          <Link href="/products/man">남성옷</Link>
        </nav>
      </div>
      <section className={styles.product}>{children}</section>
    </>
  );
}
