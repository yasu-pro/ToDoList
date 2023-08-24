import React from "react";
import Head from 'next/head';


const siteTitle = 'ToDoリスト';

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="ToDoリスト アプリ"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <main>{children}</main>
        </div>
    );
}
export default Layout;
