import React, { useEffect } from 'react';

const withLogging = (WrappedComponent) => {
  const WithLogging = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`);
      
      // Cleanup function (equivalent to componentWillUnmount)
      return () => {
        console.log(`Component ${WrappedComponent.name} is unmounted`);
      };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
      <>
        <h1> Allow adding header</h1>
        <WrappedComponent {...props} />
        <h1> Allow adding footer </h1>
      </>
    );
  };

  return WithLogging;
};

// Sample Component
const MyComponent = (props) => {
  return <div>{props.message}</div>;
};

// Wrap the component with the HOC
const MyComponentWithLogging = withLogging(MyComponent);

// // Usage in the App
// const App = () => {
//   return (
//     <div>
//       <MyComponentWithLogging message="Hello, World!" />
//     </div>
//   );
// };

export default MyComponentWithLogging;