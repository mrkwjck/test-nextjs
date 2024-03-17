import Link from "next/link";
import React from "react";
import styles from "./NavigationBar.module.scss"

export function NavigationBar() {
    return (
        <ul className={styles.navigation}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    )
}