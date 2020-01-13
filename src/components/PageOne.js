import React from 'react'
import AbsoluteWrapper from './AbsoluteWrapper';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Front = styled(animated.div)`
  background: yellow;
`;

const PageOne = () => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })
  // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  console.log(fade);

  return (
    <AbsoluteWrapper>
      <Front style={fade}>
        1
      </Front>
    </AbsoluteWrapper>
  )
}

export default PageOne
