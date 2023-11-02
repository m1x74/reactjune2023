import React, {useEffect, useState} from 'react';

import {Episode} from "../Episode/Episode";
import css from './episodes.module.css';
import {useSearchParams} from "react-router-dom";
import {episodeService} from "../../services";

const Episodes = () => {
        const [episodes,setEpisodes]=useState([]);
        const [query,setQuery]=useSearchParams({page:'1'});
        const [prevNext,setPrevNext]=useState({prev:null,next:null})


        useEffect(()=>{
            episodeService.getAll(query.get('page')).then(({data})=>{setEpisodes(data.results)
                setPrevNext({prev: data.info.prev,next :data.info.next})})

        },[query.get('page')]);

        const prev=()=>{
                setQuery(prev=>{
                    prev.set('page',`${+prev.get('page')-1}`)
                    return prev
                })
        };
         const next=()=>{
             setQuery(prev=>{
                 prev.set('page',`${+prev.get('page')+1}`)
                 return prev
             })
        }

    return (
        <div>
            <div className={css.btns}>
                <button disabled={!prevNext.next} onClick={next}>NEXT</button>
                <button disabled={!prevNext.prev} onClick={prev}>PREV</button>
            </div>
            <div className={css.Episodes}>
                {episodes.map(episodex=><Episode key={episodex.id} episodex={episodex}/>)}
            </div>


        </div>
    );
};

export {Episodes};