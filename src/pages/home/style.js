import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e6e6e6;

    h1 {
        text-align: center;
        margin: 2rem 0 3rem;
        font-size: 3rem;
        background: linear-gradient(90deg, #00dbde, #fc00ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    input {
        display: block;
        width: 100%;
        max-width: 600px;
        margin: 0 auto 2rem;
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        color: white;
        font-size: 1rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;

        &::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        &:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2.5rem;
    padding: 0;
    margin-top: 2rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);

        img {
            transform: scale(1.05);
        }
    }

    img {
        width: 100%;
        height: 330px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
        transition: all 0.4s ease;
    }

    span {
        font-weight: 600;
        font-size: 1.1rem;
        text-align: center;
        padding: 1.2rem;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        margin-top: -5px;
    }

    a {
        transition: all 0.3s;
        text-decoration: none;
        display: block;
        width: 100%;
    }
`;

export const GenreFilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  max-width: 90%;
  margin: 0 auto 2rem;
  backdrop-filter: blur(5px);
`;

export const GenreButton = styled.button`
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 30px;
  background: ${({ active }) => 
    active ? 'linear-gradient(90deg, #00dbde, #fc00ff)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ active }) => (active ? 'white' : 'rgba(255, 255, 255, 0.8)')};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ active }) => 
    active ? '0 4px 15px rgba(252, 0, 255, 0.3)' : 'none'};

  &:hover {
    background: ${({ active }) => 
      active ? 'linear-gradient(90deg, #00dbde, #fc00ff)' : 'rgba(255, 255, 255, 0.2)'};
    color: white;
    transform: translateY(-2px);
  }
`;