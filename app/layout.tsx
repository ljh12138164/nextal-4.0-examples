import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { GitHubIcon } from 'nextra/icons';
import { getPageMap } from 'nextra/page-map';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  // add title
  title: 'nextra4.0-example',
  // add description
  description: 'a example of nextra4.0',
  // add keywords
  keywords: ['nextra', 'nextra4.0', 'example'],
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};
// set viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 10,
  minimumScale: 1,
};
const navbar = (
  <Navbar
    projectIcon={
      <GitHubIcon aria-label="点击查看项目地址" style={{ width: '1.5rem', height: '1.5rem' }} />
    }
    projectLink="https://github.com/ljh12138164"
    logo={<b>nextra4.0-example</b>}
  // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © nextra4.0-example.</Footer>;

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="zh-CN"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          feedback={{
            content: null,
            labels: undefined,
          }}
          editLink={null}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ljh12138164/nextra4.0-example"
          footer={footer}
          navigation={{
            next: false,
            prev: false,
          }}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
