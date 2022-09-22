import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = 'Home Page';
  });
  return (
    <div>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: blue;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      {/* <style global jsx>{`
        body {
          background: black;
        }
      `}</style> */}
      Hello world
      <p>scoped!</p>
    </div>
  );
};

export default Home;
