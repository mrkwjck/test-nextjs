import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import Head from "next/head";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact page</title>
            </Head>
            <main>
                <h1>Contact page</h1>
                <NavigationBar />
            </main>
        </>
    )
}