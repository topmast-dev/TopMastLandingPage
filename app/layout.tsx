import './globals.css';
import styles from './page.module.css';
import Nav from './nav';

export const metadata = {
  title: 'TopMast - Docker Extension',
  description: 'Enhance your Docker development experience with TopMast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={styles.main}>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
