import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1>Hello there!</h1>; // JSX => React Element => React Element Object => HTML Element( render )
/* If the above code in  have multiple lines then wrap (
  <h1></h1>
  <h2></h2>
 ) */

// React Component
// Class Based Component
// Functional Component : Its used Javascript function to build component that return some piece of JSX
const Title = () => <h1>Title component</h1>; // Title Component (Function that return JSX => React Element)
const title = <h1>Title Element</h1>; // Title  Element (JSX => React Element)
const HeadingComponent = () => (
  // Heading Component

  <div className="heading">
    {Title()}
    <Title />
    {title}
    {jsxHeading}
    <h1>My cabi !</h1>
  </div>
);

console.log(<HeadingComponent />);
// <HeadingComponent />;  This syntax babel can understand that this is Heading component to convert the same React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */
// Above example is for nested tag

//const heading = React.createElement("div", {id:'parent'}, React.createElement("div", {id:'child'}, React.createElement("h1", {id:'parent'},'Im h1 tag')))

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h1 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */
//const heading = React.createElement("div", {id:'parent'}, React.createElement("div", {id:'child'}, [React.createElement("h1", {id:'parent'},'Im h1 tag'),React.createElement("h2", {id:'parent'},'Im h2 tag')]))
/**
 * <div id="parent">
 * <div id="child1">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h1>
 * </div>
 * <div id="child2">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Im h1 tag"),
//     React.createElement("h2", {}, "Im h2 tag"),
//   ]),
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "Im h1 tag"),
//     React.createElement("h2", {}, "Im h2 tag"),
//   ]),
// ]);

// Below element is for 1 tag with text
//const heading = React.createElement("h1", {id:'heading'}, "RJT- dreact") // creating element using react with first react api
// Second parameter is used to give attributes to your node or html element
// const root = ReactDOM.createRoot(document.getElementById("root")); // Creating root with react with second api
// root.render(heading);
