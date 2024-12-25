
import About from './_components/About'
import Features from './_components/Features'
import Header from './_components/Header'
import Hero from './_components/Hero'
import Story from './_components/Story'
import Contact from './_components/Contact'


function page() {
  return (
  <main className='relative min-h-screen w-screen overflow-x-hidden'> 
  <Header />
 <Hero />
<About />
<Features />
<Story />
<Contact />

  </main>
    
  )
}

export default page
