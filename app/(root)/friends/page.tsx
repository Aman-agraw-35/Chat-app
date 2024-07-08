import ConversationFallback from '@/components/shared/conversation/ConversationFallback';
import ItemList from '@/components/shared/item-list/ItemList';
import React from 'react'

type Props = {}

const Friendspage = (props: Props) => {
  return (
    <><ItemList title="Friends">Friendspage</ItemList>
    <ConversationFallback/>
    </>
  )
}

export default Friendspage;