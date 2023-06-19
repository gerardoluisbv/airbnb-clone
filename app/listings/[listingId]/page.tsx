import getListingById from '@/app/actions/getListingById'
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'
import ListingClient from './ListingClient';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '@/app/actions/getReservations';
import { Reservation } from '@prisma/client';

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params } : { params: IParams }) => {
  
  const listing = await getListingById(params);
  const reservation = await getReservations(params);
  const currentUser = await getCurrentUser();

  if(!listing){
    return (
        // <ClientOnly>
        <EmptyState />
        // </ClientOnly>
        )
    }
    
    return (
        // <ClientOnly>
            <ListingClient 
                listing={listing}
                reservations={reservation}
                currentUser={currentUser}    
            />
        // </ClientOnly>
  )
}

export default ListingPage