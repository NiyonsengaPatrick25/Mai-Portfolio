import React, { useState } from 'react'
import { FaArrowCircleRight, FaArrowDown, FaCircle, FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaVoicemail } from 'react-icons/fa'
import { FaBars, FaBuildingCircleExclamation, FaChartLine, FaDownload, FaLocationDot, FaLocationPin, FaMapLocation, FaMapLocationDot, FaMessage, FaUsersLine } from 'react-icons/fa6'
import image from '../assets/image/img2.png'
// my skills logos
import react from '../assets/logos/react.png'
import javascript from '../assets/logos/js.png'
import script from '../assets/logos/typescript.png'
import tailwind from '../assets/logos/tailwind.png'
import html from '../assets/logos/html.png'
import css from '../assets/logos/css3.jpg'
import git from '../assets/logos/git.png'
import github from '../assets/logos/github.png'
// end

// my project
import ecommerce from '../assets/image/ecommerce.jpg'
import task from '../assets/image/task.jpg'
import plane from '../assets/image/plane.jpg'
// end my project
// contact me
import senticon from '../assets/logos/senticon.png'
// end contact me
import {motion} from 'framer-motion'

const OnePage = () => {

    const [open, setOpen] = useState(false)
  return (
    <motion.div>
      <nav className='shadow-md sticky top-0 z-60 backdrop-blur-2xl'>
        {/* navbar */}
        <div className=' flex flex-row items-center justify-between p-1 max-w-6xl mx-auto '>
        
        <div className=''>
            <h1 className='text-orange-400 text-2xl flex items-center  '><span className='font-bold text-5xl'>P</span><span className='pt-4'>atrick</span></h1>
        </div>
        <div className='hidden lg:flex'>
            <ul className='flex gap-10'>
                <li className="menu"><a href="#">Home</a></li>
                <li className="menu"><a href="#about">About</a></li>
                <li className="menu"><a href="#skills">Skills</a></li>
                <li className="menu"><a href="#project"></a>Projects</li>
                <li className="menu"><a href="#contact"></a>Contact</li>
            </ul>
        </div>
        <div className=''>
            <button className=' border text-white bg-orange-400 border-orange-400 rounded-full px-4 py-1  hover:scale-95 cursor-pointer transition-all duration-75'><a href="/src/assets/L5 SOD PYTHON PROGRAMMING GROUP WORK.pdf" download className='flex gap-2'><FaDownload /> Download CV</a></button>
        </div>
        <div className='lg:hidden cursor-pointer'>
            <button onClick={()=>setOpen(!open)}>
                <FaBars />
            </button>
        </div>
        </div>
      </nav>
      <div className={`lg:hidden ${open?'fixed':'hidden'} w-full cursor-pointer`}>
      <div className='flex flex-col gap-2 items-end text-black'>
            <ul className='  flex flex-col gap-2  w-50 h-50 bg-gray-200 rounded-b-xl pt-2  '>
                <li className="menu"><a href="#">Home</a></li>
                <li className="menu"><a href="#about">About</a></li>
                <li className="menu"><a href="#skills">Skills</a></li>
                <li className="menu"><a href="#project"></a>Projects</li>
                <li className="menu"><a href="#contact"></a>Contact</li>
            </ul>
        </div>
        </div>
      <main className='p-5 max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row  items-center justify-between   scroll-mt-20' id='home'>
        {/* maincomponent */}
        <motion.div 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8}}
        className='pl-20'>
            <h1 className='text-xl font-bold'>Hi, I'm</h1>
            <h2 className='text-2xl font-bold'>Niyonsenga</h2>
            <h3 className='text-2xl font-bold text-orange-400'>Patrick</h3>
            <p className='text-gray-500 pt-5'>A passionate Frontend Developer Who builds <br />
                modern, responsive, and user-friendly <br />
                web application <br />
            </p>
            <div className='flex gap-5 pt-5 flex-col md:flex-row lg:flex-row'>
                <motion.button 
                whileTap={{scale:0.9}}
                whileHover={{scale:1.1}}
                className='flex gap-3 text-white bg-orange-400 border border-orange-300 rounded-lg px-2 py-1 cursor-pointer transition-all duration-75'>View My Work <FaArrowCircleRight className='pt-1 text-xl'/></motion.button>
                <motion.button
                whileTap={{scale:0.9}}
                whileHover={{scale:1.1}} 
                className='flex gap-3 border border-gray-300 rounded-lg px-2 py-1  cursor-pointer transition-all duration-75'>Conact Me <FaEnvelope className='pt-1 text-xl '/></motion.button>
            </div>
            <div className='flex gap-5 pt-8 flex-col md:flex-row lg:flex-row'>
            <div>
                <h1 className='font-bold'>Let's Connect</h1>
                </div>
                <div className='flex gap-5 pb-5'>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaGithub /></motion.button>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaLinkedin /></motion.button>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaTwitter /></motion.button>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaEnvelope /></motion.button>
                </div>
            </div>
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8}}
        className='pr-10 relative pb-25'>
            <img src={image} alt=""  className='w-full  h-auto rounded-b-full'/>
            <div className='absolute text-sm bottom-80 right-60 rounded-full border border-black text-white bg-black'><p className='  px-4 py-1'>5 Years <br />
            Experience</p></div>
            <div className='absolute text-sm bottom-35 shadow-sm shadow-gray-400 right-55 rounded-full border border-white text-black bg-white'><p className='  px-4 py-1'>Available for <br />
            <span className='font-semibold'>Freelance</span></p></div>
            <div></div>
        </motion.div>
      </main>
      <motion.div 
      className='pb-30 scroll-mt-10 max-w-6xl mx-auto' id='about' >
      <motion.div>
        {/* about me*/}
        <motion.h1 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='text-sm text-orange-400'>ABOUT ME</motion.h1>
        <motion.h2 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='font-bold text-2xl'>Get to know me</motion.h2>
        <motion.p 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='text-gray-500 pt-2'>I'm a frontend developer with a strong passion for building <br />
        beautiful and function web experience. i foces on writing <br />
        clean code, Creating intutive interfaces and delivering <br />
        solution that make nin impact</motion.p>
      </motion.div>
      <motion.div className='flex flex-col gap-15 pt-5 md:flex-row lg:flex-row'>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='shadow-lg  px-5 py-2 rounded-xl'>
            <h1 className='flex gap-2'><FaLocationDot className='text-orange-400 pt-1 text-xl'/> Location </h1>
            <p>Kigali, Rwanda</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='shadow-lg  px-5 py-2 rounded-xl'>
            <h1 className='flex gap-2'><FaEnvelope  className='text-orange-400 pt-1 text-xl'/> Email</h1>
            <p>niyonsengap563@gmail.com</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='shadow-lg  px-5 py-2 rounded-xl'>
            <h1 className='flex gap-2'><FaArrowCircleRight  className='text-orange-400 pt-1 text-xl'/> Available</h1>
            <p> Open To Work</p>
        </motion.div>
      </motion.div>
      <div  className='max-w-6xl mx-auto '>
        <motion.div 
        className='pt-8'>
            <motion.h1
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}} 
            className='text-orange-400 text-sm'>MY SKILLS</motion.h1>
            <motion.p 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
            className='font-bold text-2xl'>Technologies I Work With</motion.p>
        </motion.div>
      <div className='grid gap-5 justify-between items-center pt-5 pr-10 flex-col grid-cols-2 sm:grid-cols-4 ' id='skills' >
        {/* my skills */}
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'>
            <img src={react} alt=""  className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>React</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'>
            <img src={javascript} alt="" className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>JavaScript</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'>
            <img src={script} alt="" className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>TYpeScript</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'> 
            <img src={tailwind} alt="" className='w-10 h-10 mx-auto' />
            <p className='text-sm text-center'>TailwindCss</p>
            </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'>
            <img src={html} alt=""  className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>HTMLS</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'>
            <img src={css} alt=""  className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>CSS</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 pb-5'>
            <img src={git} alt="" className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>Git</p>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        whileHover={{scale:1.1}}
        className='shadow-lg rounded-xl px-8 py-4 '>
            <img src={github} alt="" className='w-10 h-10 mx-auto'/>
            <p className='text-sm text-center'>GitHub</p>
        </motion.div>
      </div>
      </div>
      </motion.div>
      <div className='pl-25 pr-10 max-w-6xl mx-auto' >
        {/* my project */}
        <div className='flex flex-col md:flex-row lg:flex-row justify-between pt-10'>
            <div>
        <motion.h1 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='text-orange-400 text-sm'>MY PROJECTS</motion.h1>
        <motion.p 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='font-bold text-2xl'>Some things i'v built</motion.p>
        </div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='pt-3'>
            <a href="#" className='flex gap-3 text-orange-400'>View All <FaArrowCircleRight className='pt-1 text-xl'/></a>
        </motion.div>
        </div>
        <div className='flex flex-col md:flex-row ld:flex-row  justify-between pt-5' id='project'>
            <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
            className='shadow-lg p-5 rounded-2xl shadow-gray-400 '>
                <img src={ecommerce} alt="" className='w-70 h-40 rounded-2xl  '/>
                <h1 className='text-lg font-bold '>E-commerce Store</h1>
                <p className='text-sm'>A full-featured online store with cart <br />
                checkout, and payment integration</p>
                <div className='grid gap-3 pt-2 grid-cols-1 sm:grid-cols-2'>
                    <motion.button
                    whileTap={{scale:0.9}}
                    className='cursor-pointer hover:bg-gray-100 hover:border-orange-400 flex gap-2 border border-gray-200 px-3 py-1 rounded-full bg-gray-200 text-sm'><FaArrowDown className='pt-1 text-xl text-orange-400'/> Live Demo</motion.button>
                    <motion.button
                    whileTap={{scale:0.9}} 
                    className='cursor-pointer hover:bg-gray-100 hover:border-orange-400 flex gap-2 border border-gray-200 px-3 py-1 rounded-full bg-gray-200 text-sm'><FaGithub  className='pt-1 text-xl text-orange-400'/> GitHub</motion.button>
                </div>
                
            </motion.div>
            <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
            className='shadow-lg p-5 rounded-2xl shadow-gray-400 '>
                <img src={task} alt="" className='w-70 h-40 rounded-2xl'/>
                <h1 className='text-lg font-bold'>Task Manager App</h1>
                <p className='text-sm'>A product app to manage tasks, <br />
                deadlines, and categories</p>

                <div className='grid gap-3 pt-2 grid-cols-1 sm:grid-cols-2'>
                    <motion.button
                    whileTap={{scale:0.9}} 
                    className='cursor-pointer hover:bg-gray-100 hover:border-orange-400 flex gap-2 border border-gray-200 px-3 py-1 rounded-full bg-gray-200 text-sm'><FaArrowDown className='pt-1 text-xl text-orange-400'/> Live Demo</motion.button>
                    <motion.button
                    whileTap={{scale:0.9}} 
                    className='cursor-pointer hover:bg-gray-100 hover:border-orange-400 flex gap-2 border border-gray-200 px-3 py-1 rounded-full bg-gray-200 text-sm'><FaGithub  className='pt-1 text-xl text-orange-400'/> GitHub</motion.button>
                </div>
            </motion.div>
            
            <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
            className='shadow-lg p-5 rounded-2xl shadow-gray-400 '> 
                <img src={plane} alt=""  className='w-70 h-40 rounded-2xl'/>
                <h1 className='text-lg font-bold '>Travel Website</h1>
                <p className='text-sm'>A responsive travel website with destination <br />
                pages and booking UI</p>
                <div className='grid gap-3 pt-2 grid-cols-1 sm:grid-cols-2 '>
                    <motion.button
                    whileTap={{scale:0.9}} 
                    className='cursor-pointer hover:bg-gray-100 hover:border-orange-400 flex gap-2 border border-gray-200 px-3 py-1  rounded-full bg-gray-200 text-sm'><FaArrowDown className='pt-1 text-xl text-orange-400'/> Live Demo</motion.button>
                    <motion.button
                    whileTap={{scale:0.9}} 
                    className='cursor-pointer hover:bg-gray-100 hover:border-orange-400 flex gap-2 border border-gray-200 px-3 py-1  rounded-full bg-gray-200 text-sm'><FaGithub  className='pt-1 text-xl text-orange-400'/> GitHub</motion.button>
                </div>
                </motion.div>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row lg:flex-row justify-between items-center pl-10 pr-10 pt-10 scroll-mt-10' id='contact'>
        {/* Contact me */}
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        >
            <h1 className='text-orange-400 text-sm'>CONTACT ME</h1>
            <h2 className='font-bold text-2xl'>Let's work together</h2>
            <p className='text-sm pt-3'>Have a project in mind or just want to say hello? <br />
            Feel free to reach out</p>
            <h3 className='flex gap-2 pt-3'><FaEnvelope className='pt-1 text-xl text-orange-400'/> <span className='font-semibold'>Email</span></h3>
            <h3 className='flex gap-2 '><FaPhone className='pt-1 text-xl text-orange-400'/> <span className='font-semibold'>Phone</span></h3>
            <h3 className='flex gap-2 '><FaLocationDot className='pt-1 text-xl text-orange-400'/> <span className='font-semibold'>Location</span></h3>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className='pt-10'>
            <div className='flex gap-5'>
                <input type="text" name="" id="" className='w-full md:72 shadow-gray-300 focus:shadow-md px-4 py-1 rounded-lg outline-none border border-gray-400' placeholder='Your Name'/>
                <input type="text" name="" id="" className='w-full md:72 shadow-gray-300 focus:shadow-md px-4 py-1 rounded-lg outline-none border border-gray-400' placeholder="name@example.com"/>
            </div>
            <div className='pt-5 '>
            <textarea placeholder='Your Message' className='w-full md:72 shadow-gray-300  pl-68 focus:shadow-md px-4 py-1 rounded-lg border outline-none border-gray-400 pt-3'>

            </textarea>
            </div>
            <div className='pt-5'>
            <motion.button 
            whileTap={{scale:0.9}}
            whileHover={{scale:1.1}}
            className='send cursor-pointer transition-all duration-75 flex gap-2  border border-orange-400 bg-orange-400 text-white px-2  py-1 rounded-lg '>Send Message <FaMessage className='pt-1 text-xl text-white'/> </motion.button>
            </div>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        >
            <img src={senticon} alt="" className='w-30 h-30'/>
        </motion.div>
      </div>
      <footer className='pt-3'>
        {/* footer */}
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center pl-10 pr-10 bg-gray-200 p-2 '>
            <div><p className=''><span className='text-orange-400'>&copy;</span> 2026 Niyonsenga. All rights reserved</p></div>
            <div className='flex gap-5  '>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaGithub /></motion.button>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaLinkedin /></motion.button>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaTwitter /></motion.button>
                <motion.button 
                whileHover={{scale:1.4}}
                whileTap={{scale:0.9}}
                className='connect hover:text-orange-400'><FaEnvelope /></motion.button>
            </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default OnePage
