import { AdaptiveImageContainer } from '@/components/shared/AdaptiveImageContainer'
import logo from './logo.svg'

import Image from 'next/image'

export const HeaderLogo = () => {
    return (

        <AdaptiveImageContainer image={logo} alt={'QuickSpeak - landing bot builder'} width={400} height={200} />

    )
}