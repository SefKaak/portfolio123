import Computer from '../components/Computer';
import PageContact from '../components/PageContact';
import {Helmet} from 'react-helmet-async';
export default function Contact(){

return <>
    <Helmet>
        <meta name="Contact" content="Portfolio de Seif kaak" />
        <title>Contact-Portfolio</title>
    </Helmet>
        <div>
            <Computer/>
        <PageContact/>
        </div>
    </>

}