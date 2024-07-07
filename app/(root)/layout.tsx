import SidebaeWrapper from '@/components/shared/SidebaeWrapper';
import React from 'react'

type Props = React.PropsWithChildren<{}>;

const layout = ({children}: Props) => {
  return (
<SidebaeWrapper>{children}</SidebaeWrapper>  )
}

export default layout