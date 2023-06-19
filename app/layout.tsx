
import { Nunito } from 'next/font/google'
import  Navbar  from './components/navbar/Navbar'

import './globals.css'
// import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal';
import RegistrerModal from './components/modals/RegistrerModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import { Toaster } from 'react-hot-toast';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'] 
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}  suppressHydrationWarning={true} >
        {/* <ClientOnly> */}
          {/* <Toaster /> */}
          <SearchModal />
          <ToasterProvider />
          <RegistrerModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser = { currentUser } /> 
        {/* </ClientOnly> */}
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
