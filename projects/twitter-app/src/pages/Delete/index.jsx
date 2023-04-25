import React, { useEffect, useState } from 'react'

import api from '../../service/api';
import { useParams } from 'react-router-dom';

const Delete = () => {
  const [post, setPost] = useState();
  const url = 'http://localhost:3000'

  let { id } = useParams();

  const getData = async () => {
    try {
      const { data } = await api.get(`${url}/${id}`);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  })

  return (
    <>
      <div>Delete</div>
      <div>{post?.map((el) => (
        <p>{el.username}</p>
      ))}</div>
    </>
  );
}

export default Delete;