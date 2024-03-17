import Head from 'next/head'
import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import { GetServerSidePropsContext } from "next";

type HomePageProps = {
    posts: [{id: number, title: string}]
}

export default function HomePage(props: HomePageProps) {
    const { posts } = props
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta name="description" content="Test NextJs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1>Home page</h1>
                <NavigationBar />
                <ul>
                    {posts.map((post) => (
                        <li key={"post-" + post.id}>{post.title}</li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return  {
        props: {
            posts: [
                {id: 1, title: "Post 1"},
                {id: 2, title: "Post 2"},
                {id: 3, title: "Post 3"},
            ]
        }
    }
}
