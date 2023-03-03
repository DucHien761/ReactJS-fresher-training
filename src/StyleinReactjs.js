//In React, there are several ways to apply styles to components. Here are some of the most common methods:
// 1.Inline styles: You can apply styles directly to the component using the style prop.
// Exp:
function MyComponent() {
    const styles = {
      color: 'red',
      fontSize: '20px',
      fontWeight: 'bold'
    };
  
    return (
      <div style={styles}>
        Hello World!
      </div>
    );
  }
// 2.CSS modules: Create a CSS file and import its into component
// Exp:
import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Hello World!</p>
    </div>
  );
}
// Css file:
.container {
    background-color: #eee;
    padding: 20px;
  }
  
  .text {
    color: blue;
    font-size: 18px;
  }


//3. Styled components: Write CSS in your javascript code
// Exp:
import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  padding: 20px;
`;

const Text = styled.p`
  color: blue;
  font-size: 18px;
`;

function MyComponent() {
  return (
    <Container>
      <Text>Hello World!</Text>
    </Container>
  );
}