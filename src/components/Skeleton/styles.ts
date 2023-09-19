import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonCardContainer = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  padding-top: 10rem;
  position: relative;
  border-radius: 6px 36px;
  width: 30rem;

  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${animation} 1.5s infinite;

  * {
    background: linear-gradient(90deg, #f0f0f0 50%, #e0e0e0 75%, #f0f0f0 100%);
    background-size: 200% 100%;
    animation: ${animation} 1.5s infinite;
  }

  .coffee-img {
    position: absolute;
    top: -3rem;
    right: 50%;
    transform: translateX(50%);
    width: 12rem;
    height: 12rem;
  }

  .coffee-tag {
    width: 80%;
    margin: auto;
    padding: 0.6rem;
    border-radius: 99rem;

    margin-bottom: 1.6rem;
  }

  .coffee-description {
    padding: 0.6rem;

    margin-bottom: 3rem;
    border-radius: 99rem;
  }

  .coffee-prices {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.8rem;
    border-radius: 99rem;
  }
`;

export const SkeletonListContainer = styled.div``;
