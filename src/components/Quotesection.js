import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function Quotesection(){
    return (
        <>
            <div className="section quote">
               <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>
                Food is everything we are.its an extension of nationalist feeling.ethic feeling,your personal history,your province,your region,your tribe,your grandma.it's inseparable from those from the get-go.
               </p>
               <p className="quote-auther">-Anthony Bourdain</p>
            </div>
        </>
    )
}