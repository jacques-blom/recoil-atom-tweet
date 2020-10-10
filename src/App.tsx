import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"

const Main = styled.div`
    position: relative;
    width: 1033px;
    height: 630px;
    background-image: url("${require("./main.png")}");
    background-size: contain;
`

const Button = styled(motion.div)`
    display: inline-flex;
    background-color: #009ef8;
    padding: 10px 14px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    color: white;
    position: absolute;
    top: 461px;
    left: 687px;
    line-height: 19px;
    cursor: pointer;
    transition: 0.25s background-color ease-in-out;

    :hover {
        background-color: #0076b9;
    }
`

const Highlight = styled(motion.div)`
    position: absolute;
    width: 74px;
    height: 21px;
    background: rgba(255, 230, 0, 0.8);
    border-radius: 6px;
`

const duration = 0.8
const delay = 0.5

const highlightVariants = {
    hidden: {
        opacity: 0,
        scale: 1,
        transition: {
            duration,
        },
    },
    highlight: (i: number) => ({
        opacity: [1, 0],
        scale: [1, 1.3],
        transition: {
            duration,
            delay: i * delay,
        },
    }),
}

const Circle = styled(motion.div)`
    position: absolute;
    width: 25px;
    height: 25px;
    top: 468px;
    left: 726px;
    border-radius: 50%;
    background-color: rgba(255, 230, 0, 0.8);
    pointer-events: none;
`

const Count = styled.div`
    position: absolute;
    background-color: #061626;
    font-size: 22px;
    color: #fff;
    text-align: center;
    width: 13px;
    height: 26px;
`

function App() {
    const [animate, setAnimate] = useState(false)
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Main>
                <Button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setAnimate(true)
                        const countDelay = duration * 2 * 1000
                        setTimeout(() => setCount(1), countDelay)
                    }}
                >
                    Increment
                </Button>
                <Count style={{ top: 462, left: 259 }}>{count}</Count>
                <Count style={{ top: 424, left: 799 }}>{count}</Count>
                <motion.div
                    initial="hidden"
                    animate={animate ? "highlight" : "hidden"}
                    onAnimationComplete={() => {
                        setAnimate(false)
                        setTimeout(() => setCount(0), 800)
                    }}
                >
                    <Circle variants={highlightVariants} custom={0} />
                    <Highlight
                        style={{ top: 198, left: 792, width: 165 }}
                        variants={highlightVariants}
                        custom={1}
                    />
                    <Highlight
                        style={{ top: 109, left: 648 }}
                        variants={highlightVariants}
                        custom={2}
                    />
                    <Highlight
                        style={{ top: 109, left: 204 }}
                        variants={highlightVariants}
                        custom={2}
                    />
                    <Highlight
                        style={{ top: 462, left: 255, width: 23, height: 26 }}
                        variants={highlightVariants}
                        custom={3}
                    />
                    <Highlight
                        style={{ top: 425, left: 794, width: 24, height: 25 }}
                        variants={highlightVariants}
                        custom={3}
                    />
                </motion.div>
            </Main>
        </div>
    )
}

export default App
