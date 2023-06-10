'use client'

import { RxHamburgerMenu } from 'react-icons/rx';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { User } from '@prisma/client';

interface UserMenuProps {
  currentUser?: User | null
}

const UserMenu: React.FC <UserMenuProps> = ( { currentUser } ) => {  
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
    },[]);
  

  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div
                // onClick={() = > {}}
                className='   
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer  
                '>

                Airbnb you home

            </div>
            <div 
            onClick={ toggleOpen }
            className="
              p-4
              md:py-1
              md:px-2
              border-[1px]
              border-neutral-200
              flex
              flex-row
              items-center
              gap-3
              rounded-full
              cursor-pointer  
              hover:shadow-md
              transition
            ">

                <RxHamburgerMenu/>

              <div className='hidden md:block'>
                <Avatar src = {currentUser?.image} />
              </div>
            </div>
        </div>

        { isOpen && (
          <div 
            className='
              absolute
              rounded-xl
              shadow-md
              w-[40vw]
              md:w-3/4
              bg-white
              overflow-hidden
              right-0
              top-12
              text-sm
            '>

              <div className='flex flex-col cursor-pointer'>
              {currentUser ? (
              <>
                <MenuItem 
                  label="My trips" 
                  onClick={() => {}}
                  // onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => {}}

                  // onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => {}}

                  // onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => {}}

                  // onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Airbnb your home" 
                  onClick={() => {}}

                  // onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}

              </div>

          </div>
        )}

    </div>
  )
}

export default UserMenu