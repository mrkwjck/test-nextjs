import { useRouter } from "next/router";

export default function IndexPage() {
    const router = useRouter()
    const { page } = router.query
    return (
        <h1>Dynamic page: {page}</h1>
    )
}