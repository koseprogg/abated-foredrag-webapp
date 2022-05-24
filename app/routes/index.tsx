import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const Wrapper = styled.div`
  background-color: red;
`;

const VideoWrapper = styled.div`
  display: flex;
`;

const VideoTile = styled.a`
  margin: 2em;
`;

type VideoData = {
  url: string;
  id: string;
};

type VideoLoadedData = {
  videos: VideoData[];
};

export const loader: LoaderFunction = () => {
  return json({
    videos: [{ url: "https://www.youtube.com/watch?v=5Hrpzuce7hs", id: "1" }],
  });
};

const Videos: React.FC = () => {
  const data = useLoaderData<VideoLoadedData>();

  return (
    <VideoWrapper>
      {data.videos.map((video) => (
        <VideoTile key={video.url} href={video.url}>
          {video.url}
        </VideoTile>
      ))}
    </VideoWrapper>
  );
};

const Index = () => {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Wrapper>
        <Header />
        <Videos />
        <Footer />
      </Wrapper>
    </main>
  );
};

export default Index;
