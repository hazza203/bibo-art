import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import IMAGE_SOURCES from './imageSrc';

function Main() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Rp4G1pXx-cs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <br />
      <h2>文藝復興 renaissance 也可以解釋為 reborn/rebirth</h2>
      <p>
        西元十五、十六世紀，歐洲正值文藝復興時期，和中古世紀
        有著截然不同風貌的畫作，如雨後春筍般在此時誕生。 文藝
        復興時的畫作，與中古時期最大的不同的是人物不再是死板
        枯燥的模樣，線條更加立體，神韻也多了些感情。 在文藝復興前期古歐洲的繪畫都是以神為主，
        繪畫人物的描繪 不求生動、不求寫實，只要把「神性」表現出來即可。因此達文
        西等文藝復興的藝術家在繪畫史上最重要的貢獻便是使畫面的人 物擁有「人性」，
        也就是表現出生動的感覺，這等於是要在藝 術領域上「發明」出一樣技巧來表現 出生動的概念。
      </p>
      <br />
      <h2>文藝復興 renaissance 四大經典繪畫風格與技法</h2>
      <p>
        文藝復興繪畫中出現的Cangiante（換色法）、Chiaroscuro（明
        暗對照法）、Sfumato（暈塗法）和Unione（統合法）這四種風 格迥異的繪畫 技法
        被後世廣為流傳，義大利文藝復興盛期三傑在
        世時，米開朗基羅的繪畫作品中常常採用Cangiante；達芬奇喜
        歡使用Sfumato；而拉斐爾則能完美地運用Unione。
      </p>
      <br />
      <ImageContainer>
        {IMAGE_SOURCES.slice(0, 3).map(({url, image}) => (
          <img src={image} alt={url} key={url} onClick={() => navigate(url)} />
        ))}
      </ImageContainer>
      <br />
      <br />
      <ImageContainer>
        {IMAGE_SOURCES.slice(3, 6).map(({url, image}) => (
          <img src={image} alt={url} key={url} onClick={() => navigate(url)} />
        ))}
      </ImageContainer>
      <br />
      <br />
      <ImageContainer>
        {IMAGE_SOURCES.slice(6, 9).map(({url, image}) => (
          <img src={image} alt={url} key={url} onClick={() => navigate(url)} />
        ))}
      </ImageContainer>
      <br />
      <br />
      <ImageContainer>
        {IMAGE_SOURCES.slice(9, 12).map(({url, image}) => (
          <img src={image} alt={url} key={url} onClick={() => navigate(url)} />
        ))}
      </ImageContainer>
      <br />
      <br />
      <ImageContainer>
        {IMAGE_SOURCES.slice(12, 14).map(({url, image}) => (
          <img src={image} alt={url} key={url} onClick={() => navigate(url)} />
        ))}
      </ImageContainer>
      <br />
      <br />
      <ImageContainer>
        {IMAGE_SOURCES.slice(14, 16).map(({url, image}) => (
          <img src={image} alt={url} key={url} onClick={() => navigate(url)} />
        ))}
      </ImageContainer>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  padding: var(--spacing-600);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  img {
    cursor: pointer;
    padding: var(--spacing-400);
    height: var(--spacing-1000);
  }
`;
