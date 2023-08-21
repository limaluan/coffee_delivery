import styled from "styled-components";

export const CoffeeCardContainer = styled.article`
  background-color: var(--card);
  margin-top: 5rem;
  padding: 2rem;
  padding-top: 10rem;
  position: relative;
  border-radius: 6px 36px;
  width: 30rem;

  .coffee-img {
    position: absolute;
    top: -3rem;
    right: 50%;
    transform: translateX(50%);
    width: 12rem;
  }

  .coffee-tag {
    color: var(--yellow-dark);
    background-color: var(--yellow-light);
    font-weight: bold;
    font-size: 1rem;
    width: fit-content;
    margin: auto;
    padding: 0.4rem 0.8rem;
    border-radius: 99rem;

    margin-bottom: 1.6rem;
  }

  .coffee-name {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    text-align: center;

    margin-bottom: 0.8rem;
  }

  .coffee-description {
    font-size: 1.4rem;
    color: var(--label);
    text-align: center;

    margin-bottom: 3rem;
  }

  .coffee-prices {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.4rem;
    }

    b {
      font-family: "Baloo 2", cursive;
      font-size: 2rem;
      color: var(--black-300);
    }
  }

  .coffee-quantity {
    display: flex;
    align-items: center;

    .cart-button {
      background-color: var(--purple-dark);
      margin-left: 1rem;
      border-radius: 6px;
      position: relative;
      height: 3.5rem;
      width: 3.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 60%;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(299deg)
          brightness(103%) contrast(103%);
      }
    }
  }
`;
