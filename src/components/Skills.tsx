import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="fade-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                I bring a strong skill set in web development, design, and project management, with a focus on creating intuitive and visually appealing user experiences. Proficient in HTML, CSS, TypeScript , and C++ 
                , I have a solid foundation in responsive design and interactive features that elevate user engagement.
                Whether working independently or as part of a team, I'm committed to delivering high-quality projects that align with client goals and industry standards.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                 <div className='space-y-2'>
                    <h2 data-aos="fade-up">TypeScript</h2>
                    <h2 data-aos="fade-up">HTML & CSS</h2>
                    <h2 data-aos="fade-up">C++</h2>
                 </div>
                 <div className='space-y-2'>
                    <h2 data-aos="fade-up">Next.js</h2>
                    <h2 data-aos="fade-up">Node.js</h2>
                    <h2 data-aos="fade-up">Tailwind</h2>
                 </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
