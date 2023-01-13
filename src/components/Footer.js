import React from 'react'

function Footer() {
    
    const footerLinks = [
        {
            id:1,
            link:"Privacy Policy"
        },
        {
            id:2,
            link:"Terms and Condition"
        },
        {
            id:3,
            link:"Contact"
        },
        {
            id:4,
            link:"Faq"
        }
    ]

  return (
    <div className='footer'>
        <div className='footer__content container'>
             <div>
              <span>All Rights Reserves</span>
             </div>

       <ul className='footer__links'>
          {
            footerLinks.map(({link,id}) => (
                <li key={id}>
                    {link}
                </li>
            ))
         }    
       </ul>
    </div>
    </div>
  )
}

export default Footer 
