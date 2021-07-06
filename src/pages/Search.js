import { Button } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Search.css';


function Search({hideButtons = false}) {

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search =(e) =>{
        e.preventDefault();
        console.warn("You hit the search button >>", input);
        
        dispatch ({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e =>setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            {!hideButtons ? (<div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>):(<div className="search__buttons search__buttonsHidden">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>)}
            
        </form>
    )
}

export default Search
