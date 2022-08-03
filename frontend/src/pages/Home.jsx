import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";
import { api } from "../constants/api";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`${api}videos/${type}`);
      setVideos(res.data);
      // console.log(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
