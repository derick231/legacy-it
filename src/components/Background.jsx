import React from 'react'


const Background = ({title, content = false}) => {
  return (
    <>
        <section className='relative flex items-center justify-center w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-20 bg-cover bg-center bg-no-repeat '
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'",backgroundAttachment:"fixed"}}
        >

        <div className="absolute inset-0 bg-black/62"></div>

        {/* contents */}
        <div className='w-80 relative z-50 '>
          <h1 className='text-center text-3xl md:text-4xl mb-3'>{title}</h1>
          <p className='text-center text-white'>{content}</p>

        </div>


        </section>
    </>
  ) 
}

export default Background