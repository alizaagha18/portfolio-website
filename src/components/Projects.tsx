import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img: "/todo.png",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
        img: "/timer.png",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/resume.png",
        tags: ["HTML", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Simple calculator",
        desc: "A basic HTML, CSS and Typescript based calculator",
        img: "/calc.png",
        tags: ["HTML", "CSS", "Node", "Typescript"],
    },
    {
        id: 4,
        title: "16-bit CPU",
        desc: "A 16-bit native word size CPU with a 32-bit instruction size. It has a custom single cycle RISC Load-Store architecture, separate instruction and data memory, and supports programming via direct memory modification",
        img: "/cpu.png",
        tags: ["logism", "hardware"],
    }
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
     <Heading title='My Projects'/>
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}</div> 
    </div>
  )
}
export default Projects
