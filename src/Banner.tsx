import React from "react"
import styled from "styled-components"
import { BsHeartFill } from "react-icons/bs"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    background-color: #101010;
    padding: 20px;
    color: white;

    a {
        color: inherit;
    }
`

const Link: React.FC<{ href: string }> = ({ href, children = "here" }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
)

export const TopBanner: React.FC = () => {
    // if (!process.env.REACT_APP_NETLIFY) return null

    return (
        <Container style={{ flexDirection: "row" }}>
            Built with&nbsp;
            <BsHeartFill fill="#da3084" style={{ margin: "0 10px" }} /> in
            beautiful Cape Town by&nbsp;
            <Link href="https://twitter.com/jacques_codes">@jacques_codes</Link>
        </Container>
    )
}
