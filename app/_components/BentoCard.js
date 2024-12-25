import React from 'react'

function BentoCard({ src, title, description} ) {
  return (
    <div>
       <img
        src={src}
    
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      {title}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-[35%] text-xs md:text-base">{description}</p>
          )}
        </div>
        </div>
    </div>
  )
}

export default BentoCard
