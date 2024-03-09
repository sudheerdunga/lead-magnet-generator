import React from 'react'
import LandingPageNavbar from './components/LandingPageNavbar';
import FooterNavBar from './components/LandingPageFooter';
import LandingPageFooter from './components/LandingPageFooter';

function LandingLayout({children, //will be a page or nested layout
}: {children: React.ReactNode;
}) {
  return ( <section className="flex min-h-screen flex-col overflow-x-clip">
  {/* Include shared UI here e.g. a header or sidebar */}
  <LandingPageNavbar />
  

    <div className='flex-grow'>{children}</div>
    <LandingPageFooter />
    
</section>
  );
}

export default LandingLayout;