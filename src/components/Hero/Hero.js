import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  border: 3px solid #61dafb;
  padding: 0.75em;
  text-align: left;
  background-color: #282c34;
  border-radius: 5px;
`;

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <h1>Webpack React Boilerplate😎</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusantium, aliquid eos ab quaerat omnis error blanditiis deserunt
            sed! Quaerat laboriosam veniam sapiente id repudiandae eligendi nam
            nemo est doloribus, et aliquid doloremque repellendus esse unde
            accusantium? Cupiditate mollitia perferendis maiores repellendus
            veniam nesciunt dicta, porro corrupti possimus esse dignissimos.
          </p>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Hero;
