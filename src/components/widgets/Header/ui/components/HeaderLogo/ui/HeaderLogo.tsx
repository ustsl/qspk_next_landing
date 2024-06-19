import { AdaptiveImageContainer } from '@/components/shared/AdaptiveImageContainer'
import logo from './logo.svg'

export const HeaderLogo = () => {
    return (

        <AdaptiveImageContainer image={logo} alt={'QuickSpeak - landing bot builder'} width={871} height={144} />

    )
}