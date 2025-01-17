import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch} from "@fortawesome/free-solid-svg-icons"


export default function PreviousSearches(){

    const searches=[
        'pizza',
        'burger',
        'cookies',
        'juice',
        'biryani',
        'salad',
        'icecream',
        'soup',
        'lasagna',
        'pudding'
    ]

    return (
        <>
            
            <div className="previous-search section">
                <h2>Previoous Searches</h2>
                <div className="previous-search-container">
                {searches.map((search,index)=>(<div key={index}style= {{animationDelay:index * .1 + "s"}}className="search-item">
             {search}
                </div>))}

            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button className="btn">
                <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
                </div>
            </div>
        </>
    )
}