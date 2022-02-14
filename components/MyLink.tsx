import * as React from 'react';
import Link from "next/link"

type Props = {
    children: React.ReactNode
    href: string | URL
    as?: string
}

/**
 * emotionと共存させるために常にpassHrefを指定させたLinkラッパー
 * https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
 * @param props
 */
const MyLink: React.FC = (props: Props) => {
    return (
        <Link href={props.href} as={props.as} passHref>
            {props.children}
        </Link>
    )
}

export default MyLink;
