import { useState } from 'react';
import '../Css/Header.css'
import { BsSliders2, BsFillCaretDownFill } from "react-icons/bs";

function Header({DataVisible}) {

    const [displaytoggle, setdisplaytoggle] = useState(false)

    const handleGrouping = (e)=>{
        DataVisible(e.target.value)
        setdisplaytoggle(!displaytoggle)
    }

    const handleOrdering = (e)=>{
        DataVisible(e.target.value)
        setdisplaytoggle(!displaytoggle)

    }
    return (
        <>
            <div className="HeaderMain">
                <div className='header_select' onClick={() => setdisplaytoggle(!displaytoggle)}>
                    <BsSliders2 />
                    <div className='Displayselect'>
                        <span>Display</span>
                        <BsFillCaretDownFill />
                    </div>
                </div>

                {/* // Modal on display click */}
                <div className={displaytoggle == false ? 'displayModal' : 'displayModal modalshow'} >
                    <div>
                        <span>Grouping</span>
                        <select onChange={(e)=>handleGrouping(e)}>
                            <option defaultValue={'status'}>Status</option>
                            <option value='user'>User</option>

                        </select>
                    </div>

                    <div>
                        <span>Ordering</span>
                        <select onClick={(e)=>handleOrdering(e)}>
                            <option value={'priority'}>Priority</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header