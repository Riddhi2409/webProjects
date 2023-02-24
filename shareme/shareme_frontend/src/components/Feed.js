import React, { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"

import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utils/data";
import {client} from '../client'
import MasonaryLayout from "./MasonaryLayout";


const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins,setPins]=useState(null)
  const {categoryId} = useParams();

  useEffect(()=>{
    setLoading(true)

    if (categoryId){
      const query = searchQuery(categoryId)

      client.fetch(query).then((data)=>{
        setPins(data)
        setLoading(false)
      })
    }
    else{
      client.fetch(feedQuery).then(
        (data)=>{
          setPins(data)
          setLoading(false)
        }
      )

    }

  },[categoryId])

  const ideaName = categoryId || 'new';

  if (loading) {
    return(
    <div>
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
      <h1>hello</h1>
    </div>
    );
    }
    if (pins?.length === 0){
      return (
        <div>
          No pins available
        </div>
      )
    }
    return (
        <div>
            {pins && <MasonaryLayout pins={pins} />}
        </div>
    )
  };

export default Feed;
